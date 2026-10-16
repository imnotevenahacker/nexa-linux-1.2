#!/usr/bin/env python3
"""Offline structural checks. No claims about boot/install functionality."""
from pathlib import Path
import ast
import re
import subprocess
import sys
root=Path(__file__).resolve().parents[1]
errors=[]
checks=[
 'build.sh', 'auto/config', 'config/package-lists/10-nexa-base.list.chroot',
 'profiles/lite.list.chroot','profiles/standard.list.chroot','profiles/ultimate.list.chroot',
 'config/includes.chroot/usr/local/bin/nexa-hub',
 'config/includes.chroot/usr/local/bin/nexa-installer',
 'config/includes.chroot/usr/share/nexa/panel-layout.js',
 '.github/workflows/build-iso.yml',
 'README.fa.md','LICENSE',
]
for f in checks:
 if not (root/f).is_file():errors.append('Missing file: '+f)
for p in (root/'profiles').glob('*.list.chroot'):
 for line in p.read_text().splitlines():
  text=line.strip()
  if text and not text.startswith('#') and not re.fullmatch(r'[a-z0-9][a-z0-9+.-]*',text):
   errors.append(f'Bad package token: {p} {text}')
for p in [root/'build.sh',root/'clean.sh',root/'auto/config',
          *list((root/'scripts').glob('*.sh')),
          *list((root/'config/includes.chroot/usr/local/bin').iterdir())]:
 if p.name=='nexa-hub':
  try: ast.parse(p.read_text())
  except SyntaxError as e: errors.append(f'Python syntax: {e}')
 else:
  if (not p.is_file() or subprocess.run(['bash','-n',str(p)]).returncode):
   errors.append(f'Bad shell syntax: {p}')
print('Nexa source checks:', 'PASS' if not errors else 'FAIL')
for error in errors:print('-',error)
sys.exit(bool(errors))
