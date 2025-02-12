import { useState } from 'react'
import { motion } from 'framer-motion'
// Import projects data directly if your setup allows it
import projectsData from '../data/projects.json' // Adjust the path as necessary

export default function LogoCarousel() {
  // Use the imported projects data
  const logos = projectsData.projects.map(project => project.image) // Extract logos from projects
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextLogo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length)
  }

  const prevLogo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length)
  }

  return (
    <section className="py-10 bg-[#0A1A24]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl mb-8 text-white">Οι Συνεργάτες Μας</h2>
        <div className="relative">
          <motion.img
            key={currentIndex}
            src={logos[currentIndex]}
            alt={`Λογότυπο ${currentIndex + 1}`}
            className="mx-auto rounded-lg shadow-lg max-w-full h-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
          />
          <button
            onClick={prevLogo}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#01A9FF] text-2xl hover:text-[#0190E0] transition-colors"
          >
            &#9664;
          </button>
          <button
            onClick={nextLogo}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#01A9FF] text-2xl hover:text-[#0190E0] transition-colors"
          >
            &#9654;
          </button>
        </div>
      </div>
    </section>
  )
} 