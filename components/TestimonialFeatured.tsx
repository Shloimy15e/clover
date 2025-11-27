'use client'

import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'
import { useRef } from 'react'

interface TestimonialFeaturedProps {
  badge: string
  title: string
  quote: string
  authorName: string
  authorTitle: string
  authorInitial: string
  variant?: 'default' | 'alt'
}

export function TestimonialFeatured({
  badge,
  title,
  quote,
  authorName,
  authorTitle,
  authorInitial,
  variant = 'default',
}: TestimonialFeaturedProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="testimonials" className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
            {/* Decorative Quote Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-50 flex items-center justify-center"
            >
              <Quote className="w-16 h-16 text-primary-600" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                {badge}
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                {title}
              </h3>

              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
                "{quote}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {authorInitial}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{authorName}</div>
                  <div className="text-gray-600">{authorTitle}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

