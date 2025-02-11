import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface FeatureCardProps {
  feature: string
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-lg shadow-lg text-center"
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(1, 255, 255, 0.2)" }}
      transition={{ duration: 0.3 }}
    >
      <CheckCircle className="w-10 h-10 text-[#01FFFF] mx-auto mb-4" />
      <p className="text-sm">{feature}</p>
    </motion.div>
  )
}

