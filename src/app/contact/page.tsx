import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Navigation } from 'lucide-react'
import { contact } from '@/data/contact'
import { serviceAreas } from '@/data/service-areas'
import PageHero from '@/components/PageHero'
import { PhoneActions, EmailActions } from '@/components/ContactActions'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Get a Free Estimate in Etowah, TN',
  description: `Contact Maple Ridge Construction for a free estimate. Licensed general contractor serving Etowah and Southeast Tennessee. Call ${contact.phone} or email ${contact.email}.`,
  keywords: [
    'contact Maple Ridge Construction',
    'free construction estimate Tennessee',
    'general contractor quote Etowah',
    'home builder contact Southeast TN',
    'construction company phone McMinn County',
  ],
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let&apos;s Talk About Your Project"
        description="Ready to build, renovate, or develop? Reach out for a free estimate."
        showCTA={false}
      />

      {/* Contact Info + Form */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <span className="section-label">Get in Touch</span>
              <h2 className="section-title">Contact Information</h2>
              <p className="section-subtitle">
                Reach out by phone or email, or fill out the form and we&apos;ll be in
                touch!
              </p>

              <div className="mt-10 space-y-6">
                {/* Phone */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-ridge-100 rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-ridge-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Phone</h3>
                    <a
                      href={contact.phoneHref}
                      className="text-stone-700 hover:text-ridge-600 transition-colors"
                    >
                      {contact.phone}
                    </a>
                    <PhoneActions />
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-ridge-100 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-ridge-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                    <span className="text-stone-700">
                      {contact.email}
                    </span>
                    <EmailActions />
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-ridge-100 rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-ridge-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Location</h3>
                    <p className="text-stone-700">{contact.address.full}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-ridge-100 rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-ridge-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Hours</h3>
                    <p className="text-stone-700">{contact.hours}</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mt-12 p-6 bg-white rounded-xl border border-stone-200">
                <h3 className="font-semibold text-stone-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-2">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="text-sm text-stone-600 hover:text-ridge-600"
                    >
                      {area.name}, {contact.address.region}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-white">
        <div className="container-wide section-padding">
          <div className="max-w-xl mx-auto text-center">
            <MapPin className="h-10 w-10 text-ridge-500 mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-2">
              Find Us
            </h2>
            <p className="text-stone-600 mb-6">
              {contact.address.full}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address.full)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 btn-primary"
            >
              <Navigation className="h-5 w-5" />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Prefer to reach out directly */}
      <section className="py-16 bg-stone-100">
        <div className="container-wide section-padding">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-3">
              Prefer to Reach Out Directly?
            </h2>
            <p className="text-stone-600 mb-8">
              Skip the form. Call or email {contact.owner} and we&apos;ll get your project
              moving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={contact.phoneHref}
                className="btn-primary"
              >
                <Phone className="mr-2 h-5 w-5" />
                {contact.phone}
              </a>
              <a
                href={contact.emailHref}
                className="btn bg-white text-stone-700 hover:bg-stone-50 border border-stone-300"
              >
                <Mail className="mr-2 h-5 w-5" />
                {contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
