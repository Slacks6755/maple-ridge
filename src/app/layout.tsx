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
    default: 'General Contractor in Southeast Tennessee | Maple Ridge Construction',
    template: '%s | Maple Ridge Construction',
  },
  description: 'Licensed General Contractor in Southeast Tennessee. New home construction, remodeling, and land development in McMinn, Bradley, Polk & Monroe Counties. Call (423) 506-2380 for a free estimate.',
  keywords: [
    'general contractor Tennessee',
    'home builder Etowah TN',
    'new construction Southeast TN',
    'home remodeling Athens TN',
    'land development Cleveland TN',
    'custom home builder McMinn County',
    'contractor Bradley County',
    'construction company Polk County',
    'home renovation Monroe County',
    'general contractor Sweetwater TN',
    'home builder Madisonville TN',
  ],
  authors: [{ name: 'Maple Ridge Construction & Development' }],
  creator: 'Maple Ridge Construction & Development',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mapleridgeconstruction.com',
    siteName: 'Maple Ridge Construction & Development',
    title: 'General Contractor in Southeast Tennessee | Maple Ridge Construction',
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
    // TODO: Add your Google Search Console verification code here
    // google: 'YOUR_VERIFICATION_CODE',
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
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#547454" />
        <meta name="geo.region" content="US-TN" />
        <meta name="geo.placename" content="Etowah, Tennessee" />
        {/* Google Analytics — replace G-XXXXXXXXXX with your measurement ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`,
          }}
        />
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
