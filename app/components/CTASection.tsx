"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useTranslations } from "@/components/useTranslations"

export function CTASection() {
  const { t } = useTranslations()
  
  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl shadow-2xl border border-cyan-900/30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#01FFFF]/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#01A9FF]/10 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10">
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t('market_research_page.cta_title')}</h3>
        <p className="text-lg text-center max-w-3xl mx-auto mb-8">
          {t('market_research_page.cta_description')}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact#contact-form">
            <motion.button
              className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20 w-full sm:w-auto"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              {t('market_research_page.cta_primary_button')}
            </motion.button>
          </Link>
          <Link href="/projects">
            <motion.button
              className="border-2 border-[#01FFFF] text-[#01FFFF] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors w-full sm:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('market_research_page.cta_secondary_button')}
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
