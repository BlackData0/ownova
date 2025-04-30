'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    title: 'Custom AI Solutions',
    description: 'Tailored artificial intelligence solutions designed specifically for your business needs.'
  },
  {
    title: 'Process Automation',
    description: 'Streamline your operations with intelligent automation that learns and adapts.'
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and monitoring for your AI systems.'
  },
  {
    title: 'Scalable Solutions',
    description: 'Solutions that grow with your business, from startup to enterprise scale.'
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <h2 className="section-title mb-6">Why Choose Ownova</h2>
            <p className="text-lg text-gray-600 mb-8">
              We combine cutting-edge AI technology with deep industry expertise to deliver
              transformative automation solutions for your business.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/ownova-01.png"
                alt="AI Technology Innovation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-500/10 to-transparent" />
              <motion.div
                className="absolute inset-0 flex items-end p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="glass-card bg-black/30 p-6 rounded-xl w-full">
                  <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
                  <p className="text-white/90">Our team of AI specialists is dedicated to your success</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}