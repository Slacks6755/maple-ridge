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
    description: 'Custom homes on your land, built your way',
    href: '/services/new-construction',
  },
  {
    name: 'Home Remodeling',
    slug: 'remodeling',
    description: 'Kitchens, bathrooms, additions, and whole-home renovations',
    href: '/services/remodeling',
  },
  {
    name: 'Land Development',
    slug: 'land-development',
    description: 'Clearing, grading, driveways, and utilities',
    href: '/services/land-development',
  },
]

export const servicesBySlug = Object.fromEntries(
  services.map(s => [s.slug, s])
) as Record<string, Service>
