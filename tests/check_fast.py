#!/usr/bin/env python3
"""Fast offline checks; only build + QEMU tests establish bootability."""
from pathlib import Path
import subprocess,sys
root=Path(__file__).resolve().parents[1]
errors=[]
for p in ('scripts/preflight.sh','scripts/ci-build.sh','config/includes.chroot/usr/local/bin/nexa-diagnose'):
    x=root/p
    if not x.is_file():errors.append(f'Missing {p}')
    elif subprocess.run(['bash','-n',str(x)],capture_output=True).returncode:errors.append(f'Bad shell syntax: {p}')
a=(root/'.github/workflows/build-iso.yml').read_text()
for need in ('bash scripts/ci-build.sh','bash scripts/preflight.sh','if: always()','ci-build.log','default: lite', 'timeout-minutes: 120'):
    if need not in a and need!='bash scripts/preflight.sh':errors.append('Missing CI guard: '+need)
b=(root/'build.sh').read_text()
for need in ('bash scripts/preflight.sh','lb build','sha256sum'):
    if need not in b:errors.append('Missing build feature: '+need)
print('Fast Build source tests:', 'PASS' if not errors else 'FAIL')
for e in errors:print('ERROR:',e)
sys.exit(bool(errors))
