import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Service Areas | Construction Services in Southeast Tennessee',
  description: 'Maple Ridge Construction serves McMinn, Bradley, Polk, and Monroe Counties in Southeast Tennessee. Find construction services in Etowah, Athens, Cleveland, Benton, Madisonville, Tellico Plains, Sweetwater, and Englewood.',
  keywords: [
    'construction service areas Tennessee',
    'general contractor Southeast TN',
    'home builder McMinn County',
    'contractor Bradley County',
    'construction Polk County',
    'home building Monroe County',
  ],
}

const serviceAreas = [
  {
    name: 'Etowah',
    slug: 'etowah',
    county: 'McMinn',
    description: 'Our home base. Serving Etowah and surrounding McMinn County communities with local expertise.',
  },
  {
    name: 'Athens',
    slug: 'athens',
    county: 'McMinn',
    description: 'The county seat of McMinn County. Experienced with city and county building requirements.',
  },
  {
    name: 'Cleveland',
    slug: 'cleveland',
    county: 'Bradley',
    description: 'Bradley County\'s largest city. Residential and commercial construction services.',
  },
  {
    name: 'Benton',
    slug: 'benton',
    county: 'Polk',
    description: 'Gateway to Cherokee National Forest. Mountain and riverside property expertise.',
  },
  {
    name: 'Madisonville',
    slug: 'madisonville',
    county: 'Monroe',
    description: 'Monroe County seat. Full construction services for residential and commercial projects.',
  },
  {
    name: 'Tellico Plains',
    slug: 'tellico-plains',
    county: 'Monroe',
    description: 'Mountain construction specialists. Cabins, vacation homes, and challenging terrain.',
  },
  {
    name: 'Sweetwater',
    slug: 'sweetwater',
    county: 'Monroe',
    description: 'Convenient I-75 location. Residential construction and renovation services.',
  },
  {
    name: 'Englewood',
    slug: 'englewood',
    county: 'McMinn',
    description: 'Rural McMinn County community. New construction and land development.',
  },
]

const counties = [
  { name: 'McMinn County', cities: ['Etowah', 'Athens', 'Englewood', 'Niota', 'Calhoun', 'Riceville'] },
  { name: 'Bradley County', cities: ['Cleveland', 'Charleston', 'McDonald'] },
  { name: 'Polk County', cities: ['Benton', 'Ducktown', 'Copperhill', 'Delano'] },
  { name: 'Monroe County', cities: ['Madisonville', 'Tellico Plains', 'Sweetwater', 'Vonore', 'Greenback'] },
]

export default function ServiceAreasPage() {
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
            <span className="inline-block text-ridge-400 font-medium text-sm uppercase tracking-wider mb-4">
              Where We Work
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Serving Southeast Tennessee
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Maple Ridge Construction provides professional construction services throughout
              McMinn, Bradley, Polk, and Monroe Counties. From the Tennessee River Valley to
              the Cherokee Forest foothills, we&apos;re your local building partner.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Our Communities</span>
            <h2 className="section-title">Primary Service Areas</h2>
            <p className="section-subtitle mx-auto">
              Click on a location to learn more about our services in that area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="card-hover p-6 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="h-5 w-5 text-ridge-500 group-hover:text-ridge-600 transition-colors" />
                  <span className="text-sm text-stone-500">{area.county} County</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-stone-900 mb-2 group-hover:text-ridge-700 transition-colors">
                  {area.name}, TN
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  {area.description}
                </p>
                <span className="inline-flex items-center text-ridge-600 font-medium text-sm group-hover:text-ridge-700">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Counties Overview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Coverage Area</span>
            <h2 className="section-title">Four Counties, One Standard</h2>
            <p className="section-subtitle mx-auto">
              We bring the same quality and professionalism to every community we serve.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {counties.map((county) => (
              <div key={county.name} className="card p-6">
                <h3 className="font-display text-lg font-semibold text-stone-900 mb-4">
                  {county.name}
                </h3>
                <ul className="space-y-2">
                  {county.cities.map((city) => (
                    <li key={city} className="flex items-center gap-2 text-sm text-stone-600">
                      <div className="w-1.5 h-1.5 bg-ridge-400 rounded-full" />
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-stone-500 mt-12">
            Don&apos;t see your community listed? <Link href="/contact" className="text-ridge-600 hover:text-ridge-700 font-medium">Contact us</Link> — we may still serve your area.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-ridge-700 text-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Ready to Build in Southeast Tennessee?
            </h2>
            <p className="text-xl text-ridge-200 mb-10">
              Contact us today for a free consultation and estimate on your construction project.
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
