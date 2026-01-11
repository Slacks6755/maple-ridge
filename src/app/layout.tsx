import type { Metadata } from 'next'
import { Source_Serif_4, DM_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LocalBusinessSchema from '@/components/LocalBusinessSchema'

const displayFont = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '600', '700'],
})

const bodyFont = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mapleridgeconstruction.com'),
  title: {
    default: 'Maple Ridge Construction & Development | General Contractor in Southeast TN',
    template: '%s | Maple Ridge Construction',
  },
  description: 'Licensed General Contractor serving Southeast Tennessee. Specializing in new construction homes, complete home remodels, and land development in McMinn, Bradley, Polk & Monroe Counties.',
  keywords: [
    'general contractor Tennessee',
    'home builder Etowah TN',
    'new construction homes Southeast TN',
    'home remodeling Athens TN',
    'land development Cleveland TN',
    'custom home builder McMinn County',
    'residential contractor Bradley County',
    'construction company Polk County',
    'home renovation Monroe County',
  ],
  authors: [{ name: 'Maple Ridge Construction & Development' }],
  creator: 'Maple Ridge Construction & Development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mapleridgeconstruction.com',
    siteName: 'Maple Ridge Construction & Development',
    title: 'Maple Ridge Construction & Development | General Contractor in Southeast TN',
    description: 'Licensed General Contractor serving Southeast Tennessee. New construction, remodeling, and land development.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Maple Ridge Construction & Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maple Ridge Construction & Development',
    description: 'Licensed General Contractor serving Southeast Tennessee.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#547454" />
        <meta name="geo.region" content="US-TN" />
        <meta name="geo.placename" content="Etowah, Tennessee" />
      </head>
      <body className="font-body min-h-screen flex flex-col">
        <LocalBusinessSchema />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
