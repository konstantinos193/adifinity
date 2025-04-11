"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

type Project = {
  id: string
  name: string
  category: string
  image: string
  description: string
  challenge?: string
  solution?: string
  results?: string
  bgColor?: string // Optional background color override
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [project])

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

  if (!project) return null

  // Get background settings for current project
  const defaultBg = { bgColor: colors.white, isDark: false, hasBorder: true }
  const bgSettings = project?.name ? backgroundMap[project.name] || defaultBg : defaultBg
  const { bgColor, isDark, hasBorder = false } = bgSettings

  // Determine if we need a pattern based on background darkness
  const hasPattern = isDark

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-transparent rounded-xl overflow-hidden max-w-4xl w-full max-h-[85vh] overflow-y-auto border border-cyan-900/30"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative p-6 md:p-8 bg-transparent rounded-xl">
              {/* Subtle border with glow effect */}
              <div className="absolute inset-0 rounded-xl border border-cyan-500/20 backdrop-blur-sm bg-[#071218]/60"></div>

              {/* Subtle grid pattern for visual texture */}
              <div
                className="absolute inset-0 rounded-xl opacity-[0.03] overflow-hidden"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              {/* Ambient glow effects */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#01FFFF]/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#01A9FF]/5 rounded-full blur-3xl"></div>

              <button
                className="absolute top-4 right-4 bg-transparent p-2 rounded-full text-white hover:bg-[#01FFFF]/10 z-20 backdrop-blur-sm border border-[#01FFFF]/30"
                onClick={onClose}
              >
                <X size={24} />
              </button>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Logo display with custom background */}
                <div className="flex flex-col items-center">
                  <div className="relative w-full h-48 md:h-64 mb-4 rounded-lg overflow-hidden">
                    {/* Custom background for the logo */}
                    <div
                      className={`absolute inset-0 ${hasBorder ? "border border-gray-300" : ""}`}
                      style={{ backgroundColor: bgColor }}
                    >
                      {/* Optional pattern for dark backgrounds */}
                      {hasPattern && (
                        <div className="absolute inset-0 overflow-hidden">
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
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>

                      {/* Special contrast enhancement for specific logos */}
                      {project?.name === "Ilias Barber - Barber Shop" && (
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
                      )}
                    </div>

                    {/* Logo image */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        fill
                        className="object-contain"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-2">{project.name}</h2>
                  <p className="text-[#01FFFF] text-center">{project.category}</p>
                </div>

                {/* Project details */}
                <div className="flex flex-col h-full custom-scrollbar overflow-y-auto pr-2">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-[#01FFFF] mb-2">Περιγραφή</h3>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>

                  {project.challenge && (
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-[#01FFFF] mb-2">Πρόκληση</h3>
                      <p className="text-gray-300 text-sm">{project.challenge}</p>
                    </div>
                  )}

                  {project.solution && (
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-[#01FFFF] mb-2">Λύση</h3>
                      <p className="text-gray-300 text-sm">{project.solution}</p>
                    </div>
                  )}

                  {project.results && (
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-[#01FFFF] mb-2">Αποτελέσματα</h3>
                      <p className="text-gray-300 text-sm">{project.results}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  className="bg-transparent hover:bg-[#01FFFF]/10 border border-[#01FFFF]/30 text-[#01FFFF] font-bold py-1.5 px-5 rounded-full backdrop-blur-sm transition-all text-sm"
                  onClick={onClose}
                >
                  Κλείσιμο
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
