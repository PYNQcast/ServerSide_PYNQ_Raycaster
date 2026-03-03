# Redis

Redis is the hot operational tier.

## What it holds

- live player hashes
- match event queues
- replay frame queue
- control pub/sub messages

## Common keys

- `player:1`
- `player:2`
- `game:seda-events`
- `game:seda-replay`
- `game:control`

## Who uses it

- `T4` writes live state and events
- the sidecar consumes events and replay frames
- the monitor reads live state and publishes control messages
- node simulators listen for control messages

## Why it matters

Redis is the low-latency handoff between:

- gameplay
- persistence
- monitoring
- test control
