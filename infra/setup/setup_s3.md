# S3 Setup

## Bucket
- Name: `fpga-raycaster-data`
- Region: eu-west-2
- Versioning: disabled
- Public access: blocked on all axes

## Directory Structure
```
fpga-raycaster-data/
├── replays/
│   └── year=YYYY/month=MM/{match_id}.ndjson.gz
├── snapshots/
│   └── {match_id}/{tick:08d}.json.gz
└── exports/
    └── (manual Athena query results)
```

## Lifecycle Rules
| Rule ID          | Prefix    | Action                              |
|------------------|-----------|-------------------------------------|
| archive-replays  | replays/  | Transition to GLACIER after 90 days |

## Athena Setup (optional)
1. Create Glue crawler pointing at `s3://fpga-raycaster-data/replays/`
2. Run crawler → creates Glue table `replays`
3. Query in Athena: `SELECT * FROM replays WHERE year='2025' LIMIT 100`

## Automated setup
```bash
python s3/create_bucket.py
```
