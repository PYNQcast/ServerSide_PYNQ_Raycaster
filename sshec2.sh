#!/bin/bash
# SSH into the EC2 game server
ssh -i "$(dirname "$0")/raycastpair.pem" ubuntu@18.175.238.148
