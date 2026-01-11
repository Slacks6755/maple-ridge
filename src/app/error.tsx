'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-stone-50">
      <div className="container-wide section-padding py-20 text-center">
        <AlertTriangle className="h-16 w-16 text-ridge-500 mx-auto mb-6" />
        <h1 className="font-display text-2xl font-semibold text-stone-900 mb-4">
          Something went wrong
        </h1>
        <p className="text-stone-600 mb-8 max-w-md mx-auto">
          We encountered an unexpected error. Please try again or contact us if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary"
          >
            <RefreshCw className="mr-2 h-5 w-5" />
            Try Again
          </button>
          <Link href="/" className="btn-secondary">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
