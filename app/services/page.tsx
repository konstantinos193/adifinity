"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "../components/ServiceCard"
import { Megaphone, Palette, LineChart, Printer, Globe } from "lucide-react"

const services = [
  {
    icon: Printer,
    title: "Εκτυπώσεις",
    description: "Υψηλής ποιότητας εκτυπώσεις για κάθε ανάγκη της επιχείρησής σας, από επαγγελματικές κάρτες μέχρι μεγάλα banner.",
    link: "/prints",
  },
  {
    icon: Palette,
    title: "Γραφικές τέχνες",
    description: "Δημιουργικός σχεδιασμός που κάνει τη διαφορά και ενισχύει την εικόνα της επιχείρησής σας.",
    link: "/graphic-design",
  },
  {
    icon: Megaphone,
    title: "Έντυποδιανομές",
    description: "Στοχευμένη διανομή εντύπων για μέγιστη προβολή και απήχηση στο κοινό-στόχο σας.",
    link: "/flyer-distribution",
  },
  {
    icon: Globe,
    title: "Ιστοσελίδες",
    description: "Σχεδιασμός και ανάπτυξη σύγχρονων, λειτουργικών ιστοσελίδων που ξεχωρίζουν στον ψηφιακό κόσμο.",
    link: "/website-development",
  },
  {
    icon: LineChart,
    title: "Έρευνα αγοράς",
    description: "Αναλύουμε την αγορά και το κοινό σας για να λάβετε στρατηγικές αποφάσεις βασισμένες σε δεδομένα.",
    link: "/market-research",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl md:text-7xl text-center mb-12 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Οι Υπηρεσίες Μας
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Προσφέρουμε ένα ευρύ φάσμα υπηρεσιών μάρκετινγκ και επικοινωνίας για να καλύψουμε όλες τις ανάγκες της
          επιχείρησής σας. Από την έρευνα αγοράς μέχρι την υλοποίηση, είμαστε δίπλα σας σε κάθε βήμα.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Δεν βρίσκετε αυτό που ψάχνετε;</h2>
          <p className="mb-8">Επικοινωνήστε μαζί μας για εξατομικευμένες λύσεις που ταιριάζουν στις ανάγκες σας.</p>
          <motion.button className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Επικοινωνήστε Μαζί Μας
          </motion.button>
        </motion.div>
      </div>
    </main>
  )
}

