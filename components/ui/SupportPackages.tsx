"use client"

import { motion } from "framer-motion"
import { Shield, Clock, Users, Zap, Check, ArrowRight, Star } from "lucide-react"
import { useState } from "react"

interface SupportPackage {
  name: string
  price: string
  description: string
  features: string[]
  responseTime: string
  icon: React.ComponentType<any>
  popular?: boolean
  color: string
}

export default function SupportPackages() {
  const [expandedPackage, setExpandedPackage] = useState<string | null>(null)

  const packages: SupportPackage[] = [
    {
      name: "Bronze Υποστήριξη",
      price: "Contact for pricing",
      description: "Essential maintenance και security updates για small businesses.",
      features: [
        "Email υποστήριξη (48-hour response)",
        "Μηνιαία security updates",
        "Plugin/dependency updates",
        "Μηνιαία performance reports",
        "Basic troubleshooting",
        "Quarterly backup verification"
      ],
      responseTime: "48 ώρες",
      icon: Shield,
      color: "from-orange-500/20 to-orange-500/5"
    },
    {
      name: "Silver Υποστήριξη",
      price: "Contact for pricing",
      description: "Priority support με proactive monitoring και enhanced features.",
      features: [
        "Priority email υποστήριξη (24-hour response)",
        "Δύκινη εβδομαδιαία security updates",
        "Performance optimization",
        "Μηνιαία analytics reports",
        "Content updates (2 ώρες/μήνα)",
        "Uptime monitoring",
        "Emergency phone support"
      ],
      responseTime: "24 ώρες",
      icon: Clock,
      popular: true,
      color: "from-[#01FFFF]/20 to-[#01FFFF]/5"
    },
    {
      name: "Gold Υποστήριξη",
      price: "Contact for pricing",
      description: "24/7 enterprise-grade support με proactive optimization.",
      features: [
        "24/7 phone & email υποστήριξη (4-hour response)",
        "Εβδομαδιαία security & performance updates",
        "Advanced SEO optimization",
        "Εβδομαδιαία analytics & conversion reports",
        "Content updates (5 ώρες/μήνα)",
        "Real-time uptime monitoring",
        "Emergency on-call support",
        "Strategic growth consulting",
        "Custom feature development planning"
      ],
      responseTime: "4 ώρες",
      icon: Zap,
      color: "from-purple-500/20 to-purple-500/5"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-white mb-3">Μηνιαία Πακέτα Υποστήριξης</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Διατηρήστε την ιστοσελίδα σας ομαλά λειτουργική με proactive maintenance, security updates, και expert support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon
            const isExpanded = expandedPackage === pkg.name
            
            return (
              <motion.div
                key={pkg.name}
                className={`relative bg-[#0A1A24] border rounded-2xl overflow-hidden transition-all duration-300 ${
                  pkg.popular 
                    ? 'border-[#01FFFF]/50 shadow-[0_0_30px_rgba(1,255,255,0.2)]' 
                    : 'border-cyan-900/30 hover:border-[#01FFFF]/40'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {pkg.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      ΔΗΜΟΦΙΛΗΣ
                    </span>
                  </div>
                )}

                <div className={`p-6 bg-gradient-to-b ${pkg.color}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#01FFFF]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{pkg.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-black text-[#01FFFF]">{pkg.price}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  <div className="flex items-center gap-2 mb-4 text-xs text-[#01FFFF]/70">
                    <Clock className="w-3 h-3" />
                    <span>Response Time: {pkg.responseTime}</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {pkg.features.slice(0, isExpanded ? pkg.features.length : 4).map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#01FFFF] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.features.length > 4 && (
                    <button
                      onClick={() => setExpandedPackage(isExpanded ? null : pkg.name)}
                      className="text-[#01FFFF] text-sm font-semibold hover:text-[#01A9FF] transition-colors mb-4"
                    >
                      {isExpanded ? 'Λιγότερα' : `Εμφάνιση ${pkg.features.length - 4} Περισσότερων`}
                    </button>
                  )}

                  <motion.button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] shadow-lg shadow-cyan-500/20'
                        : 'border border-[#01FFFF]/40 text-[#01FFFF] hover:bg-[#01FFFF]/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Επιλέξτε Πακέτο
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-bold text-xl mb-6">Σύγκριση Πακέτων Υποστήριξης</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-cyan-900/30">
                  <th className="text-left text-gray-400 pb-3">Feature</th>
                  <th className="text-center text-gray-400 pb-3">Bronze</th>
                  <th className="text-center text-gray-400 pb-3">Silver</th>
                  <th className="text-center text-gray-400 pb-3">Gold</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Response Time", bronze: "48h", silver: "24h", gold: "4h" },
                  { feature: "Security Updates", bronze: "Μηνιαία", silver: "Δύκινη", gold: "Εβδομαδιαία" },
                  { feature: "Performance Reports", bronze: "Μηνιαία", silver: "Μηνιαία", gold: "Εβδομαδιαία" },
                  { feature: "Content Updates", bronze: "—", silver: "2h/μήνα", gold: "5h/μήνα" },
                  { feature: "Phone Support", bronze: "—", silver: "Emergency", gold: "24/7" },
                  { feature: "Proactive Monitoring", bronze: "—", silver: "Basic", gold: "Advanced" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-cyan-900/20">
                    <td className="text-gray-300 py-3 font-medium">{row.feature}</td>
                    <td className="text-center py-3 text-gray-300">{row.bronze}</td>
                    <td className="text-center py-3 text-gray-300">{row.silver}</td>
                    <td className="text-center py-3 text-gray-300">{row.gold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] border border-[#01FFFF]/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Χρειάζεστε Custom Υποστήριξη;
            </h3>
            <p className="text-gray-300 mb-6">
              Μπορούμε να δημιουργήσουμε ένα tailor-made πακέτο υποστήριξης βάσει των συγκεκριμένων αναγκών και budget σας.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Ζητήστε Custom Προσφορά
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                className="border border-[#01FFFF]/40 text-[#01FFFF] font-semibold py-3 px-6 rounded-full hover:bg-[#01FFFF]/10 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Κλείστε Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
