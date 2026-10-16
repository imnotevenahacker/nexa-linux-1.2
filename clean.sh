#!/usr/bin/env bash
set -Eeuo pipefail
[[ $EUID -eq 0 ]] || { echo 'Use sudo ./clean.sh' >&2; exit 1; }
cd "$(dirname "$0")"
command -v lb >/dev/null && lb clean || true
rm -f config/package-lists/90-nexa-profile.list.chroot
# Deliberately keep built ISO and logs for safety.
echo 'Build caches removed. Existing ISO files were preserved.'
