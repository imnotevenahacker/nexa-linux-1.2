#!/usr/bin/env bash
set -Eeuo pipefail
ISO="${1:-}"
[[ -f "$ISO" ]] || { echo 'Usage: ./scripts/check-iso.sh path-to.iso'; exit 2; }
command -v xorriso >/dev/null || { echo 'Install xorriso first'; exit 1; }
echo 'ISO metadata:'
xorriso -indev "$ISO" -pvd_info 2>&1 | tail -25
echo 'Searching for boot entries:'
xorriso -indev "$ISO" -report_el_torito plain 2>&1 | tail -30
printf 'SHA256: '; sha256sum "$ISO"
echo 'This verifies the ISO structure only, not a successful boot or safe dual-boot installation.'
