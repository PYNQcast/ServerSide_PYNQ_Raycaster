# CloudWatch Setup

CloudWatch is optional, but it is now a sensible next observability pass once the
core runtime is stable.

## Custom Metrics
Namespace: `FPGARaycaster`

| Metric name          | Unit | Emitted by       |
|----------------------|------|------------------|
| tick_duration_ms     | ms   | game_tick.py (T2)    |
| udp_packets_received | Count| udp_receiver.py (T1) |
| active_nodes         | Count| game_tick.py (T2)    |
| redis_write_ms       | ms   | redis_writer.py (T4) |

Emit via CloudWatch PutMetricData (from sidecar, or via CloudWatch agent on EC2).

## Alarms
| Alarm                   | Condition                    | Action                  |
|-------------------------|------------------------------|-------------------------|
| TickOverrun             | tick_duration_ms > 45ms      | SNS notify (email)      |
| NodeDrop                | active_nodes < expected      | SNS notify              |
| HighRedisLatency        | redis_write_ms p99 > 5ms     | SNS notify              |

## Log Group
- Name: `/fpga-raycaster/server`
- Retention: 7 days (free tier conscious)
- Python server streams logs via CloudWatch agent or stdout → journald → agent

## Dashboard
Create in CloudWatch console:
- Widget 1: tick_duration_ms time series (last 1 hour)
- Widget 2: udp_packets_received bar chart
- Widget 3: active_nodes number widget
- Widget 4: redis_write_ms p99
