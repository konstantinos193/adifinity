"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

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
      className="p-4 rounded-full shadow-xl relative"
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
      <div className={`transition-opacity duration-300 ${isEasterTheme ? 'opacity-70' : 'opacity-100'}`}>
        <Image
          src="/easteregg.svg"
          alt="Easter theme toggle"
          width={30}
          height={36}
          className="w-[30px] h-[36px]"
        />
      </div>
    </motion.button>
  )
}
