"use client";

import { motion } from "framer-motion";
import { Palette, FileImage, Monitor, Layers } from "lucide-react";
import { CreativeProcess } from "../components/CreativeProcess";
import Link from "next/link";

export default function GraphicDesignPage() {
  const services = [
    {
      icon: Palette,
      title: "Branding & Εταιρική Ταυτότητα",
      description: "Δημιουργούμε μοναδικές ταυτότητες που ξεχωρίζουν",
    },
    {
      icon: FileImage,
      title: "Διαφημιστικά & Έντυπα Σχέδια",
      description: "Εντυπωσιακά σχέδια που προσελκύουν το κοινό σας",
    },
    { icon: Monitor, title: "Ψηφιακά & Social Media Graphics", description: "Δυναμική παρουσία στον ψηφιακό κόσμο" },
    { icon: Layers, title: "Εξειδικευμένες Δημιουργίες", description: "Καινοτόμες λύσεις για κάθε ανάγκη" },
  ];

  return (
    <main className="min-h-screen py-20 overflow-hidden bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
            Γραφικές Τέχνες
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 text-[#01FFFF]">Εντυπωσιακός σχεδιασμός που κάνει τη διαφορά!</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Η εικόνα της επιχείρησής σας είναι το πρώτο πράγμα που βλέπει το κοινό σας – ας την κάνουμε αξέχαστη! Με
            δημιουργικότητα και τεχνογνωσία, σχεδιάζουμε γραφικά που ενισχύουν το brand σας και επικοινωνούν το μήνυμά
            σας αποτελεσματικά.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-lg shadow-lg text-center"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(1, 255, 255, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <service.icon className="w-12 h-12 text-[#01FFFF] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <CreativeProcess />

        <motion.div
          className="bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 rounded-lg text-center shadow-lg mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">
            Απογειώστε το brand σας με δημιουργικότητα & επαγγελματικό design!
          </h3>
          <p className="mb-6">
            Αναλαμβάνουμε projects κάθε μεγέθους, από startups έως μεγάλες επιχειρήσεις. Ελάτε να δημιουργήσουμε μαζί
            την ιδανική οπτική ταυτότητα για εσάς!
          </p>
          <Link href="/contact#contact-form">
            <motion.button 
              className="btn btn-primary mt-4 py-3 px-6 text-xl" 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
            >
              Ζητήστε Προσφορά
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
