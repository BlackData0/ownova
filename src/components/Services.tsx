'use client'

import { motion } from 'framer-motion'
import { IconCloud, IconRobot, IconBrain, IconChart } from '@/components/Icons'

const services = [
  {
    title: 'AI Integration',
    description: 'Seamlessly integrate AI solutions into your existing business processes',
    icon: IconRobot,
  },
  {
    title: 'Process Automation',
    description: 'Automate repetitive tasks and workflows to increase efficiency',
    icon: IconBrain,
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with AI-powered analytics',
    icon: IconChart,
  },
  {
    title: 'Cloud Solutions',
    description: 'Scale your AI operations with secure and reliable cloud infrastructure',
    icon: IconCloud,
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Discover how our AI solutions can transform your business operations
            and drive sustainable growth.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-tr from-blue-600/10 to-purple-600/10 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}