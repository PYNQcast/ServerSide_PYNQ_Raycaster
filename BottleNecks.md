# Current Bottlenecks
_2026-03-03_

## Main architectural pressure points

### 1. No sequence validation on UDP packets

Risk:
The server still trusts client packet order too much. Stale or replayed packets can
be accepted if they arrive late enough to look valid at the movement layer.

Why it matters:
- weakens protocol correctness
- makes weird movement bugs harder to reason about
- leaves an obvious hardening gap before real PYNQ testing expands

### 2. Monitor recent-match list still uses a full DynamoDB scan

Risk:
The monitor polls every 2 seconds and builds the recent-match list from a full
`META` scan. This is acceptable while the table is small, but it is still the
least efficient read pattern in the current system.

Why it matters:
- unnecessary warm-tier reads
- avoidable monitor cost
- becomes harder to justify as the table grows

### 3. Sidecar replay compression is synchronous

Risk:
Replay compression and upload currently happen inline during `match_end`.

Why it matters:
- longer matches mean larger replay files
- larger replay files mean the sidecar spends longer blocked in post-match work
- this reduces headroom before the sidecar becomes the next scaling bottleneck

### 4. Observability is still mostly manual

Risk:
The browser monitor is good for live debugging, but it is not a replacement for
durable metrics, alarms, or historical latency tracking.

Why it matters:
- harder to prove where time is being spent
- harder to compare runs or demonstrate improvements
- harder to catch regressions outside active manual testing

## Recommended order

1. Add packet sequence validation
2. Move recent-match UI reads toward Redis
3. Offload replay compression from the sidecar main loop
4. Add CloudWatch metrics after the runtime path is stable
