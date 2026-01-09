"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ChevronDownIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <section className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#07141C] z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07141C] via-[#071a24] to-[#061218] opacity-80"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-[#01FFFF]/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
        >
          {/* Headline - reduced delays for faster LCP */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight">
            <motion.span
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0 }}
              style={{ willChange: 'opacity, transform' }}
            >
              Μετατρέπουμε τις
            </motion.span>{" "}
            <motion.span
              className="text-[#01FFFF]"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.05 }}
              style={{ willChange: 'opacity, transform' }}
            >
              Ιδέες
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.1 }}
              style={{ willChange: 'opacity, transform' }}
            >
              σας σε
            </motion.span>{" "}
            <motion.span
              className="text-[#01FFFF]"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.15 }}
              style={{ willChange: 'opacity, transform' }}
            >
              Αποτελέσματα
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
            className="text-base md:text-xl lg:text-2xl mb-8 md:mb-10 opacity-80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.25 }}
            style={{ willChange: 'opacity' }}
          >
            Με τη σωστή στρατηγική και δημιουργικότητα, σας βοηθάμε να ξεχωρίσετε στην αγορά σας.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0"
            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.3 }}
            style={{ willChange: 'opacity, transform' }}
          >
            <Link href="/services">
              <motion.button
                className="bg-[#01FFFF] hover:bg-[#01FFFF]/90 text-[#07141C] font-bold py-3 px-8 md:px-10 rounded-full text-base md:text-lg w-full sm:w-auto min-w-[200px] transition-transform will-change-transform"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                Δείτε Περισσότερα
              </motion.button>
            </Link>

            <Link href="/contact">
              <motion.button
                className="border-2 border-[#01FFFF] text-[#01FFFF] font-bold py-3 px-8 md:px-10 rounded-full text-base md:text-lg hover:bg-[#01FFFF]/10 transition-colors w-full sm:w-auto min-w-[200px]"
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                Επικοινωνήστε Μαζί Μας
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Service tags */}
        <motion.div
          className="flex justify-center gap-3 mt-12 flex-wrap"
          initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.35 }}
          style={{ willChange: 'opacity' }}
        >
          {["Branding", "Web Design", "Graphic Design", "Marketing"].map((service, index) => (
            <motion.div
              key={service}
              className="px-4 py-1.5 rounded-full bg-[#0A1A24] border border-[#01FFFF]/20 text-sm transition-transform will-change-transform"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2, delay: shouldReduceMotion ? 0 : 0.35 + index * 0.05 }}
              whileHover={shouldReduceMotion ? {} : { y: -2 }}
            >
              {service}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.3, delay: shouldReduceMotion ? 0 : 0.4 }}
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={
            shouldReduceMotion
              ? {}
              : {
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }
          }
        >
          <ChevronDownIcon className="w-8 h-8 text-[#01FFFF]" />
        </motion.div>
      </motion.div>
    </section>
  )
}
