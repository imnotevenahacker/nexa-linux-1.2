#!/usr/bin/env bash
set -Eeuo pipefail
ROOT="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
EDITION="${1:-lite}"
case "$EDITION" in lite|standard|ultimate) ;; *) echo 'Usage: sudo bash ./build.sh [lite|standard|ultimate]' >&2; exit 2;; esac
if (( EUID != 0 )); then echo 'Use sudo bash ./build.sh lite' >&2; exit 1; fi
if [[ "$(dpkg --print-architecture)" != amd64 ]]; then echo 'An amd64 Debian build environment is required' >&2; exit 1; fi
for bin in lb debootstrap mksquashfs xorriso sha256sum; do
  command -v "$bin" >/dev/null 2>&1 || { echo "Missing build dependency: $bin" >&2; exit 1; }
done
cd "$ROOT"
# Fail fast on missing packages & unresolvable deps; do not start a 1-3 hour build.
# CI performs this too; standalone build also validates.
if [[ "${NEXA_PREFLIGHT_DONE:-0}" != 1 ]]; then
  bash scripts/preflight.sh "$EDITION"
fi
if find . -maxdepth 1 -iname '*.iso' | grep -q .; then
  echo 'An ISO already exists. Move it or run sudo bash ./clean.sh before rebuilding.' >&2
  exit 1
fi
cp "profiles/${EDITION}.list.chroot" config/package-lists/90-nexa-profile.list.chroot
printf 'Nexa Linux 1.2: %s; faster zstd squashfs; NO boot/install guarantee.\n' "$EDITION"
# Clear stale generated lb config, not source config or user files.
lb clean || true
lb config
lb config --validate
start=$SECONDS
# Keep complete log even if lb build fails.
set +e
lb build 2>&1 | tee "build-${EDITION}.log"
status=${PIPESTATUS[0]}
set -e
if ((status)); then
  printf '\nBUILD FAILED (exit %d) after %dm%ds.\n' "$status" "$(( (SECONDS-start)/60 ))" "$(( (SECONDS-start)%60 ))" >&2
  printf '%s\n' 'Search build-*.log for E:, error:, Unable to locate package, or failed.' >&2
  exit "$status"
fi
iso="$(find "$ROOT" -maxdepth 1 -type f -name '*.iso' -print -quit)"
if [[ -z "$iso" || ! -s "$iso" ]]; then echo 'No ISO produced; see build log.' >&2; exit 1; fi
sha256sum "$iso" > "${iso}.sha256"
printf '\nCreated: %s\n' "$iso"
printf '%s\n' 'ISO UNTESTED until verified in virtual machine. Never dual-boot an untested ISO.'
