'use client'

import { profileData } from '@/data/profile'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Globe, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-executive-200 shadow-xl"
          >
            <img
              src="https://media.licdn.com/dms/image/v2/C4D03AQG51t3A-BeKiQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1557934019866?e=2147483647&v=beta&t=U_y9Wg8gb4-2khXfkayAkHd7o5tpJ7OVMXTVoo8rtnI"
              alt="Gabriel Tamura - Head de Tecnologia"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-4"
          >
            {profileData.name}
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl gradient-text font-semibold mb-6"
          >
            {profileData.title}
          </motion.p>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            {profileData.about}
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center space-x-2 text-gray-600 hover:text-executive-700 transition-colors duration-200"
            >
              <Mail size={20} />
              <span>{profileData.email}</span>
            </a>
            <a
              href={`tel:${profileData.phone}`}
              className="flex items-center space-x-2 text-gray-600 hover:text-executive-700 transition-colors duration-200"
            >
              <Phone size={20} />
              <span>{profileData.phone}</span>
            </a>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin size={20} />
              <span>{profileData.location}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex justify-center space-x-4 mb-12"
          >
            {profileData.github && (
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-executive-100 hover:text-executive-700 transition-all duration-200"
              >
                <Github size={24} />
              </a>
            )}
            {profileData.linkedin && (
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-executive-100 hover:text-executive-700 transition-all duration-200"
              >
                <Linkedin size={24} />
              </a>
            )}
            {profileData.website && (
              <a
                href={profileData.website}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-executive-100 hover:text-executive-700 transition-all duration-200"
              >
                <Globe size={24} />
              </a>
            )}
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={() => scrollToSection('projetos')}
              className="px-8 py-3 bg-executive-700 text-white rounded-lg hover:bg-executive-800 transition-colors duration-200 font-semibold"
            >
              Ver Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="px-8 py-3 border-2 border-executive-700 text-executive-700 rounded-lg hover:bg-executive-700 hover:text-white transition-all duration-200 font-semibold"
            >
              Entrar em Contato
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('sobre')}
            className="flex flex-col items-center text-gray-400 hover:text-executive-700 transition-colors duration-200"
          >
            <span className="text-sm mb-2">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
