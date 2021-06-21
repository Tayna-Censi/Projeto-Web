#!/bin/sh

set -e

npm install
cd webapp && npm install
cd ../api && npm install