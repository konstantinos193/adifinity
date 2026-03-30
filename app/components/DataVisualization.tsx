"use client"

import { motion } from "framer-motion"
import { useTranslations } from "@/components/useTranslations"

export function DataVisualization() {
  const { t } = useTranslations()
  
  return (
    <div className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] rounded-xl p-8 border border-cyan-900/20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Chart Section */}
        <div className="relative h-64">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Grid lines */}
              <path d="M 50 20 L 50 180" stroke="#01FFFF" strokeOpacity="0.1" strokeWidth="1" />
              <path d="M 150 20 L 150 180" stroke="#01FFFF" strokeOpacity="0.1" strokeWidth="1" />
              <path d="M 250 20 L 250 180" stroke="#01FFFF" strokeOpacity="0.1" strokeWidth="1" />
              <path d="M 350 20 L 350 180" stroke="#01FFFF" strokeOpacity="0.1" strokeWidth="1" />
              
              <path d="M 50 50 L 350 50" stroke="#01FFFF" strokeOpacity="0.1" strokeWidth="1" />
              <path d="M 50 100 L 350 100" stroke="#01FFFF" strokeOpacity="0.1" strokeWidth="1" />
              <path d="M 50 150 L 350 150" stroke="#01FFFF" strokeOpacity="0.1" strokeWidth="1" />

              {/* Line chart */}
              <path
                d="M 50 150 L 150 100 L 250 120 L 350 50"
                stroke="#01FFFF"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points */}
              <circle cx="50" cy="150" r="4" fill="#01FFFF" />
              <circle cx="150" cy="100" r="4" fill="#01FFFF" />
              <circle cx="250" cy="120" r="4" fill="#01FFFF" />
              <circle cx="350" cy="50" r="4" fill="#01FFFF" />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h4 className="text-2xl font-bold text-white">{t('market_research_page.data_visualization_subtitle')}</h4>
          <p className="text-gray-300">
            {t('market_research_page.data_visualization_description')}
          </p>
          <ul className="space-y-3">
            {(t('market_research_page.data_visualization_features') as string[]).map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <span className="text-[#01FFFF] mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
