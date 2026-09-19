import boto3

from config import AWS_REGION


def get_bedrock_runtime():
    return boto3.client("bedrock-runtime", region_name=AWS_REGION)


def get_s3():
    return boto3.client("s3", region_name=AWS_REGION)


def get_dynamodb():
    return boto3.resource("dynamodb", region_name=AWS_REGION)
