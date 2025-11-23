'use client'

import { Navbar } from '@/components/Navbar'
import { Services } from '@/components/Services'
import { HowItWorks } from '@/components/HowItWorks'
import { TestimonialFeatured } from '@/components/TestimonialFeatured'
import { Footer } from '@/components/Footer'

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Services />
        <HowItWorks />
        <TestimonialFeatured
          badge="Client Success Story"
          title="&quot;We've grown since working with Clover&quot;"
          quote="My business has definitely grown since working with Clover. We can move faster to satisfy clients, we can take on more projects, bigger projects. Because someone reliable is taking care of the books. I recommend them 100% — no, 101%. Because they do everything they say, and they take responsibility for everything."
          authorName="Ari Braun"
          authorTitle="Founder & CEO of Home Worx"
          authorInitial="A"
        />
      </main>
      <Footer />
    </>
  )
}

