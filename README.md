# AmazonShield Backend

Complete backend matching the AmazonShield frontend flow.

## Install

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
Copy-Item .env.example .env
uvicorn app:app --reload
```

Open http://127.0.0.1:8000/docs

## Endpoints

POST /investigate
POST /investigate/file
GET /history
GET /history/{investigation_id}
GET /health

## Risk engine

Payment request +25
Urgency +15
Credential request +25
Impersonation +15
Suspicious URL +10

LOW: 0-29
MEDIUM: 30-59
HIGH: 60-79
CRITICAL: 80-100

The final score is calculated by Python, not invented by the LLM.
The five configured weights total a maximum of 90.

AWS Bedrock is optional during local development. Configure it after
the local API is working. Never commit .env or AWS credentials.
