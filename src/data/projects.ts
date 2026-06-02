export type ProjectCategory = 'New Construction' | 'Remodeling' | 'Land Development'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  location: string
  description: string
  /** True when the project folder contains `before/` and `after/` subdirs. */
  hasBeforeAfter: boolean
  /** Order on the projects page. Lower = earlier. */
  order: number
  /** Optional override for photo ordering. Matches against filename. Files not listed appear after, sorted alphabetically. */
  featuredPhotos?: { after?: string[]; before?: string[]; single?: string[] }
}

export const projects: Project[] = [
  {
    slug: 'central-house',
    title: 'Whole-Home Remodel',
    category: 'Remodeling',
    location: 'McMinn County, TN',
    description:
      'Full interior renovation. New kitchen, two new bathrooms, refinished flooring, and a refreshed exterior. Same footprint, completely different house.',
    hasBeforeAfter: true,
    order: 1,
    featuredPhotos: {
      after: [
        'IMG_2363.webp',
        'IMG_2378.webp',
        'IMG_2154.webp',
        'IMG_2119.webp',
        'IMG_2367.webp',
        'IMG_1977.webp',
        'IMG_2366.webp',
        'IMG_2103.webp',
        'IMG_2382.webp',
        'IMG_7475.webp',
      ],
    },
  },
  {
    slug: 'delano-pool-house',
    title: 'Custom Pool House',
    category: 'New Construction',
    location: 'Polk County, TN',
    description:
      'Pool house built from the ground up. Covered porch and finishes that hold up to summer use.',
    hasBeforeAfter: false,
    order: 2,
    featuredPhotos: {
      single: [
        'IMG_1479.webp',
        'IMG_1524.webp',
        'IMG_1535.webp',
        'IMG_1536.webp',
        'IMG_1547.webp',
        'IMG_1467.webp',
        'IMG_1517.webp',
        'IMG_1532.webp',
      ],
    },
  },
  {
    slug: 'wild-eagle-pavilion',
    title: 'Outdoor Pavilion',
    category: 'New Construction',
    location: 'Southeast Tennessee',
    description:
      'Open-air pavilion built for gatherings. Custom roofline and finishes that hold up to weather.',
    hasBeforeAfter: false,
    order: 3,
  },
  {
    slug: '1111-pennsylvania-house',
    title: 'Home Renovation',
    category: 'Remodeling',
    location: 'McMinn County, TN',
    description:
      'Full home remodel. Refreshed interior, updated systems, and clean finish work throughout.',
    hasBeforeAfter: false,
    order: 4,
  },
  {
    slug: 'cardin-st',
    title: 'Residential Refresh',
    category: 'Remodeling',
    location: 'McMinn County, TN',
    description:
      'Residential remodel. Refreshed living spaces and updated the rooms that mattered most.',
    hasBeforeAfter: false,
    order: 5,
  },
  {
    slug: 'barndo-porch',
    title: 'Barndominium Porch',
    category: 'New Construction',
    location: 'Southeast Tennessee',
    description:
      'Covered porch added to a barndominium. Built to match the structure and shade the entry.',
    hasBeforeAfter: false,
    order: 6,
  },
]

export const projectsBySlug = Object.fromEntries(
  projects.map((p) => [p.slug, p])
) as Record<string, Project>
