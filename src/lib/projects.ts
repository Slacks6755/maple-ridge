import type { ImageMetadata } from 'astro'

const allImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projects/**/*.{webp,jpg,jpeg,png}',
  { eager: true }
)

function filenameOf(path: string): string {
  return path.slice(path.lastIndexOf('/') + 1)
}

export function getProjectPhotos(
  slug: string,
  subdir?: string,
  featuredOrder?: string[]
): ImageMetadata[] {
  const prefix = subdir
    ? `/src/assets/projects/${slug}/${subdir}/`
    : `/src/assets/projects/${slug}/`

  const matched = Object.entries(allImages).filter(
    ([path]) => path.startsWith(prefix) && (subdir ? true : !path.slice(prefix.length).includes('/'))
  )

  if (!featuredOrder?.length) {
    return matched.sort(([a], [b]) => a.localeCompare(b)).map(([, mod]) => mod.default)
  }

  const indexed = new Map<string, ImageMetadata>(
    matched.map(([path, mod]) => [filenameOf(path), mod.default])
  )
  const featured = featuredOrder
    .map((name) => indexed.get(name))
    .filter((img): img is ImageMetadata => Boolean(img))
  const featuredNames = new Set(featuredOrder)
  const rest = matched
    .filter(([path]) => !featuredNames.has(filenameOf(path)))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, mod]) => mod.default)

  return [...featured, ...rest]
}
