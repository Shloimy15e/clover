'use client'

import { ArrowRight, Award, TrendingUp, Users } from 'lucide-react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="home" className="relative flex items-center overflow-hidden pt-36 pb-16 md:pt-28 lg:pt-32 2xl:pt-20">
      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-block mb-4 md:mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary-100 text-primary-700 rounded-full text-xs md:text-sm font-semibold">
                <Award className="w-3 h-3 md:w-4 md:h-4" />
                Bookkeeping & Financial Management
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 md:mb-6 leading-tight"
            >
              Business owners shouldn't spend{' '}
              <span className="gradient-text">4 hours a day</span> on paperwork
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed"
            >
              We take complete control of your books. So you can focus on the parts of your business you're good at — and make more money. Enjoy responsive, personal service from bookkeepers who care.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-10 sm:justify-center lg:justify-start"
            >
              <Link href="/contact" className="btn btn-primary btn-large group">
                Book a Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="btn btn-secondary btn-large">
                Learn More
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-3 gap-3 sm:gap-6"
            >
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 md:mb-2">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-primary-600" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-900">47+</div>
                <div className="text-xs md:text-sm text-gray-600">Companies</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 md:mb-2">
                  <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-primary-600" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-900">18</div>
                <div className="text-xs md:text-sm text-gray-600">Industries</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1 md:mb-2">
                  <Award className="w-4 h-4 md:w-5 md:h-5 text-primary-600" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-900">98%</div>
                <div className="text-xs md:text-sm text-gray-600">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Decorative Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <Image
                src="/images/main-image-pic-1024x683.png"
                alt="Professional bookkeeping"
                width={1024}
                height={683}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-400 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-primary-600 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

