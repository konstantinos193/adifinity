"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { useTranslations } from "@/components/useTranslations"

export function OfficeShowcase() {
  const { t } = useTranslations()

  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] rounded-xl overflow-hidden shadow-xl border border-cyan-900/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/office-showcase.png"
          alt={t('about_page.office_showcase.title')}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071218] to-transparent opacity-70"></div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          <MapPin className="text-[#01FFFF] mr-2" size={20} />
          <h3 className="text-xl font-bold text-white">{t('about_page.office_showcase.title')}</h3>
        </div>

        <p className="text-gray-300">
          {t('about_page.office_showcase.description')}
        </p>

        <div className="mt-4 flex items-center text-sm text-[#01FFFF]">
          <MapPin size={16} className="mr-1" />
          <span>{t('about_page.office_showcase.address')}</span>
        </div>
      </div>
    </motion.div>
  )
}
