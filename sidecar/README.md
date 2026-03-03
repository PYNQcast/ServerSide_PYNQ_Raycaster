# sidecar/

This folder is the older standalone prototype sidecar.

## Current source of truth

Use the EC2 sidecar here instead:

- [ec2/sidecar/sidecar.py](/home/akendall/Documents/ServerSide_PYNQ_Raycaster/ec2/sidecar/sidecar.py)

That is the live implementation and it now handles:

- DynamoDB writes
- S3 replay uploads
- SNS publish on `match_end`
- warm-tier retention (archive older completed DynamoDB rows to S3)

## Why this folder still exists

It is useful as a simpler reference for the earlier pattern, but it is not the
main runtime path anymore.
