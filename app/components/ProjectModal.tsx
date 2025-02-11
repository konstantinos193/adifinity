import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"

interface ProjectModalProps {
  project: {
    id: number
    name: string
    category: string
    image: string
    description: string
    challenge: string
    solution: string
    results: string
  } | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-[#0A1A24] rounded-lg w-full max-w-3xl h-[90vh] flex flex-col"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
        >
          <div className="relative h-[300px] bg-gradient-to-br from-[#0D2436] to-[#07141C] flex items-center justify-center">
            <Image 
              src={project.image || "/placeholder.svg"} 
              alt={project.name} 
              fill
              className="object-contain p-4"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <button 
              className="absolute top-4 right-4 bg-[#01FFFF] text-[#07141C] p-2 rounded-full" 
              onClick={onClose}
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
            <div>
              <h2 className="text-3xl font-bold mb-3 text-[#01FFFF]">{project.name}</h2>
              <p className="text-sm mb-4 opacity-70">{project.category}</p>
              <p className="text-base">{project.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-[#01FFFF]">Πρόκληση</h3>
              <p className="text-base">{project.challenge}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-[#01FFFF]">Λύση</h3>
              <p className="text-base">{project.solution}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-[#01FFFF]">Αποτελέσματα</h3>
              <p className="text-base">{project.results}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

