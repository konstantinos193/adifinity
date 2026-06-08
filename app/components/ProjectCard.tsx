"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTranslations } from "@/components/useTranslations"

type Project = {
  id: string
  name: string
  category: string
  image: string
  description: string
  challenge?: string
  solution?: string
  results?: string
  bgColor?: string
  liveUrl?: string
}

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { t } = useTranslations()

  return (
    <motion.div
      className="relative aspect-square bg-[#0A1A24] rounded-xl overflow-hidden cursor-pointer border border-cyan-900/20"
      whileHover="hovered"
      initial="rest"
      animate="rest"
      variants={{
        rest: {
          borderColor: "rgba(1,255,255,0.1)",
          boxShadow: "none",
          scale: 1,
        },
        hovered: {
          borderColor: "rgba(1,255,255,0.35)",
          boxShadow: "0 0 30px rgba(1,255,255,0.15)",
          scale: 1.02,
        },
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
    >
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-cyan-950/20 via-transparent to-blue-950/20 z-0" />

      {/* Logo */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-contain p-8"
        />
      </div>

      {/* Hover reveal panel */}
      <motion.div
        className="absolute inset-x-0 bottom-0 z-20 bg-linear-to-t from-[#030B10]/98 via-[#071218]/95 to-transparent pt-12 pb-5 px-4"
        variants={{
          rest: { y: "100%", opacity: 0 },
          hovered: { y: "0%", opacity: 1 },
        }}
        transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex justify-center mb-2">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border border-cyan-500/30 text-[#01FFFF] bg-cyan-950/40 tracking-wider uppercase">
            {project.category}
          </span>
        </div>

        <h3 className="text-white font-bold text-center text-sm leading-tight mb-3 px-1 line-clamp-2">
          {project.name}
        </h3>

        <div className="flex flex-col gap-2">
          <button className="w-full py-2 px-3 bg-[#01FFFF]/10 hover:bg-[#01FFFF]/20 border border-[#01FFFF]/30 rounded-lg text-[#01FFFF] text-xs flex items-center justify-center transition-colors">
            {t('projects_page.more_details')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 bg-transparent hover:bg-[#01FFFF]/10 border border-[#01FFFF]/20 rounded-lg text-[#01FFFF] text-xs flex items-center justify-center transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {t('projects_page.visit_website')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </motion.div>

      {/* Mobile name strip — always visible below md */}
      <div className="absolute bottom-0 inset-x-0 z-20 bg-[#030B10]/80 py-2 px-3 md:hidden text-white text-xs text-center font-medium truncate">
        {project.name}
      </div>
    </motion.div>
  )
}
