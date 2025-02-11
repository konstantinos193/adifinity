
import { motion } from "framer-motion"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  link: string
}

export function ServiceCard({ icon: Icon, title, description, link }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] rounded-lg overflow-hidden shadow-lg"
      whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(1, 255, 255, 0.3)" }}
    >
      <Link href={link}>
        <div className="p-6">
          <Icon className="w-12 h-12 text-[#01FFFF] mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-[#01FFFF]">{title}</h3>
          <p className="text-sm mb-4">{description}</p>
          <div className="flex items-center text-[#01FFFF]">
            <span className="mr-2">Μάθετε περισσότερα</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

