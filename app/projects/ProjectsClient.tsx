"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "../components/ProjectCard"
import { ProjectModal } from "../components/ProjectModal"
import projectData from "../data/projects.json"
import Link from "next/link"
import { useTranslations } from "@/components/useTranslations"

// Function to shuffle array (Fisher-Yates algorithm)
const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export function ProjectsClient() {
  const { t, locale } = useTranslations()
  
  const [selectedProject, setSelectedProject] = useState<(typeof projectData.projects)[0] | null>(null)
  const [projects, setProjects] = useState(projectData.projects)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Helper function to get localized project content
  const getLocalizedProject = (project: any) => {
    if (locale === 'en' && project.nameEn) {
      return {
        ...project,
        name: project.nameEn || project.name,
        description: project.descriptionEn || project.description,
        category: project.categoryEn || project.category
      }
    }
    return project
  }

  // Randomize projects on page load
  useEffect(() => {
    setProjects(shuffleArray(projectData.projects))
  }, [])

  // Get unique categories
  const categories = Array.from(new Set(projectData.projects.map((project) => 
    locale === 'en' && project.categoryEn ? project.categoryEn : project.category
  )))

  // Filter projects by category
  const filteredProjects = selectedCategory
    ? projects.filter((project) => {
        const localizedProject = getLocalizedProject(project)
        return localizedProject.category === selectedCategory
      })
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
            {t('projects_page.hero_title')}
          </motion.h1>

          <motion.p
            className="text-center max-w-2xl mx-auto mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('projects_page.description')}
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
            {t('projects_page.all_projects')}
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
                {filteredProjects.map((project, index) => {
                  const localizedProject = getLocalizedProject(project)
                  return (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <ProjectCard project={localizedProject} onClick={() => setSelectedProject(localizedProject)} />
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-[#01FFFF] mb-4">{t('projects_page.no_projects_found')}</h3>
              <p className="text-gray-300 mb-8">{t('projects_page.try_different_filters')}</p>
              <button
                onClick={() => {
                  setSelectedCategory(null)
                }}
                className="bg-[#0D2436] text-white px-6 py-3 rounded-lg hover:bg-[#0D2436]/80 transition-colors"
              >
                {t('projects_page.reset_filters')}
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
              {t('projects_page.cta_title')}
            </h3>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
              {t('projects_page.cta_description')}
            </p>
            <div className="flex justify-center">
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('projects_page.contact_us')}
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject ? getLocalizedProject(selectedProject) : null} onClose={() => setSelectedProject(null)} />
    </main>
  )
}
