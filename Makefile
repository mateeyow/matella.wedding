.SILENT:
.PHONY: check setup help
.DEFAULT_GOAL:= help

EXECUTABLES = pnpm docker
PB_VERSION=0.21.3
SERVER_DIR=./api
PB_CONTAINER_NAME=matellapb
PB_FLAGS=--hooksDir=/pb/hooks --migrationsDir=/pb/migrations --dir=/pb/data --publicDir=/pb/public
COLOR_GREEN=$(shell echo "\033[0;32m")
COLOR_RED=$(shell echo "\033[0;31m")
COLOR_END=$(shell echo "\033[0;0m")

define log
	echo "\033[0;32m$1\033[0m"
endef

define err
	echo "\033[0;31m$1\033[0m"
endef

## ---
## HELP - SHOWS A LIST OF AVAILABLE TARGETS WHICH CAN BE CALLED WITH MAKE.
## ---

help:
	@for makefile in $(MAKEFILE_LIST) ; do \
		grep -E '^[0-9a-zA-Z_-]+:.*?## .*$$' $$makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' ; \
	done

check: ## Check if all requred executables are installed
	$(call log,"Checking dependencies...");
	@for exe in $(EXECUTABLES); do \
		which $$exe > /dev/null || { echo "$(COLOR_RED)Error: \"$$exe\" not found, please install \"$$exe\" and try again.$(COLOR_END)"; exit 1;} \
	done
	$(call log,"All dependencies are installed!");

setup: check pocketbase install ## Run all setup command

install: ## Install all dependencies
	$(call log,"Installing dependencies...")
	@pnpm install
	$(call log,"Done!")

dev: pocketbase_run ## Run frugal.fund in development mode
	$(call log,"Running frugal.fund in development mode...")

## ---
## POCKETBASE COMMANDS
## ---

pocketbase: pocketbase_build ## Initialize pocketbase

pocketbase_build: ## Build pocketbase docker image for local development
	$(call log,"Setup pocketbase...")
	$(call log,"Building pocketbase docker image...")
	@docker build --build-arg PB_VERSION=$(PB_VERSION) --file $(SERVER_DIR)/Dockerfile -t pocketbase --progress=plain --no-cache .

pocketbase_run: ## Run pocketbase docker
	$(call log,"Running pocketbase docker...")
	@if docker ps -a --format '{{.Names}}' | grep -q $(PB_CONTAINER_NAME); then \
		if docker inspect --format '{{.State.Running}}' $(PB_CONTAINER_NAME) | grep -q true; then \
			$(call log,"Container $(PB_CONTAINER_NAME) is already running."); \
		else \
			$(call log,"Starting existing container $(PB_CONTAINER_NAME)..."); \
			docker start $(PB_CONTAINER_NAME); \
		fi; \
	else \
		$(call log,"Creating and starting new container $(PB_CONTAINER_NAME)..."); \
		docker run -p 8090:8090 -itd --name $(PB_CONTAINER_NAME) \
			-v $(SERVER_DIR)/data:/pb/data \
			-v $(SERVER_DIR)/migrations:/pb/migrations \
			-v $(SERVER_DIR)/hooks:/pb/hooks \
			-v $(SERVER_DIR)/public:/pb/public \
			pocketbase; \
	fi
	$(call log,"Done!")

pocketbase_migrate: ## Run pocketbase migrations
	@docker exec -it $(PB_CONTAINER_NAME) /pb/pocketbase $(PB_FLAGS) migrate 

migrate: pocketbase_migrate ## pocketbase_migrate alias
