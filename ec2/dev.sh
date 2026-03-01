#!/bin/bash
# ec2/dev.sh : open a 4-pane tmux session for the SEDA ec2/ stack
#
# Layout:
#   ┌─────────────────────────────────────┐  (large)
#   │            seda server              │
#   ├──────────┬──────────┬───────────────┤  (small)
#   │ node sim1│ node sim2│  redis --stat │
#   └──────────┴──────────┴───────────────┘
#
# Usage: ./ec2/dev.sh  (from repo root)
# Requires: tmux, SSH key at repo root raycastpair.pem

SESSION="seda"
EC2="ubuntu@18.175.238.148"
REPO="$(cd "$(dirname "$0")/.." && pwd)"
KEY="$REPO/raycastpair.pem"

# Kill existing session and stale EC2 processes, then pull latest code
tmux kill-session -t "$SESSION" 2>/dev/null
echo "--- pulling latest code on EC2 ---"
ssh -i "$KEY" "$EC2" "pkill -f 'ec2/server/server.py'; cd ~/ServerSide_PYNQ_Raycaster && git pull"
echo "--- done ---"

# Create session
tmux new-session -d -s "$SESSION" -x 220 -y 50

# Mouse + lock titles
tmux set-option -t "$SESSION" mouse on
tmux set-option -t "$SESSION" allow-rename off
tmux set-option -t "$SESSION" pane-border-style "fg=cyan"
tmux set-option -t "$SESSION" pane-active-border-style "fg=brightcyan"
tmux set-option -t "$SESSION" pane-border-status top
tmux set-option -t "$SESSION" pane-border-format " #{pane_title} "

# Build layout: split bottom row off (25%), split bottom into 3 columns
tmux split-window -t "$SESSION:0.0" -v -p 25   # 0=top  1=bottom-left
tmux split-window -t "$SESSION:0.1" -h -p 66   # 1=bottom-left  2=bottom-mid
tmux split-window -t "$SESSION:0.2" -h -p 50   # 2=bottom-mid   3=bottom-right
# Final: 0=top  1=bottom-left  2=bottom-mid  3=bottom-right

tmux select-pane -t "$SESSION:0.0" -T "seda server"
tmux send-keys -t "$SESSION:0.0" "ssh -t -i $KEY $EC2 'source ~/venv/bin/activate && cd ~/ServerSide_PYNQ_Raycaster && python3 ec2/server/server.py'"

tmux select-pane -t "$SESSION:0.1" -T "node sim 1"
tmux send-keys -t "$SESSION:0.1" "cd $REPO && python3 interfacing/node_simulator.py 18.175.238.148 9000 --nodes 1"

tmux select-pane -t "$SESSION:0.2" -T "node sim 2"
tmux send-keys -t "$SESSION:0.2" "cd $REPO && python3 interfacing/node_simulator.py 18.175.238.148 9000 --nodes 1 --player-id 2"

tmux select-pane -t "$SESSION:0.3" -T "redis stats"
tmux send-keys -t "$SESSION:0.3" "ssh -t -i $KEY $EC2 'redis-cli --stat'"

# Focus server pane on attach
tmux select-pane -t "$SESSION:0.0"
tmux attach-session -t "$SESSION"
