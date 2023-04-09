#!/usr/bin/env bash
set -e 

BASELINE_BRANCH=${BASELINE_BRANCH:="main"}

# Required for `git switch` on CI
git fetch origin

# Gather baseline perf measurements
git switch "$BASELINE_BRANCH"

npm install --force
npx reassure --baseline

# Gather current perf measurements & compare results
git switch --detach -

npm install --force
npx reassure --branch
