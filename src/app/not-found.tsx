import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-stone-50">
      <div className="container-wide section-padding py-20 text-center">
        <h1 className="font-display text-6xl font-bold text-ridge-600 mb-4">404</h1>
        <h2 className="font-display text-2xl font-semibold text-stone-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-stone-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
