from typing import Optional

from fastapi import APIRouter, File, HTTPException, Query, UploadFile

from core.history_store import get_history, get_investigation
from models.schemas import (
    FileInvestigationResponse,
    InvestigationRequest,
    InvestigationResponse,
)
from services.ai_service import investigate_message
from services.file_service import extract_text_from_upload

router = APIRouter()


@router.post("/investigate", response_model=InvestigationResponse)
def investigate(request: InvestigationRequest):
    try:
        return investigate_message(
            message=request.message,
            input_type=request.input_type,
        )
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))


@router.post("/investigate/file", response_model=FileInvestigationResponse)
async def investigate_file(file: UploadFile = File(...)):
    try:
        content = await file.read()
        text = extract_text_from_upload(
            filename=file.filename or "uploaded-file",
            content=content,
            content_type=file.content_type or "",
        )
        result = investigate_message(text, "file")
        result["filename"] = file.filename or "uploaded-file"
        return result
    except ValueError as exc:
        raise HTTPException(status_code=400, detail=str(exc))
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))


@router.get("/history")
def history(
    limit: int = Query(default=20, ge=1, le=100),
    result: Optional[str] = Query(default=None),
):
    return {"items": get_history(limit=limit, result_filter=result)}


@router.get("/history/{investigation_id}")
def history_item(investigation_id: str):
    item = get_investigation(investigation_id)
    if not item:
        raise HTTPException(status_code=404, detail="Investigation not found")
    return item
