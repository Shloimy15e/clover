import './globals.css'

import type { Metadata } from 'next'

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}

