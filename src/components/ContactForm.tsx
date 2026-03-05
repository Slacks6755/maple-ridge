'use client'

import { useState, FormEvent } from 'react'
import { MessageSquare, ArrowRight, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new URLSearchParams(new FormData(form) as unknown as Record<string, string>)

    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: data.toString(),
    })

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="card p-8 lg:p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
        <CheckCircle className="h-12 w-12 text-ridge-500 mb-4" />
        <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">
          Message Sent
        </h3>
        <p className="text-stone-600">
          We&apos;ll get back to you within one business day.
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

        <button type="submit" className="btn-primary w-full justify-center">
          Send Message
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>

        <p className="text-xs text-stone-500 text-center">
          We&apos;ll respond within one business day.
        </p>
      </form>
    </div>
  )
}
