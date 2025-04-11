"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin } from "lucide-react"

export function OfficeShowcase() {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] rounded-xl overflow-hidden shadow-xl border border-cyan-900/30"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative w-full h-[400px]">
        <Image
          src="https://i.imgur.com/ERErjTs.png"
          alt="Το γραφείο μας"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071218] to-transparent opacity-70"></div>
      </div>

      <div className="p-6">
        <div className="flex items-center mb-4">
          <MapPin className="text-[#01FFFF] mr-2" size={20} />
          <h3 className="text-xl font-bold text-white">Το Γραφείο μας</h3>
        </div>

        <p className="text-gray-300">
          Το σύγχρονο γραφείο μας στο κέντρο της Άρτας είναι σχεδιασμένο για να εμπνέει δημιουργικότητα και συνεργασία.
          Είναι ο χώρος όπου οι ιδέες μας παίρνουν ζωή και μετατρέπονται σε επιτυχημένες καμπάνιες για τους πελάτες μας.
        </p>

        <div className="mt-4 flex items-center text-sm text-[#01FFFF]">
          <MapPin size={16} className="mr-1" />
          <span>Βασ. Πύρρου 30, Άρτα 471 32</span>
        </div>
      </div>
    </motion.div>
  )
}
