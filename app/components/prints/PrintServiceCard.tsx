import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface PrintServiceCardProps {
  icon: React.ReactElement
  title: string
  items: string[]
  isActive: boolean
  onClick: () => void
}

export default function PrintServiceCard({ icon, title, items, isActive, onClick }: PrintServiceCardProps) {
  return (
    <motion.div
      className={`bg-gradient-to-br p-6 rounded-xl shadow-xl border cursor-pointer transition-all ${
        isActive
          ? "from-[#01FFFF]/20 to-[#01A9FF]/10 border-[#01FFFF]"
          : "from-[#0A1A24] to-[#0D2436] border-cyan-900/30 hover:border-cyan-900/50"
      }`}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px rgba(1, 255, 255, 0.1)",
        borderColor: "rgba(1, 255, 255, 0.5)",
      }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <div className="mb-6">{icon}</div>
      <h3
        className={`text-xl font-bold mb-3 ${isActive ? "text-[#01FFFF]" : "text-white"} group-hover:text-[#01FFFF] transition-colors`}
      >
        {title}
      </h3>
      <ul className="mb-4">
        {items.slice(0, 3).map((item, index) => (
          <li key={index} className="text-gray-300 text-sm flex items-center mb-2">
            <span className="text-[#01FFFF] mr-2">•</span>
            {item}
          </li>
        ))}
        {items.length > 3 && <li className="text-[#01FFFF] text-sm">+ {items.length - 3} ακόμη...</li>}
      </ul>
      {isActive && (
        <motion.div
          className="flex items-center text-[#01FFFF] text-sm group-hover:translate-x-1 transition-transform"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span>Περισσότερα</span>
          <ArrowRight className="h-4 w-4 ml-1" />
        </motion.div>
      )}
    </motion.div>
  )
}
