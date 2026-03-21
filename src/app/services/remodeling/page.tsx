import type { Metadata } from 'next'
import { UtensilsCrossed, Bath, PlusSquare, Home, Paintbrush, Zap, CheckCircle } from 'lucide-react'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Home Remodeling in Southeast TN',
  description:
    'Complete home remodeling services in Southeast Tennessee. Kitchen renovations, bathroom remodels, room additions, and whole-home renovations by a licensed general contractor. Serving Etowah, Athens, Cleveland and surrounding areas.',
  keywords: [
    'home remodeling Southeast Tennessee',
    'kitchen renovation Etowah TN',
    'bathroom remodel Athens TN',
    'home renovation Cleveland TN',
    'room addition McMinn County',
    'kitchen remodel Bradley County',
    'whole home renovation Monroe County',
  ],
}

const subServices = [
  {
    icon: UtensilsCrossed,
    title: 'Kitchen Renovations',
    description:
      'Kitchens get the most use and show their age fastest. We do everything from cabinet refacing to complete gut-and-rebuild jobs.',
    features: ['Custom cabinetry', 'Countertops', 'Appliance install', 'Lighting', 'Flooring'],
  },
  {
    icon: Bath,
    title: 'Bathroom Remodels',
    description:
      'Outdated bathroom? We handle tile, fixtures, vanities, showers — the whole thing. Make it work better and look better.',
    features: ['Walk-in showers', 'Soaking tubs', 'Custom vanities', 'Tile work', 'Ventilation'],
  },
  {
    icon: PlusSquare,
    title: 'Room Additions',
    description:
      "Need more space? We can add on. Bedrooms, offices, in-law suites — we handle permits and make it look like it was always there.",
    features: ['Bedrooms', 'Sunrooms', 'Home offices', 'In-law suites', 'Garage conversions'],
  },
  {
    icon: Home,
    title: 'Whole-Home Renovation',
    description:
      'Sometimes you love the bones but hate everything else. We can gut it and start fresh while keeping what matters.',
    features: ['Full remodels', 'Open concept', 'Historical restoration', 'Modern updates', 'Structural changes'],
  },
  {
    icon: Paintbrush,
    title: 'Interior Updates',
    description:
      'Not ready for a full remodel? Fresh paint, new trim, updated fixtures — small changes that make a big difference.',
    features: ['Drywall & paint', 'Trim & molding', 'Built-ins', 'Fireplace updates', 'Ceiling work'],
  },
  {
    icon: Zap,
    title: 'System Upgrades',
    description:
      "Old wiring, outdated plumbing, or HVAC that's on its last legs? We update the stuff behind the walls too.",
    features: ['Electrical', 'Plumbing', 'HVAC', 'Insulation', 'Smart home'],
  },
]

const process = [
  {
    step: '01',
    title: 'We Come Take a Look',
    description:
      "We visit your home, see what you're working with, talk about what you want, and give you a real number.",
  },
  {
    step: '02',
    title: 'Plan It Out',
    description:
      'We nail down the layout, pick materials, and figure out all the details before demo day. Fewer surprises that way.',
  },
  {
    step: '03',
    title: 'Prep Work',
    description:
      'We protect the rest of your house, set up work areas, and start demo. We try to keep the mess contained.',
  },
  {
    step: '04',
    title: 'The Work',
    description:
      'This is where it happens. We work efficiently and keep you posted on progress.',
  },
  {
    step: '05',
    title: 'Wrap Up',
    description:
      "Finishing touches, cleanup, and a walkthrough with you to make sure everything's right.",
  },
]

const faqs = [
  {
    question: 'Can I stay in my home during the remodel?',
    answer:
      "Usually, yes. We keep work areas contained. For major gut jobs, you might be more comfortable staying somewhere else, but we'll figure that out together.",
  },
  {
    question: 'How much does a kitchen remodel cost?',
    answer:
      "It depends on what you want to do. New cabinets and counters is a different number than moving walls and adding windows. We give you a real price after we see the space.",
  },
  {
    question: 'Do you handle permits?',
    answer:
      "Yes. If it needs a permit, we pull it and handle inspections. You don't have to deal with the county.",
  },
  {
    question: 'How messy will it be?',
    answer:
      "Remodeling makes dust — that's unavoidable. But we contain it as best we can, protect finished areas, and clean up every day. We don't leave your house trashed.",
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

export default function RemodelingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        label="Home Renovation"
        title="Home Remodeling & Renovation"
        description="Love where you live but hate how it looks? We fix that. Kitchens, bathrooms, additions, or the whole house — we make old homes work like new ones."
        ctaLabel="Get a Quote"
      />
      <Breadcrumbs items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Home Remodeling' },
      ]} />

      {/* Introduction */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Home Remodeling</span>
            <h2 className="section-title">Make Your House Work for You</h2>
            <div className="mt-6 space-y-4 text-stone-600 leading-relaxed text-left sm:text-center">
              <p>
                Houses don&apos;t age gracefully. Kitchens get outdated, bathrooms stop working right,
                and sometimes you just need more room. That&apos;s what we fix.
              </p>
              <p>
                We work all over Southeast Tennessee, updating homes without destroying what makes
                them yours. Our crews are efficient, they clean up after themselves, and they
                don&apos;t drag projects out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">What We Do</span>
            <h2 className="section-title">Remodeling Services</h2>
            <p className="section-subtitle mx-auto">
              Renovation services to transform every area of your home.
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
            <h2 className="section-title">Our Remodeling Process</h2>
            <p className="section-subtitle mx-auto">
              Here&apos;s how it goes from start to finish.
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
        heading="Ready to Transform Your Home?"
        description="Let's talk about what you want to change. Free estimates."
        primaryLabel="Request Quote"
      />
    </>
  )
}
