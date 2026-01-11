import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TreePine, CheckCircle, Phone, Mountain, Droplets, Zap, Route, FileCheck, HardHat } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Land Development & Site Preparation | Southeast Tennessee',
  description: 'Professional land development services in Southeast Tennessee. Site clearing, grading, drainage, utility installation, and driveway construction. Serving McMinn, Bradley, Polk & Monroe Counties.',
  keywords: [
    'land development Tennessee',
    'site clearing Etowah TN',
    'land grading Athens TN',
    'driveway construction Cleveland TN',
    'lot preparation Southeast TN',
    'land clearing McMinn County',
    'site development Bradley County',
    'utility installation Polk County',
  ],
}

const services = [
  {
    icon: TreePine,
    title: 'Land Clearing',
    description: 'We clear trees, brush, and overgrowth so you can actually use your property. Whether you need everything gone or just want to open things up, we work with the land.',
    features: ['Tree removal', 'Brush clearing', 'Stump grinding', 'Debris hauling', 'Selective clearing'],
  },
  {
    icon: Mountain,
    title: 'Grading & Dirt Work',
    description: 'Good grading is the difference between a house that lasts and one with water in the basement. We shape the land so water goes where it should.',
    features: ['Site grading', 'Cut and fill', 'Building pad prep', 'Erosion control', 'Compaction'],
  },
  {
    icon: Droplets,
    title: 'Drainage',
    description: 'Tennessee gets plenty of rain, and it needs somewhere to go. We figure out how water moves across your property and make sure it doesn\'t cause problems.',
    features: ['French drains', 'Culvert installation', 'Retention areas', 'Surface grading', 'Erosion prevention'],
  },
  {
    icon: Zap,
    title: 'Utilities',
    description: 'A buildable lot needs power, water, and a way to handle waste. We run utilities to your property and coordinate septic or well work.',
    features: ['Electric service', 'Water lines', 'Septic systems', 'Well coordination', 'Underground utilities'],
  },
  {
    icon: Route,
    title: 'Driveways & Access',
    description: 'You need to get to your property, and so do the crews building on it. We put in driveways that hold up to weather and heavy equipment.',
    features: ['Gravel driveways', 'Asphalt prep', 'Culvert installation', 'Turnarounds', 'Drainage'],
  },
  {
    icon: FileCheck,
    title: 'Permits & Paperwork',
    description: 'Every project needs permits. We\'ve been through the process enough times to know what the county needs, so nothing holds up your build.',
    features: ['Permit assistance', 'Survey coordination', 'Code compliance', 'County requirements', 'Planning support'],
  },
]

const whyLandDev = [
  {
    title: 'We Know the Area',
    description: 'We\'ve worked on property all over Southeast Tennessee—hills, creek bottoms, rocky ground. We know what works here.',
  },
  {
    title: 'One Crew, Start to Finish',
    description: 'From clearing to final grading, we handle it all. You deal with us, not a dozen different people.',
  },
  {
    title: 'Ready to Build',
    description: 'When we\'re done, your lot is actually ready. Drainage sorted, ground prepped, utilities run.',
  },
]

const process = [
  {
    step: '01',
    title: 'We Walk the Property',
    description: 'We come out, look at the land, and talk through what you want to do. No charge for this—we need to see it to give you a real number.',
  },
  {
    step: '02',
    title: 'Plan & Permits',
    description: 'We figure out what needs to happen, get surveys if needed, and handle the permit process with the county.',
  },
  {
    step: '03',
    title: 'Clearing & Grading',
    description: 'Trees come down, brush gets cleared, and we start shaping the land to drain right and sit level.',
  },
  {
    step: '04',
    title: 'Utilities & Driveway',
    description: 'We put in the driveway, run utilities to the building site, and get septic or well work lined up.',
  },
  {
    step: '05',
    title: 'Final Prep',
    description: 'Finish grading, erosion control, and making sure the site is actually ready for a builder to show up.',
  },
]

const faqs = [
  {
    question: 'What size property can you work on?',
    answer: 'Anything from a single lot to multi-acre tracts. We\'ll come look at it and tell you what we can do.',
  },
  {
    question: 'Can you put in a septic system?',
    answer: 'Yes. We handle septic design, permits, and installation. The health department has to approve it, and we know what they\'re looking for.',
  },
  {
    question: 'Can I sell the timber when you clear?',
    answer: 'Sometimes. If you have good hardwood in quantity, it can offset some clearing costs. We can take a look and let you know if it\'s worth pursuing.',
  },
  {
    question: 'How long does this take?',
    answer: 'Depends on the property. A straightforward lot might be a few weeks. Bigger or more complicated sites take longer. Weather plays a role too.',
  },
]

export default function LandDevelopmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-stone-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-ridge-500" />

        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-ridge-600/20 text-ridge-300 px-4 py-2 rounded-full text-sm mb-6">
              <TreePine className="h-4 w-4" />
              Site Development
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Land Development & Site Preparation
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed mb-8">
              Got land but can't build on it yet? We handle clearing, grading, driveways, and
              utilities—everything you need before construction can start.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss Your Project
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

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Land Development</span>
              <h2 className="section-title">From Woods to Build-Ready</h2>
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  There's a lot of beautiful property in Southeast Tennessee, but most of it isn't ready
                  to build on. Trees, slopes, no driveway, no utilities—it takes work to get a site ready.
                </p>
                <p>
                  That's what we do. We take wooded acreage or overgrown lots and turn them into sites
                  where you can actually put a house, cabin, or whatever you're planning.
                </p>
                <p>
                  We've worked all over McMinn, Bradley, Polk, and Monroe Counties. We know the terrain,
                  we know the county requirements, and we know how to get it done right.
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
            {services.map((service) => (
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
              Here's what happens from first call to finished site.
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
                  <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">{step.title}</h3>
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

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-ridge-700 text-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Got a Piece of Property?
            </h2>
            <p className="text-xl text-ridge-200 mb-10">
              Let's take a look at it and figure out what it'll take to get it ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-ridge-700 hover:bg-earth-50">
                Schedule Site Visit
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
