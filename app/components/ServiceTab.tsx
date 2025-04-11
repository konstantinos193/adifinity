"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Service {
  icon: LucideIcon
  title: string
  features: string[]
}

interface ServiceTabProps {
  services: Service[]
}

export function ServiceTab({ services }: ServiceTabProps) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] rounded-xl shadow-lg overflow-hidden border border-cyan-900/30">
      <div className="flex flex-col sm:flex-row border-b border-[#01FFFF]/20">
        {services.map((service, index) => (
          <button
            key={index}
            className={`flex-1 py-4 px-6 text-center transition-colors duration-300 ${
              activeTab === index ? "bg-[#01FFFF]/10 text-[#01FFFF]" : "text-white hover:bg-[#01FFFF]/5"
            }`}
            onClick={() => setActiveTab(index)}
          >
            <service.icon className="w-6 h-6 mx-auto mb-2" />
            <span className="text-sm font-medium">{service.title}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="p-6"
        >
          <h4 className="text-xl font-bold mb-4 text-[#01FFFF]">{services[activeTab].title}</h4>
          <ul className="space-y-2">
            {services[activeTab].features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start"
              >
                <span className="text-[#01FFFF] mr-2">•</span>
                <span className="text-gray-300">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
