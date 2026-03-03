# Storage Design

The project now uses a managed three-tier storage model.

## Hot: Redis

Purpose:
- live player state
- transient event queues
- control messages for node simulators

Examples:
- `player:1`
- `player:2`
- `game:seda-events`
- `game:seda-replay`
- `game:control`

## Warm: DynamoDB

Purpose:
- recent match metadata
- per-match tag rows
- replay pointers
- Lambda summary fields

Key shape:
- partition key: `match_id`
- sort key: `record_type`

Common rows:
- `META`
- `TAG#1`
- `TAG#2`

## Cold: S3

Purpose:
- replay files
- archived DynamoDB match rows

Paths:
- `replays/year=YYYY/month=MM/{match_id}.ndjson.gz`
- `ddb-archive/year=YYYY/month=MM/{match_id}.json.gz`

## Retention

The sidecar keeps DynamoDB as the warm tier:

- recent completed matches stay in DynamoDB
- older completed matches are copied to S3
- only then are those older rows removed from DynamoDB

This keeps replay history durable while keeping the warm metadata layer smaller.
