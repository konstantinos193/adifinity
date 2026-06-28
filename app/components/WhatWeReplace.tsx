"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import { useTranslations } from "@/components/useTranslations"

export default function WhatWeReplace() {
  const { t: _t } = useTranslations()
  const shouldReduceMotion = useReducedMotion()

  const replacements = [
    {
      old: "Multiple Agencies",
      oldDesc: "Juggling different vendors for design, marketing, and printing",
      new: "Unified System",
      newDesc: "One platform handling everything seamlessly"
    },
    {
      old: "Manual Processes", 
      oldDesc: "Endless emails, phone calls, and coordination headaches",
      new: "Automation",
      newDesc: "Smart workflows that run themselves"
    },
    {
      old: "Missed Deadlines",
      oldDesc: "Projects delayed by miscommunication and bottlenecks", 
      new: "Predictable Delivery",
      newDesc: "On-time results with real-time tracking"
    },
    {
      old: "Hidden Costs",
      oldDesc: "Unexpected fees and scope creep eating your budget",
      new: "Fixed Pricing",
      newDesc: "Transparent costs with no surprises"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A1A24] to-[#07141C] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#01FFFF]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#01FFFF]/3 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#01FFFF] mb-4">What We Replace</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            From chaos to clarity - transforming how businesses handle marketing and design
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {replacements.map((item, index) => (
            <motion.div
              key={item.old}
              className="mb-12 last:mb-0"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: shouldReduceMotion ? 0 : 0.5, 
                delay: shouldReduceMotion ? 0 : index * 0.15 
              }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Old way */}
                <div className="relative">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-bl-lg">
                      BEFORE
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-red-400 mt-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-red-400 mb-2">{item.old}</h3>
                        <p className="text-gray-300">{item.oldDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center md:justify-end">
                  <motion.div
                    animate={shouldReduceMotion ? {} : { x: [0, 10, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="hidden md:block"
                  >
                    <ArrowRightIcon className="w-8 h-8 text-[#01FFFF]" />
                  </motion.div>
                </div>

                {/* New way */}
                <div className="relative md:col-span-1 md:col-start-2">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-lg">
                      AFTER
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="text-green-400 mt-1">
                        <CheckCircleIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-green-400 mb-2">{item.new}</h3>
                        <p className="text-gray-300">{item.newDesc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile arrow */}
              <div className="flex justify-center my-4 md:hidden">
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, 5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRightIcon className="w-6 h-6 text-[#01FFFF] transform rotate-90" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#01FFFF]/10 to-[#01A9FF]/10 border border-[#01FFFF]/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Replace the Chaos?
            </h3>
            <p className="text-gray-300 mb-6">
              Join businesses that have transformed their operations with our automated system
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#01FFFF] hover:bg-[#01FFFF]/90 text-[#07141C] font-bold py-3 px-8 rounded-full transition-colors"
            >
              Start the Transformation
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
