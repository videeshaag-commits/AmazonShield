import json
import re

import boto3
from botocore.exceptions import BotoCoreError, ClientError

from config import (
    AWS_REGION,
    BEDROCK_GUARDRAIL_ID,
    BEDROCK_GUARDRAIL_VERSION,
    BEDROCK_MODEL_ID,
    USE_BEDROCK,
)

EVIDENCE_KEYS = [
    "payment_request",
    "urgency",
    "credential_request",
    "impersonation",
    "suspicious_url",
]


def _local_evidence(message: str) -> dict:
    text = message.lower()

    payment_terms = [
        "pay", "payment", "transfer", "send money", "upi",
        "verification fee", "refund fee", "bank transfer",
    ]
    urgency_terms = [
        "urgent", "immediately", "act now", "right now",
        "account will be blocked", "expires today", "last warning",
    ]
    credential_terms = [
        "password", "otp", "one time password", "pin", "cvv",
        "login", "verification code", "passcode", "account number",
    ]
    impersonation_terms = [
        "bank", "amazon", "police", "government", "support team",
        "customer care", "official team", "tax department",
        "delivery company",
    ]

    return {
        "payment_request": any(x in text for x in payment_terms),
        "urgency": any(x in text for x in urgency_terms),
        "credential_request": any(x in text for x in credential_terms),
        "impersonation": any(x in text for x in impersonation_terms),
        "suspicious_url": bool(re.search(r"https?://|www\.", text)),
    }


def _normalize_evidence(data: dict) -> dict:
    return {key: bool(data.get(key, False)) for key in EVIDENCE_KEYS}


def _extract_json(text: str) -> dict:
    try:
        return json.loads(text.strip())
    except json.JSONDecodeError:
        match = re.search(r"\{.*\}", text, flags=re.DOTALL)
        if not match:
            raise ValueError("Bedrock response did not contain valid JSON.")
        return json.loads(match.group(0))


def _invoke_bedrock(message: str) -> dict:
    client = boto3.client("bedrock-runtime", region_name=AWS_REGION)

    prompt = f"""
You are AmazonShield's evidence extraction component.

Analyze the message and identify evidence only.
Do NOT calculate a risk score.

Return ONLY valid JSON:
{{
  "payment_request": true,
  "urgency": false,
  "credential_request": false,
  "impersonation": false,
  "suspicious_url": false
}}

Message:
{message}
"""

    body = {
        "inputText": prompt,
        "textGenerationConfig": {
            "maxTokenCount": 300,
            "temperature": 0,
        },
    }

    kwargs = {
        "modelId": BEDROCK_MODEL_ID,
        "body": json.dumps(body),
        "contentType": "application/json",
        "accept": "application/json",
    }

    if BEDROCK_GUARDRAIL_ID and BEDROCK_GUARDRAIL_VERSION:
        kwargs["guardrailIdentifier"] = BEDROCK_GUARDRAIL_ID
        kwargs["guardrailVersion"] = BEDROCK_GUARDRAIL_VERSION

    response = client.invoke_model(**kwargs)
    payload = json.loads(response["body"].read())
    generated = payload.get("results", [{}])[0].get("outputText", "")
    return _normalize_evidence(_extract_json(generated))


def analyze_with_bedrock(message: str) -> dict:
    if not USE_BEDROCK or not BEDROCK_MODEL_ID:
        return _local_evidence(message)

    try:
        return _invoke_bedrock(message)
    except (
        BotoCoreError,
        ClientError,
        ValueError,
        KeyError,
        json.JSONDecodeError,
    ):
        return _local_evidence(message)
