import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Ready to free yourself from bookkeeping? Contact Clover Consulting today for a consultation. Get expert financial management for your small business.',
  keywords: ['contact clover consulting', 'bookkeeping consultation', 'free consultation', 'small business help'],
  openGraph: {
    title: 'Contact Us | Clover Consulting',
    description: 'Ready to free yourself from bookkeeping? Contact us for a consultation.',
    url: 'https://clovercanhelp.com/contact',
    images: [
      {
        url: '/images/main-image-pic-1024x683.png',
        width: 1024,
        height: 683,
        alt: 'Contact Clover Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Clover Consulting',
    description: 'Ready to free yourself from bookkeeping? Contact us for a consultation.',
    images: ['/images/main-image-pic-1024x683.png'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
