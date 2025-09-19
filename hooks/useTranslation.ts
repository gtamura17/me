import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import enCommon from '../locales/en/common.json'
import enProfile from '../locales/en/profile.json'
import enProjects from '../locales/en/projects.json'
import esCommon from '../locales/es/common.json'
import esProfile from '../locales/es/profile.json'
import esProjects from '../locales/es/projects.json'
import ptCommon from '../locales/pt/common.json'

type Language = 'pt' | 'en' | 'es'

interface Translations {
  [key: string]: any
}

const translations: Record<Language, Translations> = {
  pt: ptCommon,
  en: enCommon,
  es: esCommon
}

const profileTranslations: Record<Language, any> = {
  pt: null,
  en: enProfile,
  es: esProfile
}

const projectTranslations: Record<Language, any> = {
  pt: null,
  en: enProjects,
  es: esProjects
}

const specificDescriptions: Record<Language, any> = {
  pt: {
    experiences: {
      'head-tech-1': null,
      'head-tech-2': null,
      'software-engineer': null,
      'backend-developer': null,
      'full-stack-developer': null,
      'senior-developer': null,
      'intern': null
    },
    education: {
      'computer-science': null,
      'bootcamp': null,
      'continuous-learning': null
    },
    skillCategories: {
      'Gestão & Liderança': null,
      'Arquitetura & Desenvolvimento': null,
      'Banco de Dados': null,
      'DevOps & Cloud': null,
      'Inteligência Artificial': null,
      'Ferramentas': null
    },
    specificSkills: {
      'Automação de operações internas': null,
      'Chatbots inteligentes': null,
      'Cultura organizacional': null,
      'Mentoria e onboarding': null,
      'Gestão de equipes multidisciplinares': null,
      'Definição de processos de tecnologia': null,
      'Gestão ágil (Scrum, Kanban, Jira)': null,
      'Gestão de performance': null,
      'Geração de KPIs para análise humana': null,
      'Otimização interna de sprints com IA': null,
      'NLP para análise de sentimento e auditoria': null
    },
    periods: {
      'ago 2024 - ago 2025': null,
      'jan 2023 - jul 2025': null,
      'mai 2020 - jan 2023': null,
      'nov 2019 - mai 2020': null,
      'mar 2019 - nov 2019': null,
      'ago 2018 - mar 2019': null,
      'mai 2017 - abr 2018': null,
      '2017 - 2021': null,
      '2020': null,
      '2021': null
    },
    achievements: {
      'head-tech-1': {
        '0': 'Implementou melhorias em bibliotecas proprietárias e automação de processos internos',
        '1': 'Aplicou inteligência artificial para otimização de times e KPIs'
      },
      'head-tech-2': {
        '0': 'Cresceu o time de 4 para 70 pessoas com foco em cultura organizacional',
        '1': 'Escalou plataforma SaaS White Label para clientes enterprise',
        '2': 'Implementou KPIs centralizados e análise preditiva para eficiência operacional'
      },
      'software-engineer': {
        '0': 'Desenvolveu soluções full stack escaláveis para clientes enterprise',
        '1': 'Implementou arquiteturas de microserviços e CI/CD',
        '2': 'Criou ferramentas internas que aumentaram produtividade em 40%'
      },
      'backend-developer': {
        '0': 'Integração com dispositivos Bluetooth de glicemia',
        '1': 'Estudos de big data para saúde pública'
      },
      'full-stack-developer': {
        '0': 'Contribuiu no lançamento do VTEX IO',
        '1': 'Aplicou boas práticas de escalabilidade'
      },
      'senior-developer': {
        '0': 'Criou sistemas robustos de front-end para plataformas de vendas online',
        '1': 'Aprimorou experiência de usuário em e-commerces'
      },
      'intern': {
        '0': 'Automatizou processos em planilhas e campanhas',
        '1': 'Atendeu clientes enterprise como Ambev'
      }
    }
  },
  en: {
    experiences: {
      'head-tech-1': 'Responsible for leading technology and innovation, structuring processes and applying automation at scale.',
      'head-tech-2': 'Strategic technology leadership for marketing and e-commerce SaaS.',
      'software-engineer': 'Full stack development of scalable SaaS and e-commerce solutions.',
      'backend-developer': 'Backend development in health tech focused on diabetics.',
      'full-stack-developer': 'Innovation projects and VTEX IO, working on microservices.',
      'senior-developer': 'Frontend solutions development in e-commerce (VTEX).',
      'intern': 'First experience with digital marketing automation.'
    },
    education: {
      'computer-science': 'Bachelor\'s degree in Computer Science',
      'bootcamp': 'Intensive full stack development course with React, Node.js and React Native',
      'continuous-learning': 'Focus on algorithms, data structures and software development'
    },
    skillCategories: {
      'Gestão & Liderança': 'Management & Leadership',
      'Arquitetura & Desenvolvimento': 'Architecture & Development',
      'Banco de Dados': 'Database',
      'DevOps & Cloud': 'DevOps & Cloud',
      'Inteligência Artificial': 'Artificial Intelligence',
      'Ferramentas': 'Tools'
    },
    specificSkills: {
      'Automação de operações internas': 'Internal operations automation',
      'Chatbots inteligentes': 'Intelligent chatbots',
      'Cultura organizacional': 'Organizational culture',
      'Mentoria e onboarding': 'Mentoring and onboarding',
      'Gestão de equipes multidisciplinares': 'Multidisciplinary team management',
      'Definição de processos de tecnologia': 'Technology process definition',
      'Gestão ágil (Scrum, Kanban, Jira)': 'Agile management (Scrum, Kanban, Jira)',
      'Gestão de performance': 'Performance management',
      'Geração de KPIs para análise humana': 'KPI generation for human analysis',
      'Otimização interna de sprints com IA': 'Internal sprint optimization with AI',
      'NLP para análise de sentimento e auditoria': 'NLP for sentiment analysis and auditing'
    },
    periods: {
      'ago 2024 - ago 2025': 'Aug 2024 - Aug 2025',
      'jan 2023 - jul 2025': 'Jan 2023 - Jul 2025',
      'mai 2020 - jan 2023': 'May 2020 - Jan 2023',
      'nov 2019 - mai 2020': 'Nov 2019 - May 2020',
      'mar 2019 - nov 2019': 'Mar 2019 - Nov 2019',
      'ago 2018 - mar 2019': 'Aug 2018 - Mar 2019',
      'mai 2017 - abr 2018': 'May 2017 - Apr 2018',
      '2017 - 2021': '2017 - 2021',
      '2020': '2020',
      '2021': '2021'
    },
    achievements: {
      'head-tech-1': {
        '0': 'Implemented improvements in proprietary libraries and internal process automation',
        '1': 'Applied artificial intelligence for team optimization and KPIs'
      },
      'head-tech-2': {
        '0': 'Grew team from 4 to 70 people with focus on organizational culture',
        '1': 'Scaled White Label SaaS platform for enterprise clients',
        '2': 'Implemented centralized KPIs and predictive analysis for operational efficiency'
      },
      'software-engineer': {
        '0': 'Developed scalable full stack solutions for enterprise clients',
        '1': 'Implemented microservices architectures and CI/CD',
        '2': 'Created internal tools that increased productivity by 40%'
      },
      'backend-developer': {
        '0': 'Integration with Bluetooth glucose monitoring devices',
        '1': 'Big data studies for public health'
      },
      'full-stack-developer': {
        '0': 'Contributed to VTEX IO launch',
        '1': 'Applied scalability best practices'
      },
      'senior-developer': {
        '0': 'Created robust frontend systems for online sales platforms',
        '1': 'Improved user experience in e-commerce'
      },
      'intern': {
        '0': 'Automated spreadsheet and campaign processes',
        '1': 'Served enterprise clients like Ambev'
      }
    }
  },
  es: {
    experiences: {
      'head-tech-1': 'Responsable de liderar tecnología e innovación, estructurando procesos y aplicando automatización a escala.',
      'head-tech-2': 'Liderazgo estratégico en tecnología para SaaS de marketing y e-commerce.',
      'software-engineer': 'Desarrollo full stack de SaaS escalables y soluciones de e-commerce.',
      'backend-developer': 'Desarrollo backend en health tech enfocado en diabéticos.',
      'full-stack-developer': 'Proyectos de innovación y VTEX IO, trabajando en microservicios.',
      'senior-developer': 'Desarrollo de soluciones frontend en e-commerce (VTEX).',
      'intern': 'Primera experiencia con automatización en marketing digital.'
    },
    education: {
      'computer-science': 'Licenciatura en Ciencias de la Computación',
      'bootcamp': 'Curso intensivo de desarrollo full stack con React, Node.js y React Native',
      'continuous-learning': 'Enfoque en algoritmos, estructuras de datos y desarrollo de software'
    },
    skillCategories: {
      'Gestão & Liderança': 'Gestión y Liderazgo',
      'Arquitetura & Desenvolvimento': 'Arquitectura y Desarrollo',
      'Banco de Dados': 'Base de Datos',
      'DevOps & Cloud': 'DevOps y Cloud',
      'Inteligência Artificial': 'Inteligencia Artificial',
      'Ferramentas': 'Herramientas'
    },
    specificSkills: {
      'Automação de operações internas': 'Automatización de operaciones internas',
      'Chatbots inteligentes': 'Chatbots inteligentes',
      'Cultura organizacional': 'Cultura organizacional',
      'Mentoria e onboarding': 'Mentoría y onboarding',
      'Gestão de equipes multidisciplinares': 'Gestión de equipos multidisciplinarios',
      'Definição de processos de tecnologia': 'Definición de procesos de tecnología',
      'Gestão ágil (Scrum, Kanban, Jira)': 'Gestión ágil (Scrum, Kanban, Jira)',
      'Gestão de performance': 'Gestión de rendimiento',
      'Geração de KPIs para análise humana': 'Generación de KPIs para análisis humano',
      'Otimização interna de sprints com IA': 'Optimización interna de sprints con IA',
      'NLP para análise de sentimento e auditoria': 'NLP para análisis de sentimientos y auditoría'
    },
    periods: {
      'ago 2024 - ago 2025': 'Ago 2024 - Ago 2025',
      'jan 2023 - jul 2025': 'Ene 2023 - Jul 2025',
      'mai 2020 - jan 2023': 'May 2020 - Ene 2023',
      'nov 2019 - mai 2020': 'Nov 2019 - May 2020',
      'mar 2019 - nov 2019': 'Mar 2019 - Nov 2019',
      'ago 2018 - mar 2019': 'Ago 2018 - Mar 2019',
      'mai 2017 - abr 2018': 'May 2017 - Abr 2018',
      '2017 - 2021': '2017 - 2021',
      '2020': '2020',
      '2021': '2021'
    },
    achievements: {
      'head-tech-1': {
        '0': 'Implementó mejoras en bibliotecas propietarias y automatización de procesos internos',
        '1': 'Aplicó inteligencia artificial para optimización de equipos y KPIs'
      },
      'head-tech-2': {
        '0': 'Creció el equipo de 4 a 70 personas con enfoque en cultura organizacional',
        '1': 'Escaló plataforma SaaS White Label para clientes empresariales',
        '2': 'Implementó KPIs centralizados y análisis predictivo para eficiencia operacional'
      },
      'software-engineer': {
        '0': 'Desarrolló soluciones full stack escalables para clientes empresariales',
        '1': 'Implementó arquitecturas de microservicios y CI/CD',
        '2': 'Creó herramientas internas que aumentaron la productividad en 40%'
      },
      'backend-developer': {
        '0': 'Integración con dispositivos Bluetooth de monitoreo de glucosa',
        '1': 'Estudios de big data para salud pública'
      },
      'full-stack-developer': {
        '0': 'Contribuyó al lanzamiento de VTEX IO',
        '1': 'Aplicó mejores prácticas de escalabilidad'
      },
      'senior-developer': {
        '0': 'Creó sistemas frontend robustos para plataformas de ventas online',
        '1': 'Mejoró la experiencia de usuario en e-commerce'
      },
      'intern': {
        '0': 'Automatizó procesos en hojas de cálculo y campañas',
        '1': 'Atendió clientes empresariales como Ambev'
      }
    }
  }
}

export const useTranslation = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [currentLanguage, setCurrentLanguage] = useState<Language>('pt')
  const [isHydrated, setIsHydrated] = useState(false)

  const getLocaleFromPath = (): Language => {
    const segments = pathname.split('/')
    const localeFromPath = segments[1] as Language
    return ['pt', 'en', 'es'].includes(localeFromPath) ? localeFromPath : 'pt'
  }

  useEffect(() => {
    const localeFromPath = getLocaleFromPath()
    setCurrentLanguage(localeFromPath)
    setIsHydrated(true)
  }, [pathname])

  const changeLanguage = (language: Language) => {
    setCurrentLanguage(language)

    const segments = pathname.split('/')
    segments[1] = language
    const newPath = segments.join('/')

    router.push(newPath)
  }

  const t = (key: string): string => {
    const keys = key.split('.')
    let value: any = translations[currentLanguage]

    for (const k of keys) {
      value = value?.[k]
    }

    const result = (typeof value === 'string' ? value : key)
    if (result === key && process.env.NODE_ENV === 'development') {
      console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`)
    }

    return result
  }

  const getProfileData = (originalData: any) => {
    if (currentLanguage === 'pt' || !profileTranslations[currentLanguage]) {
      return originalData
    }

    return {
      ...originalData,
      ...profileTranslations[currentLanguage]
    }
  }

  const getProjectsData = (originalProjects: any[]) => {
    if (currentLanguage === 'pt' || !projectTranslations[currentLanguage]) {
      return originalProjects
    }

    const translatedProjects = projectTranslations[currentLanguage].projects
    return originalProjects.map((project: any) => {
      const translation = translatedProjects.find((t: any) => t.id === project.id)
      return translation ? { ...project, ...translation } : project
    })
  }

  const getTranslatedDescription = (type: 'experiences' | 'education', id: string, originalDescription: string) => {
    if (currentLanguage === 'pt' || !specificDescriptions[currentLanguage]) {
      return originalDescription
    }

    return specificDescriptions[currentLanguage][type]?.[id] || originalDescription
  }

  const getTranslatedAchievement = (experienceId: string, achievementIndex: number, originalAchievement: string) => {
    if (currentLanguage === 'pt' || !specificDescriptions[currentLanguage]) {
      return originalAchievement
    }

    return specificDescriptions[currentLanguage].achievements?.[experienceId]?.[achievementIndex.toString()] || originalAchievement
  }

  const getTranslatedDegree = (educationId: string, originalDegree: string) => {
    if (currentLanguage === 'pt' || !specificDescriptions[currentLanguage]) {
      return originalDegree
    }

    return specificDescriptions[currentLanguage].education?.[educationId] || originalDegree
  }

  const getTranslatedSkillCategory = (originalCategory: string) => {
    if (currentLanguage === 'pt' || !specificDescriptions[currentLanguage]) {
      return originalCategory
    }

    return specificDescriptions[currentLanguage].skillCategories?.[originalCategory] || originalCategory
  }

  const getTranslatedSkill = (originalSkill: string) => {
    if (currentLanguage === 'pt' || !specificDescriptions[currentLanguage]) {
      return originalSkill
    }

    return specificDescriptions[currentLanguage].specificSkills?.[originalSkill] || originalSkill
  }

  const getTranslatedPeriod = (originalPeriod: string) => {
    if (currentLanguage === 'pt' || !specificDescriptions[currentLanguage]) {
      return originalPeriod
    }

    return specificDescriptions[currentLanguage].periods?.[originalPeriod] || originalPeriod
  }

  return {
    t,
    currentLanguage,
    changeLanguage,
    getProfileData,
    getProjectsData,
    getTranslatedDescription,
    getTranslatedAchievement,
    getTranslatedDegree,
    getTranslatedSkillCategory,
    getTranslatedSkill,
    getTranslatedPeriod,
    isHydrated,
    languages: [
      { code: 'pt', name: 'Português', flag: '🇧🇷' },
      { code: 'en', name: 'English', flag: '🇺🇸' },
      { code: 'es', name: 'Español', flag: '🇪🇸' }
    ] as const
  }
}
