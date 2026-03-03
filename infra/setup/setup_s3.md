# S3 Setup

Use the AWS console first. The sidecar assumes the bucket already exists.

## Bucket (AWS Console)

Create a bucket with:

- Name: `fpga-raycaster-data`
- Region: `eu-west-2` (same region as EC2 / DynamoDB / Lambda)
- Object Ownership: `ACLs disabled`
- Block Public Access: leave all four options enabled
- Versioning: optional, off is fine for MVP

After creation, do not make it public. The Lambda and sidecar read/write it through IAM.

## Expected Replay Path

The current sidecar writes:

```text
fpga-raycaster-data/
└── replays/
    └── year=YYYY/
        └── month=MM/
            └── {match_id}.ndjson.gz
```

Example:

```text
s3://fpga-raycaster-data/replays/year=2026/month=03/match-20260302-142055.ndjson.gz
```

The sidecar also uses S3 for archived warm-tier DynamoDB rows:

```text
s3://fpga-raycaster-data/ddb-archive/year=YYYY/month=MM/{match_id}.json.gz
```

## EC2 Sidecar Config

`ec2/sidecar/sidecar.py` defaults to:

```text
S3_BUCKET=fpga-raycaster-data
AWS_REGION=eu-west-2
```

So if you keep the default bucket name, no extra config is needed for S3 beyond creating the bucket.

If you want a different name, set `S3_BUCKET` before starting the sidecar.

## IAM Permissions

The EC2 instance role (or AWS credentials used on EC2) needs:

- `s3:PutObject` on `arn:aws:s3:::fpga-raycaster-data/replays/*`
- `s3:PutObject` on `arn:aws:s3:::fpga-raycaster-data/ddb-archive/*`
- `s3:GetObject` on the same prefix if you want EC2-side verification

The Lambda role needs:

- `s3:GetObject` on `arn:aws:s3:::fpga-raycaster-data/replays/*`

## Optional CLI Setup

If you want to create the bucket from code instead of the console:

```bash
python3 s3/create_bucket.py
```
