export interface ServiceArea {
  name: string
  slug: string
  county: string
  size: 'big' | 'small'
  heroTitle: string
  description: string
  highlights: string[]
  nearbyAreas: string[]
  localContent: string
}

export const serviceAreas: ServiceArea[] = [
  // --- Big pages ---
  {
    name: 'Etowah',
    slug: 'etowah',
    county: 'McMinn',
    size: 'big',
    heroTitle: 'General Contractor in Etowah, TN',
    description: 'Maple Ridge Construction is based right here in Etowah. We know the area, we know the people, and we take pride in building homes and developing properties throughout McMinn County.',
    highlights: [
      'Locally based and owner-operated',
      'Deep knowledge of McMinn County building codes',
      'Quick response for estimates',
      'Serving Etowah and surrounding communities',
    ],
    nearbyAreas: ['Athens', 'Englewood', 'Riceville', 'Calhoun'],
    localContent: 'Whether you own property near downtown Etowah or have acreage along the Hiwassee River, we have the experience to make your project happen. We work with local suppliers and handle McMinn County permitting so you don\'t have to chase paperwork.',
  },
  {
    name: 'Athens',
    slug: 'athens',
    county: 'McMinn',
    size: 'big',
    heroTitle: 'Home Builder & Contractor in Athens, TN',
    description: 'As the county seat of McMinn County, Athens has a mix of established neighborhoods and new developments. Maple Ridge Construction serves Athens homeowners with new builds, renovations, and land development.',
    highlights: [
      'Experienced with Athens city permits and codes',
      'Projects throughout McMinn County\'s county seat',
      'Residential and light commercial experience',
      'Familiar with local inspectors and requirements',
    ],
    nearbyAreas: ['Etowah', 'Englewood', 'Riceville', 'Niota'],
    localContent: 'Athens offers a range of building opportunities — from character homes near Tennessee Wesleyan to new lots off I-75. We navigate city and county requirements efficiently so your project stays on schedule.',
  },
  {
    name: 'Cleveland',
    slug: 'cleveland',
    county: 'Bradley',
    size: 'big',
    heroTitle: 'General Contractor in Cleveland, TN',
    description: 'Cleveland is Bradley County\'s largest city and one of the fastest-growing areas in Southeast Tennessee. Maple Ridge Construction brings dependable home building, renovation, and land development services to Cleveland and surrounding Bradley County.',
    highlights: [
      'Serving Bradley County\'s largest city',
      'Experience with city and county permits',
      'Residential construction and renovation',
      'Land development and site preparation',
    ],
    nearbyAreas: ['Benton', 'Ocoee', 'Charleston', 'McDonald'],
    localContent: 'From established neighborhoods to new developments spreading across Bradley County, Cleveland has no shortage of building opportunities. We understand the local market and have experience navigating both city and county building processes.',
  },
  {
    name: 'Tellico Plains',
    slug: 'tellico-plains',
    county: 'Monroe',
    size: 'big',
    heroTitle: 'Home Builder in Tellico Plains, TN',
    description: 'At the edge of Cherokee National Forest, Tellico Plains offers some of the most beautiful building sites in Southeast Tennessee. Maple Ridge Construction handles mountain home construction and land development in this part of Monroe County.',
    highlights: [
      'Mountain construction experience',
      'Cabin and residential builds',
      'Challenging terrain and slope work',
      'Remote site development',
    ],
    nearbyAreas: ['Madisonville', 'Benton', 'Vonore', 'Coker Creek'],
    localContent: 'Building in Tellico Plains means working with the land — slopes, remote access, and mountain terrain. We have hands-on experience with foundation work on grades, accessing remote sites, and building homes that fit the landscape. Whether it\'s a full-time residence or a mountain retreat, we know what it takes to build here.',
  },
  {
    name: 'Madisonville',
    slug: 'madisonville',
    county: 'Monroe',
    size: 'big',
    heroTitle: 'Construction Services in Madisonville, TN',
    description: 'As Monroe County\'s county seat, Madisonville is centrally located and growing. Maple Ridge Construction provides home building, renovation, and land development services throughout Madisonville and surrounding Monroe County.',
    highlights: [
      'Monroe County seat experience',
      'Residential construction and renovation',
      'Land development and site prep',
      'Local building code knowledge',
    ],
    nearbyAreas: ['Sweetwater', 'Tellico Plains', 'Vonore', 'Greenback'],
    localContent: 'Madisonville\'s central location in Monroe County makes it a practical place to build. Whether you\'re working with established lots in town or developing acreage in the county, we bring the experience and local know-how your project needs.',
  },
  {
    name: 'Sweetwater',
    slug: 'sweetwater',
    county: 'Monroe',
    size: 'big',
    heroTitle: 'General Contractor in Sweetwater, TN',
    description: 'Sweetwater sits along I-75 with easy access and small-town character. Maple Ridge Construction provides construction services to Sweetwater and the surrounding Monroe County area.',
    highlights: [
      'Convenient I-75 corridor location',
      'Residential construction focus',
      'Renovation and addition work',
      'Responsive estimates and communication',
    ],
    nearbyAreas: ['Madisonville', 'Athens', 'Philadelphia', 'Loudon'],
    localContent: 'Sweetwater\'s accessibility and steady growth make it a solid place to build or renovate. From homes that need updating to new construction on available lots, we bring quality work and reliable communication to every Sweetwater project.',
  },
  // --- Smaller pages ---
  {
    name: 'Englewood',
    slug: 'englewood',
    county: 'McMinn',
    size: 'small',
    heroTitle: 'Contractor Serving Englewood, TN',
    description: 'Englewood offers rural living with easy access to Athens and Etowah. Maple Ridge Construction serves Englewood residents with the same quality construction services we provide across McMinn County.',
    highlights: [
      'McMinn County local expertise',
      'Rural property development',
      'New construction and renovations',
      'Close to our Etowah home base',
    ],
    nearbyAreas: ['Etowah', 'Athens', 'Niota', 'Calhoun'],
    localContent: 'Englewood\'s location gives you rural living with convenient access to larger communities. We work with Englewood property owners on land clearing, site development, new home construction, and renovations.',
  },
  {
    name: 'Benton',
    slug: 'benton',
    county: 'Polk',
    size: 'small',
    heroTitle: 'Home Builder in Benton & Polk County',
    description: 'Polk County\'s county seat blends small-town living with access to Cherokee National Forest. Maple Ridge Construction provides construction services to Benton and the surrounding Polk County area.',
    highlights: [
      'Polk County building expertise',
      'Mountain and riverside property experience',
      'Cabin and vacation home builds',
      'Land development on challenging terrain',
    ],
    nearbyAreas: ['Ocoee', 'Cleveland', 'Tellico Plains', 'Delano'],
    localContent: 'Building in Polk County often means working with mountain terrain, creek-side lots, and land that takes careful development. We have experience with the specific challenges of construction in and around Benton.',
  },
  {
    name: 'Riceville',
    slug: 'riceville',
    county: 'McMinn',
    size: 'small',
    heroTitle: 'Contractor Serving Riceville, TN',
    description: 'Riceville is a small McMinn County community between Athens and Etowah. Maple Ridge Construction serves Riceville with residential construction, renovation, and land development.',
    highlights: [
      'McMinn County local knowledge',
      'Residential construction and renovation',
      'Land clearing and site prep',
      'Minutes from our Etowah office',
    ],
    nearbyAreas: ['Athens', 'Etowah', 'Calhoun', 'Niota'],
    localContent: 'Riceville sits right in our backyard. We\'re familiar with the area, the terrain, and the building requirements in this part of McMinn County. Whether you need a new home built, your existing place updated, or land prepped for construction, we can help.',
  },
  {
    name: 'Ocoee',
    slug: 'ocoee',
    county: 'Polk',
    size: 'small',
    heroTitle: 'Construction Services Near Ocoee, TN',
    description: 'The Ocoee area in Polk County is known for its natural beauty and river access. Maple Ridge Construction provides building and development services in the Ocoee region.',
    highlights: [
      'Polk County terrain experience',
      'Riverside and mountain builds',
      'Land development and clearing',
      'Residential construction',
    ],
    nearbyAreas: ['Benton', 'Cleveland', 'Ducktown', 'Copperhill'],
    localContent: 'The Ocoee area presents unique building challenges — river proximity, mountain grades, and remote access. We have the equipment and know-how to develop properties and build homes in Polk County\'s more rugged terrain.',
  },
]

// Derived helpers
export const serviceAreaSlugs = serviceAreas.map(a => a.slug)

export const serviceAreasBySlug = Object.fromEntries(
  serviceAreas.map(a => [a.slug, a])
) as Record<string, ServiceArea>

export const counties = [
  { name: 'McMinn County', cities: ['Etowah', 'Athens', 'Englewood', 'Riceville', 'Niota', 'Calhoun'] },
  { name: 'Bradley County', cities: ['Cleveland', 'Charleston', 'McDonald'] },
  { name: 'Polk County', cities: ['Benton', 'Ocoee', 'Ducktown', 'Copperhill', 'Delano'] },
  { name: 'Monroe County', cities: ['Madisonville', 'Tellico Plains', 'Sweetwater', 'Vonore', 'Greenback'] },
]
