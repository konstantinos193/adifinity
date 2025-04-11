"use client"

import { motion } from "framer-motion"
import { TrendingUp, Users, LineChart, Lightbulb } from 'lucide-react'
import { ResearchService } from "../components/ResearchService"
import { DataVisualization } from "../components/DataVisualization"
import { CTASection } from "../components/CTASection"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link"

export default function MarketResearchPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Ανάλυση Αγοράς & Τάσεων",
      description: "Χαρτογραφούμε την αγορά σας και προβλέπουμε μελλοντικές τάσεις.",
      features: [
        "Έρευνα και χαρτογράφηση της αγοράς σας",
        "Ανάλυση τάσεων & καταναλωτικής συμπεριφοράς",
        "Πρόβλεψη ευκαιριών & αναδυόμενων αγορών",
      ],
    },
    {
      icon: Users,
      title: "Έρευνα Ανταγωνισμού",
      description: "Αναλύουμε τους ανταγωνιστές σας για να βρείτε το ανταγωνιστικό σας πλεονέκτημα.",
      features: [
        "Ανάλυση ανταγωνιστών & σύγκριση στρατηγικών",
        "SWOT Analysis για αξιολόγηση θέσης στην αγορά",
        "Προτάσεις διαφοροποίησης & ανταγωνιστικού πλεονέκτηματος",
      ],
    },
    {
      icon: LineChart,
      title: "Έρευνα Καταναλωτών",
      description: "Κατανοούμε σε βάθος τις ανάγκες και προτιμήσεις του κοινού σας.",
      features: [
        "Δημοσκοπική έρευνα & focus groups για πραγματικά δεδομένα",
        "Ανάλυση προτιμήσεων, αναγκών & αγοραστικής συμπεριφοράς",
      ],
    },
    {
      icon: Lightbulb,
      title: "Έρευνα για Νέα Προϊόντα & Υπηρεσίες",
      description: "Αξιολογούμε την επιτυχία νέων ιδεών πριν την υλοποίησή τους.",
      features: [
        "Έρευνα αγοράς πριν από την ανάπτυξη νέων προϊόντων",
        "Δοκιμαστικές καμπάνιες & αξιολόγηση αποδοχής",
        "Πρόβλεψη ζήτησης & πιθανής επιτυχίας",
      ],
    },
  ]

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      {/* Hero Section with Subtle Background */}
      <div className="relative">
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

        <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-6 inline-block"
            >
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D2436] to-[#071218] rounded-md shadow-lg overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                      backgroundSize: "8px 8px",
                    }}
                  ></div>
                  
                  {/* Simple chart icon */}
                  <svg className="absolute inset-0" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 48L20 36L28 40L36 24L44 20L52 12"
                      stroke="#01FFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="20" cy="36" r="2" fill="#01FFFF" />
                    <circle cx="28" cy="40" r="2" fill="#01FFFF" />
                    <circle cx="36" cy="24" r="2" fill="#01FFFF" />
                    <circle cx="44" cy="20" r="2" fill="#01FFFF" />
                    <circle cx="52" cy="12" r="2" fill="#01FFFF" />
                  </svg>
                </div>

                {/* Animated elements */}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#01FFFF]/30 rounded-full animate-ping"></div>
                <div
                  className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#01A9FF]/30 rounded-full animate-ping"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
              Έρευνα Αγοράς
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-[#01FFFF]">Γνωρίστε το κοινό σας, κατακτήστε την αγορά!</h2>
            <motion.p
              className="text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Η σωστή στρατηγική ξεκινά με δεδομένα! Η έρευνα αγοράς είναι το κλειδί για να κατανοήσετε το κοινό σας, να
              αναλύσετε τον ανταγωνισμό και να πάρετε στρατηγικές αποφάσεις που θα ενισχύσουν την επιχείρησή σας.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8"
            >
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ζητήστε Προσφορά
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-[#01FFFF]">Οι υπηρεσίες μας περιλαμβάνουν:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ResearchService key={index} {...service} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-[#01FFFF]">Οπτικοποίηση Δεδομένων</h3>
          <DataVisualization />
        </motion.div>

        <CTASection />
      </div>
      <SpeedInsights />
    </main>
  )
}
