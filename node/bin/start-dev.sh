#!/bin/sh

set -e

# bin/install-deps.sh

yarn concurrently "cd api && npm start" "cd webapp && npm start"