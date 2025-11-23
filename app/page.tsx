'use client'

import { ClientLogos } from '@/components/ClientLogos'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { TestimonialFeatured } from '@/components/TestimonialFeatured'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ClientLogos />
        
        {/* Quick Overview Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Link href="/about" className="group">
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">About Us</h3>
                  <p className="text-gray-600 mb-4">Learn why 98% of our clients report increased profits and high satisfaction.</p>
                  <span className="text-primary-600 font-semibold group-hover:underline">Learn More →</span>
                </div>
              </Link>
              
              <Link href="/services" className="group">
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">Our Services</h3>
                  <p className="text-gray-600 mb-4">From bookkeeping to tax prep, we handle everything for your business.</p>
                  <span className="text-primary-600 font-semibold group-hover:underline">View Services →</span>
                </div>
              </Link>
              
              <Link href="/contact" className="group">
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 h-full">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">Get Started</h3>
                  <p className="text-gray-600 mb-4">Ready to free yourself from bookkeeping? Let's talk.</p>
                  <span className="text-primary-600 font-semibold group-hover:underline">Contact Us →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <TestimonialFeatured
          badge="Client Success Story"
          title="&quot;Saved me thousands&quot;"
          quote="They've saved me thousands of dollars, no question. I used to be so busy with invoices and estimates. I tried a different bookkeeping firm but was frustrated by the lack of communication. With Clover, I know I'm not working for nothing — I'm not losing millions down some big hole. I can do what I'm good at. Because they're very diligent. They don't do the work to cross it off their list. They really care to make sure I'm making money and not losing money."
          authorName="Moty Deblinger"
          authorTitle="Founder & CEO at W Networking"
          authorInitial="M"
        />
      </main>
      <Footer />
    </>
  )
}

