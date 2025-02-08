'use client'

import { motion } from 'framer-motion'
import { Code, Cloud, Settings } from 'lucide-react'
import { ServiceTab } from '../components/ServiceTab'
import { FeatureCard } from '../components/FeatureCard'
import { CTASection } from '../components/CTASection'

export default function WebsiteDevelopmentPage() {
  const services = [
    {
      icon: Code,
      title: "Κατασκευή & Σχεδιασμός Ιστοσελίδων",
      features: [
        "Δημιουργία custom ιστοσελίδων (WordPress, Webflow, Shopify, Custom Code)",
        "Responsive design για τέλεια εμφάνιση σε κινητά & tablet",
        "UX/UI βελτιστοποίηση για εύκολη πλοήγηση και υψηλές μετατροπές",
        "E-shops με σύγχρονα εργαλεία πωλήσεων (WooCommerce, Shopify)",
        "Landing pages για καμπάνιες και διαφημιστικές προωθήσεις"
      ]
    },
    {
      icon: Cloud,
      title: "Φιλοξενία & Τεχνική Υποστήριξη",
      features: [
        "Αξιόπιστο hosting με ταχύτητα & ασφάλεια",
        "Καθημερινά backups και προστασία από κυβερνοεπιθέσεις",
        "SSL πιστοποιητικά για ασφαλή σύνδεση",
        "24/7 monitoring & τεχνική υποστήριξη"
      ]
    },
    {
      icon: Settings,
      title: "Συντήρηση & SEO Βελτιστοποίηση",
      features: [
        "Ενημερώσεις & βελτιώσεις ασφάλειας",
        "Βελτιστοποίηση ταχύτητας & απόδοσης",
        "SEO on-page & technical SEO για υψηλές κατατάξεις στη Google",
        "Προσθήκη νέου περιεχομένου & δυναμικές αλλαγές"
      ]
    }
  ]

  const benefits = [
    "Ολοκληρωμένες λύσεις χωρίς πονοκέφαλο",
    "Σύγχρονες τεχνολογίες & μοντέρνος σχεδιασμός",
    "Υψηλή ταχύτητα, ασφάλεια & υποστήριξη",
    "Προσαρμοσμένες λύσεις στις ανάγκες της επιχείρησής σας"
  ]

  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
            Ιστοσελίδες
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-[#01FFFF]">
            Ολοκληρωμένες λύσεις για την online παρουσία της επιχείρησής σας!
          </h2>
          <p className="text-lg max-w-3xl mx-auto">
            Στη σύγχρονη εποχή, η ιστοσελίδα σας είναι η ψηφιακή βιτρίνα της επιχείρησής σας. Από τον σχεδιασμό μέχρι τη φιλοξενία και τη συνεχή υποστήριξη, προσφέρουμε ολοκληρωμένες λύσεις που εξασφαλίζουν γρήγορη, ασφαλή και επαγγελματική διαδικτυακή παρουσία.
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Οι υπηρεσίες μας περιλαμβάνουν:</h3>
          <ServiceTab services={services} />
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Γιατί να μας επιλέξετε;</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FeatureCard key={index} feature={benefit} />
            ))}
          </div>
        </motion.div>

        <CTASection />
      </div>
    </main>
  )
}
