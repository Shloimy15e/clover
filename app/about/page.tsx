'use client'

import { AboutHero } from '@/components/AboutHero'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { TestimonialFeatured } from '@/components/TestimonialFeatured'
import { ValueProp } from '@/components/ValueProp'
import { WhyChoose } from '@/components/WhyChoose'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutHero />
        <ValueProp />
        <TestimonialFeatured
          badge="Client Success Story"
          title="&quot;Saved me thousands&quot;"
          quote="They've saved me thousands of dollars, no question. I used to be so busy with invoices and estimates. I tried a different bookkeeping firm but was frustrated by the lack of communication. With Clover, I know I'm not working for nothing — I'm not losing millions down some big hole. I can do what I'm good at. Because they're very diligent. They don't do the work to cross it off their list. They really care to make sure I'm making money and not losing money. They'll question each bill, make sure it's the cheapest I can get. They're already working on solutions before I know a problem exists! They're available 24/6. Outsourcing your bookkeeping is amazing — I'd highly recommend Clover Consulting to other small business owners because they're detail-oriented, communicative, and on top of things."
          authorName="Moty Deblinger"
          authorTitle="Founder & CEO at W Networking"
          authorInitial="M"
        />
        <WhyChoose />
        <TestimonialFeatured
          badge="Client Success Story"
          title="&quot;Clover takes the headache of financials off my head&quot;"
          quote="When I opened my business, I knew I needed someone to do the bookkeeping. Speaking to clients, field work — that's where I'm happy. I need the numbers part off my head. So I sat down with David and was impressed by his thoroughness. He did everything — he took the headache of financials off my head. So I could focus on bringing in new clients, expanding my knowledge, and building relationships. Everyone I referred to him is very, very happy. He's a strategic, deep thinker. He'll give you good advice. If you have any questions, he knows the answers. He saves me over 4 hours every job. I have clarity and focus for work because I know I don't need to worry at all about my finances. My first year in business with him was an incredibly profitable year, and I'm sticking with him."
          authorName="Heshel Danciger"
          authorTitle="CEO & Founder, Wiretex LVS Solutions"
          authorInitial="H"
          variant="alt"
        />
      </main>
      <Footer />
    </>
  )
}

