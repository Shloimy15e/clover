'use client'

import { motion, useInView } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

export function ValueProp() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const benefits = [
    'Bookkeeping',
    'Invoicing',
    'Pricing',
    'Payroll',
    'Paperwork',
    'and more...',
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-8">
            Free yourself from the{' '}
            <span className="gradient-text">burden of bookkeeping</span>
          </h2>

          <div className="mb-8">
            <p className="text-xl text-gray-700 mb-4">
              Hand your{' '}
              <span className="font-semibold text-primary-600">
                {benefits.slice(0, -1).join(', ')}
              </span>
              , {benefits[benefits.length - 1]} to Clover Consulting.
            </p>
            <p className="text-lg text-gray-600">
              And discover why <strong className="text-primary-600">98%</strong> of our clients report increased profits and high satisfaction.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-2xl mb-8"
          >
            <div className="flex items-start gap-3 text-left max-w-2xl mx-auto">
              <CheckCircle2 className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">
                <strong className="text-primary-700">We've served 47+ companies</strong> across 18 industries. So you can rely on our experience and knowledge to keep your books squeaky clean — and in the green.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/contact" className="btn btn-primary btn-large group">
              Book a Call
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

