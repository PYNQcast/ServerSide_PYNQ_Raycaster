#!/usr/bin/env python3
"""Create simple report-ready plots from one or more RTT JSON reports."""

from __future__ import annotations

import argparse
import json
import os
from pathlib import Path


def _load_report(path: str) -> dict:
    with open(path, "r", encoding="utf-8") as handle:
        data = json.load(handle)
    data["_path"] = path
    data["_label"] = data.get("label") or Path(path).stem
    return data


def _safe_value(report: dict, *keys):
    value = report
    for key in keys:
        if value is None:
            return None
        value = value.get(key)
    return value


def _plot_reports(reports: list[dict], out_dir: str):
    import matplotlib.pyplot as plt

    labels = [report["_label"] for report in reports]

    ack = [report["ack_rtt_ms"] for report in reports]
    first_state = [
        report["first_state_after_ack_ms"] if report["first_state_after_ack_ms"] is not None else 0.0
        for report in reports
    ]
    p95_gap = [_safe_value(report, "game_state_gaps", "p95_ms") or 0.0 for report in reports]
    avg_gap = [_safe_value(report, "game_state_gaps", "avg_ms") or 0.0 for report in reports]
    hz = [report.get("game_state_rate_hz") or 0.0 for report in reports]

    os.makedirs(out_dir, exist_ok=True)

    fig, ax = plt.subplots(figsize=(9, 5))
    x = range(len(labels))
    width = 0.38
    ax.bar([i - width / 2 for i in x], ack, width=width, label="ACK RTT (ms)")
    ax.bar([i + width / 2 for i in x], first_state, width=width, label="ACK -> first state (ms)")
    ax.set_title("PYNQ Client Latency by Load")
    ax.set_ylabel("Milliseconds")
    ax.set_xticks(list(x))
    ax.set_xticklabels(labels, rotation=20, ha="right")
    ax.legend()
    fig.tight_layout()
    fig.savefig(os.path.join(out_dir, "latency_comparison.png"), dpi=180)
    plt.close(fig)

    fig, ax = plt.subplots(figsize=(9, 5))
    ax.bar(labels, avg_gap, label="Avg gap (ms)")
    ax.bar(labels, p95_gap, alpha=0.65, label="P95 gap (ms)")
    ax.set_title("Game-State Gap Under Different Loads")
    ax.set_ylabel("Milliseconds")
    ax.tick_params(axis="x", rotation=20)
    ax.legend()
    fig.tight_layout()
    fig.savefig(os.path.join(out_dir, "gap_comparison.png"), dpi=180)
    plt.close(fig)

    fig, ax = plt.subplots(figsize=(9, 5))
    ax.bar(labels, hz, color="#2f6db3")
    target_hz = reports[0].get("expected_server_tick_hz") or 60.0
    ax.axhline(target_hz, color="#d62728", linestyle="--", label=f"Target {target_hz:.0f} Hz")
    ax.set_title("Observed Game-State Rate")
    ax.set_ylabel("Hz")
    ax.tick_params(axis="x", rotation=20)
    ax.legend()
    fig.tight_layout()
    fig.savefig(os.path.join(out_dir, "hz_comparison.png"), dpi=180)
    plt.close(fig)

    fig, ax = plt.subplots(figsize=(10, 5))
    plotted = False
    for report in reports:
        samples = report.get("game_state_gap_samples_ms") or []
        if not samples:
            continue
        ax.plot(samples, label=report["_label"], linewidth=1.5)
        plotted = True
    if plotted:
        ax.set_title("Game-State Gap Trace")
        ax.set_ylabel("Milliseconds")
        ax.set_xlabel("Packet index")
        ax.legend()
        fig.tight_layout()
        fig.savefig(os.path.join(out_dir, "gap_trace.png"), dpi=180)
    plt.close(fig)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Plot PYNQ RTT JSON reports")
    parser.add_argument("reports", nargs="+", help="one or more JSON report files")
    parser.add_argument("--out-dir", default="rtt_plots", help="output directory for PNG plots")
    args = parser.parse_args(argv)

    reports = [_load_report(path) for path in args.reports]
    try:
        _plot_reports(reports, args.out_dir)
    except ImportError:
        print("matplotlib is required to generate plots")
        return 1

    print(f"wrote plots to {args.out_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

