from datetime import datetime
from typing import List, Literal

from pydantic import BaseModel, Field


class InvestigationRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=20000)
    input_type: Literal["text", "email", "url"] = "text"


class InvestigationResponse(BaseModel):
    investigation_id: str
    input_type: str
    risk_score: int
    risk_level: str
    result: Literal["safe", "suspicious"]
    red_flags: List[str]
    analysis: str
    recommendation: List[str]
    analyzed_message: str
    created_at: datetime


class FileInvestigationResponse(InvestigationResponse):
    filename: str
