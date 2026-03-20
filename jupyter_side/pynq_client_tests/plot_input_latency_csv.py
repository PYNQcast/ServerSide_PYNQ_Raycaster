#!/usr/bin/env python3
"""Plot input-latency CSV captures for notebooks or report PNGs."""

from __future__ import annotations

import argparse
import csv
from pathlib import Path


def load_latency_rows(paths: list[str]) -> list[dict]:
    rows: list[dict] = []
    for path in paths:
        csv_path = Path(path)
        with csv_path.open("r", newline="", encoding="utf-8") as handle:
            reader = csv.DictReader(handle)
            for row in reader:
                parsed = dict(row)
                parsed["_path"] = str(csv_path)
                parsed["_label"] = row.get("label") or csv_path.stem
                for key in (
                    "sample_observed_at_ms",
                    "player_id",
                    "board_slot",
                    "seq",
                    "movement_mode",
                    "input_flags",
                    "client_sent_at_ms",
                    "server_received_at_ms",
                    "server_broadcast_at_ms",
                    "input_to_server_ms",
                    "input_to_broadcast_ms",
                ):
                    value = row.get(key)
                    parsed[key] = float(value) if value not in (None, "") else None
                rows.append(parsed)
    return rows


def summarise_by_label(rows: list[dict]) -> list[dict]:
    grouped: dict[str, list[dict]] = {}
    for row in rows:
        grouped.setdefault(str(row["_label"]), []).append(row)

    summary = []
    for label, group in grouped.items():
        server_values = [float(row["input_to_server_ms"]) for row in group if row["input_to_server_ms"] is not None]
        broadcast_values = [
            float(row["input_to_broadcast_ms"])
            for row in group
            if row["input_to_broadcast_ms"] is not None
        ]
        summary.append({
            "label": label,
            "count": len(group),
            "avg_input_to_server_ms": sum(server_values) / len(server_values) if server_values else 0.0,
            "avg_input_to_broadcast_ms": sum(broadcast_values) / len(broadcast_values) if broadcast_values else 0.0,
            "max_input_to_broadcast_ms": max(broadcast_values) if broadcast_values else 0.0,
        })
    summary.sort(key=lambda item: item["label"])
    return summary


def plot_latency_rows(rows: list[dict], out_dir: str | None = None):
    import matplotlib.pyplot as plt

    summary = summarise_by_label(rows)
    labels = [item["label"] for item in summary]
    avg_server = [item["avg_input_to_server_ms"] for item in summary]
    avg_broadcast = [item["avg_input_to_broadcast_ms"] for item in summary]
    max_broadcast = [item["max_input_to_broadcast_ms"] for item in summary]

    figures = []

    fig, ax = plt.subplots(figsize=(9, 5))
    x = range(len(labels))
    width = 0.38
    ax.bar([i - width / 2 for i in x], avg_server, width=width, label="Avg input -> server (ms)")
    ax.bar([i + width / 2 for i in x], avg_broadcast, width=width, label="Avg input -> broadcast (ms)")
    ax.set_title("Input Latency by Load")
    ax.set_ylabel("Milliseconds")
    ax.set_xticks(list(x))
    ax.set_xticklabels(labels, rotation=20, ha="right")
    ax.legend()
    fig.tight_layout()
    figures.append(("input_latency_comparison.png", fig))

    fig, ax = plt.subplots(figsize=(9, 5))
    ax.bar(labels, max_broadcast, color="#d95f02")
    ax.set_title("Worst-Case Input -> Broadcast Latency")
    ax.set_ylabel("Milliseconds")
    ax.tick_params(axis="x", rotation=20)
    fig.tight_layout()
    figures.append(("input_latency_max.png", fig))

    fig, ax = plt.subplots(figsize=(10, 5))
    plotted = False
    for label in labels:
        seq_rows = [row for row in rows if row["_label"] == label and row["input_to_broadcast_ms"] is not None]
        seq_rows.sort(key=lambda row: (row["seq"] or 0, row["sample_observed_at_ms"] or 0))
        if not seq_rows:
            continue
        ax.plot(
            [row["seq"] for row in seq_rows],
            [row["input_to_broadcast_ms"] for row in seq_rows],
            marker="o",
            linewidth=1.5,
            label=label,
        )
        plotted = True
    if plotted:
        ax.set_title("Input -> Broadcast Trace")
        ax.set_xlabel("Input sequence")
        ax.set_ylabel("Milliseconds")
        ax.legend()
        fig.tight_layout()
        figures.append(("input_latency_trace.png", fig))
    else:
        plt.close(fig)

    if out_dir:
        output_dir = Path(out_dir)
        output_dir.mkdir(parents=True, exist_ok=True)
        for filename, figure in figures:
            figure.savefig(output_dir / filename, dpi=180)

    return figures


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Plot input-latency CSV captures")
    parser.add_argument("csv_files", nargs="+", help="one or more CSV captures from input_latency_csv.py")
    parser.add_argument("--out-dir", default="input_latency_plots", help="output directory for PNG plots")
    args = parser.parse_args(argv)

    rows = load_latency_rows(args.csv_files)
    if not rows:
        print("No rows found in the supplied CSV files.")
        return 1

    try:
        plot_latency_rows(rows, args.out_dir)
    except ImportError:
        print("matplotlib is required to generate plots")
        return 1

    print(f"wrote plots to {args.out_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
