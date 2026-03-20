#!/usr/bin/env python3
"""Direct UDP RTT benchmark against the EC2 PYNQ server."""

from __future__ import annotations

import argparse
import csv
import json
import math
import os
import socket
import statistics
import sys
import time
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Optional

try:
    from . import rtt_protocol as protocol
except Exception:
    SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
    if SCRIPT_DIR not in sys.path:
        sys.path.insert(0, SCRIPT_DIR)
    import rtt_protocol as protocol

try:
    from . import rtt_run_pynq
    pynq_runtime = rtt_run_pynq.load_run_pynq()
except Exception:
    pynq_runtime = None


DEFAULT_SERVER = "3.9.71.204"
DEFAULT_PORT = 9000
DEFAULT_SAMPLES = 100
DEFAULT_TIMEOUT_S = 1.0
SOCKET_TIMEOUT_S = 0.25

CSV_COLUMNS = [
    "label",
    "sample_index",
    "seq",
    "status",
    "rtt_ms",
    "trigger",
]


@dataclass
class MetricStats:
    count: int
    avg_ms: float
    p50_ms: float
    p95_ms: float
    max_ms: float
    min_ms: float
    stddev_ms: float


@dataclass
class UdpRTTReport:
    label: str
    server: str
    port: int
    samples_target: int
    samples_ok: int
    samples_lost: int
    loss_pct: float
    expected_client_tick_hz: float
    expected_client_send_hz: float
    rtt_stats: Optional[MetricStats]
    rtt_samples_ms: list[float]
    started_at_unix_ms: int


def _percentile(values: list[float], p: float) -> float:
    ordered = sorted(values)
    index = max(0, min(len(ordered) - 1, int(math.ceil(len(ordered) * p)) - 1))
    return ordered[index]


def _summarise_ms(values: list[float]) -> MetricStats:
    return MetricStats(
        count=len(values),
        avg_ms=sum(values) / len(values),
        p50_ms=_percentile(values, 0.50),
        p95_ms=_percentile(values, 0.95),
        max_ms=max(values),
        min_ms=min(values),
        stddev_ms=statistics.pstdev(values) if len(values) > 1 else 0.0,
    )


def _print_report(report: UdpRTTReport):
    print("\nPYNQ UDP RTT Benchmark")
    print(f"server: {report.server}:{report.port}")
    print(f"label: {report.label or 'default'}")
    print(
        "configured_rates_hz: "
        f"client_tick={report.expected_client_tick_hz:.1f}, "
        f"client_send={report.expected_client_send_hz:.1f}"
    )
    print(f"samples_ok: {report.samples_ok}")
    print(f"samples_lost: {report.samples_lost}")
    print(f"loss_pct: {report.loss_pct:.2f}")
    if report.rtt_stats is None:
        print("rtt_stats: no successful replies")
        return
    stats = report.rtt_stats
    print(f"rtt_avg_ms: {stats.avg_ms:.2f}")
    print(f"rtt_p50_ms: {stats.p50_ms:.2f}")
    print(f"rtt_p95_ms: {stats.p95_ms:.2f}")
    print(f"rtt_max_ms: {stats.max_ms:.2f}")
    print(f"rtt_min_ms: {stats.min_ms:.2f}")
    print(f"rtt_stddev_ms: {stats.stddev_ms:.2f}")


def _write_json(path: str, report: UdpRTTReport):
    with open(path, "w", encoding="utf-8") as handle:
        json.dump(asdict(report), handle, indent=2)
        handle.write("\n")


def _write_csv(path: str, rows: list[dict[str, object]]):
    csv_path = Path(path)
    csv_path.parent.mkdir(parents=True, exist_ok=True)
    with csv_path.open("w", newline="", encoding="utf-8") as handle:
        writer = csv.DictWriter(handle, fieldnames=CSV_COLUMNS)
        writer.writeheader()
        writer.writerows(rows)


def _probe_once(sock: socket.socket, server: str, port: int, seq: int, timeout_s: float) -> tuple[str, Optional[float]]:
    packet = protocol.pack_rtt_ping_packet(seq)
    sent_at_ns = time.perf_counter_ns()
    sock.sendto(packet, (server, port))
    deadline = time.monotonic() + max(0.05, float(timeout_s))

    while time.monotonic() < deadline:
        try:
            data, _addr = sock.recvfrom(4096)
        except socket.timeout:
            continue

        recv_at_ns = time.perf_counter_ns()
        try:
            unpacked = protocol.unpack_rtt_packet(data)
        except Exception:
            continue
        if unpacked["pkt_type"] != protocol.PKT_RTT_PONG:
            continue
        if int(unpacked["seq"]) != seq:
            continue

        return "ok", (recv_at_ns - sent_at_ns) / 1_000_000.0

    return "timeout", None


def run_udp_rtt_benchmark(
    server: str,
    port: int,
    label: str,
    samples: int,
    timeout_s: float,
    *,
    trigger: str = "auto",
    buttons=None,
    poll_hz: float = 60.0,
    debounce_ms: int = 150,
) -> tuple[UdpRTTReport, list[dict[str, object]]]:
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.settimeout(SOCKET_TIMEOUT_S)

    started_at_unix_ms = int(time.time() * 1000)
    rtt_samples_ms: list[float] = []
    csv_rows: list[dict[str, object]] = []

    try:
        if trigger == "button":
            if buttons is None:
                raise RuntimeError("button trigger requested but no button source was provided")
            previous_mask = 0
            last_press_at_ms = 0
            sample_index = 0
            poll_interval_s = 1.0 / max(1.0, float(poll_hz))
            print("Press board buttons to capture RTT samples...")
            while sample_index < max(1, int(samples)):
                now_ms = int(time.time() * 1000)
                mask = int(buttons.read()) & 0xF
                is_new_press = mask != 0 and previous_mask == 0 and (now_ms - last_press_at_ms) >= int(debounce_ms)
                if is_new_press:
                    seq = (sample_index + 1) & 0xFFFF
                    status, rtt_ms = _probe_once(sock, server, port, seq, timeout_s)
                    if rtt_ms is not None:
                        rtt_samples_ms.append(rtt_ms)
                    csv_rows.append({
                        "label": label,
                        "sample_index": sample_index,
                        "seq": seq,
                        "status": status,
                        "rtt_ms": "" if rtt_ms is None else round(rtt_ms, 3),
                        "trigger": f"button:{mask}",
                    })
                    sample_index += 1
                    last_press_at_ms = now_ms
                previous_mask = mask
                time.sleep(poll_interval_s)
        else:
            for sample_index in range(max(1, int(samples))):
                seq = (sample_index + 1) & 0xFFFF
                status, rtt_ms = _probe_once(sock, server, port, seq, timeout_s)
                if rtt_ms is not None:
                    rtt_samples_ms.append(rtt_ms)
                csv_rows.append({
                    "label": label,
                    "sample_index": sample_index,
                    "seq": seq,
                    "status": status,
                    "rtt_ms": "" if rtt_ms is None else round(rtt_ms, 3),
                    "trigger": "auto",
                })
    finally:
        sock.close()

    stats = _summarise_ms(rtt_samples_ms) if rtt_samples_ms else None
    samples_ok = len(rtt_samples_ms)
    samples_lost = max(0, int(samples) - samples_ok)
    expected_client_tick_hz = float(getattr(pynq_runtime, "TICK_RATE", 60.0)) if pynq_runtime else 60.0
    expected_client_send_hz = float(getattr(pynq_runtime, "SEND_RATE", 60.0)) if pynq_runtime else 60.0

    report = UdpRTTReport(
        label=label,
        server=server,
        port=port,
        samples_target=int(samples),
        samples_ok=samples_ok,
        samples_lost=samples_lost,
        loss_pct=round((samples_lost / max(1, int(samples))) * 100.0, 2),
        expected_client_tick_hz=expected_client_tick_hz,
        expected_client_send_hz=expected_client_send_hz,
        rtt_stats=stats,
        rtt_samples_ms=[round(value, 3) for value in rtt_samples_ms],
        started_at_unix_ms=started_at_unix_ms,
    )
    return report, csv_rows


def build_arg_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Run direct UDP RTT benchmark against the PYNQ server")
    parser.add_argument("--server", default=DEFAULT_SERVER, help="EC2/server IP or hostname")
    parser.add_argument("--port", type=int, default=DEFAULT_PORT, help="server UDP port")
    parser.add_argument("--label", default="default", help="load label for the run, e.g. idle or dual-board")
    parser.add_argument("--samples", type=int, default=DEFAULT_SAMPLES, help="number of RTT probes to send")
    parser.add_argument("--timeout", type=float, default=DEFAULT_TIMEOUT_S, help="per-sample timeout in seconds")
    parser.add_argument("--trigger", choices=["auto", "button"], default="auto", help="send probes automatically or on each new board button press")
    parser.add_argument("--overlay", default=getattr(pynq_runtime, "OVERLAY_PATH", "") if pynq_runtime else "", help="PYNQ overlay path for button-triggered mode")
    parser.add_argument("--no-hw", action="store_true", help="use null buttons in button-triggered mode")
    parser.add_argument("--poll-hz", type=float, default=60.0, help="button polling rate in Hz for button-triggered mode")
    parser.add_argument("--debounce-ms", type=int, default=150, help="minimum spacing between accepted button presses")
    parser.add_argument("--csv-out", default="", help="optional path to write per-sample CSV results")
    parser.add_argument("--json-out", default="", help="optional path to write JSON summary results")
    return parser


def main(argv: Optional[list[str]] = None) -> int:
    parser = build_arg_parser()
    args = parser.parse_args(argv)

    buttons = None
    if args.trigger == "button":
        if pynq_runtime is None:
            print("Button-triggered mode requires run_pynq.py to be available next to this folder or in the parent jupyter_side folder.")
            return 1
        if args.no_hw:
            buttons = pynq_runtime._NullButtons()
        else:
            _overlay, _bram, buttons = pynq_runtime._load_overlay(args.overlay)

    report, csv_rows = run_udp_rtt_benchmark(
        server=args.server,
        port=int(args.port),
        label=args.label,
        samples=max(1, int(args.samples)),
        timeout_s=max(0.05, float(args.timeout)),
        trigger=args.trigger,
        buttons=buttons,
        poll_hz=max(1.0, float(args.poll_hz)),
        debounce_ms=max(0, int(args.debounce_ms)),
    )

    _print_report(report)
    if args.csv_out:
        _write_csv(args.csv_out, csv_rows)
        print(f"csv_out: {args.csv_out}")
    if args.json_out:
        _write_json(args.json_out, report)
        print(f"json_out: {args.json_out}")

    if report.samples_ok == 0:
        print("No RTT replies received. Make sure ./pynq_dev.sh is running and UDP port 9000 is reachable.")
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
