# Makefile — add targets here as each component is built.
# Run 'make help' to list available targets.

.PHONY: server sidecar simulate basic-server game-logic clean help

server:       ## Run full Python SEDA game server
	python ec2/server/server.py

sidecar:      ## Run Python sidecar (Redis → DynamoDB/S3/SNS)
	python sidecar/sidecar.py

simulate:     ## Run node simulator — runs on laptop, not EC2
	python interfacing/node_simulator.py

basic-server: ## Run basic proof-of-concept server
	python basic/server/server.py

game-logic:   ## Build C++ game logic module (raycaster engine)
	cd ec2/game_logic && mkdir -p build && cd build && cmake .. && make -j$(nproc)

clean:        ## Remove C++ build artifacts
	rm -rf ec2/game_logic/build

# -- add these targets as you build each component --

# dashboard:  ## Run React dashboard dev server
# 	cd dashboard && npm run dev

help:         ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-16s\033[0m %s\n", $$1, $$2}'

.DEFAULT_GOAL := help
