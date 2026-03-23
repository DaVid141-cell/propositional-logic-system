from fastapi import APIRouter, HTTPException
from app.schemas import (
    AnalyzeRequest, AnalyzeResponse, TruthTableRow,
    SolveRequest, SolveResponse, EquivalenceRequest, 
    EquivalenceResponse
)

from app.logicSystem import LogicSystem
import re

router = APIRouter(prefix="/api", tags=["logic"])


@router.post("/analyze", response_model=AnalyzeResponse)
def analyze(req: AnalyzeRequest):
    try:
        system = LogicSystem(req.expression)
        system.process()

        
        header = system.truth_table.variables + ["Result"]
        rows = []
        for row in system.truth_table.table:
            rows.append(TruthTableRow(
                values={var: ("T" if row[var] else "F") for var in header}
            ))

        return AnalyzeResponse(
            expression=req.expression,
            variables=system.truth_table.variables,
            truth_table=rows,
            analysis=system.analysis
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    


@router.post("/solve", response_model=SolveResponse)
def solve(req: SolveRequest):
    try:
        from app.connectives import evaluate_expression

        system = LogicSystem(req.expression)
        system.process()

        steps = []
        expr = req.expression

        while "(" in expr:
            inner = re.findall(r'\([^()]+\)', expr)
            for part in inner:
                clean = part[1:-1]
                result = evaluate_expression(clean, req.values)
                output = "T" if result else "F"
                steps.append(f"{part} = {output}")
                expr = expr.replace(part, str(result), 1)
                break

        final = evaluate_expression(expr, req.values)
        steps.append(f"{req.expression} = {'T' if final else 'F'}")

        return SolveResponse(
            result="T" if final else "F",
            steps=steps
        )
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    

@router.post("/equivalence", response_model=EquivalenceResponse)
def equivalence(req: EquivalenceRequest):
    try:
        system = LogicSystem(req.expression1)
        system.process()
        equivalent = system.check_equivalence(req.expression2)

        return EquivalenceResponse(equivalent=equivalent)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    
