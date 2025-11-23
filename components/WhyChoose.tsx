'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Handshake, GraduationCap, Phone, Briefcase } from 'lucide-react'

export function WhyChoose() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const features = [
    {
      icon: Zap,
      title: 'We're Proactive',
      quote: '"They're working on a solution before I know there's a problem"',
      description: 'We proactively look for and plug leaks in your business. If we see a potential issue with your cash flow, your vendor, or your software, we'll tell you and recommend solutions.',
    },
    {
      icon: Handshake,
      title: 'We're Relationship Focused',
      quote: '"I feel like I'm their only client"',
      description: 'You're not just another account on the conveyor belt. We build warm long-term relationships with each client. Our goal: make each client feel like they're the only one.',
    },
    {
      icon: GraduationCap,
      title: 'We're Specialists',
      quote: '"They're diligent, reliable, and they really know their stuff"',
      description: 'Beside our QuickBooks certifications, we're diligent and detail-oriented. Our expert financial advice saves clients hundreds of thousands of dollars.',
    },
    {
      icon: Phone,
      title: 'We're Available',
      quote: '"They're available 24/6, no games, no politics"',
      description: 'We understand that issues come up outside working hours. That's why you can call or message David on his personal cell. We're here for you anytime as you grow your business.',
    },
    {
      icon: Briefcase,
      title: 'We're More than Bookkeepers',
      quote: '"I know they'll help with anything I need"',
      description: 'We're your trusted advisors. We answer your every question and walk you through the process of building and growing a profitable business.',
      wide: true,
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            You deserve expert bookkeepers who <span className="gradient-text">care</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're grateful for the positive feedback from our clients. It helps us know we're doing this right.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ${
                feature.wide ? 'md:col-span-2' : ''
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-primary-600 font-semibold italic mb-4">{feature.quote}</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

