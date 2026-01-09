"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Image from "next/image"
import projectsData from "../data/projects.json"

export default function LogoCarousel() {
  const projects = projectsData.projects
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [autoplay, setAutoplay] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  // Initialize on client side
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextLogo()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  const nextLogo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length)
  }

  const prevLogo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (diff > 50) {
      nextLogo() // Swipe left
    } else if (diff < -50) {
      prevLogo() // Swipe right
    }
  }

  // If we're not loaded yet, don't render anything to avoid hydration issues
  if (!isLoaded) {
    return null
  }

  // Enhanced color palette with more options for better contrast
  const colors = {
    white: "#ffffff",
    lightGray: "#f1f5f9", // Lighter gray
    gray: "#e5e7eb",
    mediumGray: "#9ca3af", // Medium gray for some backgrounds
    darkGray: "#1f2937",
    veryDarkGray: "#111827", // Almost black
    lightBlue: "#e0f2fe", // Very light blue
    lightBeige: "#f5f5dc", // Light beige for gold text logos
    lightYellow: "#fef9c3", // Light yellow for subtle backgrounds
    lightGreen: "#dcfce7", // Light green for subtle backgrounds
    burgundyRed: "#4a0e16", // Dark red for Sophia Dim. Exarchou logo
    darkCharcoal: "#121212", // Very dark gray/black for DA CAMPO logo
    darkGreen: "#3a5a1c", // Dark green for Teatro Cafe Bar Restaurant
  }

  // Hard-coded background colors for each project with improved contrast
  const backgroundMap: Record<string, { bgColor: string; isDark: boolean; hasBorder?: boolean }> = {
    // Logos with light elements need dark backgrounds
    "TechFix - Pc and Smartphone Service": { bgColor: colors.veryDarkGray, isDark: true },
    "Maxim Cafe-Bar": { bgColor: colors.darkGray, isDark: true },
    "Στέφανος Σπύρος Accounting": { bgColor: colors.veryDarkGray, isDark: true },
    "ΟΙΚΟΝΟΜΟΥ SAFE TRANS": { bgColor: colors.darkGray, isDark: true },
    "Teatro Cafe Bar Restaurant": { bgColor: colors.darkGreen, isDark: true }, // Added Teatro with dark green background

    // Logos with blue elements need white/light backgrounds for contrast
    αλιΑμβρα: { bgColor: colors.white, isDark: false, hasBorder: true },
    "WEST GAS": { bgColor: colors.white, isDark: false, hasBorder: true },
    "Πολιτιστικός Σύλλογος Φιλοθέης Άρτας": { bgColor: colors.white, isDark: false, hasBorder: true },

    // Special cases with specific contrast needs
    "Α.Π.Ο.Φ.Α": { bgColor: colors.white, isDark: false, hasBorder: true }, // Changed to white with border
    "Συμβολαιογράφος Σοφία Δημ. Εξάρχου": { bgColor: colors.burgundyRed, isDark: true }, // Changed to burgundy red
    "Ilias Barber - Barber Shop": { bgColor: colors.darkGray, isDark: true }, // Dark background for light text
    "DA CAMPO coffee and more": { bgColor: colors.darkCharcoal, isDark: true }, // Changed to very dark gray/black

    // Other logos with standard backgrounds
    "Bohĕme Beach bar": { bgColor: colors.white, isDark: false, hasBorder: true },
    "Box Bijou": { bgColor: colors.white, isDark: false, hasBorder: true },
    "Bocca Cucina Italiana": { bgColor: colors.white, isDark: false, hasBorder: true },
    "Τα Λέμε Στης Σοφίας": { bgColor: colors.white, isDark: false, hasBorder: true },
    "Energy House": { bgColor: colors.white, isDark: false, hasBorder: true },
    Storkway: { bgColor: colors.white, isDark: false, hasBorder: true },
    "ΔΟΞΑΣ ΠΥΡΡΟΥ": { bgColor: colors.white, isDark: false, hasBorder: true },
    "Τερτ...Ήπια": { bgColor: colors.white, isDark: false, hasBorder: true },
    "Ενεργειακή Άρτας": { bgColor: colors.white, isDark: false, hasBorder: true },
  }

  const currentProject = projects[currentIndex]

  // Get background settings for current project
  const defaultBg = { bgColor: colors.white, isDark: false, hasBorder: true }
  const bgSettings = currentProject?.name ? backgroundMap[currentProject.name] || defaultBg : defaultBg
  const { bgColor, isDark, hasBorder = false } = bgSettings

  // Determine if we need a border or pattern based on background darkness
  const hasPattern = isDark

  return (
    <section className="py-16 bg-gradient-to-b from-[#071218] to-[#0A1A24]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">Οι Συνεργάτες Μας</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Logo display area with manually selected background */}
          <div
            className={`rounded-lg p-8 flex items-center justify-center h-[350px] relative shadow-xl transition-colors duration-500 ${
              hasBorder ? "border border-gray-300" : ""
            }`}
            style={{ backgroundColor: bgColor }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            {/* Optional pattern for dark backgrounds */}
            {hasPattern && (
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                ></div>
              </div>
            )}

            {/* Subtle gradient overlay for visual interest */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 rounded-lg"></div>

            {/* Special contrast enhancement for specific logos */}
            {currentProject?.name === "Ilias Barber - Barber Shop" && (
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-lg"></div>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
                className="w-full h-full flex items-center justify-center relative z-10"
                style={{ willChange: 'opacity' }}
              >
                <div className="relative w-full h-full max-w-[400px] max-h-[250px] aspect-[400/250]">
                  <Image
                    src={currentProject.image || "/placeholder.svg"}
                    alt={currentProject.name}
                    fill
                    className="object-contain"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons with custom SVG arrows */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5">
            <button
              onClick={prevLogo}
              className="bg-[#01FFFF] hover:bg-[#01A9FF] text-[#071218] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
              aria-label="Previous logo"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#071218"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
          </div>

          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5">
            <button
              onClick={nextLogo}
              className="bg-[#01FFFF] hover:bg-[#01A9FF] text-[#071218] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
              aria-label="Next logo"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#071218"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>

          {/* Partner name with animation */}
          <motion.div
            key={`name-${currentIndex}`}
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="text-center mt-8"
            style={{ willChange: 'opacity, transform' }}
          >
            <h3 className="text-xl font-bold text-[#01FFFF]">{currentProject.name}</h3>
            <p className="text-gray-300 text-sm mt-2">{currentProject.category}</p>
          </motion.div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 gap-2 flex-wrap max-w-md mx-auto">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-[#01FFFF] w-4" : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to logo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}