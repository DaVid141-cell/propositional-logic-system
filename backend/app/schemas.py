from pydantic import BaseModel
from typing import Optional

class AnalyzeRequest(BaseModel):
    expression: str

class SolveRequest(BaseModel):
    expression: str
    values: dict[str, bool]

class EquivalenceRequest(BaseModel):
    expression1: str
    expression2: str

class TruthTableRow(BaseModel):
    values: dict[str, str]

class AnalyzeResponse(BaseModel):
    expression: str
    variables: list[str]
    truth_table: list[TruthTableRow]
    analysis: str

class SolveResponse(BaseModel):
    result: str
    steps: list[str]

class EquivalenceResponse(BaseModel):
    equivalent: bool

