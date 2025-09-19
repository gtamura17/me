'use client'

import { profileData } from '@/data/profile'
import { useTranslation } from '@/hooks/useTranslation'
import { downloadCV } from '@/utils/downloadCV'
import { Download, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import LanguageSelector from './LanguageSelector'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t, currentLanguage } = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleDownloadCV = async () => {
    await downloadCV(currentLanguage)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-gray-50/80 backdrop-blur-sm'
    }`}>
      <nav className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src='/assets/me_photo.jpeg'
                alt='Gabriel Tamura - Head de Tecnologia'
                className="w-10 h-10 rounded-full object-cover object-center scale-125 border-2 border-executive-200 shadow-sm hover:border-executive-400 transition-all duration-300"
              />
            </div>
            <span className="text-xl font-bold text-executive-800">{profileData.name}</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['sobre', 'experiencia', 'educacao', 'projetos', 'contato'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-executive-700 hover:text-executive-900 transition-colors duration-200 capitalize font-medium"
              >
                {t(`nav.${item === 'experiencia' ? 'experience' : item === 'educacao' ? 'education' : item === 'projetos' ? 'projects' : item === 'contato' ? 'contact' : 'about'}`)}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <button
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 bg-executive-700 text-white px-4 py-2 rounded-lg hover:bg-executive-800 transition-colors duration-200"
            >
              <Download size={16} />
              <span>{t('nav.downloadCV')}</span>
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {['sobre', 'experiencia', 'educacao', 'projetos', 'contato'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-left text-executive-700 hover:text-executive-900 transition-colors duration-200 capitalize font-medium py-2"
                >
                  {t(`nav.${item === 'experiencia' ? 'experience' : item === 'educacao' ? 'education' : item === 'projetos' ? 'projects' : item === 'contato' ? 'contact' : 'about'}`)}
                </button>
              ))}
              <div className="flex items-center justify-center py-2">
                <LanguageSelector />
              </div>
              <button
                onClick={handleDownloadCV}
                className="flex items-center justify-center space-x-2 bg-executive-700 text-white px-4 py-2 rounded-lg hover:bg-executive-800 transition-colors duration-200 w-full"
              >
                <Download size={16} />
                <span>{t('nav.downloadCV')}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
