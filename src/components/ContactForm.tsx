'use client'

import { useState, FormEvent } from 'react'
import { MessageSquare, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(false)
    setSubmitting(true)

    try {
      const form = e.currentTarget
      const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>)

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      })

      if (!res.ok) throw new Error('Form submission failed')
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="card p-8 lg:p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
        <CheckCircle className="h-12 w-12 text-ridge-500 mb-4" />
        <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">
          Message Sent
        </h3>
        <p className="text-stone-600">
          We&apos;ll be in touch!
        </p>
      </div>
    )
  }

  return (
    <div className="card p-8 lg:p-10">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="h-6 w-6 text-ridge-500" />
        <h3 className="font-display text-xl font-semibold text-stone-900">
          Request a Free Estimate
        </h3>
      </div>

      {error && (
        <div className="flex items-center gap-2 p-3 mb-6 rounded-lg bg-red-50 text-red-700 text-sm">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          Something went wrong. Please try again or give us a call.
        </div>
      )}

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out: <input name="bot-field" />
          </label>
        </p>
        {/* Secondary honeypot — hidden from real users, bots fill it */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: '-9999px', opacity: 0, height: 0, overflow: 'hidden' }}>
          <label htmlFor="website">Website</label>
          <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-stone-700 mb-2"
          >
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-ridge-500 focus:ring-2 focus:ring-ridge-500/20 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-stone-700 mb-2"
          >
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-ridge-500 focus:ring-2 focus:ring-ridge-500/20 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-stone-700 mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-ridge-500 focus:ring-2 focus:ring-ridge-500/20 transition-colors"
            placeholder="Optional — in case you prefer email"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-stone-700 mb-2"
          >
            Project Details *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-ridge-500 focus:ring-2 focus:ring-ridge-500/20 transition-colors resize-none"
            placeholder="Tell us what you're looking to build, renovate, or develop..."
          />
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending...' : 'Send Message'}
          {!submitting && <ArrowRight className="ml-2 h-5 w-5" />}
        </button>
      </form>
    </div>
  )
}
