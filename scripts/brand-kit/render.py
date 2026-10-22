"""Render the brand files served at /brand (public/brand/).

    npm run brand-kit                                   # everything
    python3 scripts/brand-kit/render.py story-green     # just one (skips zip)

Edit render.html (contact info, sizes), then re-run. The tree vector comes
from trace.py. Needs Google Chrome, rsvg-convert and pdftocairo (poppler).
"""
import shutil
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path

from PIL import Image

SRC = Path(__file__).resolve().parent
OUT = SRC.parents[1] / "public" / "brand"
PREVIEWS = OUT / "previews"
PREFIX = "maple-ridge-"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
SVGO = SRC.parents[1] / "node_modules" / ".bin" / "svgo"
GREEN = "#374b37"  # ridge-700, same as --leaf in render.html

# kind:
#   logo   - transparent PNG at 3x trimmed to the art, plus SVG + PDF vectors
#   card   - PNG at 600 dpi plus a print PDF at the exact 3.5 x 2 in size
#   image  - PNG at 2x
#   sig    - email signature: drawn at 2x, trimmed to its box, opaque PNG
ASSETS = {}
for base, w, h in (
    ("logo", 1600, 1200),
    ("logo-name", 1600, 1200),
    ("logo-horizontal", 2000, 800),
    ("logo-horizontal-name", 2000, 800),
):
    for color in ("black", "white", "green"):
        ASSETS[f"{base}-{color}"] = ("logos", w, h, "logo")
for name in ("front-cream", "front-cream-name", "back-cream", "front-green", "front-green-name", "back-green"):
    ASSETS[f"card-{name}"] = ("business-cards", 2100, 1200, "card")
for name, w, h in (
    ("profile-tree-green", 1080, 1080),
    ("profile-tree-cream", 1080, 1080),
    ("profile-name-green", 1080, 1080),
    ("profile-name-cream", 1080, 1080),
    ("cover-green", 1640, 624),
    ("cover-green-name", 1640, 624),
    ("cover-cream", 1640, 624),
    ("post-cream", 1080, 1080),
    ("post-green", 1080, 1080),
    ("story-green", 1080, 1920),
    ("story-cream", 1080, 1920),
):
    ASSETS[name] = ("social", w, h, "image")
for name in ("email-signature", "email-signature-green", "email-signature-compact"):
    ASSETS[name] = ("email", 1400, 500, "sig")


def chrome(url, w, h, output_flag, scale=1):
    with tempfile.TemporaryDirectory() as profile:
        subprocess.run(
            [
                CHROME,
                "--headless=new",
                "--hide-scrollbars",
                "--no-pdf-header-footer",
                f"--force-device-scale-factor={scale}",
                f"--window-size={w},{h}",
                "--virtual-time-budget=15000",
                "--default-background-color=00000000",
                f"--user-data-dir={profile}",
                output_flag,
                url,
            ],
            check=True,
            capture_output=True,
        )


def url(name, w, h, **extra):
    q = "&".join(f"{k}={v}" for k, v in {"a": name, "w": w, "h": h, **extra}.items())
    return f"{(SRC / 'render.html').as_uri()}#{q}"


def preview(png, name, size):
    PREVIEWS.mkdir(parents=True, exist_ok=True)
    img = Image.open(png)
    img.thumbnail((size, size), Image.LANCZOS)
    img.save(PREVIEWS / f"{name}.webp", quality=88, method=6)


def png(name, folder, w, h, scale, trim, pad=0.08):
    out = OUT / folder / f"{PREFIX}{name}.png"
    chrome(url(name, w, h), w, h, f"--screenshot={out}", scale)
    img = Image.open(out).crop((0, 0, w * scale, h * scale))
    if trim:
        img = img.convert("RGBA")
        art = img.crop(img.getchannel("A").getbbox())
        px = round(max(art.size) * pad)
        img = Image.new("RGBA", (art.width + px * 2, art.height + px * 2), (0, 0, 0, 0))
        img.paste(art, (px, px))
    else:
        img = img.convert("RGB")
    img.save(out, optimize=True)
    return out, f"{img.width}x{img.height}"


def pdf(name, out, w, h, k, trim):
    chrome(url(name, w, h, mode="pdf", k=k, trim=int(trim)), w, h, f"--print-to-pdf={out}")


def render(name, folder, w, h, kind):
    (OUT / folder).mkdir(parents=True, exist_ok=True)
    stem = OUT / folder / f"{PREFIX}{name}"
    if kind == "logo":
        out, size = png(name, folder, w, h, 3, trim=True)
        pdf(name, stem.with_suffix(".pdf"), w, h, k=0.25, trim=True)
        # pdftocairo turns the text into outlines, so the SVG needs no fonts
        subprocess.run(["pdftocairo", "-svg", stem.with_suffix(".pdf"), stem.with_suffix(".svg")], check=True)
        # 3 decimals renders identically and cuts the file by more than half
        subprocess.run([SVGO, "-p", "3", "--multipass", "-q", stem.with_suffix(".svg")], check=True)
        preview(out, name, 900)
        made = f"{size} png + svg + pdf"
    elif kind == "card":
        out, size = png(name, folder, w, h, 1, trim=False)
        pdf(name, stem.with_suffix(".pdf"), w, h, k=96 / 600, trim=False)
        preview(out, name, 900)
        made = f"{size} png + print pdf"
    elif kind == "sig":
        out, size = png(name, folder, w, h, 1, trim=True, pad=0)
        Image.open(out).convert("RGB").save(out, optimize=True)
        preview(out, name, 900)
        made = f"{size} png"
    else:
        out, size = png(name, folder, w, h, 2, trim=False)
        preview(out, name, 900)
        made = f"{size} png"
    print(f"{folder}/{PREFIX}{name}  {made}")


def tree_files():
    """Tree on its own, in each color, plus the colored SVGs render.html uses."""
    base = (SRC / "tree.svg").read_text()
    head = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3136 4032">'
    assert base.startswith(head), "run trace.py, then keep tree.svg's header as-is"
    (SRC / "tree-white.svg").write_text(base.replace(head, head[:-1] + ' fill="#fff">', 1))
    (SRC / "tree-green.svg").write_text(base.replace(head, head[:-1] + f' fill="{GREEN}">', 1))

    folder = OUT / "logos"
    folder.mkdir(parents=True, exist_ok=True)
    for color, src in (("black", "tree.svg"), ("white", "tree-white.svg"), ("green", "tree-green.svg")):
        stem = folder / f"{PREFIX}tree-{color}"
        shutil.copy(SRC / src, stem.with_suffix(".svg"))
        subprocess.run(["rsvg-convert", "-f", "pdf", "-h", "720", SRC / src, "-o", stem.with_suffix(".pdf")], check=True)
        subprocess.run(["rsvg-convert", "-h", "3000", SRC / src, "-o", stem.with_suffix(".png")], check=True)
        preview(stem.with_suffix(".png"), f"tree-{color}", 900)
        print(f"logos/{PREFIX}tree-{color}  png + svg + pdf")


def zip_all():
    out = OUT / f"{PREFIX}brand-kit.zip"
    with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
        for folder in ("logos", "business-cards", "social", "email"):
            for f in sorted((OUT / folder).iterdir()):
                z.write(f, f"maple-ridge-brand-kit/{folder}/{f.name}")
    print(f"{out.name}  {out.stat().st_size // 1024 // 1024} MB")


if __name__ == "__main__":
    names = sys.argv[1:]
    if names:
        for n in names:
            render(n, *ASSETS[n])
        sys.exit()
    for folder in ("logos", "business-cards", "social", "email", "previews"):
        shutil.rmtree(OUT / folder, ignore_errors=True)
    tree_files()
    for n in ASSETS:
        render(n, *ASSETS[n])
    zip_all()
