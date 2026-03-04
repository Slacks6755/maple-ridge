import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { contact } from '@/data/contact'

interface CTASectionProps {
  heading: string
  description: string
  primaryLabel?: string
  primaryHref?: string
}

export default function CTASection({
  heading,
  description,
  primaryLabel = 'Request Free Quote',
  primaryHref = '/contact',
}: CTASectionProps) {
  return (
    <section className="py-20 lg:py-24 bg-ridge-700 text-white">
      <div className="container-wide section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">
            {heading}
          </h2>
          <p className="text-xl text-ridge-200 mb-10">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center gap-2 bg-white text-ridge-700 hover:bg-stone-100 px-8 py-4 rounded-lg font-medium transition-colors"
            >
              {primaryLabel}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 bg-ridge-600 text-white hover:bg-ridge-500 px-8 py-4 rounded-lg font-medium transition-colors border border-ridge-500"
            >
              <Phone className="h-5 w-5" />
              {contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
