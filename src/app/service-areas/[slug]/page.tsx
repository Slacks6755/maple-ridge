import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, Hammer, TreePine, CheckCircle, Building, MapPin } from 'lucide-react'
import { serviceAreasBySlug, serviceAreaSlugs, serviceAreas } from '@/data/service-areas'
import { services } from '@/data/services'
import { contact } from '@/data/contact'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'

const serviceIcons: Record<string, typeof Home> = {
  'new-construction': Home,
  'remodeling': Hammer,
  'land-development': TreePine,
}

export function generateStaticParams() {
  return serviceAreaSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = serviceAreasBySlug[slug]

  if (!area) {
    return {
      title: 'Service Area Not Found',
    }
  }

  return {
    title: `General Contractor in ${area.name}, TN`,
    description: `Licensed general contractor serving ${area.name}, Tennessee. We build new homes, remodel existing ones, and develop land in ${area.county} County. Call ${contact.phone} for a free estimate.`,
    keywords: [
      `general contractor ${area.name} TN`,
      `home builder ${area.name} Tennessee`,
      `construction company ${area.county} County`,
      `home remodeling ${area.name}`,
      `new construction ${area.name} TN`,
      `land development ${area.county} County TN`,
    ],
    alternates: {
      canonical: `/service-areas/${slug}`,
    },
    openGraph: {
      title: `Maple Ridge Construction | ${area.name}, Tennessee`,
      description: `General contractor serving ${area.name} and ${area.county} County. Home construction, renovation, and land development services.`,
    },
  }
}

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = serviceAreasBySlug[slug]

  if (!area) {
    notFound()
  }

  const otherAreas = serviceAreas
    .filter((a) => a.slug !== slug)
    .slice(0, 5)

  return (
    <>
      <PageHero
        label={`${area.county} County, Tennessee`}
        title={area.heroTitle}
        description={area.description}
      />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Service Areas', href: '/service-areas' },
        { name: `${area.name}, TN` },
      ]} />

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
                  As a general contractor serving {area.name} and surrounding {area.county} County
                  communities, we provide construction services including new home building,
                  complete home renovations, and land development.
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
              {services.map((service) => {
                const Icon = serviceIcons[service.slug] || Home
                return (
                  <Link
                    key={service.slug}
                    href={`/service-areas/${slug}/${service.slug}`}
                    className="card-hover flex gap-5 p-6 group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-ridge-100 rounded-xl flex items-center justify-center group-hover:bg-ridge-500 transition-colors">
                      <Icon className="h-7 w-7 text-ridge-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-1 group-hover:text-ridge-700 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-stone-600 text-sm">{service.description}</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Why {area.name} Chooses Maple Ridge</span>
            <h2 className="section-title">Local Knowledge, Professional Results</h2>
            <p className="section-subtitle mx-auto">
              When you work with Maple Ridge Construction in {area.name}, you get a contractor who
              understands {area.county} County — the terrain, the building codes, and the community.
            </p>

            <div className="grid sm:grid-cols-3 gap-8 mt-12 text-left">
              <div className="card p-6">
                <Building className="h-8 w-8 text-ridge-500 mb-4" />
                <h3 className="font-semibold text-stone-900 mb-2">Fully Credentialed</h3>
                <p className="text-stone-600 text-sm">
                  Licensed Tennessee General Contractor. Covered and ready to work.
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
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
            <Link href="/service-areas" className="text-ridge-600 hover:text-ridge-700 font-medium">View all service areas</Link>{' '}
            or <Link href="/contact" className="text-ridge-600 hover:text-ridge-700 font-medium">contact us</Link> to see if we serve your area.
          </p>
        </div>
      </section>

      <CTASection
        heading={`Ready to Start Your ${area.name} Project?`}
        description={`Contact us today for a free consultation and estimate. We're ready to discuss your construction needs in ${area.county} County.`}
      />
    </>
  )
}
