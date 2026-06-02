import type { APIRoute } from 'astro'
import { serviceAreas } from '../data/service-areas'

const baseUrl = 'https://www.mapleridgedev.com'

interface Entry {
  loc: string
  changefreq: 'weekly' | 'monthly'
  priority: number
}

function buildEntries(): Entry[] {
  const staticEntries: Entry[] = [
    { loc: baseUrl, changefreq: 'weekly', priority: 1.0 },
    { loc: `${baseUrl}/about`, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/contact`, changefreq: 'monthly', priority: 0.9 },
    { loc: `${baseUrl}/services/new-construction`, changefreq: 'monthly', priority: 0.9 },
    { loc: `${baseUrl}/services/remodeling`, changefreq: 'monthly', priority: 0.9 },
    { loc: `${baseUrl}/services/land-development`, changefreq: 'monthly', priority: 0.9 },
    { loc: `${baseUrl}/service-areas`, changefreq: 'monthly', priority: 0.8 },
    { loc: `${baseUrl}/projects`, changefreq: 'monthly', priority: 0.8 },
  ]

  const areaEntries: Entry[] = serviceAreas.map((area) => ({
    loc: `${baseUrl}/service-areas/${area.slug}`,
    changefreq: 'monthly',
    priority: 0.8,
  }))

  return [...staticEntries, ...areaEntries]
}

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString()
  const entries = buildEntries()

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(1)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
