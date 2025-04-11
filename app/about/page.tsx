"use client"

import { motion } from "framer-motion"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AboutHero } from "../components/AboutHero"
import { CompanyDescription } from "../components/CompanyDescription"
import { CompanyHistory } from "../components/CompanyHistory"
import { TeamMember } from "../components/TeamMember"
import { Timeline } from "../components/Timeline"
import { OfficeShowcase } from "../components/OfficeShowcase"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#07141C] to-[#0A1A24] overflow-hidden">
      <AboutHero />

      <div className="container mx-auto px-4 pb-20">
        <CompanyDescription />

        <CompanyHistory />

        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-[#01FFFF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Η Ομάδα μας
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TeamMember
              name="Μάνος Κωσμάς"
              role="Διευθύνων Σύμβουλος"
              imageSrc="https://i.imgur.com/RvCXgPE.jpeg"
              bio="Με πάνω από 10 χρόνια εμπειρίας στον χώρο της διαφήμισης και του μάρκετινγκ, ο Μάνος ηγείται της ομάδας μας με όραμα και δημιουργικότητα."
            />
            <TeamMember
              name="Κωνσταντίνος Μπλαβάκης"
              role="Web Developer"
              imageSrc="https://i.postimg.cc/FHH2qc1B/viber-image-2025-02-18-19-25-40-199.jpg"
              bio="Ειδικός στην ανάπτυξη ιστοσελίδων και εφαρμογών, ο Κωνσταντίνος φέρνει τις ιδέες μας στη ζωή με τεχνική αρτιότητα και καινοτομία."
            />
          </div>
        </motion.div>

        <motion.div
          className="mb-20 mt-8" // Add mt-8 for more top margin
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-[#01FFFF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Η Πορεία μας
          </motion.h2>

          <Timeline />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl font-bold mb-8 text-[#01FFFF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Επισκεφθείτε μας
          </motion.h2>

          <OfficeShowcase />
        </motion.div>
      </div>
      <SpeedInsights />
    </main>
  )
}
