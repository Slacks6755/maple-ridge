import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us | Free Estimate | Maple Ridge Construction',
  description: 'Contact Maple Ridge Construction for a free estimate on your construction project. Serving Etowah, Athens, Cleveland and Southeast Tennessee. Call (423) 555-1234.',
  keywords: [
    'contact Maple Ridge Construction',
    'free construction estimate Tennessee',
    'general contractor quote Etowah',
    'home builder contact Southeast TN',
    'construction company phone McMinn County',
  ],
}

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    primary: '(423) 555-1234',
    secondary: 'Mon-Fri 7AM-5PM',
    action: 'tel:+14235551234',
    actionLabel: 'Call Now',
  },
  {
    icon: Mail,
    title: 'Email',
    primary: 'info@mapleridgeconstruction.com',
    secondary: 'We respond within 24 hours',
    action: 'mailto:info@mapleridgeconstruction.com',
    actionLabel: 'Send Email',
  },
  {
    icon: MapPin,
    title: 'Location',
    primary: 'Etowah, Tennessee',
    secondary: 'Serving McMinn, Bradley, Polk & Monroe Counties',
    action: null,
    actionLabel: null,
  },
  {
    icon: Clock,
    title: 'Hours',
    primary: 'Monday - Friday: 8AM - 5PM',
    secondary: 'Closed weekends',
    action: null,
    actionLabel: null,
  },
]

const serviceAreas = [
  { name: 'Etowah', county: 'McMinn' },
  { name: 'Athens', county: 'McMinn' },
  { name: 'Cleveland', county: 'Bradley' },
  { name: 'Benton', county: 'Polk' },
  { name: 'Madisonville', county: 'Monroe' },
  { name: 'Tellico Plains', county: 'Monroe' },
  { name: 'Sweetwater', county: 'Monroe' },
  { name: 'Englewood', county: 'McMinn' },
]

export default function ContactPage() {
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
              Contact Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Let&apos;s Discuss Your Project
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Ready to build, renovate, or develop? Contact us for a free consultation and estimate.
              We&apos;re here to answer your questions and help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title">Contact Information</h2>
              <p className="section-subtitle">
                Reach out by phone or email, or fill out the form and we&apos;ll get back to you
                within one business day.
              </p>

              <div className="mt-10 space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-ridge-100 rounded-xl flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-ridge-600" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-stone-900 mb-1">{item.title}</h3>
                      <p className="text-stone-700">{item.primary}</p>
                      <p className="text-sm text-stone-500">{item.secondary}</p>
                      {item.action && (
                        <a
                          href={item.action}
                          className="inline-flex items-center text-ridge-600 hover:text-ridge-700 font-medium text-sm mt-2"
                        >
                          {item.actionLabel}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Service Areas */}
              <div className="mt-12 p-6 bg-white rounded-xl border border-stone-200">
                <h3 className="font-semibold text-stone-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.name}
                      href={`/service-areas/${area.name.toLowerCase().replace(' ', '-')}`}
                      className="text-sm text-stone-600 hover:text-ridge-600"
                    >
                      {area.name}, TN
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="h-6 w-6 text-ridge-500" />
                <h3 className="font-display text-xl font-semibold text-stone-900">Request a Free Estimate</h3>
              </div>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-ridge-500 focus:ring-2 focus:ring-ridge-500/20 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-ridge-500 focus:ring-2 focus:ring-ridge-500/20 transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-ridge-500 focus:ring-2 focus:ring-ridge-500/20 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-ridge-500 focus:ring-2 focus:ring-ridge-500/20 transition-colors"
                    placeholder="(423) 555-1234"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-stone-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-ridge-500 focus:ring-2 focus:ring-ridge-500/20 transition-colors bg-white"
                  >
                    <option value="">Select a project type</option>
                    <option value="new-construction">New Home Construction</option>
                    <option value="remodeling">Home Remodeling</option>
                    <option value="land-development">Land Development</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-stone-700 mb-2">
                    Project Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-ridge-500 focus:ring-2 focus:ring-ridge-500/20 transition-colors"
                    placeholder="City or County"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-ridge-500 focus:ring-2 focus:ring-ridge-500/20 transition-colors resize-none"
                    placeholder="Describe your project, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>

                <p className="text-xs text-stone-500 text-center">
                  We&apos;ll respond within one business day. Your information is kept confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Call CTA */}
      <section className="py-16 bg-ridge-600 text-white">
        <div className="container-wide section-padding">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl font-bold mb-2">Prefer to Talk?</h2>
              <p className="text-ridge-200">Give us a call and speak directly with our team.</p>
            </div>
            <a
              href="tel:+14235551234"
              className="btn bg-white text-ridge-700 hover:bg-earth-50 flex-shrink-0"
            >
              <Phone className="mr-2 h-5 w-5" />
              (423) 555-1234
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
