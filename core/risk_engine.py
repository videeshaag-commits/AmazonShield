RISK_WEIGHTS = {
    "payment_request": 25,
    "urgency": 15,
    "credential_request": 25,
    "impersonation": 15,
    "suspicious_url": 10,
}

RED_FLAG_TEXT = {
    "payment_request": "Requests payment or money transfer",
    "urgency": "Urgent and alarming language",
    "credential_request": "Requests credentials or sensitive information",
    "impersonation": "Impersonates a trusted organization",
    "suspicious_url": "Suspicious URL detected",
}


def calculate_risk(evidence: dict) -> dict:
    score = 0
    red_flags = []

    for flag, weight in RISK_WEIGHTS.items():
        if evidence.get(flag, False):
            score += weight
            red_flags.append(RED_FLAG_TEXT[flag])

    score = min(score, 100)

    if score <= 29:
        level, result = "LOW", "safe"
    elif score <= 59:
        level, result = "MEDIUM", "safe"
    elif score <= 79:
        level, result = "HIGH", "suspicious"
    else:
        level, result = "CRITICAL", "suspicious"

    return {
        "risk_score": score,
        "risk_level": level,
        "result": result,
        "red_flags": red_flags,
    }


def build_analysis(level: str, red_flags: list[str]) -> str:
    if not red_flags:
        return "No major phishing or scam indicators were detected from the available evidence."
    if level in {"HIGH", "CRITICAL"}:
        return "This message contains strong indicators commonly associated with phishing, fraud, or social engineering."
    return "This message contains some indicators that require caution. Verify the sender before taking action."


def build_recommendation(level: str) -> list[str]:
    if level == "CRITICAL":
        return [
            "Do not click suspicious links.",
            "Do not send money or pay a requested fee.",
            "Do not share OTPs, passwords, PINs, CVVs, or other credentials.",
            "Verify the sender using an official channel.",
            "Report the message if appropriate.",
        ]
    if level == "HIGH":
        return [
            "Do not click suspicious links.",
            "Do not share sensitive information.",
            "Verify the sender through an official channel.",
            "Report the message if you believe it is fraudulent.",
        ]
    if level == "MEDIUM":
        return [
            "Verify the sender before taking action.",
            "Avoid sharing sensitive information.",
            "Check links carefully before opening them.",
        ]
    return [
        "The message appears safe based on the available evidence.",
        "Continue to keep OTPs and passwords private.",
        "Stay cautious with unexpected requests.",
    ]
