"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "@/components/useTranslations"
import SectionBackground from "./SectionBackground"

const cards = [
  {
    label: "Mini Website",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#07141C]">
        <rect x="4" y="5" width="24" height="19" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 11H28" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="1" fill="currentColor" />
        <circle cx="12" cy="8" r="1" fill="currentColor" />
        <rect x="8" y="15" width="16" height="2" rx="0.5" fill="currentColor" />
        <rect x="8" y="19" width="10" height="2" rx="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Video Pro",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#07141C]">
        <rect x="2" y="7" width="20" height="18" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M22 12L30 8V24L22 20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M12 13V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 16H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Video",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-8 h-8 text-[#07141C]">
        <circle cx="16" cy="16" r="12" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M13 11L21 16L13 21V11Z" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function InvitationsSection() {
  const { t } = useTranslations()

  return (
    <section className="py-20 bg-[#061218] relative overflow-hidden">
      <SectionBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left: Text content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center bg-[#01FFFF]/10 border border-[#01FFFF]/30 rounded-full px-4 py-1.5 mb-5">
              <span className="w-2 h-2 bg-[#01FFFF] rounded-full mr-2" />
              <span className="text-[#01FFFF] text-sm font-semibold tracking-wide">
                {t("invitations_page.homepage_section.badge")}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-white leading-tight">
              {t("invitations_page.homepage_section.title")}
            </h2>

            <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              {t("invitations_page.homepage_section.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://invitations.adinfinity.gr" target="_blank" rel="noopener noreferrer">
                <motion.button
                  className="bg-[#01FFFF] hover:bg-[#01FFFF]/90 text-[#07141C] font-bold py-3 px-8 rounded text-base flex items-center gap-2 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("invitations_page.homepage_section.cta")}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </a>
              <Link href="/invitations">
                <motion.button
                  className="border border-white/30 text-white font-bold py-3 px-8 rounded text-base hover:bg-white/5 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t("invitations_page.homepage_section.learn_more")}
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right: Cards visual */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full max-w-sm">
              <div className="flex flex-col gap-4">
                {cards.map((card, i) => (
                  <motion.div
                    key={i}
                    className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] border border-cyan-900/30 rounded-xl p-5 flex items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                    whileHover={{
                      borderColor: "rgba(1, 255, 255, 0.4)",
                      boxShadow: "0 0 20px rgba(1, 255, 255, 0.1)",
                    }}
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#01FFFF] to-[#01A9FF] flex items-center justify-center shrink-0 shadow-md shadow-cyan-500/20">
                      {card.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold">{card.label}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
