"use client"

import { motion, AnimatePresence } from "framer-motion"
import { X, Phone, Mail } from "lucide-react"
import { useState, useEffect } from "react"
import { useTranslations } from "@/components/useTranslations"
import Link from "next/link"

export default function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const { t } = useTranslations()

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 500px)
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true)
      } else if (window.scrollY < 200) {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isDismissed])

  const handleDismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-gradient-to-r from-[#0A1A24] to-[#0D2436] border-t border-cyan-900/30 shadow-2xl px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              {/* Dismiss button */}
              <button
                onClick={handleDismiss}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Dismiss"
              >
                <X className="w-5 h-5" />
              </button>

              {/* CTA Text */}
              <div className="flex-1">
                <p className="text-white font-semibold text-sm">
                  {t('sticky_cta.title')}
                </p>
                <p className="text-gray-400 text-xs">
                  {t('sticky_cta.subtitle')}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <a
                  href="tel:+302681303007"
                  className="p-3 bg-[#01FFFF]/20 rounded-full text-[#01FFFF] hover:bg-[#01FFFF]/30 transition-colors"
                  aria-label="Call"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <Link
                  href="/contact#contact-form"
                  className="px-4 py-2 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold rounded-full text-sm hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                >
                  {t('sticky_cta.button')}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
