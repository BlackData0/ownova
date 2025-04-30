'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    title: 'AI Integration',
    description: 'Seamlessly integrate advanced machine learning models and neural networks into your workflow.'
  },
  {
    title: 'Process Automation',
    description: 'Leverage cutting-edge AI algorithms to automate complex business processes with precision.'
  },
  {
    title: 'Smart Analytics',
    description: 'Harness the power of deep learning to extract meaningful insights from your data.'
  },
  {
    title: 'Adaptive Solutions',
    description: 'Self-learning systems that evolve and improve with your business needs.'
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
            <h2 className="section-title mb-6">Advanced AI Solutions</h2>
            <p className="text-lg text-gray-600 mb-8">
              We harness the latest advancements in artificial intelligence and machine learning
              to create intelligent automation solutions that transform your business operations.
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
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden glass-card p-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-purple-500/10 to-transparent" />
              <div className="relative h-full w-full">
                <Image
                  src="/ownova-01.png"
                  alt="AI Technology Visualization"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/10 to-transparent" />
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}