# ec2/server/t4_redis_writer.py
#
# T4 : RedisWriter
#
# Drains write_queue and writes player state + match events to Redis.
# Runs as an asyncio task : never blocks T2/T3.
#
# Two Redis operations:
#   HSET player:<id>  x <x> y <y> angle <a>   : live position, overwritten each tick
#   LPUSH game:seda-events <json>              : match events for the sidecar
#
# Queue input:
#   {"op": "hset",  "key": str, "mapping": dict}   : player position update
#   {"op": "lpush", "key": str, "value":   str}    : match event
#
# Requires: pip install redis

import asyncio
import json

REDIS_HOST = "127.0.0.1"   # change to ElastiCache endpoint on real EC2
REDIS_PORT = 6379
EVENT_KEY  = "game:seda-events"

class RedisWriter:
    def __init__(self, write_queue: asyncio.Queue):
        self.queue  = write_queue
        self.client = None

    async def run(self):
        try:
            import redis.asyncio as aioredis
            self.client = aioredis.Redis(host=REDIS_HOST, port=REDIS_PORT,
                                         decode_responses=True)
            await self.client.ping()
            print(f"[T4 RedisWriter] connected to Redis at {REDIS_HOST}:{REDIS_PORT}")
        except Exception as e:
            print(f"[T4 RedisWriter] Redis not available ({e}) : writes logged only")
            self.client = None

        while True:
            msg = await self.queue.get()
            await self._write(msg)

    async def _write(self, msg: dict):
        op = msg.get("op")
        if op == "hset":
            await self._hset(msg["key"], msg["mapping"])
        elif op == "lpush":
            await self._lpush(msg["key"], msg["value"])
        else:
            print(f"[T4] unknown op: {msg}")

    async def _hset(self, key: str, mapping: dict):
        if not self.client:
            print(f"[T4] would HSET {key} {mapping}")
            return
        try:
            await self.client.hset(key, mapping=mapping)
        except Exception as e:
            print(f"[T4] HSET {key} failed: {e}")

    async def _lpush(self, key: str, value: str):
        if not self.client:
            print(f"[T4] would LPUSH {key} {value}")
            return
        try:
            await self.client.lpush(key, value)
            print(f"[T4] event: {value}")
        except Exception as e:
            print(f"[T4] LPUSH {key} failed: {e}")

    async def push_event(self, event: dict):
        """Push a match event directly (called from T2 on match_start / match_end)."""
        await self.queue.put({
            "op":    "lpush",
            "key":   EVENT_KEY,
            "value": json.dumps(event),
        })
