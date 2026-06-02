// One-shot script: convert every JPEG under src/assets/projects/ to WebP.
// Honors EXIF orientation, caps max width at 2400px, deletes the original.
// Run with: node scripts/convert-photos.mjs
import sharp from 'sharp'
import { readdir, stat, unlink } from 'node:fs/promises'
import { join } from 'node:path'

const ROOT = 'src/assets/projects'
const MAX_WIDTH = 2400
const QUALITY = 82

async function walk(dir) {
  const entries = await readdir(dir)
  for (const entry of entries) {
    const full = join(dir, entry)
    const s = await stat(full)
    if (s.isDirectory()) {
      await walk(full)
      continue
    }
    if (!/\.(jpe?g)$/i.test(entry)) continue

    const webp = full.replace(/\.[Jj][Pp][Ee]?[Gg]$/, '.webp')
    const meta = await sharp(full).metadata()
    const targetWidth = Math.min(meta.width ?? MAX_WIDTH, MAX_WIDTH)
    const beforeBytes = s.size

    await sharp(full)
      .rotate()
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(webp)

    const after = await stat(webp)
    await unlink(full)
    const pct = Math.round((after.size / beforeBytes) * 100)
    console.log(
      `${full.replace(ROOT + '/', '')}  ${Math.round(beforeBytes / 1024)}kB → ${Math.round(after.size / 1024)}kB (${pct}%)`
    )
  }
}

await walk(ROOT)
console.log('Done.')
