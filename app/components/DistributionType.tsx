"use client"

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import type React from "react"

interface DistributionTypeProps {
  icon: React.ReactNode
  title: string
  description: string
  items: string[]
}

export function DistributionType({ icon, title, description, items }: DistributionTypeProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-8 rounded-xl shadow-xl border border-cyan-900/30 h-full group"
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px rgba(1, 255, 255, 0.2)",
        borderColor: "rgba(1, 255, 255, 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/10 p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#01FFFF] transition-colors">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-6">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <span className="text-[#01FFFF] mr-2 mt-1">•</span>
            <span className="text-gray-300 text-sm">{item}</span>
          </motion.li>
        ))}
      </ul>
      
      <div className="flex items-center text-[#01FFFF] text-sm mt-auto group-hover:translate-x-1 transition-transform">
        <span>Περισσότερα</span>
        <ArrowRight className="h-4 w-4 ml-1" />
      </div>
    </motion.div>
  )
}
