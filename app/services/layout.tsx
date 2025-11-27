import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Comprehensive bookkeeping services including accounts payable & receivable, payroll management, tax preparation, QuickBooks setup, and financial reporting.',
  keywords: ['bookkeeping services', 'payroll management', 'tax preparation', 'QuickBooks setup', 'accounts payable', 'accounts receivable', 'financial reporting'],
  openGraph: {
    title: 'Our Services | Clover Consulting',
    description: 'Comprehensive bookkeeping services for small businesses - from payroll to tax prep.',
    url: 'https://clovercanhelp.com/services',
    images: [
      {
        url: '/images/main-image-pic-1024x683.png',
        width: 1024,
        height: 683,
        alt: 'Clover Consulting Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | Clover Consulting',
    description: 'Comprehensive bookkeeping services for small businesses - from payroll to tax prep.',
    images: ['/images/main-image-pic-1024x683.png'],
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
