"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function EasterThemeToggle() {
  const [isEasterTheme, setIsEasterTheme] = useState(false)

  useEffect(() => {
    // Check if Easter theme was enabled before
    const storedPreference = localStorage.getItem("easterThemeEnabled")

    if (storedPreference !== null) {
      setIsEasterTheme(storedPreference === "true")
    } else {
      // Auto-enable during Easter season
      const now = new Date()
      const easterStart = new Date("2025-04-13") // Week before Easter
      const easterEnd = new Date("2025-04-21") // Easter Monday
      const shouldEnable = now >= easterStart && now <= easterEnd
      setIsEasterTheme(shouldEnable)
      localStorage.setItem("easterThemeEnabled", shouldEnable.toString())
    }
  }, [])

  useEffect(() => {
    // Apply Easter theme to document
    if (isEasterTheme) {
      document.documentElement.classList.add("easter-theme")
    } else {
      document.documentElement.classList.remove("easter-theme")
    }

    // Save preference
    localStorage.setItem("easterThemeEnabled", isEasterTheme.toString())
  }, [isEasterTheme])

  return (
    <motion.button
      className="p-4 rounded-full shadow-xl"
      style={{
        background: isEasterTheme ? "linear-gradient(to right, #FFD1DC, #C7CEEA)" : "#01FFFF",
        boxShadow: "0 0 20px rgba(1, 255, 255, 0.8)",
        border: "3px solid #FFFFFF",
      }}
      onClick={() => setIsEasterTheme(!isEasterTheme)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <svg width="30" height="36" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2C8 2 4 8 4 15C4 22 8 28 12 28C16 28 20 22 20 15C20 8 16 2 12 2Z"
          fill={isEasterTheme ? "#07141C" : "#FFD1DC"}
          stroke="#07141C"
          strokeWidth="1.5"
        />
        <path d="M8 10 Q9 8 10 10 T12 12" stroke="#FF4081" strokeWidth="1" strokeLinecap="round" />
        <circle cx="16" cy="12" r="1.5" fill="#C7CEEA" />
        <path d="M10 20 L12 22 L14 20" stroke="#FF4081" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </motion.button>
  )
}
