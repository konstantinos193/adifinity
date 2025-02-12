'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, LineChart, Lightbulb } from 'lucide-react'
import { ResearchService } from '../components/ResearchService'
import { DataVisualization } from '../components/DataVisualization'
import { CTASection } from '../components/CTASection'

export default function MarketResearchPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Ανάλυση Αγοράς & Τάσεων",
      description: "Χαρτογραφούμε την αγορά σας και προβλέπουμε μελλοντικές τάσεις.",
      features: [
        "Έρευνα και χαρτογράφηση της αγοράς σας",
        "Ανάλυση τάσεων & καταναλωτικής συμπεριφοράς",
        "Πρόβλεψη ευκαιριών & αναδυόμενων αγορών"
      ]
    },
    {
      icon: Users,
      title: "Έρευνα Ανταγωνισμού",
      description: "Αναλύουμε τους ανταγωνιστές σας για να βρείτε το ανταγωνιστικό σας πλεονέκτημα.",
      features: [
        "Ανάλυση ανταγωνιστών & σύγκριση στρατηγικών",
        "SWOT Analysis για αξιολόγηση θέσης στην αγορά",
        "Προτάσεις διαφοροποίησης & ανταγωνιστικού πλεονέκτηματος"
      ]
    },
    {
      icon: LineChart,
      title: "Έρευνα Καταναλωτών",
      description: "Κατανοούμε σε βάθος τις ανάγκες και προτιμήσεις του κοινού σας.",
      features: [
        "Δημοσκοπική έρευνα & focus groups για πραγματικά δεδομένα",
        "Ανάλυση προτιμήσεων, αναγκών & αγοραστικής συμπεριφοράς"
      ]
    },
    {
      icon: Lightbulb,
      title: "Έρευνα για Νέα Προϊόντα & Υπηρεσίες",
      description: "Αξιολογούμε την επιτυχία νέων ιδεών πριν την υλοποίησή τους.",
      features: [
        "Έρευνα αγοράς πριν από την ανάπτυξη νέων προϊόντων",
        "Δοκιμαστικές καμπάνιες & αξιολόγηση αποδοχής",
        "Πρόβλεψη ζήτησης & πιθανής επιτυχίας"
      ]
    }
  ]

  const benefits = [
    "Δεδομένα που οδηγούν σε στρατηγικές αποφάσεις",
    "Εξειδικευμένες μελέτες προσαρμοσμένες στον κλάδο σας",
    "Πλήρης ανάλυση ανταγωνισμού & αγοραστικών συνηθειών",
    "Σύνδεση της έρευνας με το marketing & τις πωλήσεις"
  ]

  return (
    <div className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
            Έρευνα Αγοράς
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl mb-8 text-[#01FFFF]">
            Γνωρίστε το κοινό σας, κατακτήστε την αγορά!
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Η σωστή στρατηγική ξεκινά με δεδομένα! Η έρευνα αγοράς είναι το κλειδί για να κατανοήσετε το κοινό σας, να αναλύσετε τον ανταγωνισμό και να πάρετε στρατηγικές αποφάσεις που θα ενισχύσουν την επιχείρησή σας.
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Οι υπηρεσίες μας περιλαμβάνουν:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Οπτικοποίηση Δεδομένων</h3>
          <DataVisualization />
        </motion.div>

        <CTASection />
      </div>
    </div>
  )
}
