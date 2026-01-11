import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Hammer, CheckCircle, Phone, UtensilsCrossed, Bath, PlusSquare, Paintbrush, Zap, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Home Remodeling & Renovation | Kitchen & Bath Remodel Southeast TN',
  description: 'Complete home remodeling services in Southeast Tennessee. Kitchen renovations, bathroom remodels, room additions, and whole-home renovations. Serving Etowah, Athens, Cleveland and surrounding areas.',
  keywords: [
    'home remodeling Tennessee',
    'kitchen renovation Etowah TN',
    'bathroom remodel Athens TN',
    'home renovation Cleveland TN',
    'room addition Southeast TN',
    'kitchen remodel McMinn County',
    'bathroom renovation Bradley County',
    'whole home renovation',
  ],
}

const services = [
  {
    icon: UtensilsCrossed,
    title: 'Kitchen Renovations',
    description: 'Kitchens get the most use and show their age fastest. We do everything from cabinet refacing to complete gut-and-rebuild jobs.',
    features: ['Custom cabinetry', 'Countertops', 'Appliance install', 'Lighting', 'Flooring'],
  },
  {
    icon: Bath,
    title: 'Bathroom Remodels',
    description: 'Outdated bathroom? We handle tile, fixtures, vanities, showers—the whole thing. Make it work better and look better.',
    features: ['Walk-in showers', 'Soaking tubs', 'Custom vanities', 'Tile work', 'Ventilation'],
  },
  {
    icon: PlusSquare,
    title: 'Room Additions',
    description: 'Need more space? We can add on. Bedrooms, offices, in-law suites—we handle permits and make it look like it was always there.',
    features: ['Bedrooms', 'Sunrooms', 'Home offices', 'In-law suites', 'Garage conversions'],
  },
  {
    icon: Home,
    title: 'Whole-Home Renovation',
    description: 'Sometimes you love the bones but hate everything else. We can gut it and start fresh while keeping what matters.',
    features: ['Full remodels', 'Open concept', 'Historical restoration', 'Modern updates', 'Structural changes'],
  },
  {
    icon: Paintbrush,
    title: 'Interior Updates',
    description: 'Not ready for a full remodel? Fresh paint, new trim, updated fixtures—small changes that make a big difference.',
    features: ['Drywall & paint', 'Trim & molding', 'Built-ins', 'Fireplace updates', 'Ceiling work'],
  },
  {
    icon: Zap,
    title: 'System Upgrades',
    description: 'Old wiring, outdated plumbing, or HVAC that\'s on its last legs? We update the stuff behind the walls too.',
    features: ['Electrical', 'Plumbing', 'HVAC', 'Insulation', 'Smart home'],
  },
]

const process = [
  {
    step: '01',
    title: 'We Come Take a Look',
    description: 'We visit your home, see what you\'re working with, talk about what you want, and give you a real number.',
  },
  {
    step: '02',
    title: 'Plan It Out',
    description: 'We nail down the layout, pick materials, and figure out all the details before demo day. Fewer surprises that way.',
  },
  {
    step: '03',
    title: 'Prep Work',
    description: 'We protect the rest of your house, set up work areas, and start demo. We try to keep the mess contained.',
  },
  {
    step: '04',
    title: 'The Work',
    description: 'This is where it happens. We work efficiently and keep you posted on progress.',
  },
  {
    step: '05',
    title: 'Wrap Up',
    description: 'Finishing touches, cleanup, and a walkthrough with you to make sure everything\'s right.',
  },
]

const faqs = [
  {
    question: 'Can I stay in my home during the remodel?',
    answer: 'Usually, yes. We keep work areas contained. For major gut jobs, you might be more comfortable staying somewhere else, but we\'ll figure that out together.',
  },
  {
    question: 'How much does a kitchen remodel cost?',
    answer: 'It depends on what you want to do. New cabinets and counters? Different number than moving walls and adding windows. We give you a real price after we see the space.',
  },
  {
    question: 'Do you handle permits?',
    answer: 'Yes. If it needs a permit, we pull it and handle inspections. You don\'t have to deal with the county.',
  },
  {
    question: 'How messy will it be?',
    answer: 'Remodeling makes dust, that\'s unavoidable. But we contain it as best we can, protect finished areas, and clean up every day. We don\'t leave your house trashed.',
  },
]

export default function RemodelingPage() {
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
              <Hammer className="h-4 w-4" />
              Home Renovation
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Home Remodeling & Renovation
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed mb-8">
              Love where you live but hate how it looks? We fix that. Kitchens, bathrooms, additions,
              or the whole house—we make old homes work like new ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Get a Quote
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
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Home Remodeling</span>
            <h2 className="section-title">Make Your House Work for You</h2>
            <div className="mt-6 space-y-4 text-stone-600 leading-relaxed text-left sm:text-center">
              <p>
                Houses don't age gracefully. Kitchens get outdated, bathrooms stop working right,
                and sometimes you just need more room. That's what we fix.
              </p>
              <p>
                We work all over Southeast Tennessee, updating homes without destroying what makes
                them yours. Our crews are efficient, they clean up after themselves, and they
                don't drag projects out forever.
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
              Comprehensive renovation services to transform every area of your home.
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
            <h2 className="section-title">Our Remodeling Process</h2>
            <p className="section-subtitle mx-auto">
              A structured approach that keeps your project on track and minimizes disruption.
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
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-ridge-200 mb-10">
              Contact us to discuss your remodeling project. Free consultations and estimates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-ridge-700 hover:bg-earth-50">
                Request Quote
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
