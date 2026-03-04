export interface Service {
  name: string
  slug: string
  description: string
  href: string
}

export const services: Service[] = [
  {
    name: 'New Construction',
    slug: 'new-construction',
    description: 'Custom-built homes from the ground up',
    href: '/services/new-construction',
  },
  {
    name: 'Home Remodeling',
    slug: 'remodeling',
    description: 'Complete renovations and updates',
    href: '/services/remodeling',
  },
  {
    name: 'Land Development',
    slug: 'land-development',
    description: 'Site preparation and development',
    href: '/services/land-development',
  },
]

export const servicesBySlug = Object.fromEntries(
  services.map(s => [s.slug, s])
) as Record<string, Service>
