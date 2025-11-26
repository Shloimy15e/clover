'use client'

import { motion, useInView } from 'framer-motion'
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
  Wallet,
} from 'lucide-react'

import Link from 'next/link'
import { useRef } from 'react'

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const services = [
    {
      icon: FileText,
      label: 'QuickBooks Setup & Restructuring',
      description: 'Expert setup and optimization of your QuickBooks system for maximum efficiency',
    },
    {
      icon: FileCheck,
      label: 'Invoicing',
      description: 'Professional invoice creation, tracking, and follow-up to ensure timely payments',
    },
    {
      icon: DollarSign,
      label: 'Cash Flow Management',
      description: 'Monitor and optimize your cash flow to keep your business running smoothly',
    },
    {
      icon: BarChart3,
      label: 'Reports & Tracking',
      description: 'Detailed financial reports and KPIs to understand your business performance',
    },
    {
      icon: Tag,
      label: 'Pricing Structure',
      description: 'Strategic pricing advice to maximize profitability while staying competitive',
    },
    {
      icon: Scale,
      label: 'Legal Advice',
      description: 'Guidance on financial compliance and business structure decisions',
    },
    {
      icon: Keyboard,
      label: 'Data Entry',
      description: 'Accurate and timely entry of all your financial transactions and records',
    },
    {
      icon: Users,
      label: 'Payroll',
      description: 'Complete payroll management including taxes, benefits, and compliance',
    },
    {
      icon: RefreshCw,
      label: 'Reconciliation',
      description: 'Regular bank and account reconciliation to catch discrepancies early',
    },
    {
      icon: Search,
      label: 'Expense Audits',
      description: 'Thorough review of expenses to identify savings and eliminate waste',
    },
    {
      icon: Rocket,
      label: 'Startup Coaching',
      description: 'Guidance for new businesses on financial setup and best practices',
    },
    {
      icon: Lightbulb,
      label: 'Business Idea Execution',
      description: 'Turn your business ideas into reality with our strategic planning support',
    },
    {
      icon: CreditCard,
      label: 'Payment Processing',
      description: 'Set up and manage efficient payment systems for your customers',
    },
    {
      icon: FileCheck,
      label: 'Tax Prep',
      description: 'Year-round tax preparation and planning to minimize your tax burden',
    },
    {
      icon: Wallet,
      label: 'Payables & Receivables',
      description: 'Manage what you owe and what you\'re owed for optimal cash position',
    },
    {
      icon: Target,
      label: 'Consulting',
      description: 'Strategic business advice to help you make informed financial decisions',
    },
    {
      icon: Briefcase,
      label: 'Hiring Support',
      description: 'Financial guidance on hiring decisions, costs, and employee management',
    },
    {
      icon: Shield,
      label: 'Business Insurance',
      description: 'Advice on protecting your business with the right insurance coverage',
    },
  ]

  // Split services into rows of varying sizes for alternating animation
  const rows = [
    services.slice(0, 3),
    services.slice(3, 6),
    services.slice(6, 9),
    services.slice(9, 12),
    services.slice(12, 15),
    services.slice(15, 18),
  ]

  return (
    <section id="services" className="section-padding bg-white overflow-hidden">
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
            Comprehensive bookkeeping and financial services tailored to your business needs
          </p>
        </motion.div>

        <div className="space-y-6 mb-12">
          {rows.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              initial={{ opacity: 0, x: rowIndex % 2 === 0 ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: rowIndex * 0.15, ease: 'easeOut' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {row.map((service, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center group-hover:from-primary-500 group-hover:to-primary-600 transition-all duration-300">
                      <service.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{service.label}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
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

