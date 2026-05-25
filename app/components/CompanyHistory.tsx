"use client"

import { motion } from "framer-motion"
import { useTranslations } from "@/components/useTranslations"

export function CompanyHistory() {
  const { t } = useTranslations()

  return (
    <div className="mb-20">
      <motion.h2
        className="text-3xl font-bold mb-8 text-[#01FFFF]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {t('about_page.company_history.title')}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-lg border border-cyan-900/30 h-full"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">{t('about_page.company_history.our_beginnings.title')}</h3>
          <p className="text-gray-300 leading-relaxed">
            {t('about_page.company_history.our_beginnings.description')}
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-lg border border-cyan-900/30 h-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">{t('about_page.company_history.our_evolution.title')}</h3>
          <p className="text-gray-300 leading-relaxed">
            {t('about_page.company_history.our_evolution.description')}
          </p>
        </motion.div>
      </div>
    </div>
  )
}
