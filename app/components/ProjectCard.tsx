"use client"
import { motion } from "framer-motion"
import Image from "next/image"

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
  liveUrl?: string // Optional live website URL
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
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

  // Get background settings for current project
  const defaultBg = { bgColor: colors.white, isDark: false, hasBorder: true }
  const bgSettings = project?.name ? backgroundMap[project.name] || defaultBg : defaultBg
  const { bgColor, isDark, hasBorder = false } = bgSettings

  // Determine if we need a pattern based on background darkness
  const hasPattern = isDark

  return (
    <motion.div
      className="bg-transparent rounded-xl overflow-hidden shadow-lg cursor-pointer h-full border border-cyan-900/20 hover:border-cyan-500/30 backdrop-blur-sm relative"
      whileHover={{
        y: -10,
        boxShadow: "0 10px 25px rgba(1, 255, 255, 0.2)",
        borderColor: "rgba(1, 255, 255, 0.3)",
      }}
      onClick={onClick}
    >
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-[#071218]/60 rounded-xl"></div>
      <div className="p-6 flex flex-col items-center relative z-10">
        {/* Logo container with custom background */}
        <div className="relative w-full h-48 mb-6 flex items-center justify-center rounded-lg overflow-hidden">
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

        {/* Project info */}
        <h3 className="text-xl font-bold text-white text-center mb-2">{project.name}</h3>
        <p className="text-[#01FFFF] text-sm mb-4 text-center">{project.category}</p>
        <p className="text-gray-300 text-sm line-clamp-3 text-center">{project.description}</p>

        <div className="mt-6 w-full space-y-3">
          <button className="w-full py-2 px-4 bg-transparent hover:bg-[#01FFFF]/10 border border-[#01FFFF]/30 rounded-lg text-[#01FFFF] text-sm flex items-center justify-center transition-all backdrop-blur-sm">
            Περισσότερες λεπτομέρειες
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {project.liveUrl && (
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-4 bg-[#01FFFF]/10 hover:bg-[#01FFFF]/20 border border-[#01FFFF]/50 rounded-lg text-[#01FFFF] text-sm flex items-center justify-center transition-all backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              Επίσκεψη Ιστοσελίδας
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
