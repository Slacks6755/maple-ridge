import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { serviceAreas, counties } from '@/data/service-areas'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Service Areas | General Contractor in Southeast Tennessee',
  description: 'Maple Ridge Construction serves McMinn, Bradley, Polk, and Monroe Counties in Southeast Tennessee. Construction services in Etowah, Athens, Cleveland, Benton, Madisonville, Tellico Plains, Sweetwater, Englewood, Riceville, and Ocoee.',
  keywords: [
    'construction service areas Tennessee',
    'general contractor Southeast TN',
    'home builder McMinn County',
    'contractor Bradley County',
    'construction Polk County',
    'home building Monroe County',
  ],
  alternates: {
    canonical: '/service-areas',
  },
}

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        label="Where We Work"
        title="Serving Southeast Tennessee"
        description="Maple Ridge Construction provides construction services throughout McMinn, Bradley, Polk, and Monroe Counties. From the Tennessee River Valley to the Cherokee Forest foothills, we're your local building partner."
      />

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <CTASection
        heading="Ready to Build in Southeast Tennessee?"
        description="Contact us today for a free consultation and estimate on your construction project."
      />
    </>
  )
}
