"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Shield, BarChart3, Target, Settings } from "lucide-react"
import { useTranslations } from "@/components/useTranslations"

interface CookieSettings {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const COOKIE_CONSENT_KEY = "adinfinity-cookie-consent"
const COOKIE_SETTINGS_KEY = "adinfinity-cookie-settings"

export default function CookieConsent() {
  const { t, locale } = useTranslations()
  const [showConsent, setShowConsent] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
    marketing: false
  })

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1000)
      return () => clearTimeout(timer)
    } else {
      // Load saved settings
      const savedSettings = localStorage.getItem(COOKIE_SETTINGS_KEY)
      if (savedSettings) {
        setSettings(JSON.parse(savedSettings))
      }
      // Apply saved consent settings
      const parsedSettings = savedSettings ? JSON.parse(savedSettings) : { necessary: true, analytics: false, marketing: false }
      applyCookieConsent(parsedSettings)
    }

    // Listen for custom event to open cookie settings
    const handleOpenCookieSettings = () => {
      setShowConsent(true)
      setShowSettings(true)
    }

    window.addEventListener('openCookieSettings', handleOpenCookieSettings)
    return () => {
      window.removeEventListener('openCookieSettings', handleOpenCookieSettings)
    }
  }, [])

  const applyCookieConsent = (cookieSettings: CookieSettings) => {
    // Block Google Analytics if analytics consent is not given
    if (!cookieSettings.analytics) {
      // Disable GA tracking
      ;(window as any).gtag = function() { return null }
      // Remove GA cookies
      document.cookie.split(";").forEach(function(c) {
        if (c.trim().startsWith("_ga") || c.trim().startsWith("_gid")) {
          document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
        }
      })
    }

    // Block marketing cookies if marketing consent is not given
    if (!cookieSettings.marketing) {
      // Remove marketing/tracking cookies
      document.cookie.split(";").forEach(function(c) {
        if (c.trim().includes("marketing") || c.trim().includes("tracking")) {
          document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
        }
      })
    }
  }

  const acceptAll = () => {
    const allSettings = {
      necessary: true,
      analytics: true,
      marketing: true
    }
    setSettings(allSettings)
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted")
    localStorage.setItem(COOKIE_SETTINGS_KEY, JSON.stringify(allSettings))
    applyCookieConsent(allSettings)
    setShowConsent(false)
  }

  const rejectAll = () => {
    const minimalSettings = {
      necessary: true,
      analytics: false,
      marketing: false
    }
    setSettings(minimalSettings)
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected")
    localStorage.setItem(COOKIE_SETTINGS_KEY, JSON.stringify(minimalSettings))
    applyCookieConsent(minimalSettings)
    setShowConsent(false)
  }

  const saveCustomSettings = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "custom")
    localStorage.setItem(COOKIE_SETTINGS_KEY, JSON.stringify(settings))
    applyCookieConsent(settings)
    setShowConsent(false)
    setShowSettings(false)
  }

  const openSettings = () => {
    setShowSettings(true)
  }

  const closeSettings = () => {
    setShowSettings(false)
  }

  if (!showConsent) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-b from-[#07141C]/95 to-[#030B10]/95 backdrop-blur-xl border-t border-[#01FFFF]/20"
      >
        {!showSettings ? (
          // Main Consent Banner - Beautiful Dark Theme
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              {/* Left Content */}
              <div className="flex items-start gap-4 flex-1">
                <div className="p-3 bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/20 rounded-full border border-[#01FFFF]/30 flex-shrink-0">
                  <Settings className="text-[#01FFFF]" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg mb-2 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] bg-clip-text text-transparent">
                    {t('cookies.title')}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    {t('cookies.description')}
                  </p>
                  
                  {/* Cookie Categories - Beautiful Pills */}
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/40 border border-gray-700 rounded-full">
                      <Shield className="text-[#01FFFF]" size={14} />
                      <span className="text-gray-300 text-xs font-medium">{t('cookies.necessary')}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/40 border border-gray-700 rounded-full">
                      <BarChart3 className="text-[#01A9FF]" size={14} />
                      <span className="text-gray-300 text-xs font-medium">{t('cookies.analytics')}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-800/40 border border-gray-700 rounded-full">
                      <Target className="text-[#01FFFF]/70" size={14} />
                      <span className="text-gray-300 text-xs font-medium">{t('cookies.marketing')}</span>
                    </div>
                  </div>

                  {/* Privacy Links */}
                  <div className="mt-3 text-xs">
                    <span className="text-gray-500">{t('cookies.learn_more_text')} </span>
                    <a href="/privacy-policy" className="text-[#01FFFF] hover:underline transition-colors">
                      {t('cookies.privacy_policy')}
                    </a>
                    <span className="text-gray-500 mx-1"> & </span>
                    <a href="/cookie-policy" className="text-[#01FFFF] hover:underline transition-colors">
                      {t('cookies.cookie_policy')}
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Right Actions */}
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <button
                  onClick={openSettings}
                  className="px-4 py-2.5 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:bg-gray-800/50 hover:border-[#01FFFF]/50 hover:text-[#01FFFF] transition-all duration-300"
                >
                  {t('cookies.customize')}
                </button>
                <button
                  onClick={rejectAll}
                  className="px-4 py-2.5 text-sm font-medium text-gray-400 border border-gray-700 rounded-lg hover:bg-gray-800/30 transition-all duration-300"
                >
                  {t('cookies.reject_all')}
                </button>
                <button
                  onClick={acceptAll}
                  className="px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  {t('cookies.accept_all')}
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Detailed Settings Panel - Beautiful Dark Theme
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-4xl mx-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white font-bold text-xl bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] bg-clip-text text-transparent">
                  {t('cookies.settings_title')}
                </h3>
                <button
                  onClick={closeSettings}
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/30 rounded-lg"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Cookie Settings */}
              <div className="space-y-4 mb-6">
                {/* Necessary Cookies */}
                <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-xl p-5 border border-gray-700/50 hover:border-[#01FFFF]/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/20 rounded-lg border border-[#01FFFF]/30">
                        <Shield className="text-[#01FFFF]" size={18} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{t('cookies.necessary')}</h4>
                        <p className="text-gray-400 text-xs mt-1">{t('cookies.necessary_desc')}</p>
                      </div>
                    </div>
                    <div className="w-12 h-6 bg-[#01FFFF]/20 border border-[#01FFFF]/30 rounded-full flex items-center justify-center">
                      <div className="w-5 h-5 bg-[#01FFFF] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-xl p-5 border border-gray-700/50 hover:border-[#01A9FF]/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-[#01A9FF]/20 to-[#01FFFF]/20 rounded-lg border border-[#01A9FF]/30">
                        <BarChart3 className="text-[#01A9FF]" size={18} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{t('cookies.analytics')}</h4>
                        <p className="text-gray-400 text-xs mt-1">{t('cookies.analytics_desc')}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSettings(prev => ({ ...prev, analytics: !prev.analytics }))}
                      className={`w-12 h-6 rounded-full border transition-all duration-300 ${
                        settings.analytics 
                          ? 'bg-[#01A9FF]/20 border-[#01A9FF]/30' 
                          : 'bg-gray-700/50 border-gray-600'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full transition-all duration-300 ${
                        settings.analytics 
                          ? 'bg-[#01A9FF] translate-x-6' 
                          : 'bg-gray-500 translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-gradient-to-br from-gray-800/20 to-gray-900/20 rounded-xl p-5 border border-gray-700/50 hover:border-[#01FFFF]/20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/20 rounded-lg border border-[#01FFFF]/30">
                        <Target className="text-[#01FFFF]/70" size={18} />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{t('cookies.marketing')}</h4>
                        <p className="text-gray-400 text-xs mt-1">{t('cookies.marketing_desc')}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSettings(prev => ({ ...prev, marketing: !prev.marketing }))}
                      className={`w-12 h-6 rounded-full border transition-all duration-300 ${
                        settings.marketing 
                          ? 'bg-[#01FFFF]/20 border-[#01FFFF]/30' 
                          : 'bg-gray-700/50 border-gray-600'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full transition-all duration-300 ${
                        settings.marketing 
                          ? 'bg-[#01FFFF] translate-x-6' 
                          : 'bg-gray-500 translate-x-0.5'
                      }`}></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button
                  onClick={rejectAll}
                  className="px-5 py-2.5 text-sm font-medium text-gray-400 border border-gray-700 rounded-lg hover:bg-gray-800/30 transition-all duration-300"
                >
                  {t('cookies.reject_all')}
                </button>
                <button
                  onClick={acceptAll}
                  className="px-5 py-2.5 text-sm font-medium text-gray-300 border border-[#01FFFF]/30 rounded-lg hover:bg-[#01FFFF]/10 hover:text-[#01FFFF] transition-all duration-300"
                >
                  {t('cookies.accept_all')}
                </button>
                <button
                  onClick={saveCustomSettings}
                  className="px-6 py-2.5 text-sm font-medium bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] rounded-lg hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
                >
                  {t('cookies.save_preferences')}
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
