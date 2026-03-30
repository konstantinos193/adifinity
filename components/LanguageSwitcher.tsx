'use client'
import { useLocale } from './LocaleProvider'
import Image from 'next/image'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLocale()
  
  const switchLanguage = (newLocale: 'el' | 'en') => {
    setLocale(newLocale)
  }
  
  return (
    <div className="flex items-center bg-[#071218]/50 backdrop-blur-sm rounded-full border border-cyan-900/30 p-1">
      <button 
        onClick={() => switchLanguage('el')}
        className={`flex items-center space-x-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
          locale === 'el' 
            ? 'bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] shadow-lg shadow-cyan-500/20' 
            : 'text-gray-400 hover:text-white hover:bg-white/10'
        }`}
      >
        <span className="fi fi-gr text-sm"></span>
        <span className="text-xs font-medium">GR</span>
      </button>
      <button 
        onClick={() => switchLanguage('en')}
        className={`flex items-center space-x-2 px-3 py-1.5 rounded-full transition-all duration-300 ${
          locale === 'en' 
            ? 'bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] shadow-lg shadow-cyan-500/20' 
            : 'text-gray-400 hover:text-white hover:bg-white/10'
        }`}
      >
        <span className="fi fi-gb text-sm"></span>
        <span className="text-xs font-medium">GB</span>
      </button>
    </div>
  )
}
