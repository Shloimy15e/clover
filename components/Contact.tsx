'use client'

import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'

import Image from 'next/image'
import { useRef } from 'react'
import { InlineWidget } from 'react-calendly'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '845-533-6700 Ext. 101',
      href: 'tel:845-533-6700',
    },
    {
      icon: MessageCircle,
      title: 'Text',
      content: '845-533-6700',
      href: 'sms:845-533-6700',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '845-533-6700',
      href: 'https://wa.me/18455336700',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'how@clovercanhelp.com',
      href: 'mailto:how@clovercanhelp.com',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '67 Route 59, Suite 309, Spring Valley NY 10977',
      href: 'https://maps.google.com/?q=67+Route+59+Suite+309+Spring+Valley+NY+10977',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Let's partner to <span className="gradient-text">grow your business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to free yourself from the burden of bookkeeping? Book a free consultation and let's discuss how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Contact info with subtle decorative graphic */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Subtle Decorative Graphic - positioned as background accent */}
            <div className="absolute -top-8 -left-8 w-48 h-48 opacity-30 pointer-events-none">
              <Image
                src="/images/last-section.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-full object-contain"
                aria-hidden="true"
              />
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 relative z-10">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.icon === MapPin ? '_blank' : undefined}
                  rel={method.icon === MapPin ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <method.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{method.title}</h4>
                    <p className="text-gray-600 text-sm">{method.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Calendly Integration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white p-4 rounded-2xl shadow-xl overflow-hidden">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 px-4 pt-2">Book a Free Consultation</h3>
              {/* Replace the URL with your actual Calendly link */}
              <InlineWidget
                url="https://calendly.com/clovercanhelp/"
                styles={{ height: '600px', minWidth: '320px' }}
                pageSettings={{
                  backgroundColor: 'ffffff',
                  hideEventTypeDetails: false,
                  hideLandingPageDetails: false,
                  primaryColor: '138a40',
                  textColor: '1f2937',
                  hideGdprBanner: false,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

