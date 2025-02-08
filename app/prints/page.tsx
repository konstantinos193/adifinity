"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { PrintCategory } from "../components/PrintCategory"
import { FeatureCard } from "../components/FeatureCard"
import { Printer, Maximize2, Award, Package } from "lucide-react"
import Image from "next/image"

export default function PrintsPage() {
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    {
      title: "Επαγγελματικές & Διαφημιστικές Εκτυπώσεις",
      items: [
        "Επαγγελματικές κάρτες",
        "Επιστολόχαρτα & εταιρικοί φάκελοι",
        "Flyers & διαφημιστικά φυλλάδια",
        "Κατάλογοι & brochures",
        "Αφίσες & poster διαφημίσεων",
      ],
      image: "/placeholder.svg",
    },
    {
      title: "Εκτυπώσεις Μεγάλου Μεγέθους & Προβολής",
      items: [
        "Roll-up & X-Banners",
        "Πάνελ παρουσίασης & Standee",
        "Αυτοκόλλητα βιτρίνας & τοίχου",
        "Καμβάδες & εκτυπώσεις σε forex ή foam board",
        "Διαφημιστικά πανό & μουσαμάδες",
      ],
      image: "/placeholder.svg",
    },
    {
      title: "Εξειδικευμένες & Premium Εκτυπώσεις",
      items: [
        "Χρυσοτυπία & ασημοτυπία για πολυτελή έντυπα",
        "Ανάγλυφες εκτυπώσεις (embossing)",
        "UV Spot & βερνίκια για εντυπωσιακές λεπτομέρειες",
        "Πλαστικοποιήσεις (γυαλιστερή, ματ, soft-touch)",
        "Θερμοτυπίες & εκτυπώσεις σε ειδικά χαρτιά",
      ],
      image: "/placeholder.svg",
    },
    {
      title: "Συσκευασία & Προωθητικό Υλικό",
      items: [
        "Σακούλες & κουτιά με εκτύπωση",
        "Ετικέτες & αυτοκόλλητα προϊόντων",
        "Διαφημιστικά δώρα (μπλοκ, σημειωματάρια, στυλό κ.ά.)",
        "Εκτυπώσεις σε υφάσματα & διαφημιστικά ρούχα",
      ],
      image: "/placeholder.svg",
    },
  ]

  const features = [
    {
      icon: Printer,
      title: "Σύγχρονα Μηχανήματα",
      description: "Τελευταίας τεχνολογίας εξοπλισμός για άριστα αποτελέσματα",
    },
    { icon: Maximize2, title: "Ευελιξία", description: "Από μικρές έως μεγάλες ποσότητες, καλύπτουμε κάθε ανάγκη" },
    { icon: Award, title: "Ποιότητα", description: "Άψογο φινίρισμα και αντοχή στον χρόνο" },
    {
      icon: Package,
      title: "Γρήγορη Παράδοση",
      description: "Σύντομοι χρόνοι παράδοσης χωρίς συμβιβασμούς στην ποιότητα",
    },
  ]

  return (
    <main className="min-h-screen py-20 overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl text-center mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
          Εκτυπώσεις
        </h1>
        <h2 className="text-xl md:text-2xl text-center mb-12 text-[#01FFFF]">
          Επαγγελματικές εκτυπώσεις υψηλής ποιότητας για κάθε ανάγκη!
        </h2>

        <motion.div
          className="mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg text-center">
            Η σωστή εκτύπωση κάνει τη διαφορά! Είτε πρόκειται για διαφημιστικό υλικό, εταιρική επικοινωνία ή ειδικές
            εκτυπώσεις, η εταιρεία μας προσφέρει κορυφαία ποιότητα με σύγχρονες τεχνικές και υλικά.
          </p>
        </motion.div>

        <div className="mb-16">
          <div className="flex justify-center mb-8">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 mx-2 rounded-full ${
                  activeCategory === index ? "bg-[#01FFFF] text-[#07141C]" : "bg-[#0A1A24] text-[#01FFFF]"
                }`}
                onClick={() => setActiveCategory(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.title.split(" ")[0]}
              </motion.button>
            ))}
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            key={activeCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PrintCategory {...categories[activeCategory]} />
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={categories[activeCategory].image || "/placeholder.svg"}
                alt={categories[activeCategory].title}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">Γιατί να μας επιλέξετε</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 rounded-lg text-center shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Δώστε στην επιχείρησή σας επαγγελματική εικόνα με εκτυπώσεις που ξεχωρίζουν!
          </h3>
          <motion.button className="btn btn-primary mt-4" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Ζητήστε Προσφορά
          </motion.button>
        </motion.div>
      </motion.div>
    </main>
  )
}

