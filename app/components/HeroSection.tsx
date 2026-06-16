"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "@/components/useTranslations"
import SectionBackground from "./SectionBackground"

export default function HeroSection() {
  const { t } = useTranslations()
  const shouldReduceMotion = useReducedMotion()

  const stats = t('hero.stats') as { value: string; label: string }[]

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#07141C] z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07141C] via-[#071a24] to-[#061218] opacity-80"></div>
      </div>
      <SectionBackground />

      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10 pt-28 pb-16">

        {/* Headline + description + logo */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mb-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <motion.span
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: 0 }}
              style={{ willChange: 'opacity, transform' }}
            >
              {t('hero.title_parts.part1')}
            </motion.span>{" "}
            <motion.span
              className="text-[#01FFFF]"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.05 }}
              style={{ willChange: 'opacity, transform' }}
            >
              {t('hero.title_parts.part2')}
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.1 }}
              style={{ willChange: 'opacity, transform' }}
            >
              {t('hero.title_parts.part3')}
            </motion.span>{" "}
            <motion.span
              className="text-[#01FFFF]"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.15 }}
              style={{ willChange: 'opacity, transform' }}
            >
              {t('hero.title_parts.part4')}
            </motion.span>
            <motion.span
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.2 }}
              style={{ willChange: 'opacity, transform' }}
            >
              .
            </motion.span>
          </h1>

          <motion.p
            className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl"
            initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.25 }}
          >
            {t('hero.description_long')}
          </motion.p>
        </motion.div>

        {/* Company logo on the right */}
        <motion.div
          className="hidden lg:flex flex-1 justify-center"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.15 }}
        >
          <Image
            src="/logo.png"
            alt="AdInfinity"
            width={396}
            height={105}
            priority
            className="w-64 h-auto xl:w-80"
          />
        </motion.div>
        </div>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-14"
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.3 }}
        >
          <Link href="/services">
            <motion.button
              className="bg-[#01FFFF] hover:bg-[#01FFFF]/90 text-[#07141C] font-bold py-3 px-8 rounded text-base w-full sm:w-auto transition-colors"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              {t('hero.see_more')}
            </motion.button>
          </Link>

          <Link href="/contact">
            <motion.button
              className="border border-white/30 text-white font-bold py-3 px-8 rounded text-base hover:bg-white/5 transition-colors w-full sm:w-auto"
              whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            >
              {t('hero.contact_us')}
            </motion.button>
          </Link>
        </motion.div>

        {/* Stats bar */}
        {Array.isArray(stats) && (
          <motion.div
            className="border-t border-white/10 pt-8"
            initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : 0.35 }}
          >
            <div className="flex flex-wrap gap-8 sm:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-sm text-gray-400 mt-0.5">{stat.label}</span>
                </div>
              ))}

              {/* Service tags inline on the right */}
              <div className="hidden sm:flex items-center gap-2 ml-auto flex-wrap">
                {(t('hero.services') as string[]).map((service: string) => (
                  <span
                    key={service}
                    className="px-3 py-1 rounded bg-[#0A1A24] border border-white/10 text-xs text-gray-400"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  )
}
