export interface Experience {
  id: string
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
  achievements: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  period: string
  description?: string
}

export interface Skill {
  category: string
  skills: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

export interface Profile {
  name: string
  title: string
  email: string
  phone: string
  location: string
  website?: string
  github?: string
  linkedin?: string
  about: string
  experiences: Experience[]
  education: Education[]
  skills: Skill[]
  projects: Project[]
  languages: Language[]
}

export interface Language {
  language: string
  proficiency: string
}

export const profileData: Profile = {
  "name": "Gabriel Tamura",
  "title": "Head de Tecnologia | Arquitetura SaaS | Gestão de Times e Inovação em IA & Cloud",
  "email": "eu@gtamura.com",
  "phone": "+55 (11) 97727-8952",
  "location": "São Bernardo do Campo, SP - Brasil",
  "website": "https://www.gtamura.com",
  "github": "https://github.com/gtamura17",
  "linkedin": "https://www.linkedin.com/in/gabriel-tamura-mamiya-091ba6143/",
  "about": "Head de Tecnologia com dupla expertise: GESTÃO ESTRATÉGICA de equipes multidisciplinares e ESPECIALIZAÇÃO TÉCNICA em arquiteturas SaaS escaláveis. Liderei times de até 15+ desenvolvedores na criação de plataformas enterprise para Mary Kay, Smart House e outros clientes, combinando visão de negócio com excelência técnica. Como gestor, defino roadmaps tecnológicos, implemento cultura DevOps (CI/CD, KPIs) e desenvolvo talentos. Como especialista, domino full stack (React, Node.js, Next.js) e aplico IA/automação para otimizar operações. Meu diferencial é traduzir estratégia de negócio em soluções tecnológicas que geram impacto mensurável.",
  "experiences": [
    {
      "id": "head-tech-1",
      "company": "A&EIGHT",
      "position": "Head of Technology",
      "period": "ago 2024 - ago 2025",
      "description": "Responsável por liderar tecnologia e inovação, estruturando processos e aplicando automação em escala.",
      "technologies": ["React", "Next.js", "Node.js", "GraphQL", "Docker", "Kubernetes", "AWS"],
      "achievements": [
        "Implementou melhorias em bibliotecas proprietárias e automação de processos internos",
        "Aplicou inteligência artificial para otimização de times e KPIs"
      ]
    },
    {
      "id": "head-tech-2",
      "company": "b8one",
      "position": "Head of Technology",
      "period": "jan 2023 - jul 2025",
      "description": "Liderança estratégica em tecnologia para SaaS de marketing e e-commerce.",
      "technologies": ["React", "Next.js", "Node.js", "Tailwind", "GraphQL", "Docker", "Kubernetes", "AWS"],
      "achievements": [
        "Cresceu o time de 4 para 70 pessoas com foco em cultura organizacional",
        "Escalou plataforma SaaS White Label para clientes enterprise",
        "Implementou KPIs centralizados e análise preditiva para eficiência operacional"
      ]
    },
    {
      "id": "software-engineer",
      "company": "b8one",
      "position": "Software Engineer",
      "period": "mai 2020 - jan 2023",
      "description": "Desenvolvimento full stack de SaaS e soluções de e-commerce escaláveis.",
      "technologies": ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe", "Docker"],
      "achievements": [
        "Implementou arquitetura de micro-serviços",
        "Desenvolveu integrações de pagamentos e White Label"
      ]
    },
    {
      "id": "backend-developer",
      "company": "Appia",
      "position": "Backend Developer",
      "period": "nov 2019 - mai 2020",
      "description": "Desenvolvimento backend em health tech focada em diabéticos.",
      "technologies": ["Node.js", "GraphQL", "AWS", "Azure"],
      "achievements": [
        "Integração com dispositivos Bluetooth de glicemia",
        "Estudos de big data para saúde pública"
      ]
    },
    {
      "id": "full-stack-developer",
      "company": "ACCT | ACUPULA Consulting & Technology",
      "position": "Desenvolvedor Full Stack",
      "period": "mar 2019 - nov 2019",
      "description": "Projetos de inovação e VTEX IO, trabalhando em micro-serviços.",
      "technologies": ["React", "CSS", "VTEX IO", "Node.js"],
      "achievements": [
        "Contribuiu no lançamento do VTEX IO",
        "Aplicou boas práticas de escalabilidade"
      ]
    },
    {
      "id": "senior-developer",
      "company": "Elocc",
      "position": "Desenvolvedor Pleno",
      "period": "ago 2018 - mar 2019",
      "description": "Desenvolvimento de soluções frontend em e-commerce (VTEX).",
      "technologies": ["React", "Tailwind", "SASS", "VTEX"],
      "achievements": [
        "Criou sistemas robustos de front-end para plataformas de vendas online",
        "Aprimorou experiência de usuário em e-commerces"
      ]
    },
    {
      "id": "intern",
      "company": "Blinks",
      "position": "Estagiário de mídias digitais / desenvolvimento",
      "period": "mai 2017 - abr 2018",
      "description": "Primeira experiência com automação em marketing digital.",
      "technologies": ["Google Scripts", "Google Ads", "Facebook Ads", "BigQuery"],
      "achievements": [
        "Automatizou processos em planilhas e campanhas",
        "Atendeu clientes enterprise como Ambev"
      ]
    }
  ],
  "education": [
    {
      "id": "computer-science",
      "institution": "FAM",
      "degree": "Bacharelado em Ciência da Computação",
      "period": "2017 - 2021",
      "description": "Foco em algoritmos, estruturas de dados e desenvolvimento de software"
    },
    {
      "id": "bootcamp",
      "institution": "Rocketseat",
      "degree": "Bootcamp Full Stack",
      "period": "2020",
      "description": "Curso intensivo de desenvolvimento full stack com React, Node.js e React Native"
    },
    {
      "id": "continuous-learning",
      "institution": "Alura",
      "degree": "Especialização em React e TypeScript",
      "period": "2021",
      "description": "Aprofundamento em desenvolvimento frontend com React e TypeScript"
    }
  ],
  "skills": [
    {
      "category": "Gestão & Liderança",
      "skills": [
        "Gestão de equipes multidisciplinares",
        "Mentoria e onboarding",
        "Definição de processos de tecnologia",
        "Cultura organizacional",
        "Gestão ágil (Scrum, Kanban, Jira)",
        "KPIs e OKRs",
        "Gestão de performance"
      ]
    },
    {
      "category": "Arquitetura & Desenvolvimento",
      "skills": [
        "Node.js",
        "React",
        "Next.js",
        "TypeScript",
        "NestJS",
        "Python",
        "Django",
        "FastAPI",
        "GraphQL",
        "SaaS White Label",
        "Micro-serviços"
      ]
    },
    {
      "category": "Banco de Dados",
      "skills": [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "MySQL",
        "MariaDB",
        "SQL Server",
        "Cassandra",
        "BigQuery"
      ]
    },
    {
      "category": "DevOps & Cloud",
      "skills": [
        "AWS (EC2, S3, RDS, Lambda, CloudFront, Elastic Beanstalk, CloudWatch, IAM)",
        "Azure (Azure DevOps, Azure Pipelines)",
        "DigitalOcean",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Git",
        "GitHub Actions",
        "Vercel",
        "Netlify"
      ]
    },
    {
      "category": "Inteligência Artificial",
      "skills": [
        "MCPs (Model Context Protocols)",
        "Automação de operações internas",
        "NLP para análise de sentimento e auditoria",
        "Otimização interna de sprints com IA",
        "Geração de KPIs para análise humana",
        "Chatbots inteligentes"
      ]
    },
    {
      "category": "Ferramentas",
      "skills": [
        "VS Code",
        "Figma",
        "Postman",
        "Jest",
        "Cypress",
        "Webpack",
        "Vite",
        "ESLint",
        "Prettier",
        "Power BI",
        "Jira"
      ]
    }
  ],
  "languages": [
    {
      "language": "Português",
      "proficiency": "Nativo ou Bilíngue"
    },
    {
      "language": "Inglês",
      "proficiency": "Avançado"
    }
  ],
  "projects": [
    {
      "id": "1",
      "name": "Samsung E-commerce",
      "description": "Plataforma de e-commerce para Samsung com foco em escalabilidade e experiência do usuário.",
      "technologies": ["VTEX", "React", "Next.js", "Node.js"],
      "liveUrl": "https://www.samsung.com/co/"
    },
    {
      "id": "2",
      "name": "Mary Kay",
      "description": "Solução de e-commerce White Label personalizada para Mary Kay, integrada a sistemas de pagamento.",
      "technologies": ["Next.js", "Node.js", "Stripe", "VTEX"],
      "liveUrl": "https://loja.marykay.com.br/"
    },
    {
      "id": "3",
      "name": "Dengo Chocolates",
      "description": "Plataforma de e-commerce premium com experiência digital diferenciada.",
      "technologies": ["React", "VTEX IO", "Node.js"],
      "liveUrl": "https://www.dengo.com.br/"
    },
    {
      "id": "4",
      "name": "Projetos Enterprise",
      "description": "Atuação em projetos enterprise para clientes como PalmerJane, Asics, Electrolux, Adyen, Acer, Mondial, Colgate, Sadia, Itatiaia, Grupo Angeloni, Brastemp, Decathlon, Saint Gobain, Decminas, Interfood San Marche, Made e Lojas Rede.",
      "technologies": ["React", "Next.js", "Node.js", "VTEX", "AWS"]
    },
    {
      "id": "5",
      "name": "Monitfy",
      "description": "SaaS proprietário para gestão de operações e monitoramento inteligente.",
      "technologies": ["Next.js", "Node.js", "GraphQL", "Kubernetes", "AWS"],
      "liveUrl": "https://www.monitfy.com/"
    },
    {
      "id": "6",
      "name": "Lomadee",
      "description": "Plataforma de marketing de afiliados White Label, com geração de receita e alta escalabilidade.",
      "technologies": ["Node.js", "Next.js", "GraphQL", "Docker", "Kubernetes"],
      "liveUrl": "https://www.lomadee.com.br/"
    }
  ],
}
