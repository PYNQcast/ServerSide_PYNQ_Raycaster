import os

import boto3
from botocore.exceptions import ClientError

AWS_REGION = os.environ.get("AWS_REGION", "eu-west-2")
BUCKET = os.environ.get("S3_BUCKET", "fpga-raycaster-data")

s3 = boto3.client("s3", region_name=AWS_REGION)


def ensure_bucket():
    try:
        s3.head_bucket(Bucket=BUCKET)
        print(f"Bucket already exists: {BUCKET}")
        return
    except ClientError:
        pass

    params = {"Bucket": BUCKET}
    if AWS_REGION != "us-east-1":
        params["CreateBucketConfiguration"] = {"LocationConstraint": AWS_REGION}

    s3.create_bucket(**params)
    s3.put_public_access_block(
        Bucket=BUCKET,
        PublicAccessBlockConfiguration={
            "BlockPublicAcls": True,
            "IgnorePublicAcls": True,
            "BlockPublicPolicy": True,
            "RestrictPublicBuckets": True,
        },
    )
    print(f"Created bucket: {BUCKET} ({AWS_REGION})")


if __name__ == "__main__":
    ensure_bucket()
