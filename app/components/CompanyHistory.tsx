"use client"

import { motion } from "framer-motion"

export function CompanyHistory() {
  return (
    <div className="mb-20">
      <motion.h2
        className="text-3xl font-bold mb-8 text-[#01FFFF]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Η Ιστορία μας
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-lg border border-cyan-900/30 h-full"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Οι Αρχές μας</h3>
          <p className="text-gray-300 leading-relaxed">
            Η εταιρεία μας ιδρύθηκε το 2013 με στόχο να προσφέρει πρακτικές και αποτελεσματικές λύσεις μάρκετινγκ.
            Ξεκινήσαμε με ένα όραμα: να βοηθήσουμε τις τοπικές επιχειρήσεις να αναπτυχθούν μέσω της δημιουργικής
            επικοινωνίας και του στρατηγικού σχεδιασμού.
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-lg border border-cyan-900/30 h-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold mb-4 text-white">Η Εξέλιξή μας</h3>
          <p className="text-gray-300 leading-relaxed">
            Από τότε, έχουμε εξελιχθεί σε ένα πλήρες διαφημιστικό γραφείο, προσαρμοζόμενοι στις συνεχείς αλλαγές του
            ψηφιακού κόσμου και τις νέες τάσεις του μάρκετινγκ. Η ομάδα μας έχει μεγαλώσει, οι υπηρεσίες μας έχουν
            διευρυνθεί, αλλά ο στόχος μας παραμένει ο ίδιος: να βοηθάμε τις επιχειρήσεις να επικοινωνούν αποτελεσματικά
            με το κοινό τους.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
