import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone, Shield, Award, Users, Heart, Target, TreePine } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Maple Ridge Construction & Development',
  description: 'Learn about Maple Ridge Construction, your trusted general contractor in Southeast Tennessee. Committed to quality craftsmanship in McMinn, Bradley, Polk, and Monroe Counties.',
  keywords: [
    'about Maple Ridge Construction',
    'general contractor Southeast Tennessee',
    'licensed contractor McMinn County',
    'home builder company Tennessee',
    'construction company Etowah TN',
  ],
}

const values = [
  {
    icon: Shield,
    title: 'Honest',
    description: 'We tell you what things cost and stick to it. No surprise charges, no runaround, no excuses.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'We use good materials and do the job right. Cutting corners just creates problems later.',
  },
  {
    icon: Users,
    title: 'Local',
    description: 'We live here too. Our reputation matters to us because we see our clients around town.',
  },
  {
    icon: Heart,
    title: 'Respectful',
    description: 'We clean up after ourselves, protect your property, and show up when we say we will.',
  },
]

const credentials = [
  'Licensed General Contractor - State of Tennessee',
  'Fully Insured',
  'Workers\' Comp Coverage',
  'Local Building Association Member',
  'Up to Date on Building Codes',
  'Safety-Focused Crews',
]

export default function AboutPage() {
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
            <span className="inline-block text-ridge-400 font-medium text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              A Little About Us
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              We're a general contractor based in Etowah. We build homes, renovate older ones,
              and get land ready for building. We've been doing this in Southeast Tennessee
              for a while now.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">Local Folks, Good Work</h2>
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  We're based in Etowah and we work all over Southeast Tennessee—McMinn, Bradley,
                  Polk, and Monroe Counties. We know the area, we know the building codes, and we
                  know what holds up in this climate.
                </p>
                <p>
                  We've built houses for families, renovated homes that needed updating, and
                  developed land that people have owned for years. Every job matters to us because
                  our name is on it.
                </p>
                <p>
                  We're not the biggest contractor around, and that's fine. We'd rather do fewer
                  jobs well than spread ourselves too thin.
                </p>
              </div>
            </div>

            {/* Decorative placeholder */}
            <div className="relative">
              <div className="aspect-square bg-ridge-100 rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center p-8">
                  <TreePine className="h-32 w-32 text-ridge-300 mx-auto mb-4" />
                  <p className="text-ridge-600 font-display text-xl font-semibold">Maple Ridge</p>
                  <p className="text-ridge-500">Construction & Development</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-earth-200 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <Target className="h-12 w-12 text-ridge-500 mx-auto mb-6" />
            <span className="section-label">How We Work</span>
            <h2 className="section-title mt-2">Pretty Simple, Really</h2>
            <p className="text-xl text-stone-600 leading-relaxed mt-6">
              We give you an honest price, we do quality work, and we communicate like normal people.
              We show up when we say, we don't leave messes, and we stand behind what we build.
              That's it.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-ridge-50">
        <div className="container-wide section-padding">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label">What We're About</span>
            <h2 className="section-title">The Short Version</h2>
            <p className="section-subtitle mx-auto">
              How we try to run things around here.
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
                We have all the credentials you'd expect from a legitimate contractor.
                You're covered.
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

      {/* Service Area */}
      <section className="py-20 lg:py-28 bg-stone-100">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <MapPin className="h-12 w-12 text-ridge-500 mx-auto mb-6" />
            <span className="section-label">Where We Work</span>
            <h2 className="section-title mt-2">Southeast Tennessee</h2>
            <p className="text-lg text-stone-600 leading-relaxed mt-6 mb-8">
              We're based in Etowah and work throughout McMinn, Bradley, Polk, and Monroe Counties.
              Etowah, Athens, Cleveland, Benton, Madisonville, Tellico Plains—that whole area.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Us About Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-ridge-700 text-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-ridge-200 mb-10">
              Give us a call or fill out the contact form. We'll come take a look and give you a number.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-ridge-700 hover:bg-earth-50">
                Get in Touch
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
