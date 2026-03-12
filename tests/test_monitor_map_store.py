from pathlib import Path

import pytest

from monitor_map_store import (
    MapStorageError,
    delete_map_entry,
    list_map_entries,
    load_map_entry,
    save_map_entry,
)


def bordered_grid():
    grid = [0] * (32 * 32)
    for x in range(32):
        grid[x] = 1
        grid[(31 * 32) + x] = 1
    for y in range(32):
        grid[y * 32] = 1
        grid[(y * 32) + 31] = 1
    return grid


def test_save_and_load_editor_map(tmp_path: Path):
    maps_dir = tmp_path / "maps"
    payload = save_map_entry(maps_dir, {
        "map_name": "Arena Alpha",
        "grid": bordered_grid(),
        "spawns": [{"x": 2, "y": 2}, {"x": 29, "y": 29}],
        "markers": [{"marker": "B", "x": 10, "y": 10}],
    })

    assert payload["map_id"] == "arena_alpha"
    assert payload["source"] == "editor"
    assert payload["spawns"] == [{"x": 2, "y": 2}, {"x": 29, "y": 29}]
    assert payload["marker_count"] == 1

    loaded = load_map_entry(maps_dir, "arena_alpha", include_grid=True)
    assert loaded["grid"][2 * 32 + 2] == 0
    assert loaded["markers"][0]["marker"] == "B"
    assert loaded["spawns"][0] == {"x": 2, "y": 2}


def test_spawn_order_is_loaded_from_runtime_marker_number(tmp_path: Path):
    maps_dir = tmp_path / "maps"
    maps_dir.mkdir(parents=True)
    rows = ["#" * 32]
    for y in range(1, 31):
        if y == 4:
            rows.append("#" + ("." * 28) + "2.#")
        elif y == 28:
            rows.append("#1" + ("." * 29) + "#")
        else:
            rows.append("#..............................#")
    rows.append("#" * 32)
    (maps_dir / "ordered.txt").write_text("\n".join(rows) + "\n", encoding="utf-8")

    loaded = load_map_entry(maps_dir, "ordered", include_grid=True)
    assert loaded["spawns"] == [{"x": 1, "y": 28}, {"x": 29, "y": 4}]


def test_system_maps_are_protected(tmp_path: Path):
    maps_dir = tmp_path / "maps"
    maps_dir.mkdir(parents=True)
    (maps_dir / "chase.txt").write_text(("#" * 32 + "\n") * 32, encoding="utf-8")

    with pytest.raises(MapStorageError, match="read-only"):
        save_map_entry(maps_dir, {
            "map_name": "chase",
            "grid": bordered_grid(),
            "spawns": [{"x": 2, "y": 2}, {"x": 29, "y": 29}],
        })


def test_delete_protected_active_map(tmp_path: Path):
    maps_dir = tmp_path / "maps"
    save_map_entry(maps_dir, {
        "map_name": "Arena Beta",
        "grid": bordered_grid(),
        "spawns": [{"x": 2, "y": 2}, {"x": 29, "y": 29}],
    })

    with pytest.raises(MapStorageError, match="active"):
        delete_map_entry(maps_dir, "arena_beta", {"arena_beta"})

    result = delete_map_entry(maps_dir, "arena_beta", set())
    assert result["deleted"] is True
    assert not list_map_entries(maps_dir)
