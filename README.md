# 🛡️ AmazonShield

AI-powered phishing and scam detection system that analyzes suspicious messages, URLs, and uploaded files and provides a risk score, threat indicators, and safety recommendations.

## 🚀 Features

- 🔍 Analyze suspicious messages
- 🤖 AI-powered threat investigation
- 📊 Rule-based risk scoring
- 🚨 Red-flag detection
- 🔗 Suspicious URL detection
- 📁 File/screenshot analysis
- ☁️ AWS integration
- 🧠 Amazon Bedrock integration
- 🛡️ AWS Guardrails
- 🗄️ Amazon S3 support
- 📦 DynamoDB support
- 📜 Analysis history
- ⚡ FastAPI backend
- 🌐 React frontend

---

## 🏗️ Project Structure

```text
AmazonShield/
│
├── frontend/
│
└── backend/
    │
    ├── app.py
    ├── config.py
    ├── requirements.txt
    ├── .env
    ├── .env.example
    ├── .gitignore
    ├── README.md
    │
    ├── api/
    │   ├── __init__.py
    │   └── routes.py
    │
    ├── models/
    │   ├── __init__.py
    │   └── schemas.py
    │
    ├── core/
    │   ├── __init__.py
    │   ├── risk_engine.py
    │   └── history_store.py
    │
    ├── services/
    │   ├── __init__.py
    │   ├── ai_service.py
    │   ├── bedrock_service.py
    │   ├── file_service.py
    │   ├── s3_service.py
    │   ├── dynamodb_service.py
    │   └── aws_services.py
    │
    ├── utils/
    │   ├── __init__.py
    │   ├── prompts.py
    │   └── helpers.py
    │
    ├── tests/
    │   ├── __init__.py
    │   ├── test_api.py
    │   └── test_risk_engine.py
    │
    └── uploads/
        └── .gitkeep