from datetime import datetime, timezone
from uuid import uuid4

from core.history_store import add_investigation
from core.risk_engine import build_analysis, build_recommendation, calculate_risk
from services.bedrock_service import analyze_with_bedrock


def investigate_message(message: str, input_type: str = "text") -> dict:
    message = message.strip()
    if not message:
        raise ValueError("Message cannot be empty.")

    evidence = analyze_with_bedrock(message)
    risk = calculate_risk(evidence)

    result = {
        "investigation_id": str(uuid4()),
        "input_type": input_type,
        "risk_score": risk["risk_score"],
        "risk_level": risk["risk_level"],
        "result": risk["result"],
        "red_flags": risk["red_flags"],
        "analysis": build_analysis(risk["risk_level"], risk["red_flags"]),
        "recommendation": build_recommendation(risk["risk_level"]),
        "analyzed_message": message,
        "created_at": datetime.now(timezone.utc),
    }

    add_investigation(result)
    return result
