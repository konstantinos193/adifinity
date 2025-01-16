'use client'

import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutUsSection from './components/AboutUsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}

