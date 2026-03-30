"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useTranslations } from "@/components/useTranslations"

interface Review {
  author_name: string
  rating: number
  text: string
  image?: string
  time_ago: string
}

export default function TestimonialsSection() {
  const { t } = useTranslations()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [autoplay, setAutoplay] = useState(true)

  // Get testimonials from translations
  const staticReviews: Review[] = Array.isArray(t('testimonials.reviews')) ? (t('testimonials.reviews') as Review[]) : []

// Function to generate a unique color based on name
function generateColor(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }

  // Generate colors in the cyan/blue spectrum to match the site theme
  const h = (Math.abs(hash) % 60) + 180 // Hue between 180-240 (cyan to blue)
  const s = 70 + (Math.abs(hash) % 30) // Saturation 70-100%
  const l = 45 + (Math.abs(hash) % 15) // Lightness 45-60%

  return `hsl(${h}, ${s}%, ${l}%)`
}

// Function to generate initials from name
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)
}

// SVG Avatar component
function AvatarSvg({ name }: { name: string }) {
  const bgColor = generateColor(name)
  const initials = getInitials(name)

  return (
    <div className="relative w-20 h-20 rounded-full overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        {/* Background */}
        <circle cx="50" cy="50" r="50" fill={bgColor} />

        {/* Decorative elements */}
        <circle cx="20" cy="20" r="8" fill="rgba(255, 255, 255, 0.2)" />
        <circle cx="80" cy="80" r="10" fill="rgba(255, 255, 255, 0.1)" />
        <path d="M0,50 Q25,30 50,50 T100,50" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="2" fill="none" />

        {/* Text */}
        <text
          x="50"
          y="50"
          fontFamily="Arial, sans-serif"
          fontSize="32"
          fontWeight="bold"
          fill="white"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {initials}
        </text>
      </svg>
    </div>
  )
}

  // Initialize on client side
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      nextSlide()
    }, 6000)

    return () => clearInterval(interval)
  }, [autoplay, currentIndex])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % staticReviews.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + staticReviews.length) % staticReviews.length)
  }

  // If we're not loaded yet, don't render anything to avoid hydration issues
  if (!isLoaded) {
    return null
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#0A1A24] to-[#07141C] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#01FFFF]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#01FFFF]/20 to-transparent"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Ambient glow */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#01FFFF]/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#01FFFF] mb-4">{t('testimonials.title')}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial carousel */}
          <div
            className="relative overflow-hidden rounded-2xl"
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="relative">
              {/* Quote icon */}
              <div className="absolute top-6 left-6 text-[#01FFFF]/20 z-10">
                <Quote size={40} />
              </div>

              {/* Testimonial card */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#0D2436] to-[#071218] p-10 rounded-2xl shadow-xl border border-cyan-900/30 min-h-[300px] flex flex-col md:flex-row items-center gap-8"
              >
                {/* Avatar and author info */}
                <div className="flex flex-col items-center text-center md:w-1/3">
                  <AvatarSvg name={staticReviews[currentIndex].author_name} />

                  <h4 className="text-xl font-bold text-white mt-4 mb-1">{staticReviews[currentIndex].author_name}</h4>
                  <p className="text-sm text-gray-400 mb-3">{staticReviews[currentIndex].time_ago}</p>

                  {/* Star rating */}
                  <div className="flex">
                    {Array.from({ length: staticReviews[currentIndex].rating }, (_, i) => (
                      <span key={i} className="text-[#FFD700]">
                        ★
                      </span>
                    ))}
                    {Array.from({ length: 5 - staticReviews[currentIndex].rating }, (_, i) => (
                      <span key={i} className="text-gray-600">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial text */}
                <div className="md:w-2/3 flex flex-col justify-center">
                  <p className="text-lg text-gray-200 italic relative">"{staticReviews[currentIndex].text}"</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-[#01FFFF] hover:bg-[#01A9FF] text-[#071218] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors z-20"
            aria-label={t('testimonials.previous_testimonial') as string}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-[#01FFFF] hover:bg-[#01A9FF] text-[#071218] w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors z-20"
            aria-label={t('testimonials.next_testimonial') as string}
          >
            <ChevronRight size={24} />
          </button>

          {/* Pagination dots */}
          <div className="flex justify-center mt-8 gap-2">
            {staticReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index ? "bg-[#01FFFF] w-4" : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={t('testimonials.go_to_testimonial') as string}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://www.google.com/search?sca_esv=563a49081b992b59&sxsrf=AHTn8zqcSOmVdrCzYX1kpi-aKj8l1zWsuw:1744342540659&q=adinfinity+άρτα&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzXvKLFbeez8PPOhekLYza1Rc6Q1WXuPuzJp09Qe7EbNDkp3ecz0ejbgYqNd0UvNWF08A-n0%3D&uds=ABqPDvxkc1hlhLTCjoC0jcqe9t987VI5kbgY0cMqLGuEMONFDU0BqVmw3Ox1bDJyNuvWymPHNO0_kQ94mcBdl2zl8uS0fjmcEIsSFtSzx4jbFFgavnjidgTwjVLB36YkK4vTYloN1I9t&sa=X&ved=2ahUKEwiru4Kshs-MAxVcywIHHTfhHt4Q3PALegQIGhAE&biw=1876&bih=959&dpr=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-[#01FFFF]/10 border border-[#01FFFF] text-[#01FFFF] font-medium py-2 px-6 rounded-full transition-colors"
          >
            <span>{t('testimonials.see_more_reviews')}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
