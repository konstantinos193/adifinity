'use client'

import Link from 'next/link'
import { ArrowRight, Code, Zap, Shield, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function KatastrifiWebEfarmogonContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#01FFFF]/10 to-[#01A9FF]/10"></div>
        <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl mb-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
              Κατασκευή Web Εφαρμογών
            </h1>
            <h2 className="text-2xl md:text-3xl mb-8 text-[#01FFFF]">
              Custom Development για Επιχειρήσεις που Αποδίδουν
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Εξειδικευμένες web εφαρμογές χτισμένες αποκλειστικά σε React & Next.js. 
              Καμία χρήση templates — μόνο custom code για βέλτιστη απόδοση και SEO.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact#contact-form">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ζητήστε Προσφορά
                </motion.button>
              </Link>
              <Link href="/website-development">
                <motion.button
                  className="border-2 border-[#01FFFF] text-[#01FFFF] font-bold py-3 px-8 rounded-full text-lg hover:bg-[#01FFFF]/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Δείτε Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Υπηρεσίες Web Applications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Code,
              title: "Custom Web Apps",
              description: "Πλήρως custom React/Next.js εφαρμογές χωρίς templates"
            },
            {
              icon: Zap,
              title: "SaaS Platforms",
              description: "Scalable SaaS solutions με subscription systems"
            },
            {
              icon: Shield,
              title: "Enterprise Solutions",
              description: "Business applications για μεγάλες επιχειρήσεις"
            },
            {
              icon: Smartphone,
              title: "Mobile-First",
              description: "Responsive design που λειτουργεί τέλεια σε όλες τις συσκευές"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-xl shadow-xl border border-cyan-900/30"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(1, 255, 255, 0.1)" }}
            >
              <div className="bg-gradient-to-br from-[#01FFFF]/20 to-[#01A9FF]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-[#01FFFF]" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Stack */}
      <div className="py-16 bg-[#061218]/50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center text-[#01FFFF]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Technology Stack
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-4xl mx-auto">
            {[
              "Next.js", "React", "TypeScript", "Node.js",
              "PostgreSQL", "Tailwind", "Stripe", "Vercel"
            ].map((tech, index) => (
              <motion.div
                key={index}
                className="bg-[#0A1A24] p-4 rounded-lg text-center border border-cyan-900/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(1, 255, 255, 0.5)" }}
              >
                <div className="text-[#01FFFF] font-semibold text-sm">{tech}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="relative overflow-hidden bg-gradient-to-r from-[#0A1A24] to-[#0D2436] p-8 md:p-12 rounded-2xl shadow-2xl border border-cyan-900/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Έχετε Ιδέα για Web Application;
            </h3>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Στείλτε μας τις απαιτήσεις σας και σας απαντάμε εντός 24 ωρών με 
              λεπτομερή προσφορά και χρονοδιάγραμμα υλοποίησης.
            </p>
            <Link href="/contact#contact-form">
              <motion.button
                className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Ζητήστε Δωρεάν Προσφορά
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Κατασκευή Web Εφαρμογών | adinfinity",
            "description": "Εξειδικευμένη κατασκευή web εφαρμογών σε React & Next.js για ελληνικές επιχειρήσεις",
            "url": "https://adinfinity.gr/katastrifi-web-efarmogon",
            "telephone": "+30-2681-303007",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Βασ. Πύρρου 30",
              "addressLocality": "Άρτα",
              "postalCode": "471 32",
              "addressCountry": "GR",
            },
            "serviceType": ["Web Application Development", "Custom Software", "SaaS Development", "Enterprise Solutions"],
            "areaServed": {
              "@type": "Country",
              "name": "Greece",
            },
            "openingHours": "Mo-Fr 09:00-17:00",
            "priceRange": "€€€"
          }),
        }}
      />
    </main>
  )
}
