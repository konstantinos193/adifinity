'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLocale } from '@/components/LocaleProvider'

export default function NotFound() {
  const { locale } = useLocale()
  const isGreek = locale === 'el'

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#07141C] to-[#0A1A24] px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] mb-4">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {isGreek ? 'Η σελίδα δεν βρέθηκε' : 'Page not found'}
          </h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            {isGreek
              ? 'Λυπούμαστε, αλλά η σελίδα που αναζητάτε δεν υπάρχει ή έχει μετακινηθεί.'
              : 'Sorry, the page you are looking for does not exist or has been moved.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <motion.button
                className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                {isGreek ? 'Αρχική Σελίδα' : 'Home'}
              </motion.button>
            </Link>
            <Link href="/contact">
              <motion.button
                className="border-2 border-[#01FFFF] text-[#01FFFF] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isGreek ? 'Επικοινωνία' : 'Contact'}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
