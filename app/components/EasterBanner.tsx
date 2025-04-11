"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import { EasterEggIcon, EasterBunnyIcon } from "./EasterIcons"

export default function EasterBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isEasterTheme, setIsEasterTheme] = useState(false)

  useEffect(() => {
    // Check if banner was dismissed before
    const bannerDismissed = localStorage.getItem("easterBannerDismissed") === "true"
    if (bannerDismissed) {
      setIsVisible(false)
    }

    // Check if Easter theme is enabled
    const checkTheme = () => {
      const htmlElement = document.documentElement
      setIsEasterTheme(htmlElement.classList.contains("easter-theme"))
    }

    // Initial check
    checkTheme()

    // Set up a MutationObserver to watch for class changes on the html element
    const observer = new MutationObserver(() => {
      checkTheme()
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  const dismissBanner = () => {
    setIsVisible(false)
    localStorage.setItem("easterBannerDismissed", "true")
  }

  // Only show banner if Easter theme is enabled and banner hasn't been dismissed
  if (!isVisible || !isEasterTheme) return null

  return (
    <motion.div
      className="relative w-full bg-gradient-to-r from-[#FFD1DC] to-[#C7CEEA] text-[#07141C] py-4 px-4 text-center mt-16 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex items-center space-x-3">
          <span className="inline-block" style={{ lineHeight: 0 }}>
          </span>
          <p className="font-medium text-lg">
            Καλό Πάσχα από όλους μας στην <span className="font-bold">adinfinity</span>!
          </p>
          <span className="inline-block" style={{ lineHeight: 0 }}>
          </span>
        </div>
        <button
          onClick={dismissBanner}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#07141C]/70 hover:text-[#07141C]"
          aria-label="Dismiss Easter banner"
        >
          <X size={20} />
        </button>
      </div>
    </motion.div>
  )
}
