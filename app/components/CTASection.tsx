import { motion } from "framer-motion"
import Link from 'next/link'

export function CTASection() {
  return (
    <motion.div
      className="bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 rounded-lg text-center shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <h3 className="text-2xl font-bold mb-4">
        Ξεκινήστε το project σας σήμερα!
      </h3>
      <p className="mb-6">
        Επικοινωνήστε μαζί μας για να συζητήσουμε τις ανάγκες σας και να σχεδιάσουμε την ιδανική λύση για την επιχείρησή σας.
      </p>
      <Link href="/contact#contact-form">
        <motion.button 
          className="btn btn-primary mt-4" 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          Ζητήστε Προσφορά
        </motion.button>
      </Link>
    </motion.div>
  )
}

