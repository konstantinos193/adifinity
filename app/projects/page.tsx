"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "../components/ProjectCard"
import { ProjectModal } from "../components/ProjectModal"
import projectData from "../data/projects.json"

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectData.projects)[0] | null>(null)
  const [shuffledProjects, setShuffledProjects] = useState(projectData.projects)

  // Shuffle projects when the component mounts
  useEffect(() => {
    setShuffledProjects(shuffleArray(projectData.projects))
  }, [])

  // Fisher-Yates (Knuth) shuffle algorithm
  function shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-7xl text-center mb-12 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Τα Έργα Μας
        </motion.h1>

        <motion.div
          className="h-[calc(100vh-400px)] overflow-y-auto custom-scrollbar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            <AnimatePresence>
              {shuffledProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </main>
  )
}

