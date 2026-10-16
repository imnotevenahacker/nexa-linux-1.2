#!/usr/bin/env bash
set -Eeuo pipefail
PROFILE="${1:-standard}"
case "$PROFILE" in lite|standard|ultimate) ;; *) echo 'Select lite/standard/ultimate'; exit 2;; esac
command -v apt-cache >/dev/null || { echo 'Need Debian apt-cache'; exit 1; }
files=(config/package-lists/10-nexa-base.list.chroot "profiles/${PROFILE}.list.chroot")
missing=0
while read -r package; do
  [[ -n "$package" ]] || continue
  if ! apt-cache show "$package" >/dev/null 2>&1; then
    echo "MISSING FROM CURRENT APT SOURCES: $package"
    missing=$((missing+1))
  fi
done < <(sed 's/#.*//; /^[[:space:]]*$/d' "${files[@]}" | sort -u)
if ((missing)); then echo "Missing packages: $missing" >&2; exit 1; fi
echo "All listed packages appear in the current apt metadata for $PROFILE."
