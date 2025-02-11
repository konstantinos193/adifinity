import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface BenefitCardProps {
  benefit: string
}

export function BenefitCard({ benefit }: BenefitCardProps) {
  return (
    <motion.div
      className="flex items-start p-4 bg-gradient-to-br from-[#0A1A24] to-[#0D2436] rounded-lg shadow-lg"
      whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(1, 255, 255, 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      <CheckCircle className="w-6 h-6 text-[#01FFFF] mr-3 flex-shrink-0 mt-1" />
      <p className="text-sm">{benefit}</p>
    </motion.div>
  )
}

