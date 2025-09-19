'use client'

import { profileData } from '@/data/profile'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'

export default function About() {
  const { t, getProfileData } = useTranslation()
  const currentProfileData = getProfileData(profileData)
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-executive-600 to-executive-800 mx-auto mb-8"></div>

          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {currentProfileData.about}
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-executive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-executive-700">6+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.yearsExperience')}</h3>
              <p className="text-gray-600">{t('about.yearsExperienceDesc')}</p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-executive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-executive-700">50+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.projectsCompleted')}</h3>
              <p className="text-gray-600">{t('about.projectsCompletedDesc')}</p>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-executive-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-executive-700">20+</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('about.technologies')}</h3>
              <p className="text-gray-600">{t('about.technologiesDesc')}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
