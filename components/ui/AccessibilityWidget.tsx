"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, EyeOff, Type, MousePointer, Contrast, X } from "lucide-react"

export default function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState({
    highContrast: false,
    largeText: false,
    reducedMotion: false,
    focusVisible: true
  })

  useEffect(() => {
    // Load saved accessibility preferences
    const saved = localStorage.getItem('accessibility-settings')
    if (saved) {
      const parsedSettings = JSON.parse(saved)
      setSettings(parsedSettings)
      applySettings(parsedSettings)
    }

    // Check for user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setSettings(prev => ({ ...prev, reducedMotion: true }))
    }
  }, [])

  const applySettings = (newSettings: typeof settings) => {
    console.log('Applying accessibility settings:', newSettings)
    const root = document.documentElement

    // High contrast
    if (newSettings.highContrast) {
      root.classList.add('high-contrast')
      console.log('Added high-contrast class')
    } else {
      root.classList.remove('high-contrast')
      console.log('Removed high-contrast class')
    }

    // Large text
    if (newSettings.largeText) {
      root.classList.add('large-text')
      console.log('Added large-text class')
    } else {
      root.classList.remove('large-text')
      console.log('Removed large-text class')
    }

    // Reduced motion
    if (newSettings.reducedMotion) {
      root.classList.add('reduced-motion')
      console.log('Added reduced-motion class')
    } else {
      root.classList.remove('reduced-motion')
      console.log('Removed reduced-motion class')
    }

    // Focus visible
    if (newSettings.focusVisible) {
      root.classList.add('focus-visible')
      console.log('Added focus-visible class')
    } else {
      root.classList.remove('focus-visible')
      console.log('Removed focus-visible class')
    }

    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings))
    console.log('Current document classes:', document.documentElement.className)
  }

  const updateSetting = (key: keyof typeof settings, value: boolean) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
    applySettings(newSettings)
  }

  const resetSettings = () => {
    const defaultSettings = {
      highContrast: false,
      largeText: false,
      reducedMotion: false,
      focusVisible: true
    }
    setSettings(defaultSettings)
    applySettings(defaultSettings)
  }

  return (
    <>
      {/* Accessibility Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-1/2 right-4 transform -translate-y-1/2 p-3 bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/20 border border-[#01FFFF]/30 rounded-full hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 z-40 group"
        aria-label="Accessibility Options"
      >
        <Eye className="text-[#01FFFF] group-hover:scale-110 transition-transform" size={20} />
      </button>

      {/* Accessibility Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-1/2 right-20 transform -translate-y-1/2 bg-gradient-to-b from-[#07141C] to-[#030B10] border border-[#01FFFF]/20 rounded-2xl p-6 w-80 z-50 shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                <Eye className="text-[#01FFFF]" size={20} />
                Accessibility
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800/30 rounded-lg"
                aria-label="Close accessibility menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Accessibility Options */}
            <div className="space-y-4">
              {/* High Contrast */}
              <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3">
                  <Contrast className="text-[#01FFFF]" size={18} />
                  <div>
                    <h4 className="text-white font-medium text-sm">High Contrast</h4>
                    <p className="text-gray-400 text-xs">Increase color contrast</p>
                  </div>
                </div>
                <button
                  onClick={() => updateSetting('highContrast', !settings.highContrast)}
                  className={`w-12 h-6 rounded-full border transition-all duration-300 ${
                    settings.highContrast 
                      ? 'bg-[#01FFFF]/20 border-[#01FFFF]/30' 
                      : 'bg-gray-700/50 border-gray-600'
                  }`}
                  aria-label={settings.highContrast ? 'Disable high contrast' : 'Enable high contrast'}
                >
                  <div className={`w-5 h-5 rounded-full transition-all duration-300 ${
                    settings.highContrast 
                      ? 'bg-[#01FFFF] translate-x-6' 
                      : 'bg-gray-500 translate-x-0.5'
                  }`}></div>
                </button>
              </div>

              {/* Large Text */}
              <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3">
                  <Type className="text-[#01A9FF]" size={18} />
                  <div>
                    <h4 className="text-white font-medium text-sm">Large Text</h4>
                    <p className="text-gray-400 text-xs">Increase text size</p>
                  </div>
                </div>
                <button
                  onClick={() => updateSetting('largeText', !settings.largeText)}
                  className={`w-12 h-6 rounded-full border transition-all duration-300 ${
                    settings.largeText 
                      ? 'bg-[#01A9FF]/20 border-[#01A9FF]/30' 
                      : 'bg-gray-700/50 border-gray-600'
                  }`}
                  aria-label={settings.largeText ? 'Disable large text' : 'Enable large text'}
                >
                  <div className={`w-5 h-5 rounded-full transition-all duration-300 ${
                    settings.largeText 
                      ? 'bg-[#01A9FF] translate-x-6' 
                      : 'bg-gray-500 translate-x-0.5'
                  }`}></div>
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3">
                  <MousePointer className="text-[#01FFFF]/70" size={18} />
                  <div>
                    <h4 className="text-white font-medium text-sm">Reduced Motion</h4>
                    <p className="text-gray-400 text-xs">Minimize animations</p>
                  </div>
                </div>
                <button
                  onClick={() => updateSetting('reducedMotion', !settings.reducedMotion)}
                  className={`w-12 h-6 rounded-full border transition-all duration-300 ${
                    settings.reducedMotion 
                      ? 'bg-[#01FFFF]/20 border-[#01FFFF]/30' 
                      : 'bg-gray-700/50 border-gray-600'
                  }`}
                  aria-label={settings.reducedMotion ? 'Enable animations' : 'Disable animations'}
                >
                  <div className={`w-5 h-5 rounded-full transition-all duration-300 ${
                    settings.reducedMotion 
                      ? 'bg-[#01FFFF] translate-x-6' 
                      : 'bg-gray-500 translate-x-0.5'
                  }`}></div>
                </button>
              </div>

              {/* Focus Visible */}
              <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                <div className="flex items-center gap-3">
                  <Eye className="text-[#01A9FF]" size={18} />
                  <div>
                    <h4 className="text-white font-medium text-sm">Focus Indicators</h4>
                    <p className="text-gray-400 text-xs">Show keyboard focus</p>
                  </div>
                </div>
                <button
                  onClick={() => updateSetting('focusVisible', !settings.focusVisible)}
                  className={`w-12 h-6 rounded-full border transition-all duration-300 ${
                    settings.focusVisible 
                      ? 'bg-[#01A9FF]/20 border-[#01A9FF]/30' 
                      : 'bg-gray-700/50 border-gray-600'
                  }`}
                  aria-label={settings.focusVisible ? 'Hide focus indicators' : 'Show focus indicators'}
                >
                  <div className={`w-5 h-5 rounded-full transition-all duration-300 ${
                    settings.focusVisible 
                      ? 'bg-[#01A9FF] translate-x-6' 
                      : 'bg-gray-500 translate-x-0.5'
                  }`}></div>
                </button>
              </div>
            </div>

            {/* Reset Button */}
            <div className="mt-6 pt-4 border-t border-gray-700">
              <button
                onClick={resetSettings}
                className="w-full py-2 px-4 bg-gray-800/50 text-gray-300 rounded-lg hover:bg-gray-800/70 hover:text-white transition-all duration-300 text-sm"
              >
                Reset to Default
              </button>
            </div>

            {/* Info */}
            <div className="mt-4 text-xs text-gray-500">
              <p>These settings help make our website more accessible for everyone.</p>
              <a href="/accessibility" className="text-[#01FFFF] hover:underline mt-2 block">
                View Accessibility Statement
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
