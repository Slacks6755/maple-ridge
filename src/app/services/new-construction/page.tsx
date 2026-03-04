import type { Metadata } from 'next'
import { Ruler, Leaf, Palette, Shield, Wrench, Clock, CheckCircle } from 'lucide-react'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Custom Home Builder Southeast Tennessee | New Construction',
  description:
    'Custom home construction in Southeast Tennessee. Maple Ridge Construction builds new homes in McMinn, Bradley, Polk & Monroe Counties. Licensed general contractor — your plans, your land, built right.',
  keywords: [
    'custom home builder Southeast Tennessee',
    'new construction Etowah TN',
    'home builder Athens TN',
    'residential construction Cleveland TN',
    'custom home McMinn County',
    'new home construction Bradley County',
  ],
}

const features = [
  {
    icon: Ruler,
    title: 'Your Floor Plan',
    description:
      "We build what you want, not cookie-cutter plans. Tell us how you live and we'll design around that.",
  },
  {
    icon: Leaf,
    title: 'Energy Efficient',
    description:
      'Good insulation, quality windows, proper sealing — it makes a real difference on your utility bills.',
  },
  {
    icon: Palette,
    title: 'Quality Materials',
    description:
      'We use materials that last. No cutting corners with cheap stuff that falls apart in a few years.',
  },
  {
    icon: Shield,
    title: 'Built Right',
    description:
      "Every phase gets inspected. We build to code because that's the minimum, and we go beyond where it matters.",
  },
  {
    icon: Wrench,
    title: 'Skilled Crews',
    description:
      "Our people know what they're doing. Clean work, attention to detail, and pride in the finished product.",
  },
  {
    icon: Clock,
    title: 'No Surprises',
    description:
      "We keep you updated on progress and let you know if anything changes. No disappearing for weeks.",
  },
]

const process = [
  {
    step: '01',
    title: "Let's Talk",
    description:
      "We sit down and figure out what you want to build, what you can spend, and when you need it done. Bring ideas, plans, Pinterest boards — whatever you have.",
  },
  {
    step: '02',
    title: 'Design & Selections',
    description:
      "We nail down the floor plan, pick out materials, and make all the decisions before we break ground. Changes are easier now than later.",
  },
  {
    step: '03',
    title: 'Site Work',
    description:
      "If your lot needs prep, we handle it — clearing, grading, utilities, foundation. If it's ready, we move straight to building.",
  },
  {
    step: '04',
    title: 'Build',
    description:
      'Your home goes up. We keep you in the loop with regular updates, and you can visit the site whenever you want.',
  },
  {
    step: '05',
    title: 'Walkthrough & Keys',
    description:
      "We go through everything together, make sure you're happy, and hand over the keys.",
  },
]

const faqs = [
  {
    question: 'How long does it take to build?',
    answer:
      "It depends on the size and complexity of the home. Weather, material lead times, and scope changes all play a role. We'll give you a realistic timeline upfront and keep you posted as things progress.",
  },
  {
    question: 'Do I need to have land already?',
    answer:
      "No. We can build on your lot, or help you find one. If your land needs clearing and grading, we do that too.",
  },
  {
    question: 'Can I change things once you start building?',
    answer:
      "Earlier is always better, but yes. We'll tell you how it affects the price and timeline before we make any changes.",
  },
  {
    question: 'What kind of warranty do I get?',
    answer:
      'We warranty our workmanship, and you get manufacturer warranties on all the materials and systems we install. We stand behind what we build.',
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

export default function NewConstructionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        label="Custom Home Building"
        title="New Home Construction"
        description="Want to build new? We handle custom homes from scratch — your plans, your land, your choices. We just make sure it gets built right."
        ctaLabel="Start Your Build"
      />

      {/* Overview Section */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Custom Home Building</span>
              <h2 className="section-title">Built How You Want It</h2>
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  Building a house is a big deal. You&apos;re spending real money and you want it done
                  right. We get that, and we take it seriously.
                </p>
                <p>
                  We build custom homes across Southeast Tennessee — McMinn, Bradley, Polk, and Monroe
                  Counties. Farmhouses in the country, traditional homes in town, whatever fits your
                  life and your land.
                </p>
                <p>
                  We use good materials, build tight and energy-efficient, and keep you in the
                  loop the whole time. When we hand you the keys, you&apos;ll have a house you&apos;re proud of.
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
              Here&apos;s what building with us looks like.
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
        heading="Ready to Build Your Home?"
        description="Let's talk about what you have in mind. Free consultations and estimates."
        primaryLabel="Get Free Estimate"
      />
    </>
  )
}
