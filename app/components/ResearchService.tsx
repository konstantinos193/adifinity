"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface ResearchServiceProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export function ResearchService({ icon: Icon, title, description, features }: ResearchServiceProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] rounded-xl p-6 border border-cyan-900/20 hover:border-cyan-500/30"
      whileHover={{
        y: -10,
        boxShadow: "0 10px 25px rgba(1, 255, 255, 0.2)",
        borderColor: "rgba(1, 255, 255, 0.3)",
      }}
    >
      <div className="bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-[#01FFFF]" />
      </div>

      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-300">
            <span className="text-[#01FFFF] mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
