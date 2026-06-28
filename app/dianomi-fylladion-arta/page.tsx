"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Users, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useTranslations } from "@/components/useTranslations"

export default function DianomiFylladionArtaPage() {
  const { t } = useTranslations()

  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: t('dianomi_fylladion_arta_page.services.door_to_door.title') as string,
      description: t('dianomi_fylladion_arta_page.services.door_to_door.description') as string,
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('dianomi_fylladion_arta_page.services.targeted.title') as string,
      description: t('dianomi_fylladion_arta_page.services.targeted.description') as string,
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: t('dianomi_fylladion_arta_page.services.tracking.title') as string,
      description: t('dianomi_fylladion_arta_page.services.tracking.description') as string,
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('dianomi_fylladion_arta_page.services.reporting.title') as string,
      description: t('dianomi_fylladion_arta_page.services.reporting.description') as string,
    },
  ]

  const benefits = (t('dianomi_fylladion_arta_page.benefits') as unknown) as Array<{ title: string; description: string }>

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[#07141C]/90" />
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-[#01FFFF]/5 rounded-full blur-[100px]" />
          </div>
        </div>

        <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-[#01FFFF]/10 border border-[#01FFFF]/30 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 bg-[#01FFFF] rounded-full mr-2 animate-pulse" />
              <span className="text-[#01FFFF] text-sm font-medium">{t('dianomi_fylladion_arta_page.hero.badge')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
              {t('dianomi_fylladion_arta_page.hero.title')}
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-[#01FFFF]">
              {t('dianomi_fylladion_arta_page.hero.subtitle')}
            </h2>
            <motion.p
              className="text-lg max-w-3xl mx-auto text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {t('dianomi_fylladion_arta_page.hero.description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20 flex items-center gap-2"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('dianomi_fylladion_arta_page.hero.cta')}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/flyer-distribution">
                <motion.button
                  className="border-2 border-[#01FFFF] text-[#01FFFF] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('dianomi_fylladion_arta_page.hero.learn_more')}
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('dianomi_fylladion_arta_page.services.title')}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-8 rounded-xl shadow-xl border border-cyan-900/30 h-full"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(1, 255, 255, 0.2)",
                borderColor: "rgba(1, 255, 255, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-[#01FFFF]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('dianomi_fylladion_arta_page.benefits_title')}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-8 rounded-xl shadow-xl border border-cyan-900/30"
              whileHover={{ y: -10, boxShadow: "0 20px 25px rgba(1, 255, 255, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="relative overflow-hidden bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl shadow-2xl border border-cyan-900/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#01FFFF]/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#01A9FF]/10 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
              {t('dianomi_fylladion_arta_page.cta.title')}
            </h3>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-gray-300">
              {t('dianomi_fylladion_arta_page.cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20 w-full sm:w-auto"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('dianomi_fylladion_arta_page.cta.button')}
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
