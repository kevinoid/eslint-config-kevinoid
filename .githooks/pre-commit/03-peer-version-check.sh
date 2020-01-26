#!/bin/sh
# Ensure peerDependencies are included in devDependencies.

set -Ceu

exec ./node_modules/.bin/peer-version-check package.json
