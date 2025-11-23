'use client'

import {
    ArrowRight,
    BarChart3,
    Briefcase,
    CreditCard,
    DollarSign,
    FileCheck,
    FileText,
    Keyboard,
    Lightbulb,
    RefreshCw,
    Rocket,
    Scale,
    Search,
    Shield,
    Tag,
    Target,
    Users,
    Wallet
} from 'lucide-react'
import { motion, useInView } from 'framer-motion'

import Link from 'next/link'
import { useRef } from 'react'

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    { icon: FileText, label: 'QuickBooks Setup & Restructuring' },
    { icon: FileCheck, label: 'Invoicing' },
    { icon: DollarSign, label: 'Cash Flow' },
    { icon: BarChart3, label: 'Reports & Tracking' },
    { icon: Tag, label: 'Pricing Structure' },
    { icon: Scale, label: 'Legal Advice' },
    { icon: Keyboard, label: 'Data Entry' },
    { icon: Users, label: 'Payroll' },
    { icon: RefreshCw, label: 'Reconciliation' },
    { icon: Search, label: 'Expense Audits' },
    { icon: Rocket, label: 'Startup Coaching' },
    { icon: Lightbulb, label: 'Business Idea Execution' },
    { icon: CreditCard, label: 'Payment Processing' },
    { icon: FileCheck, label: 'Tax Prep' },
    { icon: Wallet, label: 'Payables & Receivables' },
    { icon: Target, label: 'Consulting' },
    { icon: Briefcase, label: 'Hiring' },
    { icon: Shield, label: 'Business Insurance' },
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Clover takes care of… <span className="gradient-text">everything</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive bookkeeping and financial services for your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-lg flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900">{service.label}</h4>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center bg-gradient-to-r from-primary-50 to-accent-50 p-8 rounded-2xl"
        >
          <p className="text-lg text-gray-700 mb-6">
            Need something you don't see here? Give us a call and we'll see if we can help you!
          </p>
          <Link href="/contact" className="btn btn-primary group">
            Book a Call
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

