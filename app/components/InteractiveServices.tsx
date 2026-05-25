"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useState } from "react"
import { 
  ChartBarIcon, 
  MegaphoneIcon, 
  GlobeAltIcon, 
  ComputerDesktopIcon,
  SparklesIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline"
import { useTranslations } from "@/components/useTranslations"

export default function InteractiveServices() {
  const { t } = useTranslations()
  const shouldReduceMotion = useReducedMotion()
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      icon: ChartBarIcon,
      title: "Marketing Automation",
      description: "Smart campaigns that run themselves",
      features: ["Email sequences", "Social media scheduling", "Lead scoring", "Analytics dashboard"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MegaphoneIcon,
      title: "Brand Management", 
      description: "Consistent identity across all channels",
      features: ["Brand guidelines", "Template library", "Asset management", "Quality control"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: GlobeAltIcon,
      title: "Digital Solutions",
      description: "Websites and apps that convert",
      features: ["Responsive design", "SEO optimization", "Performance monitoring", "Security updates"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: ComputerDesktopIcon,
      title: "Creative Production",
      description: "Design and content on demand", 
      features: ["Graphic design", "Video production", "Copywriting", "Template creation"],
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#01FFFF]/20 to-transparent"></div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#01FFFF] mb-4">Interactive Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Click any service to see how our automation transforms traditional workflows
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Service selector */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className={`cursor-pointer rounded-xl border-2 p-6 transition-all ${
                  activeService === index 
                    ? "border-[#01FFFF] bg-[#01FFFF]/10" 
                    : "border-[#01FFFF]/20 hover:border-[#01FFFF]/40 bg-[#07141C]/50"
                }`}
                onClick={() => setActiveService(index)}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: shouldReduceMotion ? 0 : 0.3, 
                  delay: shouldReduceMotion ? 0 : index * 0.1 
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color}`}>
                    {React.createElement(service.icon, { className: "w-6 h-6 text-white" })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300">{service.description}</p>
                  </div>
                  <ArrowRightIcon className={`w-5 h-5 text-[#01FFFF] transition-transform ${
                    activeService === index ? "rotate-90" : ""
                  }`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Service details */}
          <motion.div
            key={activeService}
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
            className="bg-gradient-to-br from-[#0D2436] to-[#071218] rounded-2xl border border-[#01FFFF]/30 p-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className={`p-4 rounded-xl bg-gradient-to-br ${services[activeService].color}`}>
                {React.createElement(services[activeService].icon, { className: "w-8 h-8 text-white" })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{services[activeService].title}</h3>
                <p className="text-gray-300">{services[activeService].description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#01FFFF] mb-4">What's Included:</h4>
              {services[activeService].features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: shouldReduceMotion ? 0 : 0.2, 
                    delay: shouldReduceMotion ? 0 : index * 0.1 
                  }}
                >
                  <div className="w-2 h-2 bg-[#01FFFF] rounded-full"></div>
                  <span className="text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 pt-6 border-t border-[#01FFFF]/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <SparklesIcon className="w-4 h-4" />
                <span>Automation Benefits</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-[#01FFFF] mb-1">75%</div>
                  <div className="text-gray-400">Time saved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#01FFFF] mb-1">3x</div>
                  <div className="text-gray-400">Faster delivery</div>
                </div>
              </div>
            </motion.div>

            <motion.a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 bg-[#01FFFF] hover:bg-[#01FFFF]/90 text-[#07141C] font-bold py-3 px-6 rounded-full transition-colors"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              Configure This Service
              <ArrowRightIcon className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
