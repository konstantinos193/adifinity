"use client"

import { motion } from "framer-motion"
import { Code, Cloud, Settings } from "lucide-react"
import { ServiceTab } from "../components/ServiceTab"
import { FeatureCard } from "../components/FeatureCard"
import { CTASection } from "../components/CTASection"
import { WebsiteIllustration } from "../components/WebsiteIllustration"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link"

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
        "Landing pages για καμπάνιες και διαφημιστικές προωθήσεις",
      ],
    },
    {
      icon: Cloud,
      title: "Φιλοξενία & Τεχνική Υποστήριξη",
      features: [
        "Αξιόπιστο hosting με ταχύτητα & ασφάλεια",
        "Καθημερινά backups και προστασία από κυβερνοεπιθέσεις",
        "SSL πιστοποιητικά για ασφαλή σύνδεση",
        "24/7 monitoring & τεχνική υποστήριξη",
      ],
    },
    {
      icon: Settings,
      title: "Συντήρηση & SEO Βελτιστοποίηση",
      features: [
        "Ενημερώσεις & βελτιώσεις ασφάλειας",
        "Βελτιστοποίηση ταχύτητας & απόδοσης",
        "SEO on-page & technical SEO για υψηλές κατατάξεις στη Google",
        "Προσθήκη νέου περιεχομένου & δυναμικές αλλαγές",
      ],
    },
  ]

  const benefits = [
    "Ολοκληρωμένες λύσεις χωρίς πονοκέφαλο",
    "Σύγχρονες τεχνολογίες & μοντέρνος σχεδιασμός",
    "Υψηλή ταχύτητα, ασφάλεια & υποστήριξη",
    "Προσαρμοσμένες λύσεις στις ανάγκες της επιχείρησής σας",
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
                  <WebsiteIllustration />
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
              Ιστοσελίδες
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-[#01FFFF]">
              Ολοκληρωμένες λύσεις για την online παρουσία της επιχείρησής σας!
            </h2>
            <motion.p
              className="text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Στη σύγχρονη εποχή, η ιστοσελίδα σας είναι η ψηφιακή βιτρίνα της επιχείρησής σας. Από τον σχεδιασμό μέχρι
              τη φιλοξενία και τη συνεχή υποστήριξη, προσφέρουμε ολοκληρωμένες λύσεις που εξασφαλίζουν γρήγορη, ασφαλή
              και επαγγελματική διαδικτυακή παρουσία.
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
          <ServiceTab services={services} />
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-[#01FFFF]">Γιατί να μας επιλέξετε;</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FeatureCard key={index} feature={benefit} />
            ))}
          </div>
        </motion.div>

        <CTASection />
      </div>
      <SpeedInsights />
    </main>
  )
}
