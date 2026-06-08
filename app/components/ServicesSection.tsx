"use client"

import React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { ChartBarIcon, MegaphoneIcon, GlobeAltIcon } from "@heroicons/react/24/outline"
import { useTranslations } from "@/components/useTranslations"
import SectionBackground from "./SectionBackground"

const icons = [
  ChartBarIcon,
  MegaphoneIcon,
  GlobeAltIcon,
]

export default function ServicesSection() {
  const { t, locale, isReady } = useTranslations()
  const shouldReduceMotion = useReducedMotion()
  
  // Don't render until locale is ready
  if (!isReady) {
    return (
      <section id="υπηρεσίες" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            Loading...
          </div>
        </div>
      </section>
    )
  }
  
  const services = t('services.services')
  
  // Ensure services is an array before mapping
  if (!Array.isArray(services)) {
    console.error('Services data is not an array:', services, 'locale:', locale)
    return (
      <section id="υπηρεσίες" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">{t('services.title')}</h2>
          <div className="text-center text-gray-400">
            Loading services...
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="υπηρεσίες" className="py-20 relative overflow-hidden">
      <SectionBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white inline-block">{t('services.title')}</h2>
          <div className="mt-2 w-12 h-0.5 bg-[#01FFFF]"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-[#07141C] p-6 rounded-xl border border-white/10 hover:border-[#01FFFF]/50 transition-all duration-200 will-change-transform"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : index * 0.05 }}
              whileHover={shouldReduceMotion ? {} : {
                y: -3,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
            >
              <div className="mb-4">
                {React.createElement(icons[index], { className: "w-8 h-8 text-[#01FFFF]" })}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
