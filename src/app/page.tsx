import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, Hammer, TreePine, MapPin, Phone, Shield, CheckCircle } from 'lucide-react'
import { contact } from '@/data/contact'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/service-areas'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
}

const serviceIcons: Record<string, React.ElementType> = {
  'new-construction': Home,
  'remodeling': Hammer,
  'land-development': TreePine,
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-stone-900 overflow-hidden">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 py-16 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-ridge-400 text-sm font-medium mb-6">
                <MapPin className="h-4 w-4" />
                {contact.address.locality}, {contact.address.regionFull}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight">
                General Contractor &amp; Home Builder in Southeast Tennessee
              </h1>

              <p className="mt-6 text-lg text-stone-300 max-w-lg leading-relaxed">
                New construction, renovations, and land development across McMinn, Bradley, Polk, and Monroe Counties. Straightforward pricing, quality work.
              </p>

              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-stone-300">
                  <Shield className="h-5 w-5 text-ridge-400" />
                  <span className="text-sm">Licensed &amp; Insured</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <CheckCircle className="h-5 w-5 text-ridge-400" />
                  <span className="text-sm">Locally Owned</span>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-ridge-500 hover:bg-ridge-600 text-white px-8 py-4 rounded-lg font-medium transition-colors"
                >
                  Get a free quote
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors border border-white/10"
                >
                  <Phone className="h-5 w-5" />
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="relative hidden lg:flex flex-col justify-center">
              <div className="aspect-[4/3] bg-stone-800 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Home className="h-16 w-16 text-stone-700" />
                </div>
                <picture className="relative w-full h-full">
                  <source srcSet="/hero.webp" type="image/webp" />
                  <img
                    src="/hero.jpg"
                    alt="Pool house built by Maple Ridge Construction in Southeast Tennessee"
                    className="w-full h-full object-cover"
                    loading="eager"
                    width={1600}
                    height={900}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white border-t border-stone-200">
        <div className="container-wide section-padding">
          <div className="max-w-xl mb-16">
            <h2 className="text-4xl font-display font-bold text-stone-900 mb-4">
              What we do
            </h2>
            <p className="text-lg text-stone-600">
              Full-service construction from start to finish.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug] || Home
              return (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group relative bg-white p-8 rounded-2xl border border-stone-200 hover:border-ridge-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-ridge-50 rounded-xl flex items-center justify-center group-hover:bg-ridge-100 transition-colors">
                      <Icon className="h-6 w-6 text-ridge-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-stone-900 mb-3">
                    {service.name}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-stone-900 mb-4">
              Why people hire us
            </h2>
            <p className="text-lg text-stone-600">
              We&apos;d rather do fewer jobs well than spread ourselves too thin.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-ridge-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="h-7 w-7 text-ridge-600" />
              </div>
              <h3 className="font-semibold text-stone-900 mb-2">Honest Pricing</h3>
              <p className="text-stone-600 text-sm">We tell you what things cost and stick to it. No surprise charges.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-ridge-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-7 w-7 text-ridge-600" />
              </div>
              <h3 className="font-semibold text-stone-900 mb-2">Quality Work</h3>
              <p className="text-stone-600 text-sm">Good materials, careful work. Cutting corners creates problems down the road.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-ridge-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-7 w-7 text-ridge-600" />
              </div>
              <h3 className="font-semibold text-stone-900 mb-2">Local Knowledge</h3>
              <p className="text-stone-600 text-sm">We know the area, the codes, and what holds up in this climate.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-ridge-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-7 w-7 text-ridge-600" />
              </div>
              <h3 className="font-semibold text-stone-900 mb-2">We Answer the Phone</h3>
              <p className="text-stone-600 text-sm">You can actually reach us. We keep you in the loop start to finish.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-ridge-600 font-medium hover:text-ridge-700"
            >
              More about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-white">
        <div className="container-wide section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-stone-900 mb-4">
              Serving Southeast Tennessee
            </h2>
            <p className="text-stone-600">
              McMinn, Bradley, Polk, and Monroe Counties
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {serviceAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="inline-flex items-center gap-2 bg-white border border-stone-200 px-5 py-2.5 rounded-full text-stone-700 hover:border-ridge-300 hover:text-ridge-700 transition-colors"
              >
                <MapPin className="h-4 w-4 text-ridge-500" />
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        heading="Ready to get started?"
        description="Give us a call or send a message. We'll talk through your project and give you an honest number."
      />
    </>
  )
}
