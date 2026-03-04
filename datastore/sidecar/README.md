# sidecar/

The canonical sidecar. Both stacks symlink here:

- `pynq_full/ec2/sidecar/sidecar.py` → `datastore/sidecar/sidecar.py`
- `sim_full/ec2/sidecar/sidecar.py`  → `datastore/sidecar/sidecar.py`

The sidecar has no dependency on whether the UDP source is a PYNQ board or a
simulator — it only consumes Redis events and writes to AWS.

## What it does

- DynamoDB writes (match META + TAG rows)
- S3 replay uploads (streaming multipart for long matches, single-shot fallback)
- Keyframe markers every 60 snapshots for O(1) seek
- SNS publish on `match_end` (triggers Lambda post-match processing)
- Warm-tier retention (archives older DynamoDB rows to S3)
