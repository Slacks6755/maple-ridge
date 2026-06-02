export interface ServiceAreaFaq {
  question: string
  answer: string
}

export interface ServiceArea {
  name: string
  slug: string
  county: string
  size: 'big' | 'small'
  heroTitle: string
  description: string
  localContent: string
  faqs: ServiceAreaFaq[]
}

export const serviceAreas: ServiceArea[] = [
  {
    name: 'Etowah',
    slug: 'etowah',
    county: 'McMinn',
    size: 'big',
    heroTitle: 'General Contractor in Etowah, TN',
    description: 'Maple Ridge Construction is based right here in Etowah. We know the area, we know the people, and we take pride in building homes and developing properties throughout McMinn County.',
    localContent: 'This is home base. We\'re in Etowah most weeks, so we can usually get out to look at a project fast. Downtown still has plenty of railroad-era houses with old wiring and plumbing that need bringing up to date, and there\'s acreage out toward the Hiwassee and Starr Mountain that needs clearing and grading before anything gets built on it. We know which ground drains and which ground fights you. We work with local suppliers and pull McMinn County permits ourselves, so chasing paperwork never falls on you.',
    faqs: [
      {
        question: 'Do you only work in Etowah, or further out?',
        answer: 'We work all over McMinn County and out into Bradley, Monroe, and Polk Counties too. Etowah is home base, but we travel for the right job. If you\'re not sure you\'re in range, call and ask.',
      },
      {
        question: 'Will you handle McMinn County permits and inspections?',
        answer: 'Yes. Every job we run includes pulling the McMinn County permits and handling the inspections. You won\'t be the one calling the county office.',
      },
      {
        question: 'Is my project too small to bother calling?',
        answer: 'Probably not. We do porch additions, single rooms, and full builds. Call us and we\'ll tell you straight whether it\'s a fit.',
      },
      {
        question: 'How soon can you come look at my project?',
        answer: 'Usually within a few days. Since we\'re based right here, an Etowah project is easy for us to get to. Call or send a note and we\'ll set a time to walk it with you.',
      },
    ],
  },
  {
    name: 'Athens',
    slug: 'athens',
    county: 'McMinn',
    size: 'big',
    heroTitle: 'Home Builder & Contractor in Athens, TN',
    description: 'As the county seat of McMinn County, Athens has a mix of established neighborhoods and new developments. Maple Ridge Construction serves Athens homeowners with new builds, renovations, and land development.',
    localContent: 'Athens is the county seat, so it\'s a real mix. Older homes around the square and near Tennessee Wesleyan that need full renovation, and new lots opening up off I-75 and out past the bypass. Inside the city limits your job runs through Athens. Outside, it goes through McMinn County. Either way, we deal with the permit office so you don\'t have to. A lot of the in-town houses hide surprises behind the walls, and we tell you what we find and what it costs before we keep going.',
    faqs: [
      {
        question: 'Do you work inside Athens city limits, or just the county?',
        answer: 'Both. Inside city limits, the job goes through the Athens permit process. Outside, it goes through McMinn County. Either way, we handle it.',
      },
      {
        question: 'Will you work on older homes near downtown?',
        answer: 'Yes. Athens has a lot of mid-century homes that need updating. We open walls, deal with what\'s actually behind them, and price any changes honestly before we do them.',
      },
      {
        question: 'How far outside Athens will you travel?',
        answer: 'Across McMinn County, plus Bradley and Monroe Counties. If your project is a little further out, call and we\'ll tell you whether we can get to it.',
      },
      {
        question: 'Are you building in the new developments around Athens?',
        answer: 'Yes. We build on individual lots in the newer subdivisions and on land people already own outside of town. If you have a builder lot or some acreage, we can talk through what fits it.',
      },
    ],
  },
  {
    name: 'Cleveland',
    slug: 'cleveland',
    county: 'Bradley',
    size: 'big',
    heroTitle: 'General Contractor in Cleveland, TN',
    description: 'Cleveland is Bradley County\'s largest city and one of the fastest-growing areas in Southeast Tennessee. Maple Ridge Construction brings dependable home building, renovation, and land development services to Cleveland and surrounding Bradley County.',
    localContent: 'Cleveland is the biggest place we work, and it keeps growing. New houses are going up on the edges of town while the older neighborhoods closer in are full of homes worth renovating instead of tearing down. Out toward Charleston and McDonald it gets rural, where people are building from scratch on their own land. Bradley County has its own way of running permits and inspections, and we know it. Tell us the lot and what you\'ve got in mind, and we\'ll tell you straight what it\'ll take.',
    faqs: [
      {
        question: 'Do you take projects in Cleveland?',
        answer: 'Yes. Cleveland and the rest of Bradley County are part of where we work regularly. It\'s the biggest market we serve, so we\'re over that way often.',
      },
      {
        question: 'Will you handle Cleveland city and Bradley County permits?',
        answer: 'Yes. City of Cleveland or Bradley County, whichever your job falls under, we pull the permit and handle the inspections. You don\'t chase any of it.',
      },
      {
        question: 'Do you work outside city limits?',
        answer: 'Yes. Rural acreage, established neighborhoods, and the new subdivisions out on the edge of town. Wherever the work is, we\'ll come to it.',
      },
      {
        question: 'Do you build new homes in Cleveland, or just remodel?',
        answer: 'Both. With how fast Cleveland is growing, we do a lot of new builds on open lots, plus renovations on the older homes closer in. We can take a project start to finish either way.',
      },
    ],
  },
  {
    name: 'Madisonville',
    slug: 'madisonville',
    county: 'Monroe',
    size: 'big',
    heroTitle: 'Construction Services in Madisonville, TN',
    description: 'As Monroe County\'s county seat, Madisonville is centrally located and growing. Maple Ridge Construction provides home building, renovation, and land development services throughout Madisonville and surrounding Monroe County.',
    localContent: 'Most of our Monroe County work runs through Madisonville. It sits right in the middle of the county, so it\'s easy for us to reach job sites from there. We build on lots in town, clear and develop acreage out in the county, and add on to houses people have outgrown. A lot of property out here runs on septic and well water instead of city utilities, so we sort that out early. The health department has to sign off on septic, and we know what they look for.',
    faqs: [
      {
        question: 'Do you work in Monroe County outside Madisonville?',
        answer: 'Yes, all over Monroe County. Madisonville is central, so it\'s an easy reach to Sweetwater, Vonore, Tellico Plains, and the property in between.',
      },
      {
        question: 'Will you handle septic and well work?',
        answer: 'Yes. Septic permitting goes through the health department, and well drilling through a licensed driller. We coordinate it so it doesn\'t slow your build down.',
      },
      {
        question: 'How quickly can you come look at a property?',
        answer: 'Usually within a few days. Call or send a note and we\'ll set a time to come walk it.',
      },
      {
        question: 'Can you build on raw land out here?',
        answer: 'Yes. A lot of what we do in Monroe County starts with raw land. We clear it, grade it, run utilities or set up septic and well, put in a driveway, then build. One crew the whole way.',
      },
    ],
  },
  {
    name: 'Sweetwater',
    slug: 'sweetwater',
    county: 'Monroe',
    size: 'big',
    heroTitle: 'General Contractor in Sweetwater, TN',
    description: 'Sweetwater sits along I-75 with easy access and small-town character. Maple Ridge Construction provides construction services to Sweetwater and the surrounding Monroe County area.',
    localContent: 'Sweetwater sits right on I-75 between Madisonville and Athens, which puts it in the middle of where we work. We get over there often. The older homes in town tend to need the basics brought up to date, rewiring, fresh plumbing, a kitchen or bathroom that actually works. There are also open lots around town and out past the Lost Sea for folks who want to build new. On the old houses we open walls carefully and tell you what\'s actually back there before we price the rest.',
    faqs: [
      {
        question: 'Where do you work around Sweetwater?',
        answer: 'Across Monroe County and into the edge of McMinn, since Sweetwater sits close to the county line. Athens is about fifteen minutes south, so that whole stretch is easy for us.',
      },
      {
        question: 'Do you work on older homes in town?',
        answer: 'Yes. Sweetwater has a lot of older homes that need rewiring, plumbing updates, kitchens, and bathrooms. We open walls carefully and tell you what we find.',
      },
      {
        question: 'Can you handle a full new build, not just remodels?',
        answer: 'Yes. Site clearing through finished build, one crew start to finish. You\'re not hiring five different outfits to get one house up.',
      },
      {
        question: 'How fast can you start a project in Sweetwater?',
        answer: 'Depends on what we already have going, but Sweetwater is close enough that getting out to look is quick. We\'ll give you a real timeline once we\'ve seen the job.',
      },
    ],
  },
]

// Derived helpers
export const serviceAreaSlugs = serviceAreas.map(a => a.slug)

export const serviceAreasBySlug = Object.fromEntries(
  serviceAreas.map(a => [a.slug, a])
) as Record<string, ServiceArea>

export const counties = [
  { name: 'McMinn County', cities: ['Etowah', 'Athens', 'Niota', 'Calhoun', 'Englewood', 'Riceville'] },
  { name: 'Bradley County', cities: ['Cleveland', 'Charleston', 'McDonald'] },
  { name: 'Polk County', cities: ['Benton', 'Ducktown', 'Copperhill', 'Delano'] },
  { name: 'Monroe County', cities: ['Madisonville', 'Sweetwater', 'Tellico Plains', 'Vonore'] },
]
