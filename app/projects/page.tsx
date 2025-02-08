"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "../components/ProjectCard"
import { ProjectModal } from "../components/ProjectModal"
import { FilterButton } from "../components/FilterButton"

const projects = [
  {
    id: 1,
    name: "Tech Solutions Rebrand",
    category: "Branding",
    image: "/placeholder.svg",
    description:
      "A complete rebranding project for Tech Solutions, including new logo, color scheme, and brand guidelines.",
    challenge:
      "Tech Solutions needed a modern brand identity to reflect their innovative approach in the tech industry.",
    solution:
      "We developed a sleek, minimalist logo and a vibrant color palette that conveys innovation and reliability.",
    results:
      "The new brand identity led to a 30% increase in brand recognition and a 25% boost in new client acquisitions.",
  },
  {
    id: 2,
    name: "Green Energy Digital Campaign",
    category: "Digital Marketing",
    image: "/placeholder.svg",
    description:
      "A comprehensive digital marketing campaign for Green Energy, focusing on social media and content marketing.",
    challenge:
      "Green Energy wanted to increase awareness about their sustainable energy solutions and attract more residential customers.",
    solution:
      "We created a multi-channel digital campaign with engaging content, influencer partnerships, and targeted ads.",
    results:
      "The campaign resulted in a 50% increase in website traffic and a 40% rise in residential customer inquiries.",
  },
  {
    id: 3,
    name: "Fashion House E-commerce Website",
    category: "Ανάπτυξη Ιστοσελίδων",
    image: "/placeholder.svg",
    description:
      "A fully responsive e-commerce website for Fashion House, featuring a user-friendly interface and seamless checkout process.",
    challenge:
      "Fashion House needed an online platform to showcase their products and facilitate easy online shopping for customers.",
    solution:
      "We developed a custom e-commerce solution with advanced filtering, personalized recommendations, and a streamlined checkout process.",
    results: "The new website led to a 70% increase in online sales and a 45% reduction in cart abandonment rate.",
  },
  {
    id: 4,
    name: "Gourmet Foods Product Packaging",
    category: "Σχεδιασμός Συσκευασίας",
    image: "/placeholder.svg",
    description: "Eye-catching packaging design for Gourmet Foods' new line of organic snacks.",
    challenge:
      "Gourmet Foods wanted packaging that would stand out on shelves and communicate the premium, organic nature of their products.",
    solution:
      "We created vibrant, eco-friendly packaging designs that highlight the natural ingredients and appeal to health-conscious consumers.",
    results:
      "The new packaging contributed to a 60% increase in sales and secured placement in several high-end supermarket chains.",
  },
  {
    id: 5,
    name: "Travel Adventures Mobile App",
    category: "Ανάπτυξη Εφαρμογών",
    image: "/placeholder.svg",
    description:
      "A feature-rich mobile app for Travel Adventures, allowing users to plan, book, and share their travel experiences.",
    challenge:
      "Travel Adventures wanted to provide a seamless, all-in-one solution for their customers to plan and book trips.",
    solution:
      "We developed a user-friendly mobile app with integrated booking, itinerary planning, and social sharing features.",
    results: "The app garnered over 100,000 downloads in the first month and increased customer engagement by 80%.",
  },
  {
    id: 6,
    name: "Fitness First Marketing Strategy",
    category: "Στρατηγική Marketing",
    image: "/placeholder.svg",
    description:
      "A comprehensive marketing strategy for Fitness First, targeting new gym memberships and promoting online fitness classes.",
    challenge: "Fitness First needed to attract new members and promote their newly launched online fitness classes.",
    solution:
      "We developed a multi-faceted marketing strategy, including local SEO, content marketing, and targeted social media campaigns.",
    results:
      "The strategy led to a 40% increase in new gym memberships and a 200% growth in online class subscriptions.",
  },
]

const categories = [
  "Όλα",
  "Branding",
  "Digital Marketing",
  "Ανάπτυξη Ιστοσελίδων",
  "Σχεδιασμός Συσκευασίας",
  "Ανάπτυξη Εφαρμογών",
  "Στρατηγική Marketing",
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [filter, setFilter] = useState("Όλα")

  const filteredProjects = filter === "Όλα" ? projects : projects.filter((project) => project.category === filter)

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-7xl text-center mb-12 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Τα Έργα Μας
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <FilterButton
              key={index}
              category={category}
              isActive={filter === category}
              onClick={() => setFilter(category)}
            />
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
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
        </motion.div>

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </main>
  )
}

