'use strict';
// GitHub Pages project site: https://OWNER.github.io/REPO/
// For a custom domain or a local preview, repository links remain disabled
// until data-repository on the <html> element is set to OWNER/REPO.
const I18N = {
 en: {
  'nav.features':'Features','nav.editions':'Editions','nav.download':'Download','hero.tag':'✦ Open-source Linux desktop project','hero.text':'A clean, powerful desktop built on Debian and KDE Plasma. Familiar looks, real Linux freedom, endless room to make it your own.','hero.download':'Explore downloads ↓','hero.source':'View source ↗','hero.warning':'🚧 Preview project · No verified installation ISO published yet','hero.concept':'Design concept — not an actual booted-system screenshot','window.title':'Welcome to Nexa','window.desc':'Your desktop. Your rules.','window.settings':'Settings','window.files':'Files','window.terminal':'Terminal','features.title':'Built for the desktop you want','features.lede':'Planned features in the build configuration. Inclusion does not mean the ISO has been independently tested.','features.1title':'A familiar desktop','features.1desc':'KDE Plasma with a modern taskbar, windows, light/dark themes and wallpapers.','features.2title':'Real everyday apps','features.2desc':'Firefox, Konsole, Dolphin, Okular PDF viewer, calculator and more.','features.3title':'Play & create','features.3desc':'Games, media players, office tools and creative software across editions.','features.4title':'Personalize everything','features.4desc':'Change panels, colors, keyboard shortcuts, icons and wallpaper.','features.5title':'Your own account','features.5desc':'User account, screen lock and password configured during installation.','features.6title':'Debian foundation','features.6desc':'Open-source Linux software with APT-based package management.','editions.title':'One Nexa, three editions','editions.lede':'Target platform for the first release: 64-bit Intel/AMD PCs. ARM and mobile require separate work.','editions.lite':'Essentials for lower-resource computers.','editions.standard':'A balanced home, office and everyday desktop.','editions.ultimate':'More tools for gaming, media, coding and design.','editions.pending':'Build not yet verified','download.title':'Download Nexa Linux','download.lede':'Only tested installation images should be offered as downloads. Build sources are available separately.','download.source':'Source code','download.sourceDesc':'Inspect, improve, and build Nexa yourself','download.sourceLink':'Open repository ↗','download.checksum':'Integrity check','download.checksumDesc':'Compare SHA256 checksums before installing','install.title':'Installation — important','install.lede':'These steps apply only after a tested installer ISO is released. Dual boot always carries risk.','install.1title':'Back up first','install.1desc':'Save important Windows files and your BitLocker recovery key if enabled.','install.2title':'Test before installing','install.2desc':'Verify the ISO checksum; test the image in a virtual machine before writing it to USB.','install.3title':'Protect Windows','install.3desc':'Create unallocated disk space. Never select Erase disk if keeping Windows.','footer':'Nexa Linux is an unofficial independent Debian-based community project, not affiliated with Debian, KDE or Microsoft. Preview project, unreleased.','status.loading':'Checking for public releases…','status.unavailable':'No verified public installer release is available yet.','status.error':'Cannot check releases right now. Visit the public repository to see the latest status.','status.found':'Public release found. Review release notes and compatibility before downloading.','status.files':'Available assets','status.release':'Open release notes','status.none':'No ISO files are attached to the latest release.','status.config':'Repository not configured yet. This website is a locally viewable template.'
 },
 fa: {
  'nav.features':'امکانات','nav.editions':'نسخه‌ها','nav.download':'دانلود','hero.tag':'✦ پروژهٔ سیستم‌عامل لینوکس متن‌باز','hero.text':'یک دسکتاپ زیبا و قابل شخصی‌سازی بر پایهٔ Debian و KDE Plasma؛ ظاهر آشنا همراه با آزادی واقعی لینوکس.','hero.download':'بخش دانلود ↓','hero.source':'مشاهدهٔ سورس ↗','hero.warning':'🚧 نسخهٔ پیش‌نمایش · ISO نصبِ تأییدشده هنوز منتشر نشده','hero.concept':'طرح مفهومی دسکتاپ — تصویر واقعی از سیستم بوت‌شده نیست','window.title':'به Nexa خوش اومدی','window.desc':'دسکتاپ تو، انتخاب تو.','window.settings':'تنظیمات','window.files':'فایل‌ها','window.terminal':'ترمینال','features.title':'برای دسکتاپ دلخواهت','features.lede':'این امکانات در تنظیمات ساخت پروژه پیش‌بینی شده‌اند؛ به‌معنی تست و تأیید ISO نیستند.','features.1title':'دسکتاپ آشنا','features.1desc':'KDE Plasma با نوار وظیفه، پنجره‌ها، تم روشن و تاریک و والپیپر.','features.2title':'برنامه‌های واقعی','features.2desc':'فایرفاکس، Konsole، فایل‌منیجر Dolphin، پی‌دی‌اف‌خوان Okular و ماشین‌حساب.','features.3title':'بازی و خلاقیت','features.3desc':'بازی‌ها، پخش‌کنندهٔ فیلم، ابزارهای آفیس و طراحی در نسخه‌های مختلف.','features.4title':'شخصی‌سازی گسترده','features.4desc':'تغییر پنل‌ها، رنگ‌ها، کلیدهای میانبر، آیکون و عکس پس‌زمینه.','features.5title':'حساب کاربری خودت','features.5desc':'حساب کاربری، قفل صفحه و رمزی که موقع نصب انتخاب می‌کنی.','features.6title':'پایهٔ Debian','features.6desc':'نرم‌افزارهای لینوکسی متن‌باز با مدیریت بسته‌های APT.','editions.title':'سه نسخه، یک Nexa','editions.lede':'هدف نسخهٔ اول: کامپیوترهای ۶۴بیتی Intel و AMD. پشتیبانی ARM و موبایل جداگانه است.','editions.lite':'برنامه‌های ضروری برای کامپیوترهای ضعیف‌تر.','editions.standard':'نسخهٔ متعادل برای خانه، کار و استفادهٔ روزمره.','editions.ultimate':'ابزارهای بیشتر برای بازی، ویدیو، برنامه‌نویسی و طراحی.','editions.pending':'ساخت هنوز تأیید نشده','download.title':'دانلود Nexa Linux','download.lede':'فقط فایل‌های نصبِ تست‌شده باید برای کاربران عمومی منتشر شوند. کد پروژه جداگانه در دسترس است.','download.source':'سورس پروژه','download.sourceDesc':'کدها را ببین، بهتر کن و سیستم را بساز','download.sourceLink':'باز کردن مخزن ↗','download.checksum':'بررسی اصالت فایل','download.checksumDesc':'قبل از نصب SHA256 فایل دانلودشده را بررسی کن','install.title':'نصب — نکات مهم','install.lede':'این مراحل فقط بعد از انتشار ISO نصبِ تست‌شده کاربرد دارند. دوال‌بوت همیشه ریسک دارد.','install.1title':'اول بکاپ بگیر','install.1desc':'از فایل‌های مهم ویندوز بکاپ بگیر و اگر BitLocker فعاله، کلید بازیابی‌اش رو نگه دار.','install.2title':'قبل از نصب تست کن','install.2desc':'هش SHA256 رو بررسی کن و ISO رو اول در ماشین مجازی امتحان کن.','install.3title':'از ویندوز محافظت کن','install.3desc':'فضای Unallocated درست کن و برای حفظ ویندوز هرگز Erase disk رو انتخاب نکن.','footer':'Nexa Linux یک پروژهٔ مستقل و غیررسمی بر پایهٔ Debian است و به Debian، KDE یا Microsoft وابسته نیست. پروژه هنوز منتشر نشده است.','status.loading':'در حال بررسی نسخه‌های عمومی…','status.unavailable':'هنوز نسخهٔ نصبِ عمومی و تأییدشده موجود نیست.','status.error':'بررسی نسخه‌ها ممکن نشد. برای وضعیت جدید به مخزن عمومی سر بزن.','status.found':'نسخهٔ عمومی پیدا شد؛ قبل از دانلود، توضیحات و سازگاری آن را بخوان.','status.files':'فایل‌های موجود','status.release':'توضیحات نسخه','status.none':'برای آخرین نسخه فایل ISO وجود ندارد.','status.config':'مخزن هنوز تنظیم نشده؛ این پیش‌نمایش محلی سایت است.'
 }
};
let lang = 'en';
let statusKey = 'status.loading';
let statusInfo = null;
const el = (s) => document.querySelector(s);
function repoFromHost(){
 const override = document.documentElement.getAttribute('data-repository');
 if (override && /^[a-z0-9_.-]+\/[a-z0-9_.-]+$/i.test(override)) return override;
 if (!location.hostname.endsWith('.github.io')) return null;
 const owner = location.hostname.slice(0,-'.github.io'.length);
 const repository = location.pathname.split('/').filter(Boolean)[0];
 if (!owner || !repository || !/^[a-z0-9_.-]+$/i.test(owner) || !/^[a-z0-9_.-]+$/i.test(repository)) return null;
 return owner + '/' + repository;
}
function translate(){
 document.documentElement.lang = lang;
 document.documentElement.dir = lang==='fa'?'rtl':'ltr';
 document.title = lang==='fa'?'Nexa Linux — دسکتاپ، به سبک خودت':'Nexa Linux — Your desktop, reimagined';
 document.querySelectorAll('[data-i]').forEach(node=>{node.textContent=I18N[lang][node.dataset.i]||node.textContent;});
 el('#lang').textContent=lang==='fa'?'English':'فارسی';
 renderRelease();
}
function renderRelease(){
 const t=I18N[lang];
 el('#release-status').textContent=t[statusKey];
 const container=el('#release-assets'); container.replaceChildren();
 if(!statusInfo) return;
 const {iso,releaseUrl,assets}=statusInfo;
 if(!iso.length){ const p=document.createElement('p');p.textContent=t['status.none'];container.append(p); }
 for(const asset of assets){
   const line=document.createElement('div');line.className='item';
   const left=document.createElement('div'); const b=document.createElement('strong');b.textContent=asset.name;
   const small=document.createElement('div');small.textContent=(asset.size/(1024*1024*1024)).toFixed(2)+' GiB';small.style.color='#b4c0e0';left.append(b,small);
   const a=document.createElement('a');a.href=asset.browser_download_url;a.rel='noopener noreferrer';a.textContent=asset.name.endsWith('.iso')?(lang==='fa'?'دانلود ISO ↓':'Download ISO ↓'):(lang==='fa'?'دانلود SHA256 ↓':'Download SHA256 ↓');
   line.append(left,a);container.append(line);
 }
 const foot=document.createElement('p');const link=document.createElement('a');link.href=releaseUrl;link.textContent=t['status.release']+' ↗';link.rel='noopener noreferrer';foot.append(link);container.append(foot);
}
async function load(){
 const repository=repoFromHost();
 if(!repository){statusKey='status.config';translate();return;}
 const root='https://github.com/'+repository;
 el('#repo-link').href=root;el('#source-link').href=root;
 try{
  const response=await fetch('https://api.github.com/repos/'+repository+'/releases/latest',{headers:{'Accept':'application/vnd.github+json'}});
  if(response.status===404){statusKey='status.unavailable';translate();return;}
  if(!response.ok)throw new Error('GitHub API '+response.status);
  const data=await response.json();
  const assets=(data.assets||[]).filter(a=>/\.(iso|sha256)$/i.test(a.name)&&/^https:\/\/github\.com\//.test(a.browser_download_url));
  const iso=assets.filter(a=>/\.iso$/i.test(a.name));
  statusInfo={iso,assets,releaseUrl:data.html_url};statusKey=iso.length?'status.found':'status.none';
 }catch(e){statusKey='status.error';}
 translate();
}
el('#lang').addEventListener('click',()=>{lang=lang==='en'?'fa':'en';translate();});
translate();load();
