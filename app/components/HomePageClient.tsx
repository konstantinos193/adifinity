'use client'

import { motion } from 'framer-motion'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import LogoCarousel from './LogoCarousel'
import TestimonialsSection from './TestimonialsSection'
import ContactSection from './ContactSection'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function HomePageClient() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <LogoCarousel />
      <TestimonialsSection />
      <ContactSection />
      <Analytics />
      <SpeedInsights />
    </main>
  )
}

