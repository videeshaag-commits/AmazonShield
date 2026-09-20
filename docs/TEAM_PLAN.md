# 3-member build plan

## Member 1 — AI Agent
- agent.py
- prompts.py
- tools.py
- Improve risk analysis and explanations
- Connect Strands to Amazon Bedrock
- Test scam/phishing examples

## Member 2 — Backend
- api.py
- API integration
- Database/storage if needed
- Authentication/admin APIs
- Connect frontend to /investigate

## Member 3 — Frontend/Admin
- User interface
- Message input
- Risk result cards
- Admin dashboard
- Demo polish

## Demo flow

1. User pastes a suspicious message.
2. Frontend sends it to POST /investigate.
3. AI agent analyzes it.
4. Agent uses tools for basic indicators.
5. API returns the explanation.
6. Frontend displays risk, reasons and safe actions.
