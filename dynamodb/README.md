# DynamoDB

Not built yet. This folder is a placeholder.

DynamoDB is the permanent store for match results and player stats. It is written to by the Python sidecar after a match ends — never touched by the game server directly.

## Why DynamoDB

- Serverless, no instance to manage
- Free tier: 25 GB storage, 25 RCU/WCU always free — more than enough for us
- boto3 SDK makes writes straightforward from the sidecar
- Single-table design keeps it simple at our scale (2 players, occasional matches)

## What goes in it

Three record types, all in one table (`fpga-raycaster`):

**Match result** — written once when a match ends
```
PK = MATCH#<match_id>   SK = META
attributes: winner_id, start_time, duration_s, map_seed
```

**Per-player match stats** — one record per player per match
```
PK = MATCH#<match_id>   SK = PLAYER#<player_id>
attributes: tags, deaths, avg_rtt_ms
```

**Player lifetime profile** — updated (incremented) after every match
```
PK = PLAYER#<player_id>   SK = PROFILE
attributes: total_wins, total_losses, total_tags
```

## Why single-table?

All three record types live in the same DynamoDB table. This is the standard DynamoDB pattern — one table, different PK/SK combinations per item type. The benefit is fewer API calls and no joins. The trade-off is the schema lives in your head (and this file) rather than in the database.

## GSI for the dashboard

A Global Secondary Index (`status-index`) lets the dashboard list recent matches without scanning the whole table:
```
GSI PK = status        e.g. "COMPLETED"
GSI SK = start_time    ISO 8601 — sorts chronologically
```

## When to build it

1. Get the sidecar reading real match data from Redis first
2. Run `python dynamodb/create_table.py` to create the table (write this script when ready)
3. Start with just writing one match result row — confirm it appears in the AWS console
4. Add player stats and profile updates once the basic write works

## Setup notes

See `infra/setup/setup_dynamodb.md`.
