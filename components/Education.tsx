'use client'

import { profileData } from '@/data/profile'
import { motion } from 'framer-motion'
import { BookOpen, Calendar, GraduationCap } from 'lucide-react'

export default function Education() {
  return (
    <section id="educacao" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Educação & Certificações
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-executive-600 to-executive-800 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {profileData.education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-executive-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-executive-600" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-executive-600 font-semibold mb-2">
                      {edu.institution}
                    </p>

                    <div className="flex items-center text-gray-500 mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{edu.period}</span>
                    </div>

                    {edu.description && (
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {edu.description}
                      </p>
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
            className="mt-12 bg-gradient-to-r from-executive-50 to-executive-100 rounded-xl p-8"
          >
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-executive-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Aprendizado Contínuo
              </h3>
              <p className="text-gray-600 mb-4">
                Sempre buscando me atualizar com as mais recentes tecnologias e melhores práticas do mercado.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'Kubernetes'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white text-executive-700 rounded-full text-sm font-medium shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
