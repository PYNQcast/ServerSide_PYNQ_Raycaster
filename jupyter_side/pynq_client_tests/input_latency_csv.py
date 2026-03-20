#!/usr/bin/env python3
"""Poll monitor state and write input-latency samples to CSV."""

from __future__ import annotations

import argparse
import csv
import json
import time
import urllib.error
import urllib.request
from pathlib import Path
from typing import Optional


DEFAULT_MONITOR = "http://127.0.0.1:8080"
DEFAULT_POLL_INTERVAL_S = 0.2

CSV_COLUMNS = [
    "label",
    "sample_observed_at_ms",
    "player_id",
    "board_slot",
    "display_name",
    "username",
    "controller_key",
    "seq",
    "movement_mode",
    "input_flags",
    "client_sent_at_ms",
    "server_received_at_ms",
    "server_broadcast_at_ms",
    "input_to_server_ms",
    "input_to_broadcast_ms",
]


def _normalise_monitor_url(base_url: str) -> str:
    return base_url.rstrip("/")


def _state_url(base_url: str) -> str:
    return f"{_normalise_monitor_url(base_url)}/api/state"


def _sample_key(latency: dict) -> tuple[Optional[int], Optional[int], Optional[int]]:
    return (
        latency.get("player_id"),
        latency.get("seq"),
        latency.get("server_broadcast_at_ms"),
    )


def _extract_csv_row(state: dict, label: str, observed_at_ms: int) -> Optional[dict[str, object]]:
    latency = state.get("input_latency")
    if not isinstance(latency, dict):
        return None

    return {
        "label": label,
        "sample_observed_at_ms": observed_at_ms,
        "player_id": latency.get("player_id"),
        "board_slot": latency.get("board_slot"),
        "display_name": latency.get("display_name"),
        "username": latency.get("username"),
        "controller_key": latency.get("controller_key"),
        "seq": latency.get("seq"),
        "movement_mode": latency.get("movement_mode"),
        "input_flags": latency.get("input_flags"),
        "client_sent_at_ms": latency.get("client_sent_at_ms"),
        "server_received_at_ms": latency.get("server_received_at_ms"),
        "server_broadcast_at_ms": latency.get("server_broadcast_at_ms"),
        "input_to_server_ms": latency.get("input_to_server_ms"),
        "input_to_broadcast_ms": latency.get("input_to_broadcast_ms"),
    }


def _fetch_state(base_url: str, timeout_s: float) -> dict:
    with urllib.request.urlopen(_state_url(base_url), timeout=timeout_s) as response:
        return json.load(response)


def _write_header_if_needed(csv_path: Path):
    if csv_path.exists() and csv_path.stat().st_size > 0:
        return
    with csv_path.open("a", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=CSV_COLUMNS)
        writer.writeheader()


def _append_row(csv_path: Path, row: dict[str, object]):
    with csv_path.open("a", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=CSV_COLUMNS)
        writer.writerow(row)


def build_arg_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Capture monitor input-latency samples into CSV")
    parser.add_argument("--monitor", default=DEFAULT_MONITOR, help="monitor base URL, e.g. http://127.0.0.1:8080")
    parser.add_argument("--label", default="default", help="load label for this capture, e.g. idle or dual-board")
    parser.add_argument("--csv-out", required=True, help="path to the CSV file to append samples into")
    parser.add_argument(
        "--samples",
        type=int,
        default=50,
        help="number of distinct input-latency samples to capture before exiting",
    )
    parser.add_argument(
        "--poll-interval",
        type=float,
        default=DEFAULT_POLL_INTERVAL_S,
        help="seconds between monitor polls",
    )
    parser.add_argument(
        "--timeout",
        type=float,
        default=20.0,
        help="overall timeout in seconds",
    )
    parser.add_argument(
        "--request-timeout",
        type=float,
        default=2.0,
        help="per-request timeout in seconds",
    )
    return parser


def main(argv: Optional[list[str]] = None) -> int:
    parser = build_arg_parser()
    args = parser.parse_args(argv)

    csv_path = Path(args.csv_out)
    csv_path.parent.mkdir(parents=True, exist_ok=True)
    _write_header_if_needed(csv_path)

    seen_keys: set[tuple[Optional[int], Optional[int], Optional[int]]] = set()
    collected = 0
    deadline = time.monotonic() + max(1.0, float(args.timeout))

    while time.monotonic() < deadline and collected < max(1, int(args.samples)):
        try:
            state = _fetch_state(args.monitor, max(0.1, float(args.request_timeout)))
        except urllib.error.URLError as exc:
            print(f"monitor poll failed: {exc}")
            time.sleep(max(0.05, float(args.poll_interval)))
            continue
        except TimeoutError as exc:
            print(f"monitor poll timed out: {exc}")
            time.sleep(max(0.05, float(args.poll_interval)))
            continue

        observed_at_ms = int(time.time() * 1000)
        row = _extract_csv_row(state, args.label, observed_at_ms)
        if row is not None:
            sample_key = _sample_key(state["input_latency"])
            if sample_key not in seen_keys:
                _append_row(csv_path, row)
                seen_keys.add(sample_key)
                collected += 1
                print(
                    "captured "
                    f"{collected}/{max(1, int(args.samples))}: "
                    f"seq={row['seq']} "
                    f"input_to_server_ms={row['input_to_server_ms']} "
                    f"input_to_broadcast_ms={row['input_to_broadcast_ms']}"
                )

        time.sleep(max(0.05, float(args.poll_interval)))

    if collected == 0:
        print(
            "No input-latency samples captured. "
            "Make sure the monitor is running and a board is actively sending button updates."
        )
        return 1

    if collected < max(1, int(args.samples)):
        print(f"Captured {collected} samples before timeout.")
    else:
        print(f"csv_out: {csv_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
