# Tiered Retention Strategy

The storage model is now managed as three tiers:

- `Redis` = hot
  - live state, transient queues, control messages
- `DynamoDB` = warm
  - recent match metadata and summaries
- `S3` = cold
  - replay files and archived DynamoDB match rows

## What Happens Automatically

The sidecar now enforces warm-tier retention:

1. Completed matches are written to DynamoDB as normal.
2. Replays are uploaded to S3 as normal.
3. After each `match_end` (and once on sidecar startup), the sidecar:
   - scans completed `META` rows
   - keeps the newest `DDB_WARM_MATCH_LIMIT` matches in DynamoDB
   - archives older full match rows to S3
   - deletes those archived rows from DynamoDB only after the S3 archive succeeds

This keeps DynamoDB as a recent-match index instead of an ever-growing full history table.

## S3 Archive Layout

Older DynamoDB rows are archived to:

```text
s3://fpga-raycaster-data/ddb-archive/year=YYYY/month=MM/{match_id}.json.gz
```

Each archive object contains:

- `match_id`
- `archived_at`
- `source_table`
- `row_count`
- `rows` (the full DynamoDB rows for that match)

## Runtime Configuration

The sidecar supports these environment variables:

- `ENABLE_DDB_RETENTION`
  - default: `1`
  - set to `0` to disable automatic archival
- `DDB_WARM_MATCH_LIMIT`
  - default: `25`
  - number of most recent completed matches to keep in DynamoDB
- `S3_ARCHIVE_PREFIX`
  - default: `ddb-archive`
  - S3 prefix used for archived DynamoDB rows

## Required IAM

The EC2 sidecar role must be able to write the archive objects as well as replay objects.

Minimum extra permission needed for the new cold archive lane:

- `s3:PutObject` on `arn:aws:s3:::fpga-raycaster-data/ddb-archive/*`

If you tighten policies by prefix, make sure the role covers both:

- `arn:aws:s3:::fpga-raycaster-data/replays/*`
- `arn:aws:s3:::fpga-raycaster-data/ddb-archive/*`

## Important Behavior

- Retention only applies to completed matches.
- In-progress matches are never archived.
- If S3 is unavailable, retention is skipped rather than deleting DynamoDB rows.
- The replay pipeline is unchanged:
  - DynamoDB still stores replay pointers for warm matches
  - S3 remains the source of truth for replay files

## Why This Helps

- keeps the monitor's DynamoDB scan smaller over time
- preserves old match metadata instead of discarding it
- maintains a clean hot / warm / cold storage model without changing gameplay flow
