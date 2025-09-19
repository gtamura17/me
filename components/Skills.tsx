'use client'

import { profileData } from '@/data/profile'
import { motion } from 'framer-motion'
import { ArrowUpRight, BarChart3, Building2, CheckCircle, Cloud, Cpu, Globe, Layers, Sparkles, Wrench } from 'lucide-react'

const skillIcons = {
  'Frontend': Layers,
  'Backend': Cpu,
  'DevOps & Cloud': Cloud,
  'Ferramentas': Building2,
}

const achievements = [
  { icon: BarChart3, label: 'Redução de Custos', value: '60%', description: 'Infraestrutura' },
  { icon: Globe, label: 'Experiência', value: '6+', description: 'Anos' },
  { icon: ArrowUpRight, label: 'Otimização', value: '120%', description: 'Eficiência' },
  { icon: Sparkles, label: 'Automações', value: '15+', description: 'Ferramentas' },
]

export default function Skills() {
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
            Liderança Técnica & Impacto de Negócio
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Head de Tecnologia com 6+ anos em transformação digital e arquitetura enterprise. Especializado em redução de custos operacionais, otimização de times e adoção estratégica de ferramentas com foco em ROI e eficiência.
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
                      {skillGroup.category}
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
                        <span className="text-gray-800 font-medium text-sm">{skill}</span>
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
              Resultados Comprovados & Estratégia de Tecnologia
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Otimização de Custos',
                  description: 'Redução de 60% nos custos de infraestrutura',
                  details: 'Migração para cloud híbrida, microserviços, automação de recursos'
                },
                {
                  title: 'Eficiência de Times',
                  description: 'Aumento de 120% na produtividade das equipes',
                  details: 'Implementação de ferramentas como Coderabit, TestSprite, Power BI automations'
                },
                {
                  title: 'Arquitetura Enterprise',
                  description: 'Sistemas escaláveis para milhares de usuários',
                  details: 'Microserviços, APIs REST/GraphQL, bancos de dados, segurança, monitoramento'
                },
                {
                  title: 'Automação & IA',
                  description: '15+ ferramentas de automação implementadas',
                  details: 'NLP para auditoria, gestão de sprints, análise preditiva de KPIs'
                },
                {
                  title: 'Governança de TI',
                  description: 'Processos e padrões para escala enterprise',
                  details: 'CI/CD, code review, testes automatizados, métricas de qualidade'
                },
                {
                  title: 'ROI & Métricas',
                  description: 'Foco em tradeoff custo x benefício',
                  details: 'Avaliação de ferramentas, POCs, migrações com retorno mensurável'
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg p-6 border border-gray-200"
                >
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-700 text-sm mb-2">{item.description}</p>
                  <p className="text-gray-500 text-xs">{item.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
