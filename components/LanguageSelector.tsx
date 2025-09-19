'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function LanguageSelector() {
  const { currentLanguage, changeLanguage, languages, isHydrated } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const currentLang = languages.find(lang => lang.code === currentLanguage)

  if (!isHydrated) {
    return (
      <div className="flex items-center space-x-2 px-3 py-2 rounded-lg">
        <span>🇧🇷</span>
        <span className="text-sm font-medium">PT</span>
      </div>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <span>{currentLang?.flag}</span>
        <span className="text-sm font-medium">{currentLang?.code.toUpperCase()}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[120px] z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                changeLanguage(language.code as any)
                setIsOpen(false)
              }}
              className={`w-full flex items-center space-x-2 px-3 py-2 hover:bg-gray-50 transition-colors duration-200 ${
                currentLanguage === language.code ? 'bg-executive-50 text-executive-700' : 'text-gray-700'
              }`}
            >
              <span>{language.flag}</span>
              <span className="text-sm">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
