'use client'

import { profileData } from '@/data/profile'
import { motion } from 'framer-motion'
import { Github, Heart, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container-max section-padding">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">{profileData.name}</h3>
            <p className="text-gray-400">{profileData.title}</p>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {profileData.github && (
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github size={24} />
              </a>
            )}
            {profileData.linkedin && (
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin size={24} />
              </a>
            )}
            <a
              href={`mailto:${profileData.email}`}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © {currentYear} {profileData.name}. Feito com{' '}
              <Heart className="inline w-4 h-4 text-red-500" /> e{' '}
              <span className="text-executive-400">Next.js</span>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
