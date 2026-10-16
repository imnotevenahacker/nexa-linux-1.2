#!/usr/bin/env bash
# Called *inside* privileged Debian 13 container in GitHub Actions.
set -Eeuo pipefail
cd /work
edition="${NEXA_EDITION:-lite}"
trap 'status=$?; if (( status )); then echo "CI FAILURE: exit=$status, edition=$edition" >&2; fi' EXIT
export DEBIAN_FRONTEND=noninteractive
# Capture apt failure details in job log, not just a cryptic final exit code.
echo '=== Enable Debian 13 contrib/non-free-firmware archives for package checks ==='
# Official debian:trixie container has only main enabled by default.
if [[ -f /etc/apt/sources.list.d/debian.sources ]]; then
  sed -i -E 's/^Components: .*/Components: main contrib non-free non-free-firmware/' /etc/apt/sources.list.d/debian.sources
elif [[ -f /etc/apt/sources.list ]]; then
  sed -i -E 's/^(deb [^ ]+ [^ ]+ )main.*/\1main contrib non-free non-free-firmware/' /etc/apt/sources.list
fi
printf '=== Install build tools (Debian 13) ===\n'
apt-get update
apt-get install -y --no-install-recommends \
  live-build debootstrap squashfs-tools xorriso grub-pc-bin grub-efi-amd64-bin \
  grub-common dosfstools mtools ca-certificates curl gnupg \
  git syslinux-common isolinux zstd
printf '\n=== Fast preflight: package availability and dependency conflicts ===\n'
bash scripts/preflight.sh "$edition"
export NEXA_PREFLIGHT_DONE=1
printf '\n=== Start ISO build ===\n'
bash build.sh "$edition"
