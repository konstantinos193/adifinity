'use client'

import { lazy, Suspense, type ReactNode } from 'react'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import InvitationsSection from './InvitationsSection'
import { useTranslations } from '@/components/useTranslations'

// Lazy load below-the-fold components for better LCP
const LogoCarousel = lazy(() => import('./LogoCarousel'))
const TestimonialsSection = lazy(() => import('./TestimonialsSection'))
const ContactSection = lazy(() => import('./ContactSection'))

// Loading placeholder for lazy loaded components
const LoadingPlaceholder = () => {
  const { t } = useTranslations()

  return (
    <div className="py-16 bg-gradient-to-b from-[#071218] to-[#0A1A24] min-h-[400px] flex items-center justify-center">
      <div className="animate-pulse text-gray-400">{t('common.loading')}</div>
    </div>
  )
}

/**
 * Section order follows the 2026-09-11 audit (§11): hero, what we do, proof
 * (real projects, then client logos, then testimonials), the invitations
 * product, contact. Proof used to come after the invitations promo; a local
 * visitor should not have to scroll past a side product to find out the
 * agency has real work.
 *
 * `proof` is a server-rendered slot (`<RelatedProjects>`) passed in from
 * `app/page.tsx`, because this file is a client component and the case-study
 * data should not be shipped to the browser twice.
 */
export default function HomePageClient({ proof }: { proof?: ReactNode }) {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      {proof}
      <Suspense fallback={<LoadingPlaceholder />}>
        <LogoCarousel />
      </Suspense>
      <Suspense fallback={<LoadingPlaceholder />}>
        <TestimonialsSection />
      </Suspense>
      <InvitationsSection />
      <Suspense fallback={<LoadingPlaceholder />}>
        <ContactSection />
      </Suspense>
    </main>
  )
}
