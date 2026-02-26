# Redis — Hot Cache (Tier 1)

## What is Redis?
In-memory key-value store. Like a shared dictionary on a server. Sub-millisecond
because everything lives in RAM. We use AWS ElastiCache (managed Redis).
The Python server talks to it via redis.asyncio (redis-py).

## Why we need it
Game loop runs at 20 Hz = 50ms/tick. Need to write all player positions every
tick. DynamoDB at 1-10ms is too slow for this. Redis at <1ms fits.

## Key Schema
```
game:{match_id}:state      HASH  — player_id → serialised position/state
game:{match_id}:config     HASH  — seed, tick_rate, max_players
game:{match_id}:events     LIST  — append-only event log (one entry per tick delta)
game:events                LIST  — sidecar trigger: LPUSH {"event":"match_end","match_id":"..."}
node:{node_id}:heartbeat   STRING TTL=5s — auto-expires when node goes silent
lobby:waiting              SET   — node IDs waiting for a match
```

## ElastiCache Setup
See `infra/setup/setup_elasticache.md`.
