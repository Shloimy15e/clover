'use client'

import { Navbar } from '@/components/Navbar'
import { Contact } from '@/components/Contact'
import { BeforeAfter } from '@/components/BeforeAfter'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <BeforeAfter />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

