#!/usr/bin/env bash
# Run in Debian 13 *before* the long live-build stage.
set -Eeuo pipefail
cd "$(dirname "$0")/.."
edition="${1:-lite}"
case "$edition" in lite|standard|ultimate) ;; *) echo "ERROR: invalid edition '$edition'" >&2; exit 2;; esac
command -v apt-cache >/dev/null || { echo 'ERROR: apt-cache missing' >&2; exit 3; }
command -v apt-get >/dev/null || { echo 'ERROR: apt-get missing' >&2; exit 3; }
# Only simple apt package names belong in list.chroot; reject malformed entries.
mapfile -t packages < <(sed 's/#.*//;s/^[[:space:]]*//;s/[[:space:]]*$//;/^$/d' \
  config/package-lists/10-nexa-base.list.chroot "profiles/${edition}.list.chroot" | sort -u)
((${#packages[@]})) || { echo 'ERROR: empty package list' >&2; exit 5; }
errors=0
for pkg in "${packages[@]}"; do
  if [[ ! "$pkg" =~ ^[a-z0-9][a-z0-9.+-]*$ ]]; then
    echo "ERROR: invalid package name: $pkg" >&2; errors=$((errors+1))
  elif ! apt-cache show "$pkg" >/dev/null 2>&1; then
    echo "ERROR: unavailable Debian 13 package: $pkg" >&2; errors=$((errors+1))
  fi
done
if ((errors)); then
 echo "PREFLIGHT FAILED: $errors unknown/invalid packages. Fix them before building ISO." >&2
 exit 10
fi
# Apt dependency simulator catches conflicts or missing dependencies early.
# It does NOT guarantee the later build will succeed.
if ! DEBIAN_FRONTEND=noninteractive apt-get -s -o APT::Install-Recommends=false \
   install "${packages[@]}" >preflight-resolver.log 2>&1; then
  echo 'PREFLIGHT FAILED: APT dependency simulation failed. Last 70 lines:' >&2
  tail -70 preflight-resolver.log >&2
  exit 11
fi
printf 'PREFLIGHT PASSED: %s package names (edition=%s), APT dependency simulation OK.\n' \
  "${#packages[@]}" "$edition"
