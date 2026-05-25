"use client"

import { motion } from "framer-motion"
import { Check, X, ArrowRight, Star, Zap } from "lucide-react"
import { useState } from "react"

interface PricingTier {
  name: string
  price: string
  description: string
  features: string[]
  icon?: React.ComponentType<any>
  popular?: boolean
  savings?: string
  timeline?: string
  cta?: string
}

interface PricingTableProps {
  title: string
  subtitle: string
  tiers: PricingTier[]
  showAnnual?: boolean
  showSavings?: boolean
}

export default function PricingTable({ 
  title, 
  subtitle, 
  tiers, 
  showAnnual = false,
  showSavings = false 
}: PricingTableProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly')

  return (
    <section className="py-20 bg-[#07141C]">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-black text-white mb-3">{title}</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
          
          {showAnnual && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <span className={`text-sm font-medium transition-colors ${
                billingCycle === 'monthly' ? 'text-[#01FFFF]' : 'text-gray-400'
              }`}>
                Monthly
              </span>
              <motion.button
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  billingCycle === 'annual' ? 'bg-[#01FFFF]' : 'bg-gray-600'
                }`}
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute top-1 w-5 h-5 bg-[#07141C] rounded-full transition-transform"
                  animate={{ x: billingCycle === 'annual' ? 28 : 4 }}
                />
              </motion.button>
              <span className={`text-sm font-medium transition-colors ${
                billingCycle === 'annual' ? 'text-[#01FFFF]' : 'text-gray-400'
              }`}>
                Annual
                <span className="text-green-400 ml-1">(Save 20%)</span>
              </span>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier, index) => {
            const Icon = tier.icon
            
            return (
              <motion.div
                key={tier.name}
                className={`relative bg-[#0A1A24] border rounded-2xl p-8 transition-all duration-300 ${
                  tier.popular 
                    ? 'border-[#01FFFF]/50 shadow-[0_0_30px_rgba(1,255,255,0.2)] scale-105' 
                    : 'border-cyan-900/30 hover:border-[#01FFFF]/40'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {showSavings && tier.savings && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 rounded-full">
                      Save {tier.savings}
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  {Icon && (
                    <div className="w-16 h-16 rounded-xl bg-[#01FFFF]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-[#01FFFF]" />
                    </div>
                  )}
                  
                  <h3 className="text-white font-bold text-2xl mb-2">{tier.name}</h3>
                  <div className="mb-3">
                    <span className="text-4xl font-black text-[#01FFFF]">{tier.price}</span>
                    {billingCycle === 'annual' && showAnnual && (
                      <span className="text-gray-400 text-sm">/year</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                  
                  {tier.timeline && (
                    <div className="flex items-center justify-center gap-2 mt-3 text-xs text-[#01FFFF]/70">
                      <Zap className="w-3 h-3" />
                      <span>{tier.timeline}</span>
                    </div>
                  )}
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#01FFFF] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] shadow-lg shadow-cyan-500/20'
                      : 'border border-[#01FFFF]/40 text-[#01FFFF] hover:bg-[#01FFFF]/10'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {tier.cta || 'Get Started'}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            )
          })}
        </div>

        {/* Trust indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>No hidden fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>30-day money back</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>24/7 support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
