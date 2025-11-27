'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function ClientLogos() {
  // Actual client logos from clovercanhelp.com
  const clientLogos = [
    { name: 'W Networking', logo: 'https://clovercanhelp.com/wp-content/uploads/2022/06/IMG-20191029-WA0119.png' },
    { name: 'Client 2', logo: 'https://clovercanhelp.com/wp-content/uploads/2022/06/Logo-2_page-0001.png' },
    { name: 'WireTex', logo: 'https://clovercanhelp.com/wp-content/uploads/2022/06/WireTex-Logo-1_page-0001.png' },
    { name: 'Client 4', logo: 'https://clovercanhelp.com/wp-content/uploads/2022/06/Screen-Shot-2020-03-05-at-11.02.09-AM-1.png' },
    { name: 'Client 5', logo: 'https://clovercanhelp.com/wp-content/uploads/2022/06/Image_3249.png' },
    { name: 'Client 6', logo: 'https://clovercanhelp.com/wp-content/uploads/2022/06/1531170391782.png' },
    { name: 'Client 7', logo: 'https://clovercanhelp.com/wp-content/uploads/2022/06/226.png' },
    { name: 'Upscale Concrete Coating', logo: 'https://clovercanhelp.com/wp-content/uploads/2022/06/Upscale-Concrete-Coating-01-1.png' },
    { name: 'Home Worx', logo: 'https://clovercanhelp.com/wp-content/uploads/2022/06/Logo1.png' },
  ]

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...clientLogos, ...clientLogos]

  return (
    <section className="py-12 md:py-16 bg-transparent overflow-hidden">
      <div className="container-custom mb-6">
        <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider">Proud to work with</p>
      </div>
      
      {/* Sliding logos with fade edges */}
      <div className="relative">
        {/* Left fade gradient - matches page background */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-r from-primary-50/90 to-transparent z-10 pointer-events-none" />
        
        {/* Right fade gradient - matches page background */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-48 bg-gradient-to-l from-primary-50/90 to-transparent z-10 pointer-events-none" />

        {/* Scrolling container */}
        <div className="flex">
          <motion.div
            className="flex gap-6 md:gap-10 items-center"
            animate={{
              x: [0, -70 * clientLogos.length * 2.5],
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
                className="flex-shrink-0 w-36 h-24 md:w-44 md:h-28 bg-white rounded-xl shadow-md flex items-center justify-center p-2"
              >
                <Image
                  src={logo.logo}
                  alt={logo.name}
                  width={280}
                  height={280}
                  className=" object-contain  transition-all duration-300"
                  unoptimized
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

