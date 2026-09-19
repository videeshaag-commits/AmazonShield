from datetime import datetime, timezone
import boto3

from config import AWS_REGION, DYNAMODB_TABLE_NAME


def save_investigation(item: dict) -> None:
    if not DYNAMODB_TABLE_NAME:
        raise RuntimeError("DYNAMODB_TABLE_NAME is not configured.")

    table = boto3.resource(
        "dynamodb",
        region_name=AWS_REGION,
    ).Table(DYNAMODB_TABLE_NAME)

    data = dict(item)
    data["created_at"] = datetime.now(timezone.utc).isoformat()
    table.put_item(Item=data)
