# AmazonShield

AmazonShield is a student hackathon prototype that uses a Strands-based
AI agent to investigate suspicious messages and explain possible phishing
or scam indicators.

## Project structure

```text
AmazonShield/
├── agent.py
├── api.py
├── tools.py
├── prompts.py
├── requirements.txt
├── .env.example
├── .gitignore
└── README.md
```

## 1. Create a virtual environment

Windows PowerShell:

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
```

If PowerShell blocks activation, you can still run:

```powershell
.venv\Scripts\python.exe -m pip install -r requirements.txt
```

## 2. Install dependencies

```powershell
python -m pip install -r requirements.txt
```

## 3. Configure AWS

Install/configure the AWS CLI and use your normal AWS credentials.

Example:

```powershell
aws configure
```

Set the region in `.env` or your shell, for example:

```text
AWS_REGION=us-east-1
```

Never commit credentials to GitHub.

## 4. Test the agent

```powershell
python agent.py
```

Then enter a test message such as:

```text
URGENT! Your bank account is suspended. Click http://example.com to verify your OTP.
```

## 5. Start the API

```powershell
uvicorn api:app --reload
```

API endpoint:

```text
POST /investigate
```

Request:

```json
{
  "message": "Suspicious message here"
}
```

## Important

This is a prototype. The URL tool performs structural checks only; it is
not a malware scanner or a guarantee that a URL is safe or malicious.
