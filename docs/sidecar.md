# The Python Sidecar

**Owner: open for the team to build.**

The game server pushes a message to Redis when a match ends. The sidecar picks that up and handles all the AWS persistence — DynamoDB, S3, SNS. Self-contained Python project: no real-time constraints, no C++, just reading from Redis and writing to AWS.

## The idea

The game server runs at 20 Hz and must never block on slow operations. AWS SDK calls (DynamoDB, S3, SNS) take 10–100 ms — too slow to run inside the tick loop. So the server only talks to Redis (fast, <1 ms). When a match ends it pushes one event:

```
Redis list "game:events"  →  {"event": "match_end", "match_id": "..."}
```

The sidecar blocks on `BRPOP` — sleeping at zero CPU cost until the event arrives. When it wakes up, it handles everything downstream:

```
read match state from Redis
  → write result to DynamoDB
  → upload replay to S3
  → publish to SNS  →  triggers Lambda
  → clean up Redis keys
```

## Why this split works well for the team

- Completely independent of the game server — no shared code, no shared build system
- Can be developed and tested without the server running (push fake events to Redis manually with `redis-cli LPUSH game:events '{"event":"match_end"}'`)
- If it crashes, the game server keeps running — restart the sidecar and it processes any events still in Redis
- Pure Python + boto3: easy to iterate on

Note: the server is now Python too — but the sidecar is still a **separate process**. The reason is the same: the server's asyncio loop shouldn't block on 10–100ms AWS calls. Redis is still the handoff.

## What needs building

- [ ] Read match state from `game:{match_id}:state` Redis hash
- [ ] Write match result row to DynamoDB
- [ ] Write per-player stats rows to DynamoDB
- [ ] Upload event log to S3 as a replay file
- [ ] Publish SNS notification to trigger Lambda
- [ ] Delete Redis keys after successful write

Start with the DynamoDB write — get one row appearing in the AWS console, then build outward.

## Current state

[sidecar/sidecar.py](../sidecar/sidecar.py) — connects to Redis, receives events, prints them. The AWS writes are all TODOs.
