"use client"

import { useTranslations } from "@/components/useTranslations"
import { usePathname } from "next/navigation"

export default function SkipLinks() {
  const { t } = useTranslations()
  const pathname = usePathname()
  
  // Don't render skip links on privacy policy page
  if (pathname === '/privacy-policy') {
    return null
  }

  return (
    <>
      {/* Skip to main content */}
      <a 
        href="#main-content" 
        className="skip-link"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>

      {/* Skip to navigation */}
      <a 
        href="#navigation" 
        className="skip-link"
        aria-label="Skip to navigation"
      >
        Skip to navigation
      </a>

      {/* Skip to contact form */}
      <a 
        href="#contact-form" 
        className="skip-link"
        aria-label="Skip to contact form"
      >
        Skip to contact form
      </a>

      {/* Skip to footer */}
      <a 
        href="#footer" 
        className="skip-link"
        aria-label="Skip to footer"
      >
        Skip to footer
      </a>
    </>
  )
}
