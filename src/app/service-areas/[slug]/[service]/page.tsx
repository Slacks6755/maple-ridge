import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Home, Hammer, TreePine, CheckCircle, MapPin, ArrowRight } from 'lucide-react'
import { serviceAreas, serviceAreasBySlug } from '@/data/service-areas'
import { services, servicesBySlug } from '@/data/services'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'

const serviceIcons: Record<string, React.ElementType> = {
  'new-construction': Home,
  'remodeling': Hammer,
  'land-development': TreePine,
}

// Content templates per service type
const serviceContent: Record<string, {
  longName: string
  intro: (city: string, county: string) => string
  details: (city: string, county: string) => string
  features: { title: string; description: string }[]
  whyLocal: (city: string, county: string) => string[]
}> = {
  'new-construction': {
    longName: 'New Home Construction',
    intro: (city, county) =>
      `Looking to build a new home in ${city}? Maple Ridge Construction handles custom home builds throughout ${county} County — from design through move-in. We work with your plans, your lot, and your budget to build a home that fits your life.`,
    details: (city, county) =>
      `Every property in ${county} County is different. Terrain, soil, access, utilities — we account for all of it before we break ground. Our process is straightforward: we talk through what you want, nail down the plans and materials, prep your site, and build. You stay in the loop the whole time.`,
    features: [
      { title: 'Custom Floor Plans', description: 'Your home, designed around how you actually live.' },
      { title: 'Energy Efficient', description: 'Proper insulation, quality windows, tight construction.' },
      { title: 'Quality Materials', description: 'We use materials that hold up. No cheap shortcuts.' },
      { title: 'Full Project Management', description: 'One point of contact from foundation to keys.' },
    ],
    whyLocal: (city, county) => [
      `We know ${county} County building codes and permitting`,
      `Familiar with local inspectors and requirements`,
      `Experience building on ${county} County terrain`,
    ],
  },
  'remodeling': {
    longName: 'Home Remodeling',
    intro: (city, county) =>
      `Need to update your home in ${city}? Maple Ridge Construction handles renovations throughout ${county} County — kitchens, bathrooms, additions, and whole-home remodels. We work with what you have and make it better.`,
    details: (city, county) =>
      `Remodeling in ${city} often means working with homes that have their own character and challenges. Whether it's opening up a floor plan, adding a room, or gutting a kitchen down to the studs, we approach each project with a plan and keep the disruption to your daily life as minimal as possible.`,
    features: [
      { title: 'Kitchen Renovations', description: 'Custom cabinets, countertops, layouts that work.' },
      { title: 'Bathroom Remodels', description: 'Walk-in showers, new vanities, proper ventilation.' },
      { title: 'Room Additions', description: 'Bedrooms, offices, sunrooms — more space when you need it.' },
      { title: 'Whole-Home Updates', description: 'Full renovations that transform your existing home.' },
    ],
    whyLocal: (city, county) => [
      `Understanding of ${city}-area home styles and construction`,
      `Experience with ${county} County renovation permits`,
      `Knowledge of local suppliers and material availability`,
    ],
  },
  'land-development': {
    longName: 'Land Development',
    intro: (city, county) =>
      `Have property near ${city} that needs work? Maple Ridge Construction provides land development services throughout ${county} County — clearing, grading, drainage, utilities, and driveway construction. We get your land ready to build on.`,
    details: (city, county) =>
      `Land development in ${county} County means understanding the terrain. Creek beds, slopes, tree lines, rock — every site has its own challenges. We walk the property with you, make a plan, handle permits, and do the work. When we're done, your lot is prepped and ready for construction.`,
    features: [
      { title: 'Land Clearing', description: 'Tree removal, brush clearing, and debris hauling.' },
      { title: 'Grading & Dirt Work', description: 'Site grading, building pads, and erosion control.' },
      { title: 'Utilities & Septic', description: 'Water, electric, septic systems, and well coordination.' },
      { title: 'Driveways & Access', description: 'Gravel driveways, culverts, and turnarounds.' },
    ],
    whyLocal: (city, county) => [
      `Experience with ${county} County terrain and soil conditions`,
      `Knowledge of local utility providers and requirements`,
      `Familiarity with ${county} County permitting process`,
    ],
  },
}

export function generateStaticParams() {
  return serviceAreas.flatMap((area) =>
    services.map((service) => ({
      slug: area.slug,
      service: service.slug,
    }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; service: string }>
}): Promise<Metadata> {
  const { slug, service: serviceSlug } = await params
  const area = serviceAreasBySlug[slug]
  const service = servicesBySlug[serviceSlug]
  const content = serviceContent[serviceSlug]

  if (!area || !service || !content) {
    return { title: 'Page Not Found' }
  }

  return {
    title: `${content.longName} in ${area.name}, TN | ${area.county} County`,
    description: `${content.longName} services in ${area.name}, Tennessee. Licensed general contractor serving ${area.county} County. Call for a free estimate on your project.`,
    keywords: [
      `${service.name.toLowerCase()} ${area.name} TN`,
      `${content.longName.toLowerCase()} ${area.county} County`,
      `general contractor ${area.name} Tennessee`,
      `${service.name.toLowerCase()} near ${area.name}`,
    ],
    openGraph: {
      title: `${content.longName} in ${area.name}, TN | Maple Ridge Construction`,
      description: `${content.longName} services in ${area.name} and ${area.county} County. Quality work, honest pricing.`,
    },
  }
}

export default async function ServiceAreaServicePage({
  params,
}: {
  params: Promise<{ slug: string; service: string }>
}) {
  const { slug, service: serviceSlug } = await params
  const area = serviceAreasBySlug[slug]
  const service = servicesBySlug[serviceSlug]
  const content = serviceContent[serviceSlug]

  if (!area || !service || !content) {
    notFound()
  }

  const Icon = serviceIcons[serviceSlug] || Home
  const otherServices = services.filter((s) => s.slug !== serviceSlug)
  const otherAreas = serviceAreas
    .filter((a) => a.slug !== slug)
    .slice(0, 5)
  const whyReasons = content.whyLocal(area.name, area.county)

  return (
    <>
      <PageHero
        label={`${service.name} • ${area.name}, TN`}
        title={`${content.longName} in ${area.name}, Tennessee`}
        description={content.intro(area.name, area.county)}
        ctaLabel="Get Free Estimate"
      />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Service Areas', href: '/service-areas' },
        { name: `${area.name}, TN`, href: `/service-areas/${slug}` },
        { name: service.name },
      ]} />

      {/* Service Features */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">{service.name} in {area.county} County</span>
              <h2 className="section-title">What We Do</h2>
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>{content.details(area.name, area.county)}</p>
                {area.localContent && (
                  <p>{area.localContent}</p>
                )}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {content.features.map((feature) => (
                <div key={feature.title} className="card p-6">
                  <Icon className="h-8 w-8 text-ridge-500 mb-3" />
                  <h3 className="font-semibold text-stone-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-stone-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Local */}
      <section className="py-16 bg-ridge-600 text-white">
        <div className="container-wide section-padding">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">
            Why Choose a Local Contractor in {area.name}
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyReasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-ridge-200 flex-shrink-0 mt-0.5" />
                <span className="text-ridge-100">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services in This Area */}
      <section className="py-20 lg:py-24 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="text-center mb-12">
            <span className="section-label">More Services</span>
            <h2 className="section-title">Other Services in {area.name}</h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {otherServices.map((s) => {
              const SIcon = serviceIcons[s.slug] || Home
              return (
                <Link
                  key={s.slug}
                  href={`/service-areas/${slug}/${s.slug}`}
                  className="card-hover flex gap-5 p-6 group"
                >
                  <div className="flex-shrink-0 w-14 h-14 bg-ridge-100 rounded-xl flex items-center justify-center group-hover:bg-ridge-500 transition-colors">
                    <SIcon className="h-7 w-7 text-ridge-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1 group-hover:text-ridge-700 transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-stone-600 text-sm">{s.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              href={`/service-areas/${slug}`}
              className="inline-flex items-center gap-2 text-ridge-600 font-medium hover:text-ridge-700"
            >
              All services in {area.name}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Other Areas for This Service */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="container-wide section-padding">
          <div className="text-center mb-12">
            <span className="section-label">{service.name}</span>
            <h2 className="section-title">{service.name} in Other Areas</h2>
          </div>

          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {otherAreas.map((a) => (
              <Link
                key={a.slug}
                href={`/service-areas/${a.slug}/${serviceSlug}`}
                className="card-hover p-5 text-center group"
              >
                <MapPin className="h-5 w-5 text-ridge-400 mx-auto mb-2 group-hover:text-ridge-600 transition-colors" />
                <h3 className="font-semibold text-stone-900 text-sm group-hover:text-ridge-700 transition-colors">
                  {a.name}
                </h3>
                <p className="text-xs text-stone-500">{a.county} County</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={`Ready to Start Your ${area.name} Project?`}
        description={`Get in touch for a free estimate on ${service.name.toLowerCase()} in ${area.county} County.`}
      />
    </>
  )
}
