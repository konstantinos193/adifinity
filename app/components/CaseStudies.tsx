"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { ChatBubbleLeftIcon, ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline"
import { useTranslations } from "@/components/useTranslations"

export default function CaseStudies() {
  const { t } = useTranslations()
  const shouldReduceMotion = useReducedMotion()
  const [activeCase, setActiveCase] = useState(0)

  const cases = [
    {
      company: "Energy House",
      category: "Energy Services",
      challenge: "Manual marketing processes causing delays and inconsistent branding",
      solution: "Implemented automated campaign system with brand templates",
      results: [
        "60% reduction in campaign setup time",
        "Consistent brand identity across all channels", 
        "Zero missed deadlines in 12 months"
      ],
      image: "/images/Energy_House-Photoroom.png"
    },
    {
      company: "Bohĕme Beach Bar",
      category: "Hospitality",
      challenge: "Juggling multiple agencies for social media, print, and events",
      solution: "Unified platform managing all marketing and design needs",
      results: [
        "40% cost savings vs multiple agencies",
        "3x faster promotional material delivery",
        "Increased social engagement by 250%"
      ],
      image: "/images/boheme.png"
    },
    {
      company: "TechFix",
      category: "Technology Services", 
      challenge: "Inconsistent marketing and slow response to market changes",
      solution: "Automated marketing workflows with real-time analytics",
      results: [
        "50% faster campaign launches",
        "Real-time performance optimization",
        "Improved lead quality by 35%"
      ],
      image: "/images/TechFix_-_Pc_and_Smartphone_Service-Photoroom.png"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A1A24] to-[#07141C] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#01FFFF]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#01FFFF]/3 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#01FFFF] mb-4">Case Studies</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Real results from businesses that transformed their operations
          </p>
        </motion.div>

        {/* Case selector tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cases.map((caseStudy, index) => (
            <button
              key={caseStudy.company}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCase === index
                  ? "bg-[#01FFFF] text-[#07141C]"
                  : "border border-[#01FFFF]/30 text-[#01FFFF] hover:bg-[#01FFFF]/10"
              }`}
            >
              {caseStudy.company}
            </button>
          ))}
        </div>

        {/* Active case study */}
        <motion.div
          key={activeCase}
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#01FFFF]/20 text-[#01FFFF] rounded-full text-sm font-medium">
                    {cases[activeCase].category}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{cases[activeCase].company}</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#01FFFF] mb-2">Challenge</h4>
                    <p className="text-gray-300">{cases[activeCase].challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-[#01FFFF] mb-2">Solution</h4>
                    <p className="text-gray-300">{cases[activeCase].solution}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#01FFFF]/10 to-[#01A9FF]/10 border border-[#01FFFF]/30 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Results</h4>
                <div className="space-y-3">
                  {cases[activeCase].results.map((result, index) => (
                    <motion.div
                      key={result}
                      className="flex items-start gap-3"
                      initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: shouldReduceMotion ? 0 : 0.3, 
                        delay: shouldReduceMotion ? 0 : index * 0.1 
                      }}
                    >
                      <CheckCircleIcon className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-200">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#01FFFF] hover:bg-[#01FFFF]/90 text-[#07141C] font-bold py-3 px-6 rounded-full transition-colors"
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              >
                Get Similar Results
                <ArrowRightIcon className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Right column - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#0D2436] to-[#071218] rounded-2xl border border-[#01FFFF]/30 p-8 relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-[0.05]">
                  <div
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  ></div>
                </div>

                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className="relative w-48 h-48 md:w-64 md:h-64">
                      <Image
                        src={cases[activeCase].image}
                        alt={cases[activeCase].company}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 256px"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <ChatBubbleLeftIcon className="w-8 h-8 text-[#01FFFF]/20 mx-auto mb-4" />
                    <p className="text-gray-200 italic mb-4">
                      "The automated system transformed how we handle marketing. We're faster, more consistent, and seeing better results."
                    </p>
                    <div className="text-sm text-gray-400">
                      — CEO, {cases[activeCase].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#07141C] to-[#0A1A24] rounded-2xl border border-[#01FFFF]/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-8">Transform Your Business Too</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-[#01FFFF] mb-2">500+</div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#01FFFF] mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#01FFFF] mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join hundreds of businesses that have replaced marketing chaos with automated success
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#01FFFF] hover:bg-[#01FFFF]/90 text-[#07141C] font-bold py-3 px-8 rounded-full transition-colors"
            >
              Start Your Transformation
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
