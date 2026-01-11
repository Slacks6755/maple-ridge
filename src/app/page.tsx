import Link from 'next/link'
import { ArrowRight, Home, Hammer, TreePine, CheckCircle, MapPin, Phone, ArrowUpRight, Shield, Award } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'New Construction',
    description: 'Custom homes built your way. We handle everything from foundation to finishing touches.',
    href: '/services/new-construction',
  },
  {
    icon: Hammer,
    title: 'Home Remodeling',
    description: 'Kitchens, bathrooms, additions, whole-house updates. Make your place work better.',
    href: '/services/remodeling',
  },
  {
    icon: TreePine,
    title: 'Land Development',
    description: 'Got land? We clear it, grade it, run utilities, and get it ready to build.',
    href: '/services/land-development',
  },
]

const areas = [
  'Etowah', 'Athens', 'Cleveland', 'Benton',
  'Madisonville', 'Tellico Plains', 'Sweetwater', 'Englewood'
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-stone-900 overflow-hidden">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 py-16 lg:py-24">
            {/* Left column - Content */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-ridge-400 text-sm font-medium mb-6">
                <MapPin className="h-4 w-4" />
                Etowah, Tennessee
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-tight">
                We build homes that last.
              </h1>

              <p className="mt-6 text-lg text-stone-300 max-w-lg leading-relaxed">
                New construction, renovations, and land development across Southeast Tennessee.
                Honest pricing, quality work, no runaround.
              </p>

              {/* Trust badges */}
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-stone-300">
                  <Shield className="h-5 w-5 text-ridge-400" />
                  <span className="text-sm">Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2 text-stone-300">
                  <Award className="h-5 w-5 text-ridge-400" />
                  <span className="text-sm">15+ Years Experience</span>
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
                  href="tel:+14235551234"
                  className="inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors border border-white/10"
                >
                  <Phone className="h-5 w-5" />
                  (423) 555-1234
                </a>
              </div>
            </div>

            {/* Right column - Image placeholder + testimonial */}
            <div className="relative flex flex-col justify-center">
              <div className="aspect-[4/3] bg-stone-800 rounded-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <Home className="h-16 w-16 text-stone-600 mx-auto mb-4" />
                    <p className="text-stone-500 text-sm">Project photo</p>
                  </div>
                </div>
              </div>

              {/* Testimonial card */}
              <div className="mt-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                <p className="text-stone-300 text-sm leading-relaxed italic">
                  "They built our forever home exactly how we envisioned it. Great communication and a team that genuinely cares."
                </p>
                <p className="mt-3 text-stone-400 text-sm">
                  — The Johnson Family, Athens
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 bg-white border-t border-stone-200">
        <div className="container-wide section-padding">
          <div className="max-w-xl mb-16">
            <h2 className="text-4xl font-display font-bold text-stone-900 mb-4">
              What we do
            </h2>
            <p className="text-lg text-stone-600">
              Full-service construction from concept to completion.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative bg-white p-8 rounded-2xl border border-stone-200 hover:border-ridge-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-ridge-50 rounded-xl flex items-center justify-center group-hover:bg-ridge-100 transition-colors">
                    <service.icon className="h-6 w-6 text-ridge-600" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-stone-300 group-hover:text-ridge-500 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-stone-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
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
              We&apos;re not the biggest contractor around. We&apos;d rather do fewer jobs well
              than spread ourselves too thin.
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
                <Award className="h-7 w-7 text-ridge-600" />
              </div>
              <h3 className="font-semibold text-stone-900 mb-2">Quality Materials</h3>
              <p className="text-stone-600 text-sm">We use good stuff that lasts. Cutting corners creates problems later.</p>
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
              <p className="text-stone-600 text-sm">You can actually reach us. We keep you in the loop.</p>
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
      <section className="py-24 bg-stone-50">
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
            {areas.map((area) => (
              <Link
                key={area}
                href={`/service-areas/${area.toLowerCase().replace(' ', '-')}`}
                className="inline-flex items-center gap-2 bg-white border border-stone-200 px-5 py-2.5 rounded-full text-stone-700 hover:border-ridge-300 hover:text-ridge-700 transition-colors"
              >
                <MapPin className="h-4 w-4 text-ridge-500" />
                {area}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-ridge-600">
        <div className="container-wide section-padding text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-ridge-200 text-lg mb-10 max-w-xl mx-auto">
            Give us a call or send a message. We'll talk through your project
            and give you an honest number.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-ridge-700 hover:bg-stone-100 px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Request a quote
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:+14235551234"
              className="inline-flex items-center justify-center gap-2 bg-ridge-500 text-white hover:bg-ridge-400 px-8 py-4 rounded-lg font-medium transition-colors"
            >
              <Phone className="h-5 w-5" />
              (423) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
