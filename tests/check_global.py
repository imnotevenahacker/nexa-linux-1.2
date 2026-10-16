#!/usr/bin/env python3
"""Offline readiness tests; these cannot test booting or installing an OS."""
from html.parser import HTMLParser
from pathlib import Path
from subprocess import run
import sys
ROOT=Path(__file__).resolve().parents[1]
errors=[]
class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids=set()
        self.referenced=[]
        self.translations=set()
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.add(a['id'])
        if 'data-i' in a:self.translations.add(a['data-i'])
        for key in ('src',):
            if key in a:self.referenced.append(a[key])
p=Page();p.feed((ROOT/'docs/index.html').read_text())
for src in p.referenced:
    if src.startswith(('https:','data:')):continue
    if not (ROOT/'docs'/src).exists():errors.append('Missing referenced static asset '+src)
for need in ('download','features','editions','install','repo-link','source-link','lang','release-assets','release-status'):
    if need not in p.ids:errors.append('Missing html id '+need)
js=(ROOT/'docs/app.js').read_text()
for key in p.translations:
    if "'"+key+"':" not in js:errors.append('Missing translation key '+key)
for must in ('status.unavailable','status.config','releases/latest','browser_download_url'):
    if must not in js:errors.append('Missing safe release behavior '+must)
if 'https://github.com/YOUR' in (ROOT/'docs/index.html').read_text():
    errors.append('Placeholders accidentally exposed as download links')
node=run(['bash','-lc','command -v node'],capture_output=True)
if node.returncode==0:
    p_node=run(['node','--check',str(ROOT/'docs/app.js')],capture_output=True,text=True)
    if p_node.returncode:errors.append('JS syntax: '+p_node.stderr)
print('Public website source:', 'PASS' if not errors else 'FAIL')
for problem in errors:print('-',problem)
sys.exit(bool(errors))
