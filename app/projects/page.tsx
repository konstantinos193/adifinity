"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "../components/ProjectCard"
import { ProjectModal } from "../components/ProjectModal"
import projectData from "../data/projects.json"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link"

// Function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = (array: any[]) => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectData.projects)[0] | null>(null)
  const [projects, setProjects] = useState(projectData.projects)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Randomize projects on page load
  useEffect(() => {
    setProjects(shuffleArray(projectData.projects))
  }, [])

  // Get unique categories
  const categories = Array.from(new Set(projectData.projects.map((project) => project.category)))

  // Filter projects by category
  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      {/* Hero section with animated background */}
      <div className="relative mb-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#07141C]/90"></div>
          <div className="absolute inset-0">
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
            {/* Subtle glow in top-right */}
            <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-[#01FFFF]/5 rounded-full blur-[100px]"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.h1
            className="text-4xl md:text-7xl text-center mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Τα Έργα Μας
          </motion.h1>

          <motion.p
            className="text-center max-w-2xl mx-auto mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Εξερευνήστε μερικά από τα πρόσφατα έργα μας και ανακαλύψτε πώς μπορούμε να βοηθήσουμε την επιχείρησή σας να
            ξεχωρίσει με μοναδικό branding και γραφιστικό σχεδιασμό.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === null
                ? "bg-[#01FFFF] text-[#07141C]"
                : "bg-[#0D2436] text-white hover:bg-[#0D2436]/80"
            }`}
            onClick={() => setSelectedCategory(null)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Όλα
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-[#01FFFF] text-[#07141C]"
                  : "bg-[#0D2436] text-white hover:bg-[#0D2436]/80"
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-[#01FFFF] mb-4">Δεν βρέθηκαν έργα</h3>
              <p className="text-gray-300 mb-8">Δοκιμάστε να αλλάξετε τα κριτήρια φιλτραρίσματος</p>
              <button
                onClick={() => {
                  setSelectedCategory(null)
                }}
                className="bg-[#0D2436] text-white px-6 py-3 rounded-lg hover:bg-[#0D2436]/80 transition-colors"
              >
                Επαναφορά φίλτρων
              </button>
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl shadow-2xl border border-cyan-900/30 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#01FFFF]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#01A9FF]/10 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Έτοιμοι να δημιουργήσουμε το δικό σας brand;
            </h3>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
              Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε πώς μπορούμε να βοηθήσουμε την επιχείρησή σας να
              ξεχωρίσει με ένα μοναδικό και επαγγελματικό branding.
            </p>
            <div className="flex justify-center">
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Επικοινωνήστε μαζί μας
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      <SpeedInsights />
    </main>
  )
}
