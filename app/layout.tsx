import './globals.css'

import { Inter, Playfair_Display } from 'next/font/google'

import type { Metadata } from 'next'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-playfair',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
})

const baseUrl = 'https://clovercanhelp.com'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Clover Consulting - Expert Bookkeeping & Financial Management',
    template: '%s | Clover Consulting',
  },
  description: 'Professional bookkeeping and financial management services for small business owners. Free yourself from the burden of paperwork and focus on growing your business.',
  keywords: ['bookkeeping', 'financial management', 'small business', 'accounting', 'QuickBooks', 'payroll', 'tax preparation', 'invoicing', 'accounts payable', 'accounts receivable'],
  authors: [{ name: 'Clover Consulting' }],
  creator: 'Clover Consulting',
  publisher: 'Clover Consulting',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Clover Consulting - Expert Bookkeeping & Financial Management',
    description: 'Professional bookkeeping and financial management services for small business owners. 98% of clients report increased profits.',
    type: 'website',
    url: baseUrl,
    siteName: 'Clover Consulting',
    locale: 'en_US',
    images: [
      {
        url: '/images/main-image-pic-1024x683.png',
        width: 1024,
        height: 683,
        alt: 'Clover Consulting - Expert Bookkeeping Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clover Consulting - Expert Bookkeeping & Financial Management',
    description: 'Professional bookkeeping and financial management services for small business owners.',
    images: ['/images/main-image-pic-1024x683.png'],
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
    // Add your verification codes here when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

// JSON-LD structured data for local business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Clover Consulting',
  description: 'Professional bookkeeping and financial management services for small business owners.',
  url: baseUrl,
  logo: `${baseUrl}/images/logo2.png`,
  image: `${baseUrl}/images/main-image-pic-1024x683.png`,
  priceRange: '$$',
  areaServed: 'United States',
  serviceType: ['Bookkeeping', 'Financial Management', 'Tax Preparation', 'Payroll Services', 'Invoicing'],
  knowsAbout: ['QuickBooks', 'Accounting', 'Financial Planning', 'Small Business Finance'],
  sameAs: [
    // Add your social media URLs here
    // 'https://www.linkedin.com/company/clover-consulting',
    // 'https://www.facebook.com/cloverconsulting',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '50',
    bestRating: '5',
    worstRating: '1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href={baseUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

