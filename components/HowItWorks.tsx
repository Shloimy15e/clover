'use client'

import { Coffee, FileCheck, Sparkles, TrendingUp } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

import { useRef } from 'react'

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const steps = [
    {
      number: 1,
      icon: Coffee,
      title: 'Get-to-Know-You Consult',
      description: 'Because we don\'t take just any clients, we\'ll meet to see if we\'re a good fit. We\'ll discuss the business worries that tie up your time and keep you up at night. Coffee\'s on us.',
    },
    {
      number: 2,
      icon: FileCheck,
      title: 'Welcome Aboard',
      description: 'We\'ll sign a short agreement to clarify what we\'re taking off your shoulders. (Pretty much everything).',
    },
    {
      number: 3,
      icon: Sparkles,
      title: 'Clean Up',
      description: 'We roll up our sleeves and whip your books into shape. We\'ll review your records, take care of urgent issues, compile our recommended changes, create a custom management process, collect your missing payments, and choose Key Performance Indicators so we can track progress.',
    },
    {
      number: 4,
      icon: TrendingUp,
      title: 'Management',
      description: 'Head off to your next job with confidence that your finances are running like a well-oiled machine. Stop worrying "Am I even turning a profit?" and focus on delighting your clients.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            We can't wait to <span className="gradient-text">meet you</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[60px] top-32 w-0.5 h-24 bg-gradient-to-b from-primary-400 to-accent-400" />
              )}

              <div className="flex flex-col md:flex-row gap-6 mb-12">
                {/* Step Number Circle */}
                <div className="flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-[120px] h-[120px] bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex flex-col items-center justify-center text-white shadow-2xl relative z-10"
                  >
                    <div className="text-5xl font-bold">{step.number}</div>
                  </motion.div>
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex-1 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <step.icon className="w-8 h-8 text-primary-600" />
                    <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

