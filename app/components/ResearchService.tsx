import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ResearchServiceProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

export function ResearchService({ icon: Icon, title, description, features }: ResearchServiceProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-lg shadow-lg"
      whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(1, 255, 255, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <Icon className="w-10 h-10 text-[#01FFFF] mr-4" />
        <h4 className="text-xl font-bold text-[#01FFFF]">{title}</h4>
      </div>
      <p className="text-sm mb-4 opacity-80">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <motion.li
            key={index}
            className="flex items-start text-sm"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-[#01FFFF] mr-2">•</span>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

