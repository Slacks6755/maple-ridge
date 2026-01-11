import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Logo from './Logo'

const services = [
  { name: 'New Construction', href: '/services/new-construction' },
  { name: 'Home Remodeling', href: '/services/remodeling' },
  { name: 'Land Development', href: '/services/land-development' },
]

const serviceAreas = [
  { name: 'Etowah', href: '/service-areas/etowah' },
  { name: 'Athens', href: '/service-areas/athens' },
  { name: 'Cleveland', href: '/service-areas/cleveland' },
  { name: 'Benton', href: '/service-areas/benton' },
  { name: 'Madisonville', href: '/service-areas/madisonville' },
  { name: 'Tellico Plains', href: '/service-areas/tellico-plains' },
  { name: 'Sweetwater', href: '/service-areas/sweetwater' },
  { name: 'Englewood', href: '/service-areas/englewood' },
]

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-stone-300">
      {/* Main footer content */}
      <div className="container-wide section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Logo className="h-10 w-10" />
              <div className="flex flex-col">
                <span className="font-display font-semibold text-lg text-white leading-tight">Maple Ridge</span>
                <span className="text-xs text-stone-400 leading-tight">Construction & Development</span>
              </div>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Licensed General Contractor proudly serving Southeast Tennessee with quality craftsmanship
              and integrity since day one.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:+14235551234" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-ridge-400" />
                (423) 555-1234
              </a>
              <a href="mailto:info@mapleridgeconstruction.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-ridge-400" />
                info@mapleridgeconstruction.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-ridge-400 mt-0.5" />
                <span>Etowah, Tennessee<br />McMinn County</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-ridge-400 mt-0.5" />
                <span>Mon - Fri: 8AM - 5PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {serviceAreas.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-stone-500 text-xs mt-4">
              Serving McMinn, Bradley, Polk & Monroe Counties
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-stone-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-4 bg-stone-800 rounded-lg">
              <p className="text-sm text-stone-400 mb-3">Ready to start your project?</p>
              <Link
                href="/contact"
                className="btn-primary w-full text-center text-sm"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-800">
        <div className="container-wide section-padding py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-stone-500">
            <p>
              © {currentYear} Maple Ridge Construction & Development. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="hidden sm:inline">Licensed General Contractor • Tennessee</span>
              <Link href="/sitemap.xml" className="text-stone-600 hover:text-stone-400 transition-colors text-xs">
                Sitemap
              </Link>
              <a
                href="https://www.smbhelp.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-700 hover:text-stone-500 transition-colors text-xs"
                aria-label="Website by SMB Help"
              >
                Site by SMB Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
