# Sidecar

The sidecar is the non-real-time AWS worker that runs beside the EC2 game server.

## What it does

- consumes Redis event queues with `BRPOP`
- writes match rows to DynamoDB
- uploads replay files to S3
- publishes `match_end` to SNS
- keeps DynamoDB as the warm tier by archiving older completed matches to S3

## Why it is separate

The game tick runs at 20 Hz and should not block on AWS calls.

The sidecar keeps that boundary clean:

```text
T2 / T4 -> Redis -> sidecar -> DynamoDB / S3 / SNS
```

Redis stays fast and local. AWS work happens off the gameplay path.

## Current queues

- `game:seda-events`
  - `match_start`, `player_tagged`, `match_end`
- `game:seda-replay`
  - `state_snapshot` frames for replay playback

## Current outputs

- DynamoDB
  - `META` row per match
  - `TAG#N` rows for tag events
- S3
  - replay file: `replays/.../{match_id}.ndjson.gz`
  - cold archive: `ddb-archive/.../{match_id}.json.gz`
- SNS
  - `match_end` notification for the Lambda summary processor

## Code

- main implementation: [ec2/sidecar/sidecar.py](/home/akendall/Documents/ServerSide_PYNQ_Raycaster/ec2/sidecar/sidecar.py)
- legacy prototype: [sidecar/sidecar.py](/home/akendall/Documents/ServerSide_PYNQ_Raycaster/sidecar/sidecar.py)

## Current limitation

Replay compression still happens inline during `match_end`. Moving that work to a
background worker is one of the next clean scaling improvements.
