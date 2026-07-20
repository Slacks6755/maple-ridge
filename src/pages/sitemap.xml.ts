import type { APIRoute } from 'astro'
import { serviceAreas } from '../data/service-areas'

const baseUrl = 'https://www.mapleridgedev.com'

// URLs must match the served (canonical) form exactly: no trailing slash.
// Netlify 301s the slash form, and a sitemap full of redirects makes
// Search Console flag every page.
const paths = [
  '/',
  '/about',
  '/contact',
  '/projects',
  '/services/new-construction',
  '/services/remodeling',
  '/services/land-development',
  '/service-areas',
  ...serviceAreas.map((area) => `/service-areas/${area.slug}`),
]

export const GET: APIRoute = () => {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${baseUrl}${p}</loc></url>`).join('\n')}
</urlset>
`

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
