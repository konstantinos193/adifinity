"use client"

import { motion } from "framer-motion"
import { ChartBarIcon, MegaphoneIcon, GlobeAltIcon } from "@heroicons/react/24/outline"

const services = [
  {
    title: "Στρατηγική Μάρκετινγκ",
    icon: ChartBarIcon,
    description: "Αναπτύσσουμε εξατομικευμένες στρατηγικές που συνδέουν την επιχείρησή σας με το κοινό σας.",
  },
  {
    title: "Διαφημιστικές Καμπάνιες",
    icon: MegaphoneIcon,
    description: "Από την ιδέα μέχρι την υλοποίηση, δημιουργούμε καμπάνιες που αποδίδουν πραγματικά.",
  },
  {
    title: "Ψηφιακές Λύσεις",
    icon: GlobeAltIcon,
    description: "Εξοπλίζουμε την επιχείρησή σας με καινοτόμα εργαλεία για το ψηφιακό μέλλον.",
  },
]

export default function ServicesSection() {
  return (
    <section id="υπηρεσίες" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#01FFFF]">Οι Υπηρεσίες Μας</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-[#07141C] p-6 rounded-xl border border-cyan-900/30 hover:border-[#01FFFF] transition-all duration-300 hover:shadow-[0_0_15px_rgba(1,255,255,0.15)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <service.icon className="w-8 h-8 text-[#01FFFF]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center text-white">{service.title}</h3>
              <p className="text-gray-300 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
