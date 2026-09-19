import uuid
import boto3

from config import AWS_REGION, S3_BUCKET_NAME


def upload_bytes(content: bytes, filename: str, content_type: str) -> str:
    if not S3_BUCKET_NAME:
        raise RuntimeError("S3_BUCKET_NAME is not configured.")

    safe_name = filename.replace("/", "_").replace("\\", "_")
    key = f"screenshots/{uuid.uuid4()}-{safe_name}"

    client = boto3.client("s3", region_name=AWS_REGION)
    client.put_object(
        Bucket=S3_BUCKET_NAME,
        Key=key,
        Body=content,
        ContentType=content_type,
    )

    return f"s3://{S3_BUCKET_NAME}/{key}"
