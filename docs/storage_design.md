# Storage Design : Three-Tier Strategy

## Why three tiers?

Game state changes 20 times per second. DynamoDB at 1–10ms write latency cannot keep up with the tick loop. Redis at <1ms fits. But Redis is ephemeral : we need persistent storage for match history. S3 is cheapest for bulk replay data. Hence: hot cache → warm DB → cold archive.

## Tier 1 : Redis (ElastiCache)

**Purpose:** Live game state, written every tick by the Python server.
**Written by:** T4 RedisWriter (redis.asyncio).
**Read by:** Python sidecar on match end.
**Retention:** Match duration only. Keys expire or are deleted by sidecar.

Key schema:
```
game:{match_id}:state      HASH  player_id → JSON blob (position, angle, flags)
game:{match_id}:config     HASH  seed, tick_rate, max_players
game:{match_id}:events     LIST  event log (RPUSH each significant tick)
game:events                LIST  LPUSH {"event":"match_end","match_id":"..."} → triggers sidecar
node:{node_id}:heartbeat   STRING  TTL=5s (auto-expiry = node considered dead)
lobby:waiting              SET   node IDs waiting for a match
```

## Tier 2 : DynamoDB (Single-table)

**Purpose:** Durable match results and player profiles.
**Written by:** Python sidecar after game end.
**Read by:** Dashboard (via REST), Lambda stats processor.

Single-table access patterns:
| PK                  | SK             | Data                          |
|---------------------|----------------|-------------------------------|
| MATCH#{match_id}    | META           | winner, duration, tick_count  |
| MATCH#{match_id}    | PLAYER#{id}    | tags, deaths, avg_rtt         |
| PLAYER#{player_id}  | PROFILE        | total wins, losses, tags      |
| STATUS#COMPLETED    | {start_time}   | GSI for recent match listing  |

## Tier 3 : S3

**Purpose:** Bulk replay archives and periodic snapshots.
**Written by:** Python sidecar.
**Read by:** Dashboard (pre-signed URL), Athena queries.

Key patterns:
```
replays/year=YYYY/month=MM/{match_id}.ndjson.gz    Full event log (Athena-partitioned)
snapshots/{match_id}/{tick:08d}.json.gz             30-second state snapshots
exports/                                            Athena query result CSVs
```
