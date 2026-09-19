from fastapi.testclient import TestClient

from app import app

client = TestClient(app)


def test_root():
    response = client.get("/")
    assert response.status_code == 200


def test_health():
    response = client.get("/health")
    assert response.status_code == 200


def test_suspicious_message():
    response = client.post(
        "/investigate",
        json={
            "input_type": "text",
            "message": (
                "Urgent! Your bank account is blocked. "
                "Click https://fake-login.com to verify and send your OTP."
            ),
        },
    )

    assert response.status_code == 200
    data = response.json()
    assert data["risk_score"] >= 60
    assert data["result"] == "suspicious"
    assert len(data["red_flags"]) > 0


def test_history():
    response = client.get("/history")
    assert response.status_code == 200
    assert "items" in response.json()
