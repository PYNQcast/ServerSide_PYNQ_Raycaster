# DynamoDB Setup

## Table
- Name: `fpga-raycaster`
- Partition key: `PK` (String)
- Sort key: `SK` (String)
- Capacity mode: On-demand (PAY_PER_REQUEST)
- Free tier: 25 RCU + 25 WCU always-free (sufficient for our write volume)

## TTL
Enable TTL on attribute `ttl` (Unix epoch seconds) after table creation:
```bash
aws dynamodb update-time-to-live \
  --table-name fpga-raycaster \
  --time-to-live-specification "Enabled=true,AttributeName=ttl"
```

## DynamoDB Streams
Enable: `NEW_AND_OLD_IMAGES`
Used for CDC → can trigger additional Lambdas in future.

## GSI: status-index
- Partition key: `status` (String)  e.g. "COMPLETED", "ACTIVE"
- Sort key: `start_time` (String)   ISO 8601 timestamp
- Projection: ALL
- Purpose: query recent completed matches for dashboard history

## Automated setup
```bash
python dynamodb/create_table.py
```

## Key Schema
See `dynamodb/schema.md`.
