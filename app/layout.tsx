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

export const metadata: Metadata = {
  title: 'Clover Consulting - Expert Bookkeeping & Financial Management',
  description: 'Professional bookkeeping and financial management services for small business owners. Free yourself from the burden of paperwork and focus on growing your business.',
  keywords: ['bookkeeping', 'financial management', 'small business', 'accounting', 'QuickBooks', 'payroll'],
  authors: [{ name: 'Clover Consulting' }],
  openGraph: {
    title: 'Clover Consulting - Expert Bookkeeping & Financial Management',
    description: 'Professional bookkeeping and financial management services for small business owners.',
    type: 'website',
    url: 'https://clovercanhelp.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

