"use client"

import { motion } from "framer-motion"
import { ServiceCard } from "../components/ServiceCard"
import {
  PrintingIcon,
  GraphicDesignIcon,
  FlyerDistributionIcon,
  WebsiteIcon,
  MarketResearchIcon,
} from "../components/ServiceIcons"
import { ArrowRight } from "lucide-react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link"

const services = [
  {
    icon: <PrintingIcon />,
    title: "Εκτυπώσεις",
    description:
      "Υψηλής ποιότητας εκτυπώσεις για κάθε ανάγκη της επιχείρησής σας, από επαγγελματικές κάρτες μέχρι μεγάλα banner.",
    link: "/prints",
  },
  {
    icon: <GraphicDesignIcon />,
    title: "Γραφικές τέχνες",
    description: "Δημιουργικός σχεδιασμός που κάνει τη διαφορά και ενισχύει την εικόνα της επιχείρησής σας.",
    link: "/graphic-design",
  },
  {
    icon: <FlyerDistributionIcon />,
    title: "Έντυποδιανομές",
    description: "Στοχευμένη διανομή εντύπων για μέγιστη προβολή και απήχηση στο κοινό-στόχο σας.",
    link: "/flyer-distribution",
  },
  {
    icon: <WebsiteIcon />,
    title: "Ιστοσελίδες",
    description: "Σχεδιασμός και ανάπτυξη σύγχρονων, λειτουργικών ιστοσελίδων που ξεχωρίζουν στον ψηφιακό κόσμο.",
    link: "/website-development",
  },
  {
    icon: <MarketResearchIcon />,
    title: "Έρευνα αγοράς",
    description: "Αναλύουμε την αγορά και το κοινό σας για να λάβετε στρατηγικές αποφάσεις βασισμένες σε δεδομένα.",
    link: "/market-research",
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24] relative overflow-hidden">
      {/* Background decorative elements */}
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
          {/* Subtle glow in bottom-left */}
          <div className="absolute -bottom-20 left-0 w-[400px] h-[400px] bg-[#01A9FF]/5 rounded-full blur-[100px]"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="mb-16">
          <motion.h1
            className="text-4xl md:text-7xl text-center mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Οι Υπηρεσίες Μας
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Προσφέρουμε ένα ευρύ φάσμα υπηρεσιών μάρκετινγκ και επικοινωνίας για να καλύψουμε όλες τις ανάγκες της
            επιχείρησής σας. Από την έρευνα αγοράς μέχρι την υλοποίηση, είμαστε δίπλα σας σε κάθε βήμα.
          </motion.p>

          {/* Decorative element */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.div>
        </div>

        {/* Services Grid - Balanced layout for 5 services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* First row - 3 services */}
          <ServiceCard {...services[0]} index={0} />
          <ServiceCard {...services[1]} index={1} />
          <ServiceCard {...services[2]} index={2} />

          {/* Second row - 2 services centered */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
            <ServiceCard {...services[3]} index={3} />
            <ServiceCard {...services[4]} index={4} />
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl shadow-2xl border border-cyan-900/30 mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#01FFFF]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#01A9FF]/10 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Δεν βρίσκετε αυτό που ψάχνετε;</h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8 text-gray-300">
              Επικοινωνήστε μαζί μας για εξατομικευμένες λύσεις που ταιριάζουν στις ανάγκες σας. Η ομάδα μας είναι
              έτοιμη να σχεδιάσει μια στρατηγική ειδικά για εσάς.
            </p>
            <div className="flex justify-center">
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20 flex items-center"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Επικοινωνήστε Μαζί Μας
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <SpeedInsights />
    </main>
  )
}
