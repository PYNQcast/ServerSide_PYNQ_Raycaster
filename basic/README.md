# basic/

This is the older minimal proof-of-concept stack.

## What it is for

Use it only if you want the simplest end-to-end reference flow:

```text
UDP -> server -> Redis -> sidecar -> DynamoDB
```

It is useful as a small learning sandbox, but it is not the main runtime path now.

## Current live path

For the real system, use:

- [ec2/](/home/akendall/Documents/ServerSide_PYNQ_Raycaster/ec2)

That is where the live server, monitor, replay, and AWS integration now live.
