#!/usr/bin/env bash
set -e
command -v node >/dev/null || { echo 'Node.js 20+ is required.'; exit 1; }
echo 'Starting Daily Intelligence at http://localhost:4173'
npm start
