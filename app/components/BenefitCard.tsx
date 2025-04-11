"use client"

import { motion } from "framer-motion"

interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-8 rounded-xl shadow-xl border border-cyan-900/30 h-full"
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px rgba(1, 255, 255, 0.1)",
        borderColor: "rgba(1, 255, 255, 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  )
}
