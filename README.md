# Nexa Linux 1.2 — Faster & Diagnosable Build Preview

**UNTESTED, NOT A RELEASED INSTALLER.** For Windows GitHub Desktop upload instructions see [QUICKSTART-FA.md](QUICKSTART-FA.md).

Build pipeline: Lite-first, APT package/dependency preflight, zstd squashfs, full error logs, extra diagnostics utility. Boot/install untested.

---

# Nexa Linux 1.0 — Debian 13 live ISO project

**Source project, not a prebuilt ISO.** A customizable open-source KDE Plasma 6-based distribution project with a branded hub, theme, artwork, selectable application suites, Calamares graphical installer, and a GitHub Actions ISO build workflow. There is no claim that the current artifact is boot-tested or safe to dual-boot. Read [README.fa.md](README.fa.md) for full Persian installation instructions and cautions.

## Quick start

- Default: `sudo ./build.sh standard`
- Lightweight: `sudo ./build.sh lite`
- Expanded: `sudo ./build.sh ultimate`
- Clean intermediate build data: `sudo ./clean.sh`
- Check built ISO structure: `./scripts/check-iso.sh output.iso`
- Requirements: Debian 13 amd64, root permissions for live-build, internet, live-build/debootstrap/squashfs-tools/xorriso/GRUB build tools, abundant free disk space.

## Downloadable ISO from GitHub Actions

Push the **contents of this folder** to a GitHub repository, enable Actions, open **Build Nexa Linux ISO** workflow, and click **Run workflow**. A successful run uploads a downloadable `iso` and `sha256` artifact. Runs may fail due to dependencies, storage, or upstream changes. No ISO is bundled here.

## Components

- Debian trixie / KDE Plasma / SDDM / Calamares
- Nexa Hub native PyQt6 program, KDE first-login personalization
- Firefox ESR, Konsole, Dolphin, KCalc, Okular, games, Discover, Flatpak
- Standard and Ultimate: Office, video, image, developer and productivity apps
- UEFI + BIOS intended, but real boots and installed dual-boot are unverified.

MIT covers Nexa-authored source; bundled components retain their upstream licenses. Not officially affiliated with Debian, KDE, or Microsoft.

## 🌍 نسخهٔ جهانی و سایت

راهنمای فارسی انتشار سایت دو‌زبانه و مدیریت دانلود عمومی: [README-GLOBAL.fa.md](README-GLOBAL.fa.md). تا پیش از تست موفق ISO، منتشر کردن فایل نصب توصیه نمی‌شود.
