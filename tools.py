import re
from urllib.parse import urlparse
from strands import tool


@tool
def analyze_message(message: str) -> dict:
    """
    Analyze a suspicious message for phishing and scam indicators.

    Args:
        message: The message or text that needs to be analyzed.

    Returns:
        A dictionary containing detected indicators and message metadata.
    """

    text = message.lower()
    indicators = []

    keywords = [
        "urgent",
        "verify your account",
        "click here",
        "otp",
        "password",
        "bank",
        "blocked",
        "suspended",
        "prize",
        "winner",
        "refund",
        "payment",
        "gift card",
    ]

    for keyword in keywords:
        if keyword in text:
            indicators.append(f"Suspicious phrase: {keyword}")

    if re.search(r"https?://\S+", message):
        indicators.append("Contains a URL")

    if re.search(r"\b\d{4,8}\b", message):
        indicators.append(
            "Contains a numeric code that could be sensitive"
        )

    return {
        "indicator_count": len(indicators),
        "indicators": indicators,
        "message_length": len(message),
    }


@tool
def check_url(url: str) -> dict:
    """
    Perform a basic structural security check on a URL.

    Args:
        url: The URL that needs to be checked.

    Returns:
        A dictionary containing hostname information and structural warnings.
    """

    try:
        parsed = urlparse(url)
        hostname = parsed.hostname or ""

        warnings = []

        if parsed.scheme != "https":
            warnings.append("URL does not use HTTPS")

        if "@" in parsed.netloc:
            warnings.append(
                "URL contains @, which can be misleading"
            )

        if len(hostname) > 45:
            warnings.append("Unusually long hostname")

        if hostname.count(".") >= 4:
            warnings.append("Hostname has many subdomains")

        return {
            "hostname": hostname,
            "warnings": warnings,
            "risk_hint": (
                "review"
                if warnings
                else "no_obvious_structural_issue"
            ),
        }

    except Exception as exc:
        return {
            "error": str(exc)
        }