'use client'

import { profileData } from '@/data/profile'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, Building2, CheckCircle, Cloud, Cpu, Globe, Layers, Sparkles, Wrench } from 'lucide-react'

const skillIcons = {
  'Frontend': Layers,
  'Backend': Cpu,
  'DevOps & Cloud': Cloud,
  'Ferramentas': Building2,
}

export default function Skills() {
  const { t, getTranslatedSkillCategory, getTranslatedSkill } = useTranslation()

  const achievements = [
    { icon: BarChart3, label: t('skills.costReduction'), value: '60%', description: t('skills.infrastructure') },
    { icon: Globe, label: t('skills.experience'), value: '6+', description: t('skills.years') },
    { icon: ArrowUpRight, label: t('skills.optimization'), value: '120%', description: t('skills.efficiency') },
    { icon: Sparkles, label: t('skills.automations'), value: '15+', description: t('skills.tools') },
  ]
  return (
    <section className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            {t('skills.description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200"
            >
              <div className="w-12 h-12 bg-executive-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.value}</div>
              <div className="text-sm font-medium text-gray-600 mb-1">{achievement.label}</div>
              <div className="text-xs text-gray-500">{achievement.description}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {profileData.skills.map((skillGroup, index) => {
              const IconComponent = skillIcons[skillGroup.category as keyof typeof skillIcons] || Wrench

              return (
                <motion.div
                  key={skillGroup.category}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-lg p-6"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-executive-700 rounded-lg flex items-center justify-center mr-3">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {getTranslatedSkillCategory(skillGroup.category)}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center bg-gray-50 rounded-md p-3"
                      >
                        <CheckCircle className="w-4 h-4 text-executive-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-800 font-medium text-sm">{getTranslatedSkill(skill)}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gray-50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              {t('skills.strategicLeadership')}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'costOptimization',
                'teamEfficiency',
                'enterpriseArchitecture',
                'automationAI',
                'itGovernance',
                'roiMetrics'
              ].map((achievementKey, index) => (
                <motion.div
                  key={achievementKey}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{t(`skills.achievements.${achievementKey}.title`)}</h4>
                  <p className="text-gray-700 text-sm mb-2">{t(`skills.achievements.${achievementKey}.description`)}</p>
                  <p className="text-gray-500 text-xs">{t(`skills.achievements.${achievementKey}.details`)}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
