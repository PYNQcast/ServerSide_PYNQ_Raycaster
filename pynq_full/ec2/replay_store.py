# replay_store.py - Load replay payloads from DynamoDB (META) + S3 (NDJSON .gz).

import gzip
import json
import os
from collections import OrderedDict

import boto3


AWS_REGION = "eu-west-2"
DYNAMO_TABLE = os.environ.get("DYNAMO_TABLE", "pynq-raycaster-seda-matches")


class ReplayNotFoundError(LookupError):
    pass


def _cache_get(cache, match_id):
    payload = cache.pop(match_id, None)
    if payload is not None:
        cache[match_id] = payload  # move to end (LRU)
    return payload


def _cache_put(cache, match_id, payload, cache_size):
    cache[match_id] = payload
    while len(cache) > cache_size:
        oldest_key = next(iter(cache))
        cache.pop(oldest_key, None)


# Fetch a replay from cache, DynamoDB META record, and S3 NDJSON blob; caches the result.
def load_replay_payload(
    match_id: str,
    *,
    cache=None,
    cache_size: int = 8,
    dynamo_table=None,
    s3_client=None,
):
    replay_cache = cache if cache is not None else OrderedDict()
    cached = _cache_get(replay_cache, match_id)
    if cached is not None:
        return cached

    table = dynamo_table or boto3.resource("dynamodb", region_name=AWS_REGION).Table(DYNAMO_TABLE)
    s3 = s3_client or boto3.client("s3", region_name=AWS_REGION)

    resp = table.get_item(Key={"match_id": match_id, "record_type": "META"})
    item = resp.get("Item")
    if not item:
        raise ReplayNotFoundError(f"unknown match_id: {match_id}")

    bucket = item.get("replay_s3_bucket")
    key = item.get("replay_s3_key")
    if not bucket or not key:
        raise ReplayNotFoundError(f"no replay stored for {match_id}")

    obj = s3.get_object(Bucket=bucket, Key=key)
    body = obj["Body"].read()
    if key.endswith(".gz"):
        body = gzip.decompress(body)

    events = []
    for line in body.decode("utf-8").splitlines():
        line = line.strip()
        if not line:
            continue
        events.append(json.loads(line))

    payload = {
        "match_id": match_id,
        "bucket": bucket,
        "key": key,
        "events": events,
    }
    _cache_put(replay_cache, match_id, payload, cache_size)
    return payload
