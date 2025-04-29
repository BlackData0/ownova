'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Transform Your Business with{' '}
              <span className="text-blue-600">AI Automation</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Leverage cutting-edge artificial intelligence solutions to streamline your operations and accelerate growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.a
                href="#services"
                className="btn-secondary"
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
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <Image
                src="https://via.placeholder.com/600x600?text=AI+Technology"
                alt="AI Technology Illustration"
                fill
                className="object-cover rounded-2xl shadow-xl"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}