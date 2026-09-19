# AmazonShield Frontend

React + Vite frontend for the AmazonShield AI Digital Scam Investigator.

## Structure

```text
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── MessageInput.jsx
│   │   ├── Investigation.jsx
│   │   ├── RiskScore.jsx
│   │   └── RedFlags.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Run

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Backend integration

The current investigation flow uses a 3.5-second demo delay and hardcoded result data.

Replace the demo `setTimeout()` in `src/App.jsx` with a `fetch()` call to the team's backend API.

Expected result shape:

```json
{
  "risk_score": 92,
  "risk_level": "HIGH",
  "red_flags": [
    "Payment requested",
    "Artificial urgency",
    "Possible impersonation",
    "Suspicious URL"
  ],
  "why": "The message requests money before providing legitimate verification.",
  "actions": [
    "Don't pay",
    "Don't share OTP",
    "Verify through official channels"
  ]
}
```
