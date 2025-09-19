'use client'

import { profileData } from '@/data/profile'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { Github, Globe, Linkedin, Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact() {
  const { t, getProfileData } = useTranslation()
  const currentProfileData = getProfileData(profileData)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted')
  }

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-executive-600 to-executive-800 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {t('contact.contactInfo')}
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-executive-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-executive-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.email')}</p>
                    <a
                      href={`mailto:${currentProfileData.email}`}
                      className="text-gray-900 hover:text-executive-600 transition-colors duration-200"
                    >
                      {currentProfileData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-executive-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-executive-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.phone')}</p>
                    <a
                      href={`tel:${currentProfileData.phone}`}
                      className="text-gray-900 hover:text-executive-600 transition-colors duration-200"
                    >
                      {currentProfileData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-executive-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-executive-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{t('contact.location')}</p>
                    <p className="text-gray-900">{currentProfileData.location}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('contact.socialNetworks')}
                </h4>
                <div className="flex space-x-4">
                  {currentProfileData.github && (
                    <a
                      href={currentProfileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-executive-100 hover:text-executive-600 transition-all duration-200"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {currentProfileData.linkedin && (
                    <a
                      href={currentProfileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-executive-100 hover:text-executive-600 transition-all duration-200"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {currentProfileData.website && (
                    <a
                      href={currentProfileData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-executive-100 hover:text-executive-600 transition-all duration-200"
                    >
                      <Globe size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t('contact.sendMessage')}
                </h3>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-500 focus:border-transparent transition-all duration-200"
                        placeholder={t('contact.placeholders.name')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-500 focus:border-transparent transition-all duration-200"
                        placeholder={t('contact.placeholders.email')}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-500 focus:border-transparent transition-all duration-200"
                      placeholder={t('contact.placeholders.subject')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.message')}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-executive-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder={t('contact.placeholders.message')}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-executive-600 text-white rounded-lg hover:bg-executive-700 transition-colors duration-200 font-semibold"
                  >
                    <Send size={20} />
                    <span>{t('contact.sendMessage')}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
