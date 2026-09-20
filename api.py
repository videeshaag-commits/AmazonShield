from fastapi import FastAPI
from pydantic import BaseModel
from agent import investigate

app = FastAPI(title="AmazonShield API", version="1.0.0")

class InvestigateRequest(BaseModel):
    message: str

@app.get("/")
def root():
    return {"status": "ok", "service": "AmazonShield AI"}

@app.post("/investigate")
def investigate_message(request: InvestigateRequest):
    result = investigate(request.message)
    return {
        "message": request.message,
        "analysis": result
    }
