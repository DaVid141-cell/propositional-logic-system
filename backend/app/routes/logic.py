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

        # Validate + normalize values
        validated_values = {}
        for key, val in req.values.items():
            if isinstance(val, bool):
                validated_values[key.lower()] = val
            elif isinstance(val, str):
                val_upper = val.upper()
                if val_upper == "T":
                    validated_values[key.lower()] = True
                elif val_upper == "F":
                    validated_values[key.lower()] = False
                else:
                    raise HTTPException(
                        status_code=400,
                        detail=f"Invalid value for '{key}': must be T or F"
                    )
            else:
                raise HTTPException(
                    status_code=400,
                    detail=f"Invalid type for '{key}'"
                )

        # Check missing variables
        required_vars = set(system.statement.variables)
        provided_vars = set(validated_values.keys())

        missing = required_vars - provided_vars
        if missing:
            raise HTTPException(
                status_code=400,
                detail=f"Missing values for variables: {', '.join(missing)}"
            )

        steps = []
        expr = req.expression.lower()

        while "(" in expr:
            inner = re.findall(r'\([^()]+\)', expr)
            for part in inner:
                clean = part[1:-1]
                result = evaluate_expression(clean, validated_values)
                output = "T" if result else "F"
                steps.append(f"{part} = {output}")
                expr = expr.replace(part, str(result), 1)
                break

        final = evaluate_expression(expr, validated_values)
        steps.append(f"{req.expression} = {'T' if final else 'F'}")

        return SolveResponse(
            result="T" if final else "F",
            steps=steps
        )

    except HTTPException:
        raise
    except Exception:
        raise HTTPException(
            status_code=400,
            detail="Invalid logical expression or mismatched values."
        )
    

@router.post("/equivalence", response_model=EquivalenceResponse)
def equivalence(req: EquivalenceRequest):
    try:
        system = LogicSystem(req.expression1)
        system.process()
        equivalent = system.check_equivalence(req.expression2)

        return EquivalenceResponse(equivalent=equivalent)
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
    
