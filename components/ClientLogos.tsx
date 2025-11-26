'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function ClientLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Placeholder logos - replace with actual client logo images
  const placeholderLogos = [
    { name: 'Client 1' },
    { name: 'Client 2' },
    { name: 'Client 3' },
    { name: 'Client 4' },
    { name: 'Client 5' },
    { name: 'Client 6' },
    { name: 'Client 7' },
    { name: 'Client 8' },
    { name: 'Client 9' },
    { name: 'Client 10' },
    { name: 'Client 11' },
    { name: 'Client 12' },
  ]

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...placeholderLogos, ...placeholderLogos]

  return (
    <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
      {/* Sliding logos with fade edges */}
      <div className="relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex overflow-hidden">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{
              x: [0, -50 * placeholderLogos.length * 2.5],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-28 h-16 md:w-36 md:h-20 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300"
              >
                {/* Replace with: <Image src="/images/client-logo.png" alt={logo.name} ... /> */}
                <span className="text-gray-400 font-medium text-xs md:text-sm text-center px-2">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

