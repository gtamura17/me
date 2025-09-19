'use client'

import { profileData } from '@/data/profile'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { Award, Calendar } from 'lucide-react'

export default function Experience() {
  const { t, getProfileData, getTranslatedDescription, getTranslatedAchievement, getTranslatedPeriod } = useTranslation()
  const currentProfileData = getProfileData(profileData)
  return (
    <section id="experiencia" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('experience.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-executive-600 to-executive-800 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-executive-600 to-executive-800"></div>

            {currentProfileData.experiences.map((exp: any, index: number) => (
              <motion.div
                key={exp.id}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12"
              >
                <div className="absolute left-6 w-4 h-4 bg-executive-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className="ml-16 bg-white rounded-xl shadow-lg p-6 card-hover">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-executive-600 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{getTranslatedPeriod(exp.period)}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {getTranslatedDescription('experiences', exp.id, exp.description)}
                  </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('experience.technologies')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-executive-100 text-executive-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {exp.achievements.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <Award size={16} className="mr-2" />
                        {t('experience.achievements')}
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement: string, idx: number) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-executive-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {getTranslatedAchievement(exp.id, idx, achievement)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
