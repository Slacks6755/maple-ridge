import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, MapPin, Phone, Home, Hammer, TreePine, CheckCircle, Building } from 'lucide-react'

// Service area data with unique content for each location
const serviceAreas = {
  'etowah': {
    name: 'Etowah',
    county: 'McMinn',
    heroTitle: 'Your Trusted Contractor in Etowah',
    description: 'Maple Ridge Construction proudly calls Etowah home. As your local general contractor, we understand the unique character of this historic railroad town and the surrounding McMinn County communities. From downtown renovations to new builds in the surrounding countryside, we bring local expertise to every project.',
    highlights: [
      'Locally based and owner-operated',
      'Deep knowledge of McMinn County building codes',
      'Serving Etowah since our founding',
      'Quick response for estimates and emergencies',
    ],
    nearbyAreas: ['Athens', 'Englewood', 'Calhoun', 'Riceville'],
    localContent: 'Whether you own a historic home near downtown Etowah that needs careful renovation, or you have acreage along the Hiwassee River perfect for a new build, Maple Ridge has the experience to bring your vision to life. We work with local suppliers and understand the specific permitting requirements of McMinn County.',
  },
  'athens': {
    name: 'Athens',
    county: 'McMinn',
    heroTitle: 'Building Excellence in Athens',
    description: 'As the county seat of McMinn County, Athens has a rich history and growing future. Maple Ridge Construction serves Athens homeowners and property developers with professional construction services, from updating classic homes to building new residences in developing neighborhoods.',
    highlights: [
      'Experienced with Athens city permits and codes',
      'Projects throughout McMinn County seat',
      'Commercial and residential experience',
      'Historic home renovation specialists',
    ],
    nearbyAreas: ['Etowah', 'Englewood', 'Niota', 'Riceville'],
    localContent: 'Athens offers diverse building opportunities—from established neighborhoods with character homes to new developments on the outskirts. Our team navigates city and county requirements efficiently, keeping your project on schedule whether you\'re renovating a home near Tennessee Wesleyan or building new near I-75.',
  },
  'cleveland': {
    name: 'Cleveland',
    county: 'Bradley',
    heroTitle: 'Quality Construction in Cleveland',
    description: 'Cleveland, Tennessee\'s growing community deserves quality construction services. Maple Ridge Construction brings our expertise in home building, renovation, and land development to Bradley County\'s largest city and its surrounding areas.',
    highlights: [
      'Serving Bradley County\'s largest city',
      'Experience with city and county permits',
      'Residential and light commercial projects',
      'Growing with Cleveland\'s expansion',
    ],
    nearbyAreas: ['Benton', 'Charleston', 'McDonald', 'Ooltewah'],
    localContent: 'From established neighborhoods like Wildwood to new developments spreading across Bradley County, Cleveland offers tremendous opportunities for homeowners. We understand the local market, work with Cleveland-area suppliers, and have experience navigating both city and county building processes.',
  },
  'benton': {
    name: 'Benton',
    county: 'Polk',
    heroTitle: 'Trusted Builder in Benton & Polk County',
    description: 'Polk County\'s county seat offers a blend of small-town charm and access to beautiful Cherokee National Forest lands. Maple Ridge Construction provides full construction services to Benton and the surrounding Polk County communities.',
    highlights: [
      'Polk County building expertise',
      'Mountain and riverside property experience',
      'Cabin and vacation home construction',
      'Land development in challenging terrain',
    ],
    nearbyAreas: ['Tellico Plains', 'Ducktown', 'Copperhill', 'Delano'],
    localContent: 'Building in Polk County often means working with mountain terrain, creek-side properties, and land that requires careful development. We have experience with the unique challenges of construction near the Ocoee River and throughout the county\'s beautiful but demanding landscape.',
  },
  'madisonville': {
    name: 'Madisonville',
    county: 'Monroe',
    heroTitle: 'Construction Services in Madisonville',
    description: 'As Monroe County\'s county seat, Madisonville is the heart of a growing region. Maple Ridge Construction serves Madisonville and surrounding Monroe County with professional home building, renovation, and development services.',
    highlights: [
      'Monroe County seat experience',
      'Residential and commercial projects',
      'Land development expertise',
      'Local building code knowledge',
    ],
    nearbyAreas: ['Sweetwater', 'Tellico Plains', 'Vonore', 'Greenback'],
    localContent: 'Madisonville\'s central location in Monroe County makes it an ideal place to call home. Whether you\'re building on established lots in town or developing acreage in the county, our team brings the expertise and local knowledge your project requires.',
  },
  'tellico-plains': {
    name: 'Tellico Plains',
    county: 'Monroe',
    heroTitle: 'Building in Beautiful Tellico Plains',
    description: 'Nestled at the edge of Cherokee National Forest, Tellico Plains offers some of Southeast Tennessee\'s most stunning building sites. Maple Ridge Construction specializes in mountain home construction and land development in this beautiful corner of Monroe County.',
    highlights: [
      'Mountain construction expertise',
      'Cabin and vacation home specialists',
      'Challenging terrain experience',
      'Remote site development capability',
    ],
    nearbyAreas: ['Madisonville', 'Benton', 'Vonore', 'Coker Creek'],
    localContent: 'Building in Tellico Plains means embracing the natural beauty of the Cherokee Forest foothills. We have extensive experience with mountain construction—from accessing remote sites to building foundations on slopes. Whether you\'re planning a full-time residence or a mountain retreat, we understand what it takes to build in this special area.',
  },
  'sweetwater': {
    name: 'Sweetwater',
    county: 'Monroe',
    heroTitle: 'Your Contractor in Sweetwater',
    description: 'Located along I-75, Sweetwater offers convenient access while maintaining small-town Tennessee character. Maple Ridge Construction provides comprehensive construction services to Sweetwater and the surrounding Monroe County area.',
    highlights: [
      'Convenient I-75 corridor location',
      'Residential construction focus',
      'Renovation and addition specialists',
      'Quick estimate response times',
    ],
    nearbyAreas: ['Madisonville', 'Athens', 'Philadelphia', 'Loudon'],
    localContent: 'Sweetwater\'s accessibility and growing community make it an attractive place to build or renovate. From established homes that need updating to new construction on available lots, we bring professional service and quality craftsmanship to every Sweetwater project.',
  },
  'englewood': {
    name: 'Englewood',
    county: 'McMinn',
    heroTitle: 'Construction Excellence in Englewood',
    description: 'This McMinn County community offers rural character with easy access to Athens and Etowah. Maple Ridge Construction serves Englewood residents with the same quality construction services we provide throughout our home county.',
    highlights: [
      'McMinn County local expertise',
      'Rural property development',
      'New construction and renovations',
      'Close to our home base',
    ],
    nearbyAreas: ['Etowah', 'Athens', 'Niota', 'Calhoun'],
    localContent: 'Englewood\'s location offers the best of both worlds—rural living with convenient access to larger communities. We work with Englewood property owners on everything from land clearing and site development to complete custom home construction and home renovations.',
  },
}

type ServiceAreaSlug = keyof typeof serviceAreas

export function generateStaticParams() {
  return Object.keys(serviceAreas).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = serviceAreas[slug as ServiceAreaSlug]

  if (!area) {
    return {
      title: 'Service Area Not Found',
    }
  }

  return {
    title: `General Contractor ${area.name}, TN | Construction Services ${area.county} County`,
    description: `Licensed general contractor serving ${area.name}, Tennessee. New home construction, remodeling, and land development in ${area.county} County. Free estimates for your project.`,
    keywords: [
      `general contractor ${area.name} TN`,
      `home builder ${area.name} Tennessee`,
      `construction company ${area.county} County`,
      `home remodeling ${area.name}`,
      `new construction ${area.name} TN`,
      `land development ${area.county} County TN`,
    ],
    openGraph: {
      title: `Maple Ridge Construction | ${area.name}, Tennessee`,
      description: `Licensed general contractor serving ${area.name} and ${area.county} County. Quality home construction, renovation, and land development services.`,
    },
  }
}

const services = [
  {
    icon: Home,
    title: 'New Home Construction',
    description: 'Custom-built homes designed for your lifestyle and lot.',
    href: '/services/new-construction',
  },
  {
    icon: Hammer,
    title: 'Home Remodeling',
    description: 'Renovations, additions, and updates to your existing home.',
    href: '/services/remodeling',
  },
  {
    icon: TreePine,
    title: 'Land Development',
    description: 'Site preparation, clearing, grading, and utility work.',
    href: '/services/land-development',
  },
]

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = serviceAreas[slug as ServiceAreaSlug]

  if (!area) {
    notFound()
  }

  const otherAreas = Object.entries(serviceAreas)
    .filter(([key]) => key !== slug)
    .slice(0, 4)
    .map(([key, value]) => ({ slug: key, ...value }))

  return (
    <>
      {/* Hero Section */}
      <section className="bg-stone-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-ridge-500" />

        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-ridge-600/20 text-ridge-300 px-4 py-2 rounded-full text-sm mb-6">
              <MapPin className="h-4 w-4" />
              {area.county} County, Tennessee
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {area.heroTitle}
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed mb-8">
              {area.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Get Free Estimate
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:+14235551234" className="btn bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                <Phone className="mr-2 h-5 w-5" />
                (423) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Highlights */}
      <section className="py-16 bg-ridge-600 text-white">
        <div className="container-wide section-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {area.highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-ridge-200 flex-shrink-0 mt-0.5" />
                <span className="text-ridge-100">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Our Services in {area.name}</span>
              <h2 className="section-title">Construction Services in {area.county} County</h2>
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>{area.localContent}</p>
                <p>
                  As a licensed general contractor serving {area.name} and surrounding {area.county} County
                  communities, we provide comprehensive construction services including new home building,
                  complete home renovations, and professional land development.
                </p>
              </div>

              <div className="mt-8 p-6 bg-earth-100 rounded-xl">
                <h3 className="font-semibold text-stone-900 mb-3">Also Serving Nearby:</h3>
                <div className="flex flex-wrap gap-2">
                  {area.nearbyAreas.map((nearby) => (
                    <span key={nearby} className="inline-block bg-white px-3 py-1 rounded-full text-sm text-stone-600">
                      {nearby}, TN
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="card-hover flex gap-5 p-6 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-ridge-100 rounded-xl flex items-center justify-center group-hover:bg-ridge-500 transition-colors">
                    <service.icon className="h-7 w-7 text-ridge-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1 group-hover:text-ridge-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-stone-600 text-sm">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Why {area.name} Chooses Maple Ridge</span>
            <h2 className="section-title">Local Experience, Professional Results</h2>
            <p className="section-subtitle mx-auto">
              When you work with Maple Ridge Construction in {area.name}, you get a contractor who
              understands {area.county} County—the terrain, the building codes, and the community.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 mt-12 text-left">
              <div className="card p-6">
                <Building className="h-8 w-8 text-ridge-500 mb-4" />
                <h3 className="font-semibold text-stone-900 mb-2">Licensed & Insured</h3>
                <p className="text-stone-600 text-sm">
                  Fully licensed Tennessee General Contractor with comprehensive insurance coverage.
                </p>
              </div>
              <div className="card p-6">
                <MapPin className="h-8 w-8 text-ridge-500 mb-4" />
                <h3 className="font-semibold text-stone-900 mb-2">Local Knowledge</h3>
                <p className="text-stone-600 text-sm">
                  We know {area.county} County building requirements and work with local inspectors regularly.
                </p>
              </div>
              <div className="card p-6">
                <CheckCircle className="h-8 w-8 text-ridge-500 mb-4" />
                <h3 className="font-semibold text-stone-900 mb-2">Quality Guaranteed</h3>
                <p className="text-stone-600 text-sm">
                  Our reputation in {area.name} is built on delivering projects that meet the highest standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="py-20 lg:py-28 bg-stone-100">
        <div className="container-wide section-padding">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">More Service Areas</span>
            <h2 className="section-title">Also Serving Southeast Tennessee</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherAreas.map((otherArea) => (
              <Link
                key={otherArea.slug}
                href={`/service-areas/${otherArea.slug}`}
                className="card-hover p-6 text-center group"
              >
                <MapPin className="h-6 w-6 text-ridge-400 mx-auto mb-3 group-hover:text-ridge-600 transition-colors" />
                <h3 className="font-semibold text-stone-900 group-hover:text-ridge-700 transition-colors">
                  {otherArea.name}
                </h3>
                <p className="text-sm text-stone-500">{otherArea.county} County</p>
              </Link>
            ))}
          </div>

          <p className="text-center text-stone-500 mt-8">
            <Link href="/contact" className="text-ridge-600 hover:text-ridge-700 font-medium">Contact us</Link>{' '}
            to see if we serve your area.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-ridge-700 text-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your {area.name} Project?
            </h2>
            <p className="text-xl text-ridge-200 mb-10">
              Contact us today for a free consultation and estimate. We&apos;re ready to discuss your
              construction needs in {area.county} County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-ridge-700 hover:bg-earth-50">
                Request Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a href="tel:+14235551234" className="btn bg-ridge-600 text-white hover:bg-ridge-500 border border-ridge-500">
                <Phone className="mr-2 h-5 w-5" />
                (423) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
