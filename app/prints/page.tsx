"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link"

// Custom SVG Icons with consistent styling
const PrinterIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#01FFFF] to-[#01A9FF] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]">
      <path d="M6 18H18V21H6V18Z" fill="currentColor" fillOpacity="0.2" />
      <rect x="6" y="18" width="12" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 8H20V18H4V8Z" fill="currentColor" fillOpacity="0.2" />
      <rect x="4" y="8" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 8V4H16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="8" y="14" width="8" height="4" rx="1" fill="white" stroke="currentColor" strokeWidth="1" />
      <circle cx="17" cy="11" r="1" fill="white" />
      <circle cx="14" cy="11" r="1" fill="white" />
    </svg>
  </div>
)

const PremiumIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#01FFFF] to-[#01A9FF] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]">
      <path
        d="M12 3L16 10L22 11L17 16L18 22L12 19L6 22L7 16L2 11L8 10L12 3Z"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M12 7L14 12L19 12.5L15.5 16L16.5 20L12 18L7.5 20L8.5 16L5 12.5L10 12L12 7Z"
        fill="white"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  </div>
)

const PackageIcon = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#01FFFF] to-[#01A9FF] rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/20">
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 sm:w-12 sm:h-12 text-[#07141C]">
      <path
        d="M21 10V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M21 10V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 10L12 4L21 10"
        fill="currentColor"
        fillOpacity="0.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 20V14C16 13.4477 15.5523 13 15 13H9C8.44772 13 8 13.4477 8 14V20"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M12 4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.5 8.5L13.5 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
)

// Custom Feature Icons
const HighQualityIcon = () => (
  <svg className="w-8 h-8 text-[#01FFFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Diamond shape */}
    <path
      d="M12 2L22 12L12 22L2 12L12 2Z"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    {/* Checkmark */}
    <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Quality indicator lines */}
    <path d="M12 6V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M12 17V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 12H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const FastDeliveryIcon = () => (
  <svg className="w-8 h-8 text-[#01FFFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Clock face */}
    <circle cx="12" cy="12" r="9" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
    {/* Clock hands */}
    <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Speed lines */}
    <path d="M19 5L21 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19 19L21 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M5 5L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M5 19L3 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const CustomSolutionsIcon = () => (
  <svg className="w-8 h-8 text-[#01FFFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Document base */}
    <rect
      x="4"
      y="2"
      width="16"
      height="20"
      rx="2"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Custom settings/options */}
    <path d="M8 7H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 17H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Customization indicator */}
    <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M17 15V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M17 20V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M19 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14 17H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const ExpertiseIcon = () => (
  <svg className="w-8 h-8 text-[#01FFFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Lab flask */}
    <path
      d="M9 3H15V8L19 15V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V15L9 8V3Z"
      fill="currentColor"
      fillOpacity="0.1"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    {/* Liquid in flask */}
    <path d="M7 15H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Bubbles */}
    <circle cx="10" cy="17" r="1" fill="currentColor" />
    <circle cx="14" cy="18" r="0.75" fill="currentColor" />
    <circle cx="12" cy="19" r="0.5" fill="currentColor" />
    {/* Flask neck */}
    <path d="M9 3H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    {/* Color indicator */}
    <path d="M9 11L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="1 2" />
  </svg>
)

// Category card component
const CategoryCard = ({
  title,
  items,
  icon,
  isActive,
  onClick,
}: {
  title: string
  items: string[]
  icon: React.ReactNode
  isActive: boolean
  onClick: () => void
}) => (
  <motion.div
    className={`bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-8 rounded-xl shadow-xl border ${
      isActive ? "border-[#01FFFF]/50" : "border-cyan-900/30"
    } h-full cursor-pointer group transition-all duration-300`}
    onClick={onClick}
    whileHover={{
      scale: 1.03,
      boxShadow: "0 0 25px rgba(1, 255, 255, 0.2)",
      borderColor: "rgba(1, 255, 255, 0.5)",
    }}
    transition={{ duration: 0.3 }}
  >
    <div className="mb-6">{icon}</div>
    <h3
      className={`text-xl font-bold mb-3 ${isActive ? "text-[#01FFFF]" : "text-white"} group-hover:text-[#01FFFF] transition-colors`}
    >
      {title}
    </h3>
    <ul className="mb-4">
      {items.slice(0, 3).map((item, index) => (
        <li key={index} className="text-gray-300 text-sm flex items-center mb-2">
          <span className="text-[#01FFFF] mr-2">•</span>
          {item}
        </li>
      ))}
      {items.length > 3 && <li className="text-[#01FFFF] text-sm">+ {items.length - 3} ακόμη...</li>}
    </ul>
    {isActive && (
      <motion.div
        className="flex items-center text-[#01FFFF] text-sm group-hover:translate-x-1 transition-transform"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span>Περισσότερα</span>
        <ArrowRight className="h-4 w-4 ml-1" />
      </motion.div>
    )}
  </motion.div>
)

// Feature card component
const FeatureCard = ({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) => (
  <motion.div
    className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-8 rounded-xl shadow-xl border border-cyan-900/30 h-full"
    whileHover={{
      y: -10,
      boxShadow: "0 20px 25px rgba(1, 255, 255, 0.1)",
      borderColor: "rgba(1, 255, 255, 0.3)",
    }}
    transition={{ duration: 0.3 }}
  >
    <div className="bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
      {icon}
    </div>
    <h4 className="text-xl font-bold mb-3 text-white">{title}</h4>
    <p className="text-gray-300">{description}</p>
  </motion.div>
)

export default function PrintsPage() {
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    {
      title: "Εκτυπώσεις Μεγάλου Μεγέθους & Προβολής",
      items: [
        "Επαγγελματικές κάρτες",
        "Επιστολόχαρτα & εταιρικοί φάκελοι",
        "Flyers & διαφημιστικά φυλλάδια",
        "Κατάλογοι & brochures",
        "Αφίσες & poster διαφημίσεων",
        "Roll-up & X-Banners",
        "Πάνελ παρουσίασης & Standee",
        "Αυτοκόλλητα βιτρίνας & τοίχου",
        "Καμβάδες & εκτυπώσεις σε forex ή foam board",
        "Διαφημιστικά πανό & μουσαμάδες",
      ],
      icon: <PrinterIcon />,
    },
    {
      title: "Εξειδικευμένες & Premium Εκτυπώσεις",
      items: [
        "Χρυσοτυπία & ασημοτυπία για πολυτελή έντυπα",
        "Ανάγλυφες εκτυπώσεις (embossing)",
        "UV Spot & βερνίκια για εντυπωσιακές λεπτομέρειες",
        "Πλαστικοποιήσεις (γυαλιστερή, ματ, soft-touch)",
        "Θερμοτυπίες & εκτυπώσεις σε ειδικά χαρτιά",
        "Γιγαντοεκτυπώσεις",
        "Χαρακτικό",
      ],
      icon: <PremiumIcon />,
    },
    {
      title: "Συσκευασία & Προωθητικό Υλικό",
      items: [
        "Ετικέτες & αυτοκόλλητα προϊόντων",
        "Διαφημιστικά δώρα (μπλοκ, σημειωματάρια, στυλό κ.ά.)",
        "Εκτυπώσεις σε υφάσματα & διαφημιστικά ρούχα",
      ],
      icon: <PackageIcon />,
    },
  ]

  const features = [
    {
      icon: <HighQualityIcon />,
      title: "Υψηλή Ποιότητα Εκτύπωσης",
      description:
        "Χρησιμοποιούμε σύγχρονες τεχνικές και κορυφαία υλικά για επαγγελματικό αποτέλεσμα με αντοχή στον χρόνο.",
    },
    {
      icon: <FastDeliveryIcon />,
      title: "Γρήγορη & Αξιόπιστη Παράδοση",
      description: "Διασφαλίζουμε έγκαιρη ολοκλήρωση κάθε έργου, χωρίς συμβιβασμούς στην ποιότητα.",
    },
    {
      icon: <CustomSolutionsIcon />,
      title: "Εξατομικευμένες Λύσεις",
      description:
        "Προσαρμόζουμε κάθε εκτύπωση στις ανάγκες της επιχείρησής σας, από μικρές παραγγελίες έως μεγάλες παραγωγές.",
    },
    {
      icon: <ExpertiseIcon />,
      title: "Εξειδίκευση & Εμπειρία",
      description:
        "Με πολυετή εμπειρία στον χώρο, γνωρίζουμε πώς να αναδείξουμε την εταιρική σας εικόνα μέσα από εκτυπώσεις που ξεχωρίζουν.",
    },
  ]

  const selectedCategory = categories[activeCategory]

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
                {/* Printing press artboard */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0D2436] to-[#071218] rounded-md shadow-lg overflow-hidden">
                  {/* Grid background */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                      backgroundSize: "8px 8px",
                    }}
                  ></div>

                  {/* Modern Printer Design */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Printer Body */}
                      <rect
                        x="15"
                        y="25"
                        width="50"
                        height="30"
                        rx="3"
                        fill="#01A9FF"
                        fillOpacity="0.3"
                        stroke="#01FFFF"
                        strokeWidth="1.5"
                      />

                      {/* Top Paper Tray */}
                      <path d="M25 25V15H55V25" stroke="#01FFFF" strokeWidth="1.5" />

                      {/* Bottom Paper Output */}
                      <rect
                        x="25"
                        y="55"
                        width="30"
                        height="15"
                        rx="1"
                        fill="white"
                        fillOpacity="0.9"
                        stroke="#01FFFF"
                        strokeWidth="1.5"
                      />

                      {/* Paper in Printer */}
                      <rect x="25" y="40" width="30" height="15" rx="1" fill="white" fillOpacity="0.6" />

                      {/* Control Panel */}
                      <rect
                        x="45"
                        y="30"
                        width="15"
                        height="5"
                        rx="1"
                        fill="#071218"
                        stroke="#01FFFF"
                        strokeWidth="1"
                      />

                      {/* Buttons */}
                      <circle cx="50" cy="32.5" r="1.5" fill="#01FFFF" />
                      <circle cx="55" cy="32.5" r="1.5" fill="#01FFFF" />

                      {/* Status Light */}
                      <circle cx="20" cy="32.5" r="2" fill="#01FFFF">
                        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                      </circle>

                      {/* Decorative Lines */}
                      <line x1="30" y1="60" x2="50" y2="60" stroke="#01A9FF" strokeWidth="1" strokeDasharray="2 1" />
                      <line x1="30" y1="65" x2="45" y2="65" stroke="#01A9FF" strokeWidth="1" strokeDasharray="2 1" />

                      {/* Ink Cartridge Indicator */}
                      <rect x="40" y="30" width="3" height="5" rx="1" fill="#01FFFF" fillOpacity="0.8" />
                    </svg>
                  </div>

                  {/* Ruler marks */}
                  <div className="absolute top-0 w-full h-px bg-white/20"></div>
                  <div className="absolute bottom-0 w-full h-px bg-white/20"></div>
                  <div className="absolute left-0 h-full w-px bg-white/20"></div>
                  <div className="absolute right-0 h-full w-px bg-white/20"></div>
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
              Εκτυπώσεις
            </h1>
            <h2 className="text-xl md:text-2xl mb-8 text-[#01FFFF]">
              Επαγγελματικές εκτυπώσεις υψηλής ποιότητας για κάθε ανάγκη!
            </h2>
            <motion.p
              className="text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Η σωστή εκτύπωση κάνει τη διαφορά! Είτε πρόκειται για διαφημιστικό υλικό, εταιρική επικοινωνία ή ειδικές
              εκτυπώσεις, η εταιρεία μας προσφέρει κορυφαία ποιότητα με σύγχρονες τεχνικές και υλικά.
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

      {/* Services Section with Cards */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Οι Υπηρεσίες μας
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              items={category.items}
              icon={category.icon}
              isActive={activeCategory === index}
              onClick={() => setActiveCategory(index)}
            />
          ))}
        </motion.div>
      </div>

      {/* Selected Category Detail Section */}
      <div className="py-16 bg-[#061218]/50">
        <div className="container mx-auto px-4">
          <motion.h3
            className="text-3xl font-bold mb-8 text-center text-[#01FFFF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {selectedCategory.title}
          </motion.h3>

          <motion.div
            className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-8 rounded-xl shadow-xl border border-cyan-900/30 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex justify-center mb-6 md:hidden">{selectedCategory.icon}</div>
                <ul className="space-y-3">
                  {selectedCategory.items.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <span className="text-[#01FFFF] mr-2 mt-1">•</span>
                      <span className="text-gray-300">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Sample Print Work image */}
                  <div className="relative w-64 h-64 bg-gradient-to-br from-[#0D2436]/70 to-[#071218]/70 rounded-lg shadow-lg overflow-hidden border border-cyan-900/30">
                    {/* Sample work content - Different for each category */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {activeCategory === 0 && (
                        <div className="w-48 h-32 bg-white rounded p-2 shadow-lg flex flex-col items-center justify-center">
                          <svg
                            width="100"
                            height="60"
                            viewBox="0 0 100 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* Business Card Sample */}
                            <rect
                              x="10"
                              y="10"
                              width="80"
                              height="40"
                              rx="2"
                              fill="#f8f9fa"
                              stroke="#01A9FF"
                              strokeWidth="1"
                            />
                            <rect x="15" y="15" width="40" height="5" rx="1" fill="#01A9FF" />
                            <rect x="15" y="25" width="30" height="3" rx="1" fill="#333" />
                            <rect x="15" y="30" width="30" height="3" rx="1" fill="#333" />
                            <rect x="15" y="35" width="20" height="3" rx="1" fill="#333" />
                            <circle cx="70" cy="25" r="10" fill="#01FFFF" fillOpacity="0.3" stroke="#01A9FF" />
                          </svg>
                          <div className="text-[#071218] text-sm font-bold mt-2">Επαγγελματικές Κάρτες</div>
                        </div>
                      )}

                      {activeCategory === 1 && (
                        <div className="w-48 h-32 bg-white rounded p-2 shadow-lg flex flex-col items-center justify-center">
                          <svg
                            width="100"
                            height="60"
                            viewBox="0 0 100 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* Premium Print Sample with Gold Foil */}
                            <rect
                              x="10"
                              y="5"
                              width="80"
                              height="50"
                              rx="2"
                              fill="#f8f9fa"
                              stroke="#D4AF37"
                              strokeWidth="1"
                            />
                            <rect x="15" y="10" width="70" height="10" rx="1" fill="#D4AF37" fillOpacity="0.7" />
                            <rect x="15" y="25" width="70" height="3" rx="1" fill="#333" />
                            <rect x="15" y="30" width="70" height="3" rx="1" fill="#333" />
                            <rect x="15" y="35" width="70" height="3" rx="1" fill="#333" />
                            <rect x="15" y="40" width="40" height="3" rx="1" fill="#333" />
                            <path d="M75 45 L85 45 L80 50 Z" fill="#D4AF37" />
                            <circle cx="80" cy="15" r="5" fill="#D4AF37" fillOpacity="0.5" />
                          </svg>
                          <div className="text-[#071218] text-sm font-bold mt-2">Χρυσοτυπία & Ειδικές Εκτυπώσεις</div>
                        </div>
                      )}

                      {activeCategory === 2 && (
                        <div className="w-48 h-32 bg-white rounded p-2 shadow-lg flex flex-col items-center justify-center">
                          <svg
                            width="100"
                            height="60"
                            viewBox="0 0 100 60"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* Product Packaging Sample */}
                            <rect
                              x="20"
                              y="10"
                              width="60"
                              height="40"
                              rx="2"
                              fill="#f8f9fa"
                              stroke="#01A9FF"
                              strokeWidth="1"
                            />
                            <path d="M20 20 L80 20" stroke="#01A9FF" strokeWidth="1" strokeDasharray="2 1" />
                            <path d="M20 40 L80 40" stroke="#01A9FF" strokeWidth="1" strokeDasharray="2 1" />
                            <rect x="30" y="25" width="40" height="10" rx="1" fill="#01FFFF" fillOpacity="0.3" />
                            <rect x="35" y="28" width="30" height="4" rx="1" fill="#01A9FF" />
                            <circle cx="25" cy="15" r="2" fill="#01A9FF" />
                            <circle cx="75" cy="15" r="2" fill="#01A9FF" />
                            <circle cx="25" cy="45" r="2" fill="#01A9FF" />
                            <circle cx="75" cy="45" r="2" fill="#01A9FF" />
                          </svg>
                          <div className="text-[#071218] text-sm font-bold mt-2">Συσκευασία & Ετικέτες</div>
                        </div>
                      )}
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-2 right-2 w-4 h-4 bg-[#01FFFF] rounded-full opacity-50"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-4 bg-[#01A9FF] rounded-full opacity-50"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#01FFFF]/5 to-[#01A9FF]/5"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Γιατί να μας επιλέξετε
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </motion.div>
      </div>

      {/* Sample Work Section */}
      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="relative overflow-hidden bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl shadow-2xl border border-cyan-900/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#01FFFF]/10 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#01A9FF]/10 to-transparent rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Έτοιμοι να αναβαθμίσετε το διαφημιστικό σας υλικό;
            </h3>
            <p className="text-lg text-center max-w-3xl mx-auto mb-8">
              Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε τις ανάγκες σας και να λάβετε μια εξατομικευμένη προσφορά
              για τις εκτυπώσεις σας.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20 w-full sm:w-auto"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ζητήστε Προσφορά
                </motion.button>
              </Link>
              <Link href="/projects">
                <motion.button
                  className="border-2 border-[#01FFFF] text-[#01FFFF] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors w-full sm:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Δείτε Περισσότερα Έργα
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <SpeedInsights />
    </main>
  )
}
