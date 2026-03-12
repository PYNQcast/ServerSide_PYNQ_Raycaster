export const GRID_WIDTH = 32;
export const GRID_HEIGHT = 32;
export const GRID_CELLS = GRID_WIDTH * GRID_HEIGHT;
export const MAX_UNDO = 20;
export const DEFAULT_MAP_NAME = 'custom_arena_001';
export const DEFAULT_SEED = '2401';

export function createEmptyGrid() {
  return new Uint8Array(GRID_CELLS);
}

export function copyGrid(grid) {
  return new Uint8Array(grid);
}

export function gridIndex(x, y) {
  return (y * GRID_WIDTH) + x;
}

export function isInsideGrid(x, y) {
  return x >= 0 && y >= 0 && x < GRID_WIDTH && y < GRID_HEIGHT;
}

export function hasSolidBorder(grid) {
  for (let x = 0; x < GRID_WIDTH; x += 1) {
    if (!grid[gridIndex(x, 0)] || !grid[gridIndex(x, GRID_HEIGHT - 1)]) return false;
  }
  for (let y = 0; y < GRID_HEIGHT; y += 1) {
    if (!grid[gridIndex(0, y)] || !grid[gridIndex(GRID_WIDTH - 1, y)]) return false;
  }
  return true;
}

export function applyBorderToGrid(grid) {
  const next = copyGrid(grid);
  for (let x = 0; x < GRID_WIDTH; x += 1) {
    next[gridIndex(x, 0)] = 1;
    next[gridIndex(x, GRID_HEIGHT - 1)] = 1;
  }
  for (let y = 0; y < GRID_HEIGHT; y += 1) {
    next[gridIndex(0, y)] = 1;
    next[gridIndex(GRID_WIDTH - 1, y)] = 1;
  }
  return next;
}

export function sanitiseSpawns(spawns, grid) {
  const seen = new Set();
  return (Array.isArray(spawns) ? spawns : [])
    .map((spawn) => ({
      x: Number.parseInt(spawn?.x, 10),
      y: Number.parseInt(spawn?.y, 10),
    }))
    .filter((spawn) => (
      Number.isInteger(spawn.x)
      && Number.isInteger(spawn.y)
      && isInsideGrid(spawn.x, spawn.y)
      && grid[gridIndex(spawn.x, spawn.y)] === 0
      && !seen.has(`${spawn.x}:${spawn.y}`)
      && seen.add(`${spawn.x}:${spawn.y}`) === seen
    ));
}

export function sanitiseMarkers(markers, grid, spawns) {
  const occupied = new Set((Array.isArray(spawns) ? spawns : []).map((spawn) => `${spawn.x}:${spawn.y}`));
  return (Array.isArray(markers) ? markers : [])
    .map((marker) => ({
      marker: String(marker?.marker || '').trim().toUpperCase(),
      type: String(marker?.type || ''),
      x: Number.parseInt(marker?.x, 10),
      y: Number.parseInt(marker?.y, 10),
    }))
    .filter((marker) => (
      marker.marker
      && Number.isInteger(marker.x)
      && Number.isInteger(marker.y)
      && isInsideGrid(marker.x, marker.y)
      && grid[gridIndex(marker.x, marker.y)] === 0
      && !occupied.has(`${marker.x}:${marker.y}`)
    ));
}

export function sanitiseDraft(grid, spawns, markers) {
  const nextSpawns = sanitiseSpawns(spawns, grid);
  const nextMarkers = sanitiseMarkers(markers, grid, nextSpawns);
  return { spawns: nextSpawns, markers: nextMarkers };
}

export function createSnapshot(grid, spawns, markers) {
  return {
    grid: copyGrid(grid),
    spawns: (spawns || []).map((spawn) => ({ ...spawn })),
    markers: (markers || []).map((marker) => ({ ...marker })),
  };
}

export function mulberry32(seedValue) {
  let seed = seedValue | 0;
  return function nextRandom() {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function generateTemplate(seedValue) {
  const numericSeed = Number.parseInt(seedValue, 10) || 0;
  const rng = mulberry32(numericSeed);
  const next = applyBorderToGrid(createEmptyGrid());
  const clusters = 8 + Math.floor(rng() * 8);

  for (let clusterIndex = 0; clusterIndex < clusters; clusterIndex += 1) {
    const cx = 3 + Math.floor(rng() * 26);
    const cy = 3 + Math.floor(rng() * 26);
    const shape = Math.floor(rng() * 4);
    if (shape === 0) {
      const length = 2 + Math.floor(rng() * 4);
      for (let step = 0; step < length && cx + step < GRID_WIDTH - 1; step += 1) {
        next[gridIndex(cx + step, cy)] = 1;
      }
    } else if (shape === 1) {
      const length = 2 + Math.floor(rng() * 4);
      for (let step = 0; step < length && cy + step < GRID_HEIGHT - 1; step += 1) {
        next[gridIndex(cx, cy + step)] = 1;
      }
    } else if (shape === 2) {
      for (let step = 0; step < 3 && cx + step < GRID_WIDTH - 1; step += 1) {
        next[gridIndex(cx + step, cy)] = 1;
      }
      for (let step = 1; step < 3 && cy + step < GRID_HEIGHT - 1; step += 1) {
        next[gridIndex(cx, cy + step)] = 1;
      }
    } else {
      next[gridIndex(cx, cy)] = 1;
    }
  }

  return next;
}

export function floodFill(grid, startX, startY, nextValue) {
  if (!isInsideGrid(startX, startY)) return null;
  const startIndex = gridIndex(startX, startY);
  const targetValue = grid[startIndex];
  if (targetValue === nextValue) return null;

  const next = copyGrid(grid);
  const queue = [[startX, startY]];
  next[startIndex] = nextValue;

  for (let offset = 0; offset < queue.length; offset += 1) {
    const [x, y] = queue[offset];
    const neighbours = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
    ];
    neighbours.forEach(([nextX, nextY]) => {
      if (!isInsideGrid(nextX, nextY)) return;
      const index = gridIndex(nextX, nextY);
      if (next[index] !== targetValue) return;
      next[index] = nextValue;
      queue.push([nextX, nextY]);
    });
  }

  return next;
}

export function serialiseRuntimeText(grid, spawns, markers) {
  const rows = Array.from({ length: GRID_HEIGHT }, (_, y) => (
    Array.from({ length: GRID_WIDTH }, (_, x) => (grid[gridIndex(x, y)] ? '#' : '.'))
  ));

  (markers || []).forEach((marker) => {
    if (!isInsideGrid(marker.x, marker.y)) return;
    if (rows[marker.y][marker.x] !== '.') return;
    rows[marker.y][marker.x] = marker.marker || 'B';
  });

  (spawns || []).slice(0, 5).forEach((spawn, index) => {
    if (!isInsideGrid(spawn.x, spawn.y)) return;
    rows[spawn.y][spawn.x] = String(index + 1);
  });

  return rows.map((row) => row.join('')).join('\n') + '\n';
}

export function serialiseGridText(grid, spawns) {
  const header = spawns.length
    ? `# spawns: ${spawns.map((spawn) => `${spawn.x},${spawn.y}`).join(' | ')}\n`
    : '';
  const body = Array.from({ length: GRID_HEIGHT }, (_, y) => (
    Array.from({ length: GRID_WIDTH }, (_, x) => String(grid[gridIndex(x, y)])).join(' ')
  )).join('\n');
  return `${header}${body}\n`;
}

export function serialiseEditorJson(mapName, grid, spawns, markers) {
  return JSON.stringify({
    schema_version: 1,
    map_name: mapName,
    grid: Array.from(grid),
    spawns,
    markers,
  }, null, 2);
}

export function parseImportedMapText(text, fallbackName = DEFAULT_MAP_NAME) {
  const raw = String(text || '').trim();
  if (!raw) {
    throw new Error('import file is empty');
  }

  if (raw.startsWith('{')) {
    const payload = JSON.parse(raw);
    const grid = Uint8Array.from(payload.grid || []);
    const spawns = sanitiseSpawns(payload.spawns || [], grid);
    return {
      mapName: String(payload.map_name || payload.name || fallbackName),
      grid,
      spawns,
      markers: sanitiseMarkers(payload.markers || [], grid, spawns),
    };
  }

  const lines = raw.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  const parsedHeader = { name: fallbackName, spawns: [] };
  const dataLines = [];
  lines.forEach((line) => {
    if (line.startsWith('# ')) {
      const lower = line.slice(2).trim();
      if (lower.startsWith('name:')) {
        parsedHeader.name = lower.slice(5).trim() || fallbackName;
      } else if (lower.startsWith('spawns:')) {
        parsedHeader.spawns = lower.slice(7).split('|').map((entry) => {
          const [xRaw, yRaw] = entry.trim().split(',');
          return { x: Number.parseInt(xRaw, 10), y: Number.parseInt(yRaw, 10) };
        }).filter((spawn) => Number.isInteger(spawn.x) && Number.isInteger(spawn.y));
      }
      return;
    }
    dataLines.push(line);
  });

  if (!dataLines.length) {
    throw new Error('import file does not contain map rows');
  }

  const looksNumeric = dataLines.every((line) => {
    const tokens = line.split(/\s+/);
    return tokens.length === GRID_WIDTH && tokens.every((token) => token === '0' || token === '1');
  });

  if (looksNumeric) {
    const grid = createEmptyGrid();
    dataLines.forEach((line, y) => {
      const tokens = line.split(/\s+/);
      tokens.forEach((token, x) => {
        grid[gridIndex(x, y)] = token === '1' ? 1 : 0;
      });
    });
    return {
      mapName: parsedHeader.name,
      grid,
      spawns: sanitiseSpawns(parsedHeader.spawns, grid),
      markers: [],
    };
  }

  if (dataLines.length !== GRID_HEIGHT || dataLines.some((line) => line.length !== GRID_WIDTH)) {
    throw new Error(`runtime import must be ${GRID_WIDTH}x${GRID_HEIGHT}`);
  }

  const grid = createEmptyGrid();
  const spawnsByIndex = [];
  const markers = [];
  dataLines.forEach((line, y) => {
    Array.from(line).forEach((char, x) => {
      if (char === '#') {
        grid[gridIndex(x, y)] = 1;
      } else if (/[1-5]/.test(char)) {
        spawnsByIndex[Number.parseInt(char, 10) - 1] = { x, y };
      } else if (char === 'B') {
        markers.push({ marker: 'B', type: 'bit_spawn', x, y });
      }
    });
  });
  const spawns = spawnsByIndex.filter(Boolean);
  return {
    mapName: parsedHeader.name,
    grid,
    spawns: sanitiseSpawns(spawns, grid),
    markers: sanitiseMarkers(markers, grid, spawns),
  };
}

export function buildBramSnippet(mapName, grid, spawns) {
  const flat = Array.from(grid).join(', ');
  return [
    `# Map: ${mapName}`,
    `MAP = [${flat}]`,
    `SPAWNS = ${JSON.stringify(spawns)}`,
    "for i, value in enumerate(MAP):",
    "    overlay.ip_dict['raycaster'].mmio.write(i * 4, value)",
  ].join('\n');
}

export function formatMapTimestamp(value) {
  if (!value) return 'unknown';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString();
}

export function fileSafeName(name) {
  return String(name || DEFAULT_MAP_NAME)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '') || DEFAULT_MAP_NAME;
}

export function downloadText(filename, text, mime = 'text/plain') {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function normaliseMapEntry(entry) {
  return {
    map_id: String(entry?.map_id || entry?.name || ''),
    map_name: String(entry?.map_name || entry?.map_id || entry?.name || ''),
    source: String(entry?.source || 'system'),
    deletable: Boolean(entry?.deletable),
    supported_modes: Array.isArray(entry?.supported_modes) ? entry.supported_modes : ['tag'],
    marker_count: Number.parseInt(entry?.marker_count, 10) || 0,
    wall_count: Number.parseInt(entry?.wall_count, 10) || 0,
    open_count: Number.parseInt(entry?.open_count, 10) || 0,
    spawns: Array.isArray(entry?.spawns) ? entry.spawns : [],
    created_at: entry?.created_at || '',
    updated_at: entry?.updated_at || '',
    notes: String(entry?.notes || ''),
  };
}
