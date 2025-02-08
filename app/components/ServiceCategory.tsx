import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface ServiceCategoryProps {
  title: string
  items: string[]
  icon: LucideIcon
}

export function ServiceCategory({ title, items, icon: Icon }: ServiceCategoryProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="flex items-center mb-4">
        <Icon className="w-8 h-8 text-[#01FFFF] mr-3" />
        <h3 className="text-2xl font-bold text-[#01FFFF]">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <motion.li
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="text-[#01FFFF] mr-2">•</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

