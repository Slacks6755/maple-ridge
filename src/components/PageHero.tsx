import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { contact } from '@/data/contact'

interface PageHeroProps {
  label: string
  title: string
  description: string
  showCTA?: boolean
  ctaLabel?: string
  ctaHref?: string
}

export default function PageHero({
  label,
  title,
  description,
  showCTA = true,
  ctaLabel = 'Get Free Estimate',
  ctaHref = '/contact',
}: PageHeroProps) {
  return (
    <section className="bg-stone-900 text-white py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-ridge-500" />

      <div className="container-wide section-padding relative">
        <div className="max-w-3xl">
          <span className="inline-block text-ridge-400 font-medium text-sm uppercase tracking-wider mb-4">
            {label}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl text-stone-300 leading-relaxed">
            {description}
          </p>
          {showCTA && (
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href={ctaHref}
                className="group inline-flex items-center justify-center gap-2 bg-ridge-500 hover:bg-ridge-600 text-white px-7 py-3.5 rounded-lg font-medium transition-colors"
              >
                {ctaLabel}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white px-7 py-3.5 rounded-lg font-medium transition-colors border border-white/10"
              >
                <Phone className="h-5 w-5" />
                {contact.phone}
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
