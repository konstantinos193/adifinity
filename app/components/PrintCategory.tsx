import { motion } from "framer-motion"

interface PrintCategoryProps {
  title: string
  items: string[]
}

export function PrintCategory({ title, items }: PrintCategoryProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-[#0A1A24] to-[#0D2436] p-6 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold mb-4 text-[#01FFFF]">{title}</h3>
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

