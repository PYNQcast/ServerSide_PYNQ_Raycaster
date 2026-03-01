# Sidecar : Python AWS Bridge

## What is the sidecar?

The sidecar is a separate Python process that runs alongside the game server on EC2. It watches Redis for game events and handles all AWS writes : DynamoDB, S3, SNS.

The two processes never communicate directly. Redis is the handoff.

## Why not just write to AWS from the server?

The game server runs a 20 Hz tick loop. boto3 / AWS SDK calls add 10–100ms of latency and must not block the game loop.

The sidecar pattern solves this cleanly:

```
Game server (Python)          Sidecar (Python)
  tick every 50ms    ──►  Redis  ◄── BRPOP (sleeps here)
  write state fast              │
                                │ wakes up on game-end event
                                ▼
                           DynamoDB / S3 / SNS
```

The sidecar sleeps 100% of the time during gameplay. It only wakes up when the server pushes an event to Redis. This means AWS latency never affects the game loop.

Note: previously this was described as C++ server → Python sidecar. The server is now Python too : but the pattern is identical. Redis is still the boundary, the sidecar still owns all AWS writes.

## What it does

1. Watches Redis for game-end signals (`BRPOP game:events`)
2. Reads full match state from Redis
3. Persists results to DynamoDB
4. Archives replay to S3
5. Publishes SNS → triggers Lambda stats processor
6. Cleans up Redis keys

## Running

```bash
python sidecar/sidecar.py
```

Requires environment variables from `.env` (see `.env.example`).

## What needs implementing

See `sidecar/sidecar.py` : the Redis connection and event loop are wired up. The AWS writes (DynamoDB, S3, SNS) are TODOs for the team.
