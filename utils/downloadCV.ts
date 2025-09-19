import { profileData } from '@/data/profile'
import jsPDF from 'jspdf'

const profileTranslations: any = {
  pt: null,
  en: require('../locales/en/profile.json'),
  es: require('../locales/es/profile.json')
}

const projectTranslations: any = {
  pt: null,
  en: require('../locales/en/projects.json'),
  es: require('../locales/es/projects.json')
}

const sectionTitles: any = {
  pt: {
    about: 'Sobre',
    experience: 'Experiência profissional',
    skills: 'Habilidades técnicas',
    education: 'Educação',
    projects: 'Projetos destacados',
    technologies: 'Tecnologias:',
    achievements: 'Principais conquistas:',
    footer: 'Currículo gerado automaticamente'
  },
  en: {
    about: 'About',
    experience: 'Professional experience',
    skills: 'Technical skills',
    education: 'Education',
    projects: 'Featured projects',
    technologies: 'Technologies:',
    achievements: 'Key achievements:',
    footer: 'Resume generated automatically'
  },
  es: {
    about: 'Acerca',
    experience: 'Experiencia profesional',
    skills: 'Habilidades técnicas',
    education: 'Educación',
    projects: 'Proyectos destacados',
    technologies: 'Tecnologías:',
    achievements: 'Logros principales:',
    footer: 'Currículum generado automáticamente'
  }
}

export const downloadCV = async (language: string = 'pt') => {
  try {
    const link = document.createElement('a')
    link.href = '/downloads/gabriel-tamura-cv.pdf'
    link.download = 'Gabriel-Tamura-CV.pdf'

    const response = await fetch('/downloads/gabriel-tamura-cv.pdf')
    if (response.ok) {
      link.click()
      return
    }
  } catch (error) {
    console.log('Arquivo estático não encontrado, gerando PDF a partir dos dados...')
  }

  await generateCVFromData(language)
}

const generateCVFromData = async (language: string = 'pt') => {
  try {
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const margin = 20
    let currentY = margin

           const currentProfileData = language === 'pt' || !profileTranslations[language]
             ? profileData
             : { ...profileData, ...profileTranslations[language] }

           const currentProjects = language === 'pt' || !projectTranslations[language]
             ? profileData.projects
             : profileData.projects.map((project: any) => {
                 const translation = projectTranslations[language].projects.find((t: any) => t.id === project.id)
                 return translation ? { ...project, ...translation } : project
               })

    const titles = sectionTitles[language] || sectionTitles.pt

    pdf.setFont('helvetica')

    pdf.setFontSize(24)
    pdf.setTextColor(52, 52, 91)
    pdf.text(currentProfileData.name, margin, currentY)
    currentY += 10

    pdf.setFontSize(12)
    pdf.setTextColor(100, 100, 100)
    const titleLines = pdf.splitTextToSize(currentProfileData.title, pageWidth - 2 * margin)
    pdf.text(titleLines, margin, currentY)
    currentY += titleLines.length * 5 + 10

    pdf.setFontSize(10)
    pdf.setTextColor(80, 80, 80)
    const contactInfo = [
      `Email: ${currentProfileData.email}`,
      `Telefone: ${currentProfileData.phone}`,
      `Localização: ${currentProfileData.location}`,
      `LinkedIn: ${currentProfileData.linkedin}`,
      `GitHub: ${currentProfileData.github}`
    ]

    contactInfo.forEach(info => {
      pdf.text(info, margin, currentY)
      currentY += 5
    })
    currentY += 10

    pdf.setFontSize(14)
    pdf.setTextColor(52, 52, 91)
    pdf.text(titles.about, margin, currentY)
    currentY += 8

    pdf.setFontSize(10)
    pdf.setTextColor(60, 60, 60)
    const aboutLines = pdf.splitTextToSize(currentProfileData.about, pageWidth - 2 * margin)
    pdf.text(aboutLines, margin, currentY)
    currentY += aboutLines.length * 5 + 10

    pdf.setFontSize(14)
    pdf.setTextColor(52, 52, 91)
    pdf.text(titles.experience, margin, currentY)
    currentY += 8

    profileData.experiences.forEach((exp, index) => {
      if (currentY > pageHeight - 40) {
        pdf.addPage()
        currentY = margin
      }

      pdf.setFontSize(12)
      pdf.setTextColor(40, 40, 40)
      pdf.text(exp.position, margin, currentY)

      pdf.setFontSize(10)
      pdf.setTextColor(80, 80, 80)
      pdf.text(`${exp.company} | ${exp.period}`, margin, currentY + 5)
      currentY += 12

      pdf.setFontSize(9)
      pdf.setTextColor(60, 60, 60)
      const descLines = pdf.splitTextToSize(exp.description, pageWidth - 2 * margin)
      pdf.text(descLines, margin, currentY)
      currentY += descLines.length * 4

      if (exp.technologies.length > 0) {
        pdf.setFontSize(8)
        pdf.setTextColor(100, 100, 100)
        pdf.text(`Tecnologias: ${exp.technologies.join(', ')}`, margin, currentY + 3)
        currentY += 6
      }
      currentY += 8
    })

    if (currentY > pageHeight - 60) {
      pdf.addPage()
      currentY = margin
    }

    pdf.setFontSize(14)
    pdf.setTextColor(52, 52, 91)
    pdf.text('HABILIDADES TÉCNICAS', margin, currentY)
    currentY += 8

    profileData.skills.forEach(skillGroup => {
      pdf.setFontSize(11)
      pdf.setTextColor(40, 40, 40)
      pdf.text(skillGroup.category, margin, currentY)
      currentY += 6

      pdf.setFontSize(9)
      pdf.setTextColor(60, 60, 60)
      const skillsText = skillGroup.skills.join(', ')
      const skillLines = pdf.splitTextToSize(skillsText, pageWidth - 2 * margin)
      pdf.text(skillLines, margin, currentY)
      currentY += skillLines.length * 4 + 6
    })

    if (currentY > pageHeight - 40) {
      pdf.addPage()
      currentY = margin
    }

    pdf.setFontSize(14)
    pdf.setTextColor(52, 52, 91)
    pdf.text('EDUCAÇÃO', margin, currentY)
    currentY += 8

    profileData.education.forEach(edu => {
      pdf.setFontSize(11)
      pdf.setTextColor(40, 40, 40)
      pdf.text(edu.degree, margin, currentY)

      pdf.setFontSize(9)
      pdf.setTextColor(80, 80, 80)
      pdf.text(`${edu.institution} | ${edu.period}`, margin, currentY + 5)
      currentY += 12
    })

    if (currentY > pageHeight - 40) {
      pdf.addPage()
      currentY = margin
    }

    pdf.setFontSize(14)
    pdf.setTextColor(52, 52, 91)
    pdf.text(titles.projects, margin, currentY)
    currentY += 8

           currentProjects.slice(0, 4).forEach((project: any) => {
      if (currentY > pageHeight - 30) {
        pdf.addPage()
        currentY = margin
      }

      pdf.setFontSize(11)
      pdf.setTextColor(40, 40, 40)
      pdf.text(project.name, margin, currentY)
      currentY += 6

      pdf.setFontSize(9)
      pdf.setTextColor(60, 60, 60)
      const projLines = pdf.splitTextToSize(project.description, pageWidth - 2 * margin)
      pdf.text(projLines, margin, currentY)
      currentY += projLines.length * 4

      if (project.technologies.length > 0) {
        pdf.setFontSize(8)
        pdf.setTextColor(100, 100, 100)
        pdf.text(`Tecnologias: ${project.technologies.join(', ')}`, margin, currentY + 2)
        currentY += 5
      }
      currentY += 6
    })

    const footerY = pageHeight - 10
    pdf.setFontSize(8)
    pdf.setTextColor(120, 120, 120)
    pdf.text('Currículo gerado automaticamente', margin, footerY)
    pdf.text(new Date().toLocaleDateString('pt-BR'), pageWidth - margin - 30, footerY)

    pdf.save('Gabriel-Tamura-CV.pdf')

  } catch (error) {
    console.error('Erro ao gerar CV:', error)
    alert('Erro ao gerar CV. Tente novamente.')
  }
}

export const downloadStaticCV = () => {
  const link = document.createElement('a')
  link.href = '/downloads/gabriel-tamura-cv.pdf'
  link.download = 'Gabriel-Tamura-CV.pdf'
  link.target = '_blank'
  link.click()
}
