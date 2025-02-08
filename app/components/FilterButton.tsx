import { motion } from "framer-motion"

interface FilterButtonProps {
  category: string
  isActive: boolean
  onClick: () => void
}

export function FilterButton({ category, isActive, onClick }: FilterButtonProps) {
  return (
    <motion.button
      className={`px-4 py-2 rounded-full transition-colors ${
        isActive ? "bg-[#01FFFF] text-[#07141C]" : "bg-[#0A1A24] text-[#01FFFF] hover:bg-[#01FFFF] hover:text-[#07141C]"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {category}
    </motion.button>
  )
}

