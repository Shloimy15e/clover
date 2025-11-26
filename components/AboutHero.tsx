'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-200 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
              ABOUT US
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              We take financials{' '}
              <span className="gradient-text">off your head</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-4 leading-relaxed">
              You're good at what you do. We're good at bookkeeping.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-gray-900">
              Together we can grow your business.
            </p>
          </motion.div>

          {/* Decorative Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <Image
                src="/images/Main-image-about-page-2048x1237.png"
                alt="Clover Consulting team"
                width={2048}
                height={1237}
                className="w-full h-auto rounded-2xl shadow-xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
