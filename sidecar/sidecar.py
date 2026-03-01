"""Watches Redis for game-end events, then writes results to AWS services."""

import os
import redis

REDIS_HOST = os.environ.get("REDIS_HOST", "127.0.0.1")
REDIS_PORT = int(os.environ.get("REDIS_PORT", 6379))

r = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, decode_responses=True)

print(f"Sidecar running : watching Redis at {REDIS_HOST}:{REDIS_PORT}")

while True:
    result = r.blpop("game:events", timeout=30)
    if result is None:
        continue

    _, value = result
    print(f"Event: {value}")

    if value.startswith("game_end:"):
        match_id = value.split(":", 1)[1]
        # TODO: read match state from Redis
        # TODO: write to DynamoDB
        # TODO: upload replay to S3
        # TODO: publish SNS
        print(f"Match {match_id} ended : persistence not yet implemented")
