'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { X, Check } from 'lucide-react'

export function BeforeAfter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const comparisons = [
    {
      before: 'I hope I\'m even turning a profit',
      after: 'I know I\'m not losing money down a hole I don\'t know of',
    },
    {
      before: 'I spend too much time on paperwork',
      after: 'I have the time and focus to make my clients happy',
    },
    {
      before: 'I never know what\'s going on with my finances',
      after: 'I know Clover has my finances under control',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Work with Clover and <span className="gradient-text">grow your business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Replace your worry with peace of mind — and more profit.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {comparisons.map((comparison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 divide-x divide-gray-200">
                {/* Before */}
                <div className="p-8 bg-gray-50">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <X className="w-5 h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-sm font-semibold mb-2 uppercase tracking-wide">Before</p>
                      <p className="text-gray-600 line-through">{comparison.before}</p>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="p-8 bg-gradient-to-br from-primary-50 to-accent-50">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-primary-700 text-sm font-semibold mb-2 uppercase tracking-wide">After</p>
                      <p className="text-gray-900 font-semibold">{comparison.after}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

