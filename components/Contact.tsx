'use client'

import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import Image from 'next/image'
import { useRef, useState } from 'react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      content: '845-533-6700 Ext. 101',
      href: 'tel:845-533-6700',
    },
    {
      icon: MessageCircle,
      title: 'Text',
      content: '845-533-6700',
      href: 'sms:845-533-6700',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '845-533-6700',
      href: 'https://wa.me/18455336700',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'how@clovercanhelp.com',
      href: 'mailto:how@clovercanhelp.com',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '67 Route 59, Suite 309, Spring Valley NY 10977',
      href: 'https://maps.google.com/?q=67+Route+59+Suite+309+Spring+Valley+NY+10977',
    },
  ]

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
            Let's partner to <span className="gradient-text">grow your business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to free yourself from the burden of bookkeeping? Get in touch and let's discuss how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left side - Contact info with subtle decorative graphic */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Subtle Decorative Graphic - positioned as background accent */}
            <div className="absolute -top-8 -left-8 w-48 h-48 opacity-30 pointer-events-none">
              <Image
                src="/images/last-section.png"
                alt=""
                width={200}
                height={200}
                className="w-full h-full object-contain"
                aria-hidden="true"
              />
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 relative z-10">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.icon === MapPin ? '_blank' : undefined}
                  rel={method.icon === MapPin ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                    <method.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{method.title}</h4>
                    <p className="text-gray-600 text-sm">{method.content}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
                    placeholder="Tell us about your business..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn btn-primary btn-large group"
                >
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

