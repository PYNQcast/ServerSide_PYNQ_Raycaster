#!/bin/bash
# pynq_dev.sh : open a 4-pane tmux session for the pynq_full ec2/ stack
#
# Layout:
#   ┌──────────────┬──────────────┬──────────────┐
#   │  pynq server │   sidecar    │   monitor    │  50%
#   ├──────────────┴──────────────┴──────────────┤
#   │              redis stats                   │  50%
#   └─────────────────────────────────────────────┘
#
# Monitor (pynq_full/ec2/monitor/monitor.py) runs on EC2 port 8080.
# SSH tunnel in the monitor pane forwards it to http://localhost:8080
#
# Usage: ./pynq_dev.sh  (from repo root)
# Requires: tmux, SSH key at repo root raycastpair.pem
# PYNQ nodes connect directly to EC2 port 9000 — no node sim panes needed here.

SESSION="pynq"
EC2="ubuntu@18.175.238.148"
REPO="$(cd "$(dirname "$0")" && pwd)"
KEY="$REPO/raycastpair.pem"

# Block if there are uncommitted changes or unpushed commits — EC2 must match local exactly.
if ! git -C "$REPO" diff --quiet || ! git -C "$REPO" diff --cached --quiet; then
  echo "!!! UNCOMMITTED changes detected — commit and push first:"
  git -C "$REPO" status --short
  echo "    git add -p && git commit -m '...' && git push && ./pynq_dev.sh"
  exit 1
fi
UNPUSHED=$(git -C "$REPO" log --oneline @{u}..HEAD 2>/dev/null | wc -l)
if [ "$UNPUSHED" -gt 0 ]; then
  echo "!!! $UNPUSHED unpushed commit(s) — EC2 pull will miss them:"
  git -C "$REPO" log --oneline @{u}..HEAD
  echo "    git push && ./pynq_dev.sh"
  exit 1
fi

# Kill stale tmux session
tmux kill-session -t "$SESSION" 2>/dev/null

# Kill any local process holding port 8080 (stale SSH tunnel from a previous run)
fuser -k 8080/tcp 2>/dev/null || true

echo "--- killing stale EC2 processes and pulling latest code ---"
ssh -i "$KEY" "$EC2" 'printf "#!/bin/bash\npkill -f server.py 2>/dev/null; pkill -f sidecar.py 2>/dev/null; pkill -f monitor.py 2>/dev/null; fuser -k 8080/tcp 2>/dev/null; true\n" > /tmp/_stop_pynq.sh && bash /tmp/_stop_pynq.sh'
sleep 1
ssh -i "$KEY" "$EC2" 'cd ~/ServerSide_PYNQ_Raycaster && git fetch origin && git reset --hard origin/main'
if [ $? -ne 0 ]; then
  echo "!!! EC2 git pull failed — check output above"
  exit 1
fi
echo "--- EC2 ready ---"

# Create session
tmux new-session -d -s "$SESSION" -x 220 -y 50

# Mouse + lock titles
tmux set-option -t "$SESSION" mouse on
tmux set-option -t "$SESSION" allow-rename off
tmux set-option -t "$SESSION" pane-border-style "fg=magenta"
tmux set-option -t "$SESSION" pane-active-border-style "fg=brightmagenta"
tmux set-option -t "$SESSION" pane-border-status top
tmux set-option -t "$SESSION" pane-border-format " #{pane_title} "

# Build layout — top row 3 cols, bottom row full width
#
#   ┌──────────────┬──────────────┬──────────────┐
#   │  pynq server │   sidecar    │   monitor    │  50%
#   ├──────────────┴──────────────┴──────────────┤
#   │                redis stats                 │  50%
#   └─────────────────────────────────────────────┘
#
tmux split-window -t "$SESSION:0.0" -h -p 67   # 0=top-L  1=top-R-two-thirds
tmux split-window -t "$SESSION:0.1" -h -p 50   # 1=top-M  2=top-R
tmux split-window -t "$SESSION:0.0" -v -p 50   # 0=server  3=bot (full width)
# Rebalance bot row — join the bottom splits into one pane spanning full width
# (tmux doesn't do this natively; redis pane sits under server col only — that's fine)
# Final: 0=server  1=sidecar  2=monitor  3=redis-stats

tmux select-pane -t "$SESSION:0.0" -T "pynq server"
tmux send-keys -t "$SESSION:0.0" "ssh -t -i $KEY $EC2 'source ~/venv/bin/activate && cd ~/ServerSide_PYNQ_Raycaster/pynq_full/ec2/server && python3 server.py'" Enter

tmux select-pane -t "$SESSION:0.1" -T "sidecar"
tmux send-keys -t "$SESSION:0.1" "ssh -t -i $KEY $EC2 'source ~/venv/bin/activate && cd ~/ServerSide_PYNQ_Raycaster/pynq_full/ec2/sidecar && python3 sidecar.py'" Enter

# Monitor: SSH tunnel + start on EC2, wait for port 8080, then tail log.
tmux select-pane -t "$SESSION:0.2" -T "monitor :8080"
tmux send-keys -t "$SESSION:0.2" "fuser -k 8080/tcp 2>/dev/null || true; ssh -t -i $KEY -L 0.0.0.0:8080:localhost:8080 $EC2 'source ~/venv/bin/activate && cd ~/ServerSide_PYNQ_Raycaster/pynq_full/ec2/monitor && nohup python3 monitor.py > /tmp/monitor.log 2>&1 & until nc -z localhost 8080 2>/dev/null; do sleep 0.2; done && echo [monitor] port 8080 ready && tail -f /tmp/monitor.log'" Enter

tmux select-pane -t "$SESSION:0.3" -T "redis stats"
tmux send-keys -t "$SESSION:0.3" "ssh -t -i $KEY $EC2 'redis-cli --stat'" Enter

# Open browser — use WSL IP since SSH tunnel binds to WSL interface, not Windows localhost
WSL_IP=$(hostname -I | awk '{print $1}')
cd /mnt/c && cmd.exe /c start "http://${WSL_IP}:8080"

# Focus server pane on attach
tmux select-pane -t "$SESSION:0.0"
tmux attach-session -t "$SESSION"
