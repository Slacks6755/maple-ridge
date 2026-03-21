'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, MessageSquare, Copy, Check, ChevronDown } from 'lucide-react'
import Logo from './Logo'
import { contact } from '@/data/contact'
import { services } from '@/data/services'
import { serviceAreas } from '@/data/service-areas'

const mainLinks = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [areasOpen, setAreasOpen] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)

  const copyPhone = async () => {
    await navigator.clipboard.writeText(contact.phone)
    setPhoneCopied(true)
    setTimeout(() => setPhoneCopied(false), 2000)
  }

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-stone-100">
      {/* Top bar with phone */}
      <div className="bg-ridge-700 text-white">
        <div className="container-wide section-padding">
          <div className="flex justify-between items-center py-2 text-sm">
            <span className="hidden sm:block">Licensed General Contractor &bull; Southeast Tennessee</span>
            <div className="flex items-center gap-1">
              <span className="text-ridge-200 mr-1 hidden sm:inline">{contact.phone}</span>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium hover:bg-white/10 transition-colors"
                title="Call"
              >
                <Phone className="h-3.5 w-3.5" />
                <span className="sm:inline hidden">Call</span>
              </a>
              <a
                href={`sms:${contact.phoneRaw}`}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium hover:bg-white/10 transition-colors"
                title="Text"
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span className="sm:inline hidden">Text</span>
              </a>
              <button
                onClick={copyPhone}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium hover:bg-white/10 transition-colors"
                title="Copy number"
              >
                {phoneCopied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                <span className="sm:inline hidden">{phoneCopied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-wide section-padding" aria-label="Main navigation">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 focus-ring rounded-lg">
            <Logo className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="font-display font-semibold text-lg text-stone-900 leading-tight">Maple Ridge</span>
              <span className="text-xs text-stone-500 leading-tight">Construction & Development</span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {/* Services dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-stone-700 hover:text-ridge-600 font-medium transition-colors focus-ring rounded-lg px-2 py-1"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute left-0 top-full pt-2 w-72 ${servicesOpen ? 'block' : 'hidden'} group-hover:block`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <div className="bg-white rounded-xl shadow-lg border border-stone-100 overflow-hidden">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 hover:bg-ridge-50 transition-colors border-b border-stone-50 last:border-0"
                    >
                      <span className="font-medium text-stone-900">{item.name}</span>
                      <span className="block text-sm text-stone-500 mt-0.5">{item.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Areas dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 text-stone-700 hover:text-ridge-600 font-medium transition-colors focus-ring rounded-lg px-2 py-1"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
                onClick={() => setAreasOpen(!areasOpen)}
              >
                Service Areas
                <ChevronDown className="h-4 w-4" />
              </button>
              <div
                className={`absolute left-0 top-full pt-2 w-48 ${areasOpen ? 'block' : 'hidden'} group-hover:block`}
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <div className="bg-white rounded-xl shadow-lg border border-stone-100 overflow-hidden max-h-80 overflow-y-auto">
                  {serviceAreas.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="block px-4 py-2.5 hover:bg-ridge-50 transition-colors text-stone-700 hover:text-ridge-700 border-b border-stone-50 last:border-0"
                    >
                      {area.name}, TN
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Main links */}
            {mainLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-stone-700 hover:text-ridge-600 font-medium transition-colors focus-ring rounded-lg px-2 py-1"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA */}
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden relative z-10 p-3 -mr-1 text-stone-700 hover:text-ridge-600 active:text-ridge-700 focus-ring rounded-lg"
            style={{ touchAction: 'manipulation' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-stone-100">
            {/* Services */}
            <div className="py-2">
              <span className="text-xs font-medium text-stone-400 uppercase tracking-wider px-2">Services</span>
              {services.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-2 py-2 text-stone-700 hover:text-ridge-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Service Areas */}
            <div className="py-2 border-t border-stone-100 mt-2">
              <span className="text-xs font-medium text-stone-400 uppercase tracking-wider px-2">Service Areas</span>
              <div className="grid grid-cols-2 gap-x-2">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/service-areas/${area.slug}`}
                    className="block px-2 py-2 text-stone-700 hover:text-ridge-600 font-medium text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Main links */}
            <div className="py-2 border-t border-stone-100 mt-2">
              {mainLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-2 py-2 text-stone-700 hover:text-ridge-600 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-stone-100 mt-2 space-y-3">
              <Link
                href="/contact"
                className="btn-primary w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Free Quote
              </Link>
              <a
                href={contact.phoneHref}
                className="flex items-center justify-center gap-2 text-stone-700 font-medium py-2"
              >
                <Phone className="h-4 w-4" />
                {contact.phone}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
