"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Cookie, Settings, X } from "lucide-react"
import { useTranslations } from "@/components/useTranslations"

const COOKIE_SETTINGS_KEY = "adinfinity-cookie-settings"

export default function CookieSettings() {
  const { t } = useTranslations()
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(COOKIE_SETTINGS_KEY)
      return saved ? JSON.parse(saved) : { necessary: true, analytics: false, marketing: false }
    }
    return { necessary: true, analytics: false, marketing: false }
  })

  const updateSettings = (newSettings: typeof settings) => {
    setSettings(newSettings)
    localStorage.setItem(COOKIE_SETTINGS_KEY, JSON.stringify(newSettings))
    
    // Apply cookie blocking based on new settings
    if (!newSettings.analytics) {
      // Block analytics cookies
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as any).gtag = function() { return null }
      }
      document.cookie.split(";").forEach(function(c) {
        if (c.trim().startsWith("_ga") || c.trim().startsWith("_gid")) {
          document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
        }
      })
    }

    if (!newSettings.marketing) {
      // Block marketing cookies
      document.cookie.split(";").forEach(function(c) {
        if (c.trim().includes("marketing") || c.trim().includes("tracking")) {
          document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
        }
      })
    }
  }

  return (
    <>
      {/* Cookie Settings Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-3 bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/20 border border-[#01FFFF]/30 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 z-40 group"
        aria-label="Cookie Settings"
      >
        <Cookie className="text-[#01FFFF] group-hover:scale-110 transition-transform" size={20} />
      </button>

      {/* Cookie Settings Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gradient-to-b from-[#07141C] to-[#030B10] border border-[#01FFFF]/20 rounded-2xl p-6 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/20 rounded-lg border border-[#01FFFF]/30">
                  <Settings className="text-[#01FFFF]" size={20} />
                </div>
                <h3 className="text-white font-bold text-lg">{t('cookies.settings_title')}</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/30 rounded-lg"
              >
                <X size={20} />
              </button>
            </div>

            {/* Current Settings */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                <span className="text-gray-300 text-sm">{t('cookies.necessary')}</span>
                <div className="w-8 h-4 bg-[#01FFFF]/20 border border-[#01FFFF]/30 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#01FFFF] rounded-full"></div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                <span className="text-gray-300 text-sm">{t('cookies.analytics')}</span>
                <button
                  onClick={() => updateSettings({ ...settings, analytics: !settings.analytics })}
                  className={`w-8 h-4 rounded-full border transition-all duration-300 ${
                    settings.analytics 
                      ? 'bg-[#01A9FF]/20 border-[#01A9FF]/30' 
                      : 'bg-gray-700/50 border-gray-600'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    settings.analytics 
                      ? 'bg-[#01A9FF] translate-x-4' 
                      : 'bg-gray-500 translate-x-0.5'
                  }`}></div>
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                <span className="text-gray-300 text-sm">{t('cookies.marketing')}</span>
                <button
                  onClick={() => updateSettings({ ...settings, marketing: !settings.marketing })}
                  className={`w-8 h-4 rounded-full border transition-all duration-300 ${
                    settings.marketing 
                      ? 'bg-[#01FFFF]/20 border-[#01FFFF]/30' 
                      : 'bg-gray-700/50 border-gray-600'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    settings.marketing 
                      ? 'bg-[#01FFFF] translate-x-4' 
                      : 'bg-gray-500 translate-x-0.5'
                  }`}></div>
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="text-center space-y-2">
              <p className="text-gray-500 text-xs">
                {t('cookies.learn_more_text')} {t('cookies.privacy_policy')} & {t('cookies.cookie_policy')}
              </p>
              <div className="flex gap-4 justify-center">
                <a href="/privacy-policy" className="text-[#01FFFF] hover:underline text-xs">
                  {t('cookies.privacy_policy')}
                </a>
                <a href="/cookie-policy" className="text-[#01FFFF] hover:underline text-xs">
                  {t('cookies.cookie_policy')}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
