'use client'

import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Problems } from '@/components/Problems'
import { ValueProp } from '@/components/ValueProp'
import { TestimonialFeatured } from '@/components/TestimonialFeatured'
import { Services } from '@/components/Services'
import { WhyChoose } from '@/components/WhyChoose'
import { HowItWorks } from '@/components/HowItWorks'
import { BeforeAfter } from '@/components/BeforeAfter'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <ValueProp />
        <TestimonialFeatured
          badge="Client Success Story"
          title=""Saved me thousands""
          quote="They've saved me thousands of dollars, no question. I used to be so busy with invoices and estimates. I tried a different bookkeeping firm but was frustrated by the lack of communication. With Clover, I know I'm not working for nothing — I'm not losing millions down some big hole. I can do what I'm good at. Because they're very diligent. They don't do the work to cross it off their list. They really care to make sure I'm making money and not losing money."
          authorName="Moty Deblinger"
          authorTitle="Founder & CEO at W Networking"
          authorInitial="M"
        />
        <Services />
        <WhyChoose />
        <TestimonialFeatured
          badge="Client Success Story"
          title=""Clover takes the headache of financials off my head""
          quote="When I opened my business, I knew I needed someone to do the bookkeeping. Speaking to clients, field work — that's where I'm happy. I need the numbers part off my head. So I sat down with David and was impressed by his thoroughness. He did everything — he took the headache of financials off my head. So I could focus on bringing in new clients, expanding my knowledge, and building relationships. He saves me over 4 hours every job. I have clarity and focus for work because I know I don't need to worry at all about my finances."
          authorName="Heshel Danciger"
          authorTitle="CEO & Founder, Wiretex LVS Solutions"
          authorInitial="H"
          variant="alt"
        />
        <HowItWorks />
        <TestimonialFeatured
          badge="Client Success Story"
          title=""We've grown since working with Clover""
          quote="My business has definitely grown since working with Clover. We can move faster to satisfy clients, we can take on more projects, bigger projects. Because someone reliable is taking care of the books. I recommend them 100% — no, 101%. Because they do everything they say, and they take responsibility for everything."
          authorName="Ari Braun"
          authorTitle="Founder & CEO of Home Worx"
          authorInitial="A"
        />
        <BeforeAfter />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

