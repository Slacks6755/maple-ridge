import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { contact } from '@/data/contact'
import { serviceAreas } from '@/data/service-areas'
import PageHero from '@/components/PageHero'
import CopyButton from '@/components/CopyButton'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Maple Ridge Construction | Free Estimate Etowah, TN',
  description: `Contact Maple Ridge Construction for a free estimate. Licensed general contractor serving Etowah and Southeast Tennessee. Call ${contact.phone} or email ${contact.email}.`,
  keywords: [
    'contact Maple Ridge Construction',
    'free construction estimate Tennessee',
    'general contractor quote Etowah',
    'home builder contact Southeast TN',
    'construction company phone McMinn County',
  ],
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let&apos;s Talk About Your Project"
        description="Ready to build, renovate, or develop? Reach out for a free estimate. We'll get back to you within one business day."
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
                Reach out by phone or email, or fill out the form and we&apos;ll get back to
                you within one business day.
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
                    <CopyButton text={contact.phone} />
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-ridge-100 rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-ridge-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                    <a
                      href={contact.emailHref}
                      className="text-stone-700 hover:text-ridge-600 transition-colors"
                    >
                      {contact.email}
                    </a>
                    <CopyButton text={contact.email} />
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

      {/* Map */}
      <section className="py-16 bg-white">
        <div className="container-wide section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-stone-900 mb-3 text-center">
              Find Us
            </h2>
            <p className="text-stone-600 text-center mb-8">
              {contact.address.full}
            </p>
            <div className="aspect-[16/9] rounded-xl overflow-hidden border border-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52069.72783782744!2d-84.5720334987126!3d35.34676102066476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885e469d38c9ab1b%3A0xebc8a923c84bb8e1!2sEtowah%2C%20TN!5e0!3m2!1sen!2sus!4v1772593257308!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maple Ridge Construction location - Etowah, TN"
              />
            </div>
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
