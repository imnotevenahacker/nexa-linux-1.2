// KDE Plasma desktop scripting API, best-effort Windows 11 inspired bottom dock.
var existing = panels();
var p = existing.length ? existing[0] : new Panel;
for (var i=1; i<existing.length; i++) { existing[i].remove(); }
var ws = p.widgets();
for (var j=0; j<ws.length; j++) ws[j].remove();
p.location = 'bottom';
p.height = 52;
p.floating = true;
p.addWidget('org.kde.plasma.panelspacer');
p.addWidget('org.kde.plasma.kickoff');
p.addWidget('org.kde.plasma.icontasks');
p.addWidget('org.kde.plasma.panelspacer');
p.addWidget('org.kde.plasma.systemtray');
p.addWidget('org.kde.plasma.digitalclock');
p.addWidget('org.kde.plasma.showdesktop');
