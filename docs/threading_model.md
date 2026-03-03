# Threading Model

The live runtime is a staged pipeline.

## Stages

- `T1`
  - UDP receive
  - pushes raw packets into the packet queue
- `T2`
  - fixed 20 Hz game tick
  - owns authoritative player state
  - emits gameplay events and replay snapshots
- `T3`
  - broadcasts current state back to clients
- `T4`
  - writes live state and event records to Redis

## Concurrency split

- `T1`, `T2`, `T3`
  - asyncio-driven hot path
- `T4`
  - separate OS thread for Redis writes
- sidecar
  - separate process for AWS work
- monitor
  - separate process for UI and replay loading

## Why it is split this way

- UDP and tick timing stay isolated from AWS latency
- Redis writes are isolated from the broadcast path
- the sidecar can block on S3 / DynamoDB / SNS without touching gameplay timing
- the monitor can do replay and admin tasks without touching gameplay timing

## Practical limitation

Replay compression in the sidecar is still synchronous during `match_end`, so the
sidecar is the next clean place to improve concurrency if replay files grow.
