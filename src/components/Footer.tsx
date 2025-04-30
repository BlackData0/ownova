'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image 
                src="/logo.png"
                alt="Ownova Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ownova
              </span>
            </Link>
            <p className="text-gray-600 leading-relaxed">
              Empowering businesses with cutting-edge AI automation solutions for a smarter future.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                'AI Integration',
                'Process Automation',
                'Data Analytics',
                'Cloud Solutions'
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="#services"
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-600">
              <li>Email: info@ownova.ai</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: New York, USA</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {currentYear} Ownova. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="/privacy"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}