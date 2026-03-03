# Architecture Overview

## Runtime flow

```text
PYNQ / node simulators
  -> UDP 9000
  -> EC2 SEDA server
       - T1 receive
       - T2 20 Hz game tick
       - T3 broadcast
       - T4 Redis write
  -> Redis (hot)
  -> sidecar
       - DynamoDB (warm metadata)
       - S3 (cold replays + DDB archive)
       - SNS -> Lambda (post-match summary)
```

## Monitoring flow

```text
browser -> monitor.py -> Redis / DynamoDB / S3
```

The monitor provides:

- live player view
- recent matches
- replay playback from S3
- EC2 control actions
- per-node simulator mode switching

## Storage tiers

| Tier | Service | Role |
|---|---|---|
| Hot | Redis | live state, queues, control |
| Warm | DynamoDB | recent match metadata and summaries |
| Cold | S3 | replay files and archived match rows |

Warm-tier retention is enforced by the sidecar:

- newest completed matches stay in DynamoDB
- older completed matches are archived to S3
- deletion from DynamoDB happens only after archive upload succeeds

## Protocol

The shared Python protocol source is:

- [protocol.py](/home/akendall/Documents/ServerSide_PYNQ_Raycaster/interfacing_+_sim/protocol.py)

## Current focus

The main architectural follow-on work is:

1. packet sequence validation
2. Redis-backed recent match cache for the monitor
3. background replay compression in the sidecar
4. CloudWatch metrics
