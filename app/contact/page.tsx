"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import ContactForm from "../components/ContactForm"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link"

// Dynamically import the map component
const Map = dynamic(() => import("../components/Map"), { ssr: false })

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24] overflow-hidden">
      {/* Hero Section with Subtle Background */}
      <div className="relative mb-16">
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

        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Επικοινωνία
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Είμαστε εδώ για να σας βοηθήσουμε να αναπτύξετε την επιχείρησή σας. Επικοινωνήστε μαζί μας για να
              συζητήσουμε τις ανάγκες σας.
            </motion.p>

            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Contact Form - 3 columns */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div id="contact-form">
              <h2 className="text-2xl font-bold mb-6 text-[#01FFFF]">Στείλτε μας μήνυμα</h2>
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact Info & Map - 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Contact Info Card */}
            <motion.div
              className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-lg border border-cyan-900/30 mb-8"
              whileHover={{ boxShadow: "0 10px 25px rgba(1, 255, 255, 0.1)", borderColor: "rgba(1, 255, 255, 0.3)" }}
            >
              <h2 className="text-2xl font-bold mb-6 text-[#01FFFF]">Στοιχεία Επικοινωνίας</h2>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-[#01FFFF]/10 p-2 rounded-lg mr-4">
                    <MapPin className="text-[#01FFFF] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Διεύθυνση</h3>
                    <p className="text-gray-300 text-sm">Βασ. Πύρρου 30, Άρτα 471 32</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-[#01FFFF]/10 p-2 rounded-lg mr-4">
                    <Phone className="text-[#01FFFF] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Τηλέφωνο</h3>
                    <p className="text-gray-300 text-sm">+30 2681 303007</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-[#01FFFF]/10 p-2 rounded-lg mr-4">
                    <Mail className="text-[#01FFFF] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Email</h3>
                    <p className="text-gray-300 text-sm">adenfinity@gmail.com</p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-[#01FFFF]/10 p-2 rounded-lg mr-4">
                    <Clock className="text-[#01FFFF] h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">Ώρες Λειτουργίας</h3>
                    <div className="text-gray-300 text-sm space-y-1">
                      <p>Δευτέρα: 9:00π.μ.-2:30μ.μ.</p>
                      <p>Τρίτη: 9:00π.μ.-2:30μ.μ., 6:00-9:00μ.μ.</p>
                      <p>Τετάρτη: 9:00π.μ.-2:30μ.μ.</p>
                      <p>Πέμπτη: 9:00π.μ.-2:30μ.μ., 6:00-9:00μ.μ.</p>
                      <p>Παρασκευή: 9:00π.μ.-2:30μ.μ., 6:00-9:00μ.μ.</p>
                      <p>Σάββατο: Κλειστά</p>
                      <p>Κυριακή: Κλειστά</p>
                    </div>
                  </div>
                </li>
              </ul>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-cyan-900/30">
                <h3 className="font-medium text-white mb-4">Ακολουθήστε μας</h3>
                <div className="flex space-x-4">
                  <Link href="https://www.facebook.com/1.adinfinity" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      className="bg-[#071218] hover:bg-[#01FFFF]/10 border border-cyan-900/50 hover:border-[#01FFFF]/50 p-2 rounded-full transition-colors"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Facebook className="text-[#01FFFF] h-5 w-5" />
                    </motion.div>
                  </Link>

                  <Link href="https://www.instagram.com/adinfinityads/" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      className="bg-[#071218] hover:bg-[#01FFFF]/10 border border-cyan-900/50 hover:border-[#01FFFF]/50 p-2 rounded-full transition-colors"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Instagram className="text-[#01FFFF] h-5 w-5" />
                    </motion.div>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/adinfinity-ads-bb0a398a/?originalSubdomain=gr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      className="bg-[#071218] hover:bg-[#01FFFF]/10 border border-cyan-900/50 hover:border-[#01FFFF]/50 p-2 rounded-full transition-colors"
                      whileHover={{ y: -5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Linkedin className="text-[#01FFFF] h-5 w-5" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Map Card */}
            <motion.div
              className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-lg border border-cyan-900/30 h-[300px]"
              whileHover={{ boxShadow: "0 10px 25px rgba(1, 255, 255, 0.1)", borderColor: "rgba(1, 255, 255, 0.3)" }}
            >
              <Map />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <SpeedInsights />
    </main>
  )
}
