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
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Ownova</h2>
            <p className="text-gray-600 mb-8">
              We combine cutting-edge AI technology with deep industry expertise to deliver
              transformative automation solutions for your business.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
            className="relative h-[600px] rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1531746790731-6bf607872178?auto=format&fit=crop&w=800"
              alt="Team Collaboration"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Expert Team</h3>
              <p>Our team of AI specialists is dedicated to your success</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}