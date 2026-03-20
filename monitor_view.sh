#!/bin/bash
# monitor_view.sh : open the PYNQ monitor/dashboard without launching the full dev tmux stack
#
# Usage:
#   ./monitor_view.sh         # start/reuse remote monitor, create local :8080 tunnel, open browser
#   ./monitor_view.sh --stop  # close the local SSH tunnel on :8080

set -euo pipefail

EC2_IP="3.9.71.204"
EC2="ubuntu@${EC2_IP}"
REPO="$(cd "$(dirname "$0")" && pwd)"
KEY="$REPO/raycastpair.pem"
SSH_OPTS="-o BatchMode=yes -o StrictHostKeyChecking=accept-new -o ConnectTimeout=10 -o ServerAliveInterval=30 -o ServerAliveCountMax=3"
HTTP_PORT="${HTTP_PORT:-8080}"

if [ -t 1 ]; then
  CLR_RESET=$'\033[0m'
  CLR_BOLD=$'\033[1m'
  CLR_DIM=$'\033[2m'
  CLR_CYAN=$'\033[36m'
  CLR_GREEN=$'\033[32m'
  CLR_YELLOW=$'\033[33m'
  CLR_RED=$'\033[31m'
  ICON_INFO="●"
  ICON_OK="✔"
  ICON_WARN="▲"
  ICON_ERR="✖"
else
  CLR_RESET=""
  CLR_BOLD=""
  CLR_DIM=""
  CLR_CYAN=""
  CLR_GREEN=""
  CLR_YELLOW=""
  CLR_RED=""
  ICON_INFO="i"
  ICON_OK="[ok]"
  ICON_WARN="[warn]"
  ICON_ERR="[err]"
fi

log_info() {
  printf "%b%s%b %s\n" "${CLR_CYAN}" "${ICON_INFO}" "${CLR_RESET}" "$1"
}

log_ok() {
  printf "%b%s%b %s\n" "${CLR_GREEN}" "${ICON_OK}" "${CLR_RESET}" "$1"
}

log_warn() {
  printf "%b%s%b %s\n" "${CLR_YELLOW}" "${ICON_WARN}" "${CLR_RESET}" "$1"
}

log_err() {
  printf "%b%s%b %s\n" "${CLR_RED}" "${ICON_ERR}" "${CLR_RESET}" "$1"
}

die() {
  log_err "$1"
  exit 1
}

require_cmds() {
  local cmd
  for cmd in "$@"; do
    if ! command -v "$cmd" >/dev/null 2>&1; then
      die "Missing required command: $cmd"
    fi
  done
}

check_ec2_access() {
  ssh $SSH_OPTS -i "$KEY" "$EC2" 'echo [ssh] ec2 reachable' >/dev/null
}

remote_monitor_ready() {
  ssh $SSH_OPTS -i "$KEY" "$EC2" "bash -lc '
    if ! pgrep -f \"pynq_full/ec2/monitor/monitor.py\" >/dev/null 2>&1; then
      source ~/venv/bin/activate
      cd ~/ServerSide_PYNQ_Raycaster/pynq_full/ec2/monitor
      nohup python3 monitor.py > /tmp/monitor.log 2>&1 &
    fi
    for _ in \$(seq 1 50); do
      if nc -z localhost ${HTTP_PORT} >/dev/null 2>&1; then
        exit 0
      fi
      sleep 0.2
    done
    exit 1
  '"
}

stop_local_tunnel() {
  if fuser -k "${HTTP_PORT}/tcp" >/dev/null 2>&1; then
    log_ok "Closed local process on port ${HTTP_PORT}"
  else
    log_info "No local process was using port ${HTTP_PORT}"
  fi
}

ensure_local_tunnel() {
  if nc -z 127.0.0.1 "${HTTP_PORT}" >/dev/null 2>&1; then
    log_info "Local port ${HTTP_PORT} already has a listener; reusing it"
    return 0
  fi

  ssh $SSH_OPTS -f -N -o ExitOnForwardFailure=yes -i "$KEY" -L "0.0.0.0:${HTTP_PORT}:localhost:${HTTP_PORT}" "$EC2"
}

wait_for_local_monitor() {
  local attempts=0
  local max_attempts=50

  while [ "$attempts" -lt "$max_attempts" ]; do
    if printf 'GET / HTTP/1.0\r\nHost: localhost\r\n\r\n' | nc -w 1 127.0.0.1 "${HTTP_PORT}" 2>/dev/null | grep -q '200 OK'; then
      return 0
    fi
    sleep 0.2
    attempts=$((attempts + 1))
  done

  return 1
}

open_monitor_browser() {
  local wsl_ip
  wsl_ip="$(hostname -I | awk '{print $1}')"
  [ -n "$wsl_ip" ] || return 1
  (cd /mnt/c && cmd.exe /c start "http://${wsl_ip}:${HTTP_PORT}") >/dev/null 2>&1
}

print_usage() {
  cat <<EOF
Usage:
  ./monitor_view.sh
  ./monitor_view.sh --stop

Options:
  HTTP_PORT=8080 ./monitor_view.sh
EOF
}

case "${1:-}" in
  --stop)
    stop_local_tunnel
    exit 0
    ;;
  -h|--help)
    print_usage
    exit 0
    ;;
  "")
    ;;
  *)
    die "Unknown argument: $1"
    ;;
esac

printf "\n%bMONITOR VIEW%b\n" "${CLR_BOLD}${CLR_CYAN}" "${CLR_RESET}"
printf "%bOpen the live assessor dashboard without launching ./pynq_dev.sh%b\n\n" "${CLR_DIM}" "${CLR_RESET}"

[ -f "$KEY" ] || die "Missing SSH key: $KEY"
require_cmds ssh nc fuser hostname awk
log_ok "Local prerequisites look good"

log_info "Checking EC2 SSH access"
check_ec2_access || die "Could not reach EC2 over SSH"
log_ok "EC2 SSH is reachable"

log_info "Ensuring the remote monitor is running on EC2"
remote_monitor_ready || die "Remote monitor did not become ready on EC2:8080"
log_ok "Remote monitor is ready"

log_info "Ensuring a local tunnel exists on port ${HTTP_PORT}"
ensure_local_tunnel || die "Failed to create local SSH tunnel on port ${HTTP_PORT}"
log_ok "Local tunnel is available"

if wait_for_local_monitor; then
  log_ok "Dashboard is reachable at http://localhost:${HTTP_PORT}"
else
  log_warn "Tunnel opened, but the local HTTP check did not return 200 yet"
fi

if open_monitor_browser; then
  log_ok "Opened the monitor in your browser"
else
  log_warn "Could not auto-open the browser. Open http://localhost:${HTTP_PORT} manually."
fi

printf "\n%bURL:%b http://localhost:%s\n" "${CLR_BOLD}" "${CLR_RESET}" "${HTTP_PORT}"
printf "%bTip:%b run ./monitor_view.sh --stop to close the local tunnel later.\n" "${CLR_BOLD}" "${CLR_RESET}"
