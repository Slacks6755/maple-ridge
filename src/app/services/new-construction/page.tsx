import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, CheckCircle, Phone, Ruler, Palette, Wrench, Leaf, Shield, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'New Home Construction | Custom Home Builder in Southeast TN',
  description: 'Build your dream home with Maple Ridge Construction. Licensed custom home builder in Southeast Tennessee serving Etowah, Athens, Cleveland and surrounding areas. Quality craftsmanship, energy-efficient builds.',
  keywords: [
    'custom home builder Tennessee',
    'new construction Etowah TN',
    'home builder Athens TN',
    'residential construction Cleveland TN',
    'custom home Southeast TN',
    'new home construction McMinn County',
    'home builder Bradley County',
  ],
}

const features = [
  {
    icon: Ruler,
    title: 'Your Floor Plan',
    description: 'We build what you want, not cookie-cutter plans. Tell us how you live and we\'ll design around that.',
  },
  {
    icon: Leaf,
    title: 'Energy Efficient',
    description: 'Good insulation, quality windows, proper sealing—it makes a real difference on your utility bills.',
  },
  {
    icon: Palette,
    title: 'Quality Materials',
    description: 'We use materials that last. No cutting corners with cheap stuff that falls apart in a few years.',
  },
  {
    icon: Shield,
    title: 'Built Right',
    description: 'Every phase gets inspected. We build to code because that\'s the minimum, and we go beyond where it matters.',
  },
  {
    icon: Wrench,
    title: 'Skilled Crews',
    description: 'Our people know what they\'re doing. Clean work, attention to detail, and pride in the finished product.',
  },
  {
    icon: Clock,
    title: 'No Surprises',
    description: 'We keep you updated on progress and let you know if anything changes. No disappearing for weeks.',
  },
]

const process = [
  {
    step: '01',
    title: 'Let\'s Talk',
    description: 'We sit down and figure out what you want to build, what you can spend, and when you need it done. Bring ideas, plans, Pinterest boards—whatever you have.',
  },
  {
    step: '02',
    title: 'Design & Selections',
    description: 'We nail down the floor plan, pick out materials, and make all the decisions before we break ground. Changes are easier now than later.',
  },
  {
    step: '03',
    title: 'Site Work',
    description: 'If your lot needs prep, we handle it—clearing, grading, utilities, foundation. If it\'s ready, we move straight to building.',
  },
  {
    step: '04',
    title: 'Build',
    description: 'Your home goes up. We keep you in the loop with regular updates, and you can visit the site whenever you want.',
  },
  {
    step: '05',
    title: 'Walkthrough & Keys',
    description: 'We go through everything together, make sure you\'re happy, and hand over the keys.',
  },
]

const faqs = [
  {
    question: 'How long does it take to build?',
    answer: 'Most homes run 6-12 months once we break ground. Bigger or more complicated builds take longer. Weather plays a role too—we don\'t control that.',
  },
  {
    question: 'Do I need to have land already?',
    answer: 'Nope. We can build on your lot, or help you find one. If your land needs clearing and grading, we do that too.',
  },
  {
    question: 'Can I change things once you start building?',
    answer: 'Earlier is better, but yes. We\'ll tell you how it affects the price and timeline before we make any changes.',
  },
  {
    question: 'What kind of warranty do I get?',
    answer: 'We warranty our work, and you get manufacturer warranties on all the materials and systems. We stand behind what we build.',
  },
]

export default function NewConstructionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-stone-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-ridge-500" />

        <div className="container-wide section-padding relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-ridge-600/20 text-ridge-300 px-4 py-2 rounded-full text-sm mb-6">
              <Home className="h-4 w-4" />
              Custom Home Building
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              New Home Construction
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed mb-8">
              Want to build new? We handle custom homes from scratch—your plans, your land, your
              choices. We just make sure it gets built right.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Start Your Build
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

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Custom Home Building</span>
              <h2 className="section-title">Built How You Want It</h2>
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Building a house is a big deal. You're spending real money and you want it done
                  right. We get that, and we take it seriously.
                </p>
                <p>
                  We build custom homes all over Southeast Tennessee—McMinn, Bradley, Polk, and Monroe
                  Counties. Farmhouses in the country, traditional homes in town, whatever fits your
                  life and your land.
                </p>
                <p>
                  We use good materials, we build tight and energy-efficient, and we keep you in the
                  loop the whole time. When we hand you the keys, you'll have a house you're proud of.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {features.slice(0, 4).map((feature) => (
                <div key={feature.title} className="card p-6">
                  <feature.icon className="h-8 w-8 text-ridge-500 mb-3" />
                  <h3 className="font-semibold text-stone-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-stone-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">Complete Home Building Services</h2>
            <p className="section-subtitle mx-auto">
              From planning through completion, we handle every aspect of your new home construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-ridge-100 rounded-xl flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-ridge-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900 mb-2">{feature.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
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
            <h2 className="section-title">From Plans to Keys</h2>
            <p className="section-subtitle mx-auto">
              Here's what building with us looks like.
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
              Ready to Build Your Dream Home?
            </h2>
            <p className="text-xl text-ridge-200 mb-10">
              Let&apos;s discuss your vision. Contact us for a free consultation and estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-ridge-700 hover:bg-earth-50">
                Get Free Estimate
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
