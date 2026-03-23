import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, Hammer, TreePine, CheckCircle } from 'lucide-react'
import { services } from '@/data/services'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'New Homes, Remodeling & Land Development in Southeast TN',
  description:
    'Maple Ridge Construction offers new home construction, home remodeling, and land development services in Southeast Tennessee. Licensed general contractor serving McMinn, Bradley, Polk & Monroe Counties.',
  keywords: [
    'construction services Southeast Tennessee',
    'home building services Etowah TN',
    'remodeling contractor Athens TN',
    'land development company Cleveland TN',
    'general contractor McMinn County',
  ],
  alternates: {
    canonical: '/services',
  },
}

const icons: Record<string, typeof Home> = {
  'new-construction': Home,
  remodeling: Hammer,
  'land-development': TreePine,
}

const serviceDetails: Record<string, { description: string; features: string[] }> = {
  'new-construction': {
    description:
      'Build your home from the ground up. Custom designs, quality materials, and solid craftsmanship for your new home in Southeast Tennessee.',
    features: [
      'Custom floor plan design',
      'Energy-efficient building',
      'Quality materials throughout',
      'Full project management',
      'Warranty on workmanship',
    ],
  },
  remodeling: {
    description:
      'Update what you have. From kitchen renovations to whole-home overhauls, we handle projects of all sizes and keep the mess contained.',
    features: [
      'Kitchen renovations',
      'Bathroom remodels',
      'Room additions',
      'Whole-home updates',
      'Interior finishing',
    ],
  },
  'land-development': {
    description:
      'Turn raw land into a build-ready site. Clearing, grading, driveways, drainage, and utility runs throughout Southeast Tennessee.',
    features: [
      'Site clearing & grading',
      'Driveway construction',
      'Utility installation',
      'Septic systems',
      'Drainage solutions',
    ],
  },
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="What We Do"
        title="Construction Services"
        description="From new construction to renovations and land development, Maple Ridge Construction provides building services throughout Southeast Tennessee."
        showCTA={false}
      />

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = icons[service.slug]
              const details = serviceDetails[service.slug]
              if (!Icon || !details) return null

              return (
                <div
                  key={service.slug}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center gap-2 bg-ridge-100 text-ridge-700 px-4 py-2 rounded-full text-sm mb-4">
                      <Icon className="h-4 w-4" />
                      Our Service
                    </div>
                    <h2 className="font-display text-3xl font-bold text-stone-900 mb-4">
                      {service.name}
                    </h2>
                    <p className="text-lg text-stone-600 leading-relaxed mb-6">
                      {details.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {details.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-stone-600">
                          <CheckCircle className="h-5 w-5 text-ridge-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href} className="btn-primary inline-flex">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="aspect-[4/3] bg-ridge-100 rounded-2xl flex items-center justify-center">
                      <Icon className="h-24 w-24 text-ridge-300" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Why Maple Ridge</span>
            <h2 className="section-title">Quality You Can Trust</h2>
            <p className="section-subtitle mx-auto">
              Licensed general contractor in Tennessee. We show up, communicate clearly,
              and build things right.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-8 text-left">
              <div className="card p-6">
                <h3 className="font-semibold text-stone-900 mb-2">Fully Licensed</h3>
                <p className="text-stone-600 text-sm">
                  Licensed Tennessee General Contractor. Insured and ready to work.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-stone-900 mb-2">Local Knowledge</h3>
                <p className="text-stone-600 text-sm">
                  We know Southeast Tennessee — the terrain, the codes, and the communities we serve.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-stone-900 mb-2">Straight Talk</h3>
                <p className="text-stone-600 text-sm">
                  Regular updates, honest pricing, and we answer the phone when you call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Start Your Project?"
        description="Contact us for a free consultation and estimate. We're here to help."
      />
    </>
  )
}
