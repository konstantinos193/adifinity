'use client'

import { lazy, Suspense } from 'react'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";

// Lazy load below-the-fold components for better LCP
const LogoCarousel = lazy(() => import('./LogoCarousel'))
const TestimonialsSection = lazy(() => import('./TestimonialsSection'))
const ContactSection = lazy(() => import('./ContactSection'))

// Loading placeholder for lazy loaded components
const LoadingPlaceholder = () => (
  <div className="py-16 bg-gradient-to-b from-[#071218] to-[#0A1A24] min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
)

export default function HomePageClient() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <Suspense fallback={<LoadingPlaceholder />}>
        <LogoCarousel />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <ContactSection />
      </Suspense>
      <Analytics />
      <SpeedInsights />
    </main>
  )
}

