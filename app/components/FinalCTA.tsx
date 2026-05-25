"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline"
import { useTranslations } from "@/components/useTranslations"

export default function FinalCTA() {
  const { t } = useTranslations()
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#01FFFF]/5 rounded-full blur-[150px]"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#01FFFF]/30 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={shouldReduceMotion ? {} : {
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main headline */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to{" "}
              <span className="text-[#01FFFF]">Automate</span>
              <br />
              Your Growth?
            </h2>
          </motion.div>

          {/* Sub-headline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Stop managing chaos. Start scaling with confidence.
            <br />
            <span className="text-[#01FFFF] font-semibold">Your automated marketing system is one click away.</span>
          </motion.p>

          {/* Primary CTA */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-3 bg-[#01FFFF] hover:bg-[#01FFFF]/90 text-[#07141C] font-bold py-4 px-10 md:px-12 rounded-full text-xl transition-all shadow-lg shadow-[#01FFFF]/20"
              whileHover={shouldReduceMotion ? {} : { 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(1, 255, 255, 0.4)"
              }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
            >
              <SparklesIcon className="w-5 h-5" />
              Start Automating Now
              <ArrowRightIcon className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-8 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Setup in 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </motion.div>

          {/* Final reassurance */}
          <motion.div
            className="mt-16 pt-8 border-t border-[#01FFFF]/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <div className="text-sm text-gray-500 max-w-2xl mx-auto">
              <p className="mb-2">
                Join 100+ businesses that have already replaced their marketing chaos with automated success.
              </p>
              <p>
                From local startups to established brands — we help you scale without the headaches.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
