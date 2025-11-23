'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, TrendingDown, PhoneOff, Calculator } from 'lucide-react'

export function Problems() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const problems = [
    {
      icon: Clock,
      title: '"I HAVE NO TIME"',
      description: 'I find myself busy with nitty gritty finances — and having no time to expand my business. I need the paperwork taken care of so I can focus on the stuff that only I can do.',
    },
    {
      icon: TrendingDown,
      title: '"AM I TURNING A PROFIT?"',
      description: 'My books are a mess. I have no clue what my numbers look like at the end of the day. I\'m probably losing money down some hole…',
    },
    {
      icon: PhoneOff,
      title: '"I CAN\'T REACH MY BOOKKEEPER"',
      description: 'I\'m outsourcing my bookkeeping, but it can take 3 days to get a response from the firm. I never know what\'s going on and can\'t get in touch with them when there\'s an issue!',
    },
    {
      icon: Calculator,
      title: '"I\'M NOT GOOD WITH NUMBERS"',
      description: 'Finances are not my strength. I could hire a secretary, but if I don\'t know how to keep the books myself — how can I know if they\'re doing it right?',
    },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            You're a hardworking business owner
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Like 66% of small business owners and entrepreneurs, your finances are a headache you can't shake off.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center">
                    <problem.icon className="w-8 h-8 text-primary-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-accent-500 text-white p-8 md:p-12 rounded-3xl text-center shadow-2xl"
        >
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-2">
            There's a way to solve this headache:
          </h3>
          <p className="text-4xl md:text-5xl font-display font-bold">
            meet Clover Consulting
          </p>
        </motion.div>
      </div>
    </section>
  )
}

