'use client'

import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import LogoCarousel from './components/LogoCarousel'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <LogoCarousel />
      <TestimonialsSection />
      <Analytics />
      <SpeedInsights />
    </main>
  )
}

