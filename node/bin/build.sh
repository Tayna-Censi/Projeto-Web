#!/bin/sh

set -e

bin/install-deps.sh

# Cleanup
[ -e dist ] && rm -r dist

# Build webapp
cd webapp && npm build --prod

# Build api
cd ../api && npm build
cp -r node_modules ../dist/