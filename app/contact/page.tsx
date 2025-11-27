'use client'

import { BeforeAfter } from '@/components/BeforeAfter'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <BeforeAfter />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

