"use client"

import type React from "react"
import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  index?: number
  className?: string
}

export function ServiceCard({ icon, title, description, link, index = 0, className = "" }: ServiceCardProps) {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      className={`relative bg-gradient-to-br from-[#0A1A24] to-[#0D2436] rounded-xl overflow-hidden shadow-lg border border-cyan-900/30 h-full group transition-all duration-200 will-change-transform hover:shadow-[0_20px_25px_rgba(1,255,255,0.2)] hover:border-cyan-400/30 ${className}`}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : index * 0.05 }}
      whileHover={shouldReduceMotion ? {} : {
        y: -5,
        transition: { duration: 0.15, ease: "easeOut" }
      }}
      style={{ willChange: 'transform' }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Ambient glow effect - optimized */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#01FFFF]/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

      <Link 
        href={link} 
        className="block p-8 relative z-10 h-full flex flex-col focus-visible:outline-2 focus-visible:outline-[#01FFFF] focus-visible:outline-offset-2 rounded-xl"
      >
        <div className="service-icon-container bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 mx-auto">
          {icon}
        </div>

        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#01FFFF] transition-colors duration-200 text-center">
          {title}
        </h3>

        <p className="text-gray-300 mb-6 flex-grow text-center">{description}</p>

        <div className="flex items-center justify-center text-[#01FFFF] mt-auto group-hover:font-medium transition-all duration-200">
          <span className="mr-2">Μάθετε περισσότερα</span>
          <div className="group-hover:translate-x-1 transition-transform duration-200 will-change-transform">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
