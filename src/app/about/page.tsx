import type { Metadata } from 'next'
import { Shield, Award, Users, Heart } from 'lucide-react'
import { contact } from '@/data/contact'
import PageHero from '@/components/PageHero'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Licensed General Contractor in Etowah, TN',
  description: `Maple Ridge Construction is owned and operated by ${contact.owner} in ${contact.address.locality}, ${contact.address.region}. Licensed general contractor building homes, handling renovations, and developing land across Southeast Tennessee.`,
  keywords: [
    'about Maple Ridge Construction',
    'general contractor Etowah TN',
    'licensed contractor McMinn County',
    'Zack Newman contractor',
    'construction company Southeast Tennessee',
  ],
}

const values = [
  {
    icon: Shield,
    title: 'Honest',
    description:
      'We tell you what things cost and stick to it. No surprise charges, no runaround, no excuses.',
  },
  {
    icon: Award,
    title: 'Quality',
    description:
      'We use good materials and do the job right. Cutting corners just creates problems later.',
  },
  {
    icon: Users,
    title: 'Local',
    description:
      'We live here too. Our reputation matters to us because we see our clients around town.',
  },
  {
    icon: Heart,
    title: 'Respectful',
    description:
      'We clean up after ourselves, protect your property, and show up when we say we will.',
  },
]

const credentials = [
  'Licensed General Contractor — State of Tennessee',
  'Fully Insured',

  'Up to Date on Building Codes',
  'Safety-Focused Crews',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title="Who We Are"
        description="A general contractor based in Etowah, TN. We build homes, renovate older ones, and get land ready for building across Southeast Tennessee."
      />

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="max-w-3xl">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Started the Right Way</h2>
            <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
              <p>
                {contact.owner} studied civil engineering at the University of Tennessee and
                spent time at Kimley-Horn before starting Maple Ridge. That background gave
                him a solid understanding of how things get built — from the ground up, done
                right.
              </p>
              <p>
                He started Maple Ridge because he wanted to do construction his way — honest
                pricing, quality materials, and actually showing up when he says he will.
              </p>
              <p>
                We&apos;re based in {contact.address.locality} and work all over Southeast{' '}
                {contact.address.regionFull} — McMinn, Bradley, Polk, and Monroe Counties. We
                know the area, we know the building codes, and we know what holds up in this
                climate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-ridge-50">
        <div className="container-wide section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">What We&apos;re About</span>
            <h2 className="section-title">The Short Version</h2>
            <p className="section-subtitle mx-auto">
              How we run things around here.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="card p-8 text-center">
                <div className="w-14 h-14 bg-ridge-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-7 w-7 text-ridge-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-stone-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">The Paperwork</span>
              <h2 className="section-title">Credentials</h2>
              <p className="section-subtitle">
                Licensed, insured, and up to code. You&apos;re covered.
              </p>
            </div>

            <div className="card p-8">
              <ul className="space-y-4">
                {credentials.map((credential, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-ridge-500 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        heading="Have a Project in Mind?"
        description="Give us a call or fill out the contact form. We'll come take a look and give you a number."
      />
    </>
  )
}
