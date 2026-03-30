"use client"

import { motion } from "framer-motion"
import { Award, Users, Calendar, Lightbulb } from "lucide-react"
import { useTranslations } from "@/components/useTranslations"

export function CompanyDescription() {
  const { t } = useTranslations()
  
  const features = (t('about_page.company_description.features') as unknown) as Array<{
    icon: React.ReactNode
    title: string
    description: string
  }>

  const featureIcons = [
    <Users className="w-6 h-6 text-[#01FFFF]" />,
    <Calendar className="w-6 h-6 text-[#01FFFF]" />,
    <Award className="w-6 h-6 text-[#01FFFF]" />,
    <Lightbulb className="w-6 h-6 text-[#01FFFF]" />
  ]

  return (
    <div className="mb-20">
      <motion.h2
        className="text-3xl font-bold mb-8 text-[#01FFFF]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {t('about_page.company_description.title')}
      </motion.h2>

      <motion.div
        className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-lg border border-cyan-900/30 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-300 leading-relaxed">
          {t('about_page.company_description.description')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-lg border border-cyan-900/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px rgba(1, 255, 255, 0.1)",
              borderColor: "rgba(1, 255, 255, 0.3)",
            }}
          >
            <div className="bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              {featureIcons[index]}
            </div>
            <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
            <p className="text-gray-300 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
