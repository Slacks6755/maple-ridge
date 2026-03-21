'use client'

import { useState } from 'react'
import { Phone, MessageSquare, Copy, Check, Mail, ExternalLink } from 'lucide-react'
import { contact } from '@/data/contact'

function CopyBtn({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-stone-200 text-stone-600 hover:border-ridge-300 hover:text-ridge-600 transition-colors"
    >
      {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {copied ? 'Copied' : label}
    </button>
  )
}

export function PhoneActions() {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      <a
        href={contact.phoneHref}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-stone-200 text-stone-600 hover:border-ridge-300 hover:text-ridge-600 transition-colors"
      >
        <Phone className="h-3.5 w-3.5" />
        Call
      </a>
      <a
        href={`sms:${contact.phoneRaw}`}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-stone-200 text-stone-600 hover:border-ridge-300 hover:text-ridge-600 transition-colors"
      >
        <MessageSquare className="h-3.5 w-3.5" />
        Text
      </a>
      <CopyBtn text={contact.phone} label="Copy" />
    </div>
  )
}

export function EmailActions() {
  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent('Project Inquiry')}`

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      <a
        href={gmailUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-stone-200 text-stone-600 hover:border-ridge-300 hover:text-ridge-600 transition-colors"
      >
        <ExternalLink className="h-3.5 w-3.5" />
        Gmail
      </a>
      <a
        href={contact.emailHref}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-stone-200 text-stone-600 hover:border-ridge-300 hover:text-ridge-600 transition-colors"
      >
        <Mail className="h-3.5 w-3.5" />
        Mail App
      </a>
      <CopyBtn text={contact.email} label="Copy" />
    </div>
  )
}
