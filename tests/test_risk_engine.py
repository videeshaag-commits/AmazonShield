from core.risk_engine import calculate_risk


def test_low():
    result = calculate_risk({})
    assert result["risk_score"] == 0
    assert result["risk_level"] == "LOW"
    assert result["result"] == "safe"


def test_high():
    result = calculate_risk({
        "payment_request": True,
        "urgency": True,
        "credential_request": True,
    })
    assert result["risk_score"] == 65
    assert result["risk_level"] == "HIGH"
    assert result["result"] == "suspicious"


def test_critical():
    result = calculate_risk({
        "payment_request": True,
        "urgency": True,
        "credential_request": True,
        "impersonation": True,
    })
    assert result["risk_score"] == 80
    assert result["risk_level"] == "CRITICAL"


def test_all_flags():
    result = calculate_risk({
        "payment_request": True,
        "urgency": True,
        "credential_request": True,
        "impersonation": True,
        "suspicious_url": True,
    })
    assert result["risk_score"] == 90
