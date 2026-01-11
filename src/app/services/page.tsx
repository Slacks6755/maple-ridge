import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Home, Hammer, TreePine, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Construction Services | Home Building, Remodeling & Land Development',
  description: 'Maple Ridge Construction offers new home construction, home remodeling, and land development services in Southeast Tennessee. Licensed general contractor serving McMinn, Bradley, Polk & Monroe Counties.',
  keywords: [
    'construction services Tennessee',
    'home building services',
    'remodeling contractor',
    'land development company',
    'general contractor services',
  ],
}

const services = [
  {
    icon: Home,
    title: 'New Home Construction',
    href: '/services/new-construction',
    description: 'Build your dream home from the ground up. Custom designs, quality materials, and expert craftsmanship for your new home in Southeast Tennessee.',
    features: [
      'Custom floor plan design',
      'Energy-efficient building',
      'Quality materials throughout',
      'Full project management',
      'Warranty on workmanship',
    ],
  },
  {
    icon: Hammer,
    title: 'Home Remodeling',
    href: '/services/remodeling',
    description: 'Transform your existing home with our complete renovation services. From kitchen updates to whole-home renovations, we handle it all.',
    features: [
      'Kitchen renovations',
      'Bathroom remodels',
      'Room additions',
      'Whole-home updates',
      'Interior finishing',
    ],
  },
  {
    icon: TreePine,
    title: 'Land Development',
    href: '/services/land-development',
    description: 'Prepare your property for building with our professional land development services. We turn raw land into build-ready sites.',
    features: [
      'Site clearing & grading',
      'Driveway construction',
      'Utility installation',
      'Septic systems',
      'Drainage solutions',
    ],
  },
]

export default function ServicesPage() {
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
              What We Do
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Construction Services
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              From new construction to renovations and land development, Maple Ridge Construction
              provides comprehensive building services throughout Southeast Tennessee.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 bg-ridge-100 text-ridge-700 px-4 py-2 rounded-full text-sm mb-4">
                    <service.icon className="h-4 w-4" />
                    Our Service
                  </div>
                  <h2 className="font-display text-3xl font-bold text-stone-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-stone-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-stone-600">
                        <CheckCircle className="h-5 w-5 text-ridge-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.href} className="btn-primary inline-flex">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] bg-ridge-100 rounded-2xl flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-ridge-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Why Maple Ridge</span>
            <h2 className="section-title">Quality You Can Trust</h2>
            <p className="section-subtitle mx-auto">
              As a licensed general contractor in Tennessee, we bring professionalism, expertise,
              and genuine care to every project. Your satisfaction is our priority.
            </p>
            <div className="mt-10 grid sm:grid-cols-3 gap-8 text-left">
              <div className="card p-6">
                <h3 className="font-semibold text-stone-900 mb-2">Fully Credentialed</h3>
                <p className="text-stone-600 text-sm">
                  Licensed Tennessee General Contractor. Covered and ready to work.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-stone-900 mb-2">Local Expertise</h3>
                <p className="text-stone-600 text-sm">
                  We know Southeast Tennessee—the terrain, codes, and communities we serve.
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-semibold text-stone-900 mb-2">Clear Communication</h3>
                <p className="text-stone-600 text-sm">
                  Regular updates, transparent pricing, and responsive service throughout your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-ridge-700 text-white">
        <div className="container-wide section-padding">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-ridge-200 mb-10">
              Contact us today for a free consultation and estimate. We&apos;re here to help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn bg-white text-ridge-700 hover:bg-earth-50">
                Request Free Quote
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
