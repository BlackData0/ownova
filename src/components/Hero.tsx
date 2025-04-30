'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 md:pt-20 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          <motion.div 
            className="flex-1 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transform Your Business with AI Automation
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Leverage cutting-edge artificial intelligence solutions to streamline your operations and accelerate growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.a
                href="#services"
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-2xl mx-auto">
              <Image
                src="/ownova-01.png"
                alt="AI Technology Illustration"
                fill
                className="object-contain rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-500/10 to-transparent rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}