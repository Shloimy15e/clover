import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Clover Consulting - where 98% of clients report increased profits. Discover our mission to free small business owners from bookkeeping burdens.',
  keywords: ['about clover consulting', 'bookkeeping team', 'financial experts', 'small business consultants'],
  openGraph: {
    title: 'About Us | Clover Consulting',
    description: 'Learn about Clover Consulting - where 98% of clients report increased profits.',
    url: 'https://clovercanhelp.com/about',
    images: [
      {
        url: '/images/Main-image-about-page-2048x1237.png',
        width: 2048,
        height: 1237,
        alt: 'About Clover Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Clover Consulting',
    description: 'Learn about Clover Consulting - where 98% of clients report increased profits.',
    images: ['/images/Main-image-about-page-2048x1237.png'],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
