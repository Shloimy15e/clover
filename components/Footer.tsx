'use client'

import { Clover, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Clover className="w-10 h-10 text-primary-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-2xl font-bold">Clover Consulting</span>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Expert bookkeeping and financial management for small business owners. Free yourself from the burden of paperwork and focus on growing your business.
            </p>
            <div className="space-y-3">
              <a
                href="tel:845-533-6700"
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>845-533-6700 Ext. 101</span>
              </a>
              <a
                href="mailto:how@clovercanhelp.com"
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>how@clovercanhelp.com</span>
              </a>
              <a
                href="https://maps.google.com/?q=67+Route+59+Suite+309+Spring+Valley+NY+10977"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-gray-400 hover:text-primary-400 transition-colors"
              >
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>67 Route 59, Suite 309<br />Spring Valley NY 10977</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Bookkeeping</li>
              <li>QuickBooks Setup</li>
              <li>Payroll Management</li>
              <li>Tax Preparation</li>
              <li>Financial Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Clover Consulting. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

