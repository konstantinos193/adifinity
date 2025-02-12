import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07141C] to-transparent z-0"></div>
      <div className="container mx-auto px-4 text-center relative z-10 mt-[-60px]">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Μετατρέπουμε τις <br className="md:hidden" />
          <span className="text-[#01FFFF]">Ιδέες</span> σας σε <br className="md:hidden" />
          <span className="text-[#01FFFF]">Αποτελέσματα</span>.
        </motion.h1>
        <motion.p 
          className="text-base md:text-xl lg:text-2xl mb-8 md:mb-10 opacity-80 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Με τη σωστή στρατηγική και δημιουργικότητα, σας βοηθάμε να ξεχωρίσετε στην αγορά σας.
        </motion.p>
        <motion.div 
          className="flex justify-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/services">
            <button className="btn btn-primary text-base md:text-lg py-3 px-8 md:px-10 w-full sm:w-auto min-w-[200px]">
              Δείτε Περισσότερα
            </button>
          </Link>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.6, 
          repeat: Infinity, 
          repeatType: 'reverse',
          repeatDelay: 0.2 
        }}
      >
        <ChevronDownIcon className="w-8 h-8 text-[#01FFFF] animate-bounce" />
      </motion.div>
    </section>
  )
}

