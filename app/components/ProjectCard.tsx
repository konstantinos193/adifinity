import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
  project: {
    id: number
    name: string
    category: string
    image: string
    description: string
  }
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] rounded-lg overflow-hidden shadow-lg cursor-pointer"
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.3)" }}
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-[#01FFFF]">{project.name}</h3>
        <p className="text-sm mb-2 opacity-70">{project.category}</p>
        <p className="text-sm">{project.description}</p>
      </div>
    </motion.div>
  )
}

