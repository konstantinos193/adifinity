import React from "react"
import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import Link from "next/link"

interface PricingCardProps {
  plan: {
    name: string
    price: string
    period?: string
    description: string
    features: string[]
    popular?: boolean
    cta: string
  }
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.div
      className={`relative bg-gradient-to-br p-8 rounded-2xl shadow-xl border transition-all duration-300 ${
        plan.popular
          ? "from-[#01FFFF]/20 to-[#01A9FF]/10 border-[#01FFFF] scale-105"
          : "from-[#0A1A24] to-[#0D2436] border-cyan-900/30 hover:border-cyan-900/50 hover:scale-102"
      }`}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
            <Star className="w-4 h-4" />
            Δημοφιλές
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? "text-[#01FFFF]" : "text-white"}`}>
          {plan.name}
        </h3>
        <div className="mb-4">
          <span className={`text-4xl font-bold ${plan.popular ? "text-[#01FFFF]" : "text-white"}`}>
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-gray-400 ml-2">/{plan.period}</span>
          )}
        </div>
        <p className="text-gray-300">{plan.description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#01FFFF] flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Link href="/contact#contact-form">
        <motion.button
          className={`w-full py-3 px-6 rounded-lg font-bold transition-all ${
            plan.popular
              ? "bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] hover:shadow-lg hover:shadow-cyan-500/20"
              : "border border-[#01FFFF] text-[#01FFFF] hover:bg-[#01FFFF]/10"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {plan.cta}
        </motion.button>
      </Link>
    </motion.div>
  )
}
