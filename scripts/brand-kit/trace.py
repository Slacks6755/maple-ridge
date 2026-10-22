"""Trace the tree PNG into a vector SVG.

The source drawing is small (392x504), so tracing it directly gives blocky
edges. Instead: build an ink-coverage map, upscale 8x, blur slightly to melt
the pixel staircase, threshold, then let potrace fit smooth curves.

    python3 scripts/brand-kit/trace.py [threshold] [blur]
"""
import subprocess
import sys
from pathlib import Path

from PIL import Image, ImageChops, ImageFilter

SRC = Path(__file__).resolve().parent
TREE = SRC.parents[1] / "src/assets/brand/tree.png"
SCALE = 8

threshold = float(sys.argv[1]) if len(sys.argv) > 1 else 0.45
blur = float(sys.argv[2]) if len(sys.argv) > 2 else 1.2

im = Image.open(TREE).convert("RGBA")
# ink = alpha x darkness, so semi-transparent anti-aliased edges count partially
dark = Image.eval(im.convert("L"), lambda v: 255 - v)
ink = ImageChops.multiply(dark, im.getchannel("A"))
big = ink.resize((im.width * SCALE, im.height * SCALE), Image.LANCZOS)
big = big.filter(ImageFilter.GaussianBlur(blur))
cut = round(threshold * 255)
# potrace traces black: ink above the cut becomes black (0)
bitmap = big.point(lambda v: 0 if v >= cut else 255).convert("1")
pbm = SRC / "tree-trace.pbm"
bitmap.save(pbm)

out = SRC / "tree.svg"
subprocess.run(
    ["potrace", str(pbm), "-s", "-o", str(out),
     "--turdsize", "6", "--alphamax", "1.0", "--opttolerance", "0.2",
     "--resolution", "72", "--flat"],
    check=True,
)
pbm.unlink()
print(out, out.stat().st_size // 1024, "KB")
