# PYNQ Client Tests

Board-side latency benchmarking for report-ready numbers.

This folder is self-contained, including its own `protocol.py`, so you can copy it on its own:

```bash
scp -r jupyter_side/pynq_client_tests \
    xilinx@<PYNQ_IP>:/home/xilinx/jupyter_notebooks/Final_project_test/
```

Run from the `jupyter_side/` directory on the PYNQ board:

```bash
python3 -m pynq_client_tests --server 3.9.71.204 --samples 100 --label idle
```

or directly from inside the folder:

```bash
python3 launch_rtt.py --server 3.9.71.204 --samples 100 --label idle
```

or, if you want the filename to match the board runtime naming style:

```bash
python3 run_pynq_rtt.py --server 3.9.71.204 --samples 100 --label idle
```

Optional CSV + JSON export:

```bash
python3 -m pynq_client_tests \
  --server 3.9.71.204 \
  --samples 100 \
  --label idle \
  --csv-out udp_rtt_idle.csv \
  --json-out udp_rtt_idle.json
```

Optional button-triggered RTT mode:

```bash
python3 run_pynq_rtt.py \
  --server 3.9.71.204 \
  --samples 20 \
  --label button-rtt \
  --trigger button \
  --csv-out udp_rtt_button.csv \
  --json-out udp_rtt_button.json
```

Optional button-to-visible mode:

```bash
python3 run_pynq_rtt.py \
  --measure button_to_visible \
  --samples 20 \
  --label button-visible \
  --csv-out button_to_visible.csv \
  --json-out button_to_visible.json
```

Key outputs:

- `avg_rtt_ms`
- `p50_rtt_ms`
- `p95_rtt_ms`
- `max_rtt_ms`
- `loss_pct`
- `samples_ok`
- `samples_lost`
- `button_to_visible_avg_ms`
- `button_to_visible_p50_ms`
- `button_to_visible_p95_ms`
- `button_to_visible_max_ms`

What this benchmark is measuring:

- Direct UDP round-trip time from the PYNQ board to the EC2 game server and back.
- Each sample is a dedicated RTT probe packet sent to server port `9000`, followed by the server's immediate echo reply.
- This is a network-path benchmark for `board -> server -> board`.
- In `button_to_visible` mode, each sample starts at a new board button edge, sends the normal gameplay `PKT_STATE_UPDATE`, then stops when the next returned `PKT_GAME_STATE` is applied and written to BRAM.
- `button_to_visible` is therefore an approximate `button -> server -> next board-visible authoritative state` measurement.

What this benchmark is not measuring:

- It does not measure monitor/browser latency.
- `rtt` mode does not measure visible movement on screen.
- `button_to_visible` mode does not measure monitor rendering or browser delay.
- It does not require the game monitor or SSH tunnel to be running.

How to read the stats:

- `avg_rtt_ms`: average RTT across all successful probes.
- `p50_rtt_ms`: median RTT; half the samples are below this.
- `p95_rtt_ms`: 95th percentile RTT; the main stability metric for the report.
- `max_rtt_ms`: worst single RTT spike observed in the run.
- `loss_pct`: percentage of probes that timed out with no RTT reply.
- `samples_ok`: number of successful RTT replies received.
- `samples_lost`: number of timed out RTT probes.
- `button_to_visible_*_ms`: button edge to next returned `PKT_GAME_STATE` being written to BRAM on the board.

Measurement modes:

- `rtt`: direct UDP round-trip benchmark.
- `button_to_visible`: button press to next server-state return written to BRAM.

Trigger modes for `rtt`:

- `auto`: sends probes immediately one after another.
- `button`: sends one RTT probe per new board button press using the `run_pynq.py` GPIO button path.

Recommended report wording:

- "Measured direct board-to-server UDP RTT using dedicated echo probes over the live `pynq_dev.sh` stack."
- "Quoted `p95_rtt_ms` as the main latency stability metric, with `avg_rtt_ms` and `max_rtt_ms` for context."
- "Measured button-to-visible latency as button edge detection through to the next returned `PKT_GAME_STATE` being applied and written to BRAM on the board."

Notebook wrapper:

- [UDP_RTT_Benchmark.ipynb](/home/akendall/Documents/ServerSide_PYNQ_Raycaster/jupyter_side/pynq_client_tests/UDP_RTT_Benchmark.ipynb)

That notebook just runs the same terminal benchmark command and then displays the saved JSON stats cleanly.

Plotting from saved CSV files:

```python
from pynq_client_tests.plot_udp_rtt_csv import load_rtt_rows, plot_rtt_rows, summarise_by_label

rows = load_rtt_rows([
    "udp_rtt_idle.csv",
    "udp_rtt_dual-board.csv",
])

summarise_by_label(rows)
plot_rtt_rows(rows)
```

This writes:

- `udp_rtt_comparison.png`
- `udp_rtt_loss.png`
- `udp_rtt_trace.png`
