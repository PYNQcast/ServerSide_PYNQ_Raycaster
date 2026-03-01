# Dashboard

Not built yet. This folder is a placeholder.

The dashboard is a browser UI that connects to the game server via WebSocket and shows live game state. Build it when the Python server is sending real data : there's no point building the frontend before you know what the JSON looks like.

## How it connects

T3 (Broadcaster) in the Python server holds a WebSocket server alongside the UDP send socket. Any browser that connects receives the same game state JSON that gets sent to the PYNQ nodes each tick (20 Hz).

```
Browser → WS connect to EC2:8080
Server  → pushes JSON every tick
Browser → renders it
```

## Suggested stack

- **React + Vite** : fast to set up, good for live-updating UI
- **No extra state management** : the WebSocket message replaces the store, just `useState` on the latest frame
- Run with `npm run dev`, proxied to EC2 or tunnelled via `ssh -L`

## Suggested panels

- **Node status** : online/offline, last heartbeat time, IP for each PYNQ node
- **Minimap** : `<canvas>` drawing player positions as dots on a grid, updated each frame
- **Tick graph** : rolling line chart of tick duration in ms (spot overruns immediately)
- **Admin bar** : buttons for start/stop match, kick a node; these POST to a small REST endpoint on the server

## Suggested libraries

- `recharts` : simple line charts for tick duration history, zero config
- Nothing else : keep it small, it's a debug tool not a product

## When to build it

1. Get T3's `send_ws()` implemented in `broadcaster.py` (use the `websockets` or `aiohttp` library)
2. Confirm the JSON shape the server sends
3. Start with a single `<pre>{JSON.stringify(state)}</pre>` to verify the connection works
4. Add panels one at a time as needed
