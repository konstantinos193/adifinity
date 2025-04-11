"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <div className="relative overflow-hidden mb-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[#07141C]/90"></div>
        <div className="absolute inset-0">
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
          {/* Subtle glow in top-right */}
          <div className="absolute -top-20 right-0 w-[400px] h-[400px] bg-[#01FFFF]/5 rounded-full blur-[100px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Σχετικά με Εμάς
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Από το 2013, βοηθάμε επιχειρήσεις να αναπτύξουν την παρουσία τους με καινοτόμες λύσεις μάρκετινγκ και
            δημιουργικό σχεδιασμό.
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  )
}
