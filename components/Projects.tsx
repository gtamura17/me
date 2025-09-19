'use client'

import { profileData } from '@/data/profile'
import { useTranslation } from '@/hooks/useTranslation'
import { motion } from 'framer-motion'
import { Building2, Cloud, Code, Database, ExternalLink, Github, Globe, Layers, Sparkles, Star } from 'lucide-react'

const techIcons = {
  'React': Code,
  'Next.js': Code,
  'TypeScript': Code,
  'Node.js': Database,
  'PostgreSQL': Database,
  'MongoDB': Database,
  'AWS': Cloud,
  'Docker': Cloud,
  'Vue.js': Code,
  'Express': Database,
  'Socket.io': Code,
  'JWT': Code,
  'Chart.js': Code,
  'OpenWeather API': Code,
  'Leaflet': Code,
  'PWA': Code,
  'Stripe': Code,
}

const clientIcons = {
  'Samsung E-commerce': Layers,
  'Mary Kay': Star,
  'Dengo Chocolates': Sparkles,
  'Projetos Enterprise': Building2,
  'Monitfy': Code,
  'Lomadee': Globe,
}

export default function Projects() {
  const { t, getProfileData, getProjectsData } = useTranslation()
  const currentProfileData = getProfileData(profileData)
  const currentProjects = getProjectsData(profileData.projects)
  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {t('projects.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-executive-600 to-executive-800 mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project: any, index: number) => (
              <motion.div
                key={project.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
              >
                <div className="h-48 bg-gradient-to-br from-executive-100 to-executive-200 flex items-center justify-center">
                  <div className="text-center">
                    {clientIcons[project.name as keyof typeof clientIcons] ? (
                      <>
                        <div className="w-16 h-16 mx-auto mb-3 text-executive-700">
                          {(() => {
                            const IconComponent = clientIcons[project.name as keyof typeof clientIcons]
                            return <IconComponent className="w-full h-full" />
                          })()}
                        </div>
                        <span className="text-executive-700 font-semibold text-lg">{project.name}</span>
                      </>
                    ) : (
                      <>
                        <Code className="w-12 h-12 text-executive-700 mx-auto mb-2" />
                        <span className="text-executive-700 font-semibold">{project.name}</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('projects.technologies')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech: string) => {
                        const IconComponent = techIcons[tech as keyof typeof techIcons] || Code
                        return (
                          <span
                            key={tech}
                            className="flex items-center space-x-1 px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                          >
                            <IconComponent size={12} />
                            <span>{tech}</span>
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex-1 justify-center"
                      >
                        <Github size={16} />
                        <span className="text-sm font-medium">{t('projects.code')}</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-executive-700 text-white rounded-lg hover:bg-executive-800 transition-colors duration-200 flex-1 justify-center"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">{t('projects.demo')}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-executive-50 to-executive-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('projects.moreProjects')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('projects.moreProjectsDesc')}
              </p>
              <a
                href={currentProfileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-executive-700 text-white rounded-lg hover:bg-executive-800 transition-colors duration-200 font-semibold"
              >
                <Github size={20} />
                <span>{t('projects.viewOnGitHub')}</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
