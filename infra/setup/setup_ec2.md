# EC2 Setup

## Instance
- Type: t2.micro (free tier) or t3.small for production
- AMI: Ubuntu 24.04 LTS (64-bit x86)
- Region: eu-west-2

## Security Group
Open inbound:
| Port | Protocol | Source      | Purpose             |
|------|----------|-------------|---------------------|
| 22   | TCP      | Your IP     | SSH                 |
| 9000 | UDP      | 0.0.0.0/0   | Game UDP            |
| 8080 | TCP      | 0.0.0.0/0   | WebSocket dashboard |

## Elastic IP
Attach an Elastic IP so the address persists across stop/start cycles.
Store it in `.env` as the node target address.

## Packages
```bash
sudo apt update && sudo apt install -y \
    cmake g++ git \
    python3 python3-pip python3-venv
```

`cmake` and `g++` are for the C++ game_logic module only.
No hiredis needed — the Python server uses redis-py.

## Python environment
```bash
python3 -m venv /opt/raycaster-venv
source /opt/raycaster-venv/bin/activate
pip install -r /opt/fpga-raycaster-server/requirements.txt
```

## IAM Role
Create an IAM role `fpga-raycaster-ec2` with policies:
- `AmazonDynamoDBFullAccess` (or scoped policy)
- `AmazonS3FullAccess` (scoped to fpga-raycaster-data bucket)
- `AmazonSNSFullAccess` (scoped to fpga-raycaster-game-end topic)
- `CloudWatchAgentServerPolicy`
- `AmazonElastiCacheReadOnlyAccess`

Attach the role to the EC2 instance (no access keys needed in .env).
