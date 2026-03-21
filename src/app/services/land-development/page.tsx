import type { Metadata } from 'next'
import { TreePine, Mountain, Droplets, Zap, Route, FileCheck, CheckCircle } from 'lucide-react'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Land Development & Site Prep in Southeast TN',
  description:
    'Professional land development services in Southeast Tennessee. Site clearing, grading, drainage, utility installation, and driveway construction. Serving McMinn, Bradley, Polk & Monroe Counties.',
  keywords: [
    'land development Southeast Tennessee',
    'site clearing Etowah TN',
    'land grading Athens TN',
    'driveway construction Cleveland TN',
    'lot preparation McMinn County',
    'site development Bradley County',
    'utility installation Polk County',
  ],
}

const subServices = [
  {
    icon: TreePine,
    title: 'Land Clearing',
    description:
      'We clear trees, brush, and overgrowth so you can actually use your property. Whether you need everything gone or just want to open things up, we work with the land.',
    features: ['Tree removal', 'Brush clearing', 'Stump grinding', 'Debris hauling', 'Selective clearing'],
  },
  {
    icon: Mountain,
    title: 'Grading & Dirt Work',
    description:
      "Good grading is the difference between a house that lasts and one with water in the basement. We shape the land so water goes where it should.",
    features: ['Site grading', 'Cut and fill', 'Building pad prep', 'Erosion control', 'Compaction'],
  },
  {
    icon: Droplets,
    title: 'Drainage',
    description:
      "Tennessee gets plenty of rain, and it needs somewhere to go. We figure out how water moves across your property and make sure it doesn't cause problems.",
    features: ['French drains', 'Culvert installation', 'Retention areas', 'Surface grading', 'Erosion prevention'],
  },
  {
    icon: Zap,
    title: 'Utilities',
    description:
      'A buildable lot needs power, water, and a way to handle waste. We run utilities to your property and coordinate septic or well work.',
    features: ['Electric service', 'Water lines', 'Septic systems', 'Well coordination', 'Underground utilities'],
  },
  {
    icon: Route,
    title: 'Driveways & Access',
    description:
      'You need to get to your property, and so do the crews building on it. We put in driveways that hold up to weather and heavy equipment.',
    features: ['Gravel driveways', 'Asphalt prep', 'Culvert installation', 'Turnarounds', 'Drainage'],
  },
  {
    icon: FileCheck,
    title: 'Permits & Paperwork',
    description:
      "Every project needs permits. We know the process and what the county needs, so nothing holds up your build.",
    features: ['Permit assistance', 'Survey coordination', 'Code compliance', 'County requirements', 'Planning support'],
  },
]

const whyLandDev = [
  {
    title: 'We Know the Area',
    description:
      "We've worked on property all over Southeast Tennessee — hills, creek bottoms, rocky ground. We know what works here.",
  },
  {
    title: 'One Crew, Start to Finish',
    description:
      "From clearing to final grading, we handle it all. You deal with us, not a dozen different people.",
  },
  {
    title: 'Ready to Build',
    description:
      "When we're done, your lot is actually ready. Drainage sorted, ground prepped, utilities run.",
  },
]

const process = [
  {
    step: '01',
    title: 'We Walk the Property',
    description:
      "We come out, look at the land, and talk through what you want to do. No charge for this — we need to see it to give you a real number.",
  },
  {
    step: '02',
    title: 'Plan & Permits',
    description:
      'We figure out what needs to happen, get surveys if needed, and handle the permit process with the county.',
  },
  {
    step: '03',
    title: 'Clearing & Grading',
    description:
      'Trees come down, brush gets cleared, and we start shaping the land to drain right and sit level.',
  },
  {
    step: '04',
    title: 'Utilities & Driveway',
    description:
      'We put in the driveway, run utilities to the building site, and get septic or well work lined up.',
  },
  {
    step: '05',
    title: 'Final Prep',
    description:
      'Finish grading, erosion control, and making sure the site is actually ready for a builder to show up.',
  },
]

const faqs = [
  {
    question: 'What size property can you work on?',
    answer:
      "Anything from a single lot to multi-acre tracts. We'll come look at it and tell you what we can do.",
  },
  {
    question: 'Can you put in a septic system?',
    answer:
      "Yes. We handle septic design, permits, and installation. The health department has to approve it, and we know what they're looking for.",
  },
  {
    question: 'Can I sell the timber when you clear?',
    answer:
      "Sometimes. If you have good hardwood in quantity, it can offset some clearing costs. We can take a look and let you know if it's worth pursuing.",
  },
  {
    question: 'How long does site work take?',
    answer:
      "It depends on the property — size, terrain, what needs to happen. A straightforward lot might be a few weeks. Bigger or more complicated sites take longer. Weather plays a role too.",
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function LandDevelopmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        label="Site Development"
        title="Land Development & Site Preparation"
        description="Got land but can't build on it yet? We handle clearing, grading, driveways, and utilities — everything you need before construction can start."
        ctaLabel="Discuss Your Project"
      />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Land Development' },
      ]} />

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Land Development</span>
              <h2 className="section-title">From Woods to Build-Ready</h2>
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  There&apos;s a lot of beautiful property in Southeast Tennessee, but most of it isn&apos;t ready
                  to build on. Trees, slopes, no driveway, no utilities — it takes work to get a site ready.
                </p>
                <p>
                  That&apos;s what we do. We take wooded acreage or overgrown lots and turn them into sites
                  where you can actually put a house, cabin, or whatever you&apos;re planning.
                </p>
                <p>
                  We work across McMinn, Bradley, Polk, and Monroe Counties. We know the terrain,
                  the county requirements, and how to get it done right.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {whyLandDev.map((item) => (
                <div key={item.title} className="card p-6">
                  <h3 className="font-semibold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Site Work Services</h2>
            <p className="section-subtitle mx-auto">
              Everything between buying land and breaking ground on your build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subServices.map((service) => (
              <div key={service.title} className="card p-8">
                <div className="w-14 h-14 bg-ridge-100 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="h-7 w-7 text-ridge-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-stone-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-stone-500">
                      <CheckCircle className="h-4 w-4 text-ridge-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28 bg-ridge-50">
        <div className="container-wide section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">How We Get It Done</h2>
            <p className="section-subtitle mx-auto">
              Here&apos;s what happens from first call to finished site.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((step, index) => (
              <div key={step.step} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-ridge-600 text-white rounded-full flex items-center justify-center font-display text-xl font-bold">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-16 bg-ridge-200 mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-stone-200 py-6 first:pt-0 last:border-0">
                <h3 className="font-semibold text-stone-900 mb-3">{faq.question}</h3>
                <p className="text-stone-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Got a Piece of Property?"
        description="Let's take a look at it and figure out what it'll take to get it ready."
        primaryLabel="Schedule Site Visit"
      />
    </>
  )
}
