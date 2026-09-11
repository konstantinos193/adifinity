"use client"

import { useState, useEffect } from "react"
import { INDUSTRIES, industryOf } from "@/lib/industries"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "../components/ProjectCard"
import { ProjectModal } from "../components/ProjectModal"
import { projects as allProjects, localizeProject, type Project } from "@/lib/projects"
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
  
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [projects, setProjects] = useState<Project[]>(allProjects)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  // Second axis (audit §23): industry, derived from businessType. State only, never a URL.
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)

  // Returns the *whole* project with the English fields applied — the previous
  // inline version spread only six of them, which dropped id/slug/image/liveUrl
  // on the way into the card and the modal.
  const getLocalizedProject = (project: Project) => localizeProject(project, locale)

  // Randomize projects on page load
  useEffect(() => {
    setProjects(shuffleArray(allProjects))
  }, [])

  // Get unique categories
  const categories = Array.from(new Set(allProjects.map((project) =>
    locale === 'en' && project.categoryEn ? project.categoryEn : project.category
  )))

  // Filter projects by category, then by industry
  const filteredProjects = projects.filter((project) => {
    if (selectedCategory && getLocalizedProject(project).category !== selectedCategory) return false
    if (selectedIndustry && industryOf(project)?.key !== selectedIndustry) return false
    return true
  })

  // Only industries that actually have a project, so no pill filters to nothing.
  const industries = INDUSTRIES.filter((industry) => allProjects.some((project) => industryOf(project)?.key === industry.key))

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
        {/* Category Filter — animated underline tabs */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-0 relative border-b border-cyan-900/30 w-full max-w-3xl">
            {([null, ...categories] as (string | null)[]).map((category) => {
              const isActive = selectedCategory === category
              const label = category === null ? t('projects_page.all_projects') : category
              return (
                <button
                  key={category ?? "__all__"}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-5 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive ? "text-[#01FFFF]" : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-[#01FFFF] to-[#01A9FF]"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Industry filter: pills, so it reads as a second axis rather than a second tab row */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 -mt-6" role="group" aria-label={locale === 'en' ? 'Filter by industry' : 'Φίλτρο ανά κλάδο'}>
          {industries.map((industry) => {
            const isActive = selectedIndustry === industry.key
            return (
              <button
                key={industry.key}
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedIndustry(isActive ? null : industry.key)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "border-[#01FFFF] bg-[#01FFFF]/10 text-[#01FFFF]"
                    : "border-gray-800 text-gray-400 hover:border-gray-600 hover:text-gray-200"
                }`}
              >
                {locale === 'en' ? industry.en : industry.el}
              </button>
            )
          })}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {filteredProjects.length > 0 ? (
            // `relative` is required by AnimatePresence's popLayout mode, which
            // absolutely-positions the cards on their way out.
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* popLayout pulls exiting cards out of the grid flow immediately,
                  so the surviving cards reflow on the same frame as the click
                  instead of waiting for 27 fade-outs to finish. */}
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => {
                  const localizedProject = getLocalizedProject(project)
                  // Capped stagger. Uncapped (`index * 0.05`) the 32nd card was
                  // delayed 1.55s — long enough that filtering read as "the grid
                  // emptied out and the results came back a few seconds later".
                  const stagger = Math.min(index, 7) * 0.04
                  return (
                    <motion.div
                      key={project.id}
                      // "position" only: the cards are fixed-aspect, so there is
                      // no size to animate and this skips the scale correction
                      // that would otherwise distort every card's contents.
                      layout="position"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: stagger } }}
                      // Exits must not inherit the stagger — they all leave at once.
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.15 } }}
                      transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
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
                  setSelectedIndustry(null)
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
          className="relative overflow-hidden bg-linear-to-r from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl shadow-2xl border border-cyan-900/30 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-linear-to-br from-[#01FFFF]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-[#01A9FF]/10 to-transparent rounded-full blur-3xl"></div>

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
                  className="bg-linear-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20"
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
