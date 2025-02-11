import { motion } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#07141C] to-transparent z-0"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          className="text-5xl md:text-7xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Μετατρέπουμε τις <span className="text-[#01FFFF]">Ιδέες</span> σας σε <span className="text-[#01FFFF]">Αποτελέσματα</span>.
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Με τη σωστή στρατηγική και δημιουργικότητα, σας βοηθάμε να ξεχωρίσετε στην αγορά σας.
        </motion.p>
        <motion.div 
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="btn btn-primary">Δείτε Περισσότερα</button>
          <button className="btn btn-secondary">Ξεκινήστε Τώρα</button>
        </motion.div>
      </div>
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, repeat: Infinity, repeatType: 'reverse' }}
      >
        <ChevronDownIcon className="w-8 h-8 text-[#01FFFF]" />
      </motion.div>
    </section>
  )
}

