"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, Star, Zap, Shield, TrendingUp } from "lucide-react"
import { useState } from "react"

interface Feature {
  title: string
  price: string
  description: string
  features: string[]
  icon: React.ComponentType<any>
  popular?: boolean
  recurring?: string
  timeline?: string
}

interface FeatureShowcaseProps {
  title: string
  subtitle: string
  features: Feature[]
  ctaText?: string
  showComparison?: boolean
}

export default function FeatureShowcase({ 
  title, 
  subtitle, 
  features, 
  ctaText = "Ζητήστε Προσφορά",
  showComparison = false 
}: FeatureShowcaseProps) {
  const [expandedFeature, setExpandedFeature] = useState<string | null>(null)

  return (
    <section className="py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-white mb-3">{title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isExpanded = expandedFeature === feature.title
            
            return (
              <motion.div
                key={feature.title}
                className={`relative bg-[#0A1A24] border rounded-2xl overflow-hidden transition-all duration-300 ${
                  feature.popular 
                    ? 'border-[#01FFFF]/50 shadow-[0_0_30px_rgba(1,255,255,0.2)]' 
                    : 'border-cyan-900/30 hover:border-[#01FFFF]/40'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {feature.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      ΔΗΜΟΦΙΛΕΣ
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#01FFFF]" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{feature.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-black text-[#01FFFF]">{feature.price}</span>
                        {feature.recurring && (
                          <span className="text-gray-400 text-sm">+ {feature.recurring}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {feature.timeline && (
                    <div className="flex items-center gap-2 mb-4 text-xs text-[#01FFFF]/70">
                      <Zap className="w-3 h-3" />
                      <span>Παράδοση: {feature.timeline}</span>
                    </div>
                  )}

                  <div className="space-y-2 mb-6">
                    {feature.features.slice(0, isExpanded ? feature.features.length : 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#01FFFF] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {feature.features.length > 3 && (
                    <button
                      onClick={() => setExpandedFeature(isExpanded ? null : feature.title)}
                      className="text-[#01FFFF] text-sm font-semibold hover:text-[#01A9FF] transition-colors mb-4"
                    >
                      {isExpanded ? 'Λιγότερα' : `Εμφάνιση ${feature.features.length - 3} Πρόσθετων`}
                    </button>
                  )}

                  <motion.button
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                      feature.popular
                        ? 'bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] shadow-lg shadow-cyan-500/20'
                        : 'border border-[#01FFFF]/40 text-[#01FFFF] hover:bg-[#01FFFF]/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {ctaText}
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {showComparison && (
          <motion.div
            className="bg-[#0A1A24] border border-cyan-900/30 rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-bold text-xl mb-4">Σύγκριση Χαρακτηριστικών</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-cyan-900/30">
                    <th className="text-left text-gray-400 pb-3">Χαρακτηριστικό</th>
                    {features.map(feature => (
                      <th key={feature.title} className="text-center text-gray-400 pb-3">
                        {feature.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {['Βασική Υποστήριξη', 'Προσαρμοσμένο Design', 'Αναλυτικά', 'API Πρόσβαση', 'Προτεραιότητα Υποστήριξης'].map((row, i) => (
                    <tr key={row} className="border-b border-cyan-900/20">
                      <td className="text-gray-300 py-3">{row}</td>
                      {features.map((feature, j) => (
                        <td key={j} className="text-center py-3">
                          {i < features[j].features.length / 2 ? (
                            <Check className="w-4 h-4 text-[#01FFFF] mx-auto" />
                          ) : (
                            <span className="text-gray-600">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
