"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  { 
    id: 1, 
    name: "Arta Palace", 
    logo: "/projects/artapalace.jpg",
    description: "Ξενοδοχείο στην Άρτα"
  },
  { 
    id: 2, 
    name: "Μπακάλικο", 
    logo: "/projects/mpakaliko.jpg",
    description: "Παραδοσιακό Παντοπωλείο"
  },
  { 
    id: 3, 
    name: "Κρεοπωλείο Παππάς", 
    logo: "/projects/pappas.jpg",
    description: "Κρεοπωλείο στην Άρτα"
  },
  { 
    id: 4, 
    name: "Coffee Lab", 
    logo: "/projects/coffeelab.jpg",
    description: "Καφετέρια"
  },
  { 
    id: 5, 
    name: "Πιτσαρία Μαργαρίτα", 
    logo: "/projects/margarita.jpg",
    description: "Εστιατόριο - Πιτσαρία"
  },
  { 
    id: 6, 
    name: "Καφέ Μπαρ Status", 
    logo: "/projects/status.jpg",
    description: "Καφέ - Μπαρ"
  }
]

interface ProjectCardProps {
  id: number
  name: string
  logo: string
  description: string
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}

export function ProjectCard({ id, name, logo, description, isHovered, onHoverStart, onHoverEnd }: ProjectCardProps) {
  return (
    <motion.div
      className="relative aspect-square bg-[var(--background)] rounded-lg overflow-hidden cursor-pointer shadow-lg"
      whileHover={{ scale: 1.03 }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300"
      />
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#030B10] via-[#030B10]/80 to-transparent flex flex-col items-center justify-end p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <h3 className="text-[#01FFFF] text-xl font-bold mb-2">{name}</h3>
          <p className="text-white text-center">{description}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export function ProjectGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl text-center mb-12 text-[#01FFFF]">Τα Έργα μας</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            logo={project.logo}
            description={project.description}
            isHovered={hoveredId === project.id}
            onHoverStart={() => setHoveredId(project.id)}
            onHoverEnd={() => setHoveredId(null)}
          />
        ))}
      </div>
    </div>
  )
}
