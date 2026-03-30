"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"
import { Menu, ChevronDown } from "lucide-react"
import MobileMenu from "./MobileMenu"
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock"
import { useTranslations } from "@/components/useTranslations"
import LanguageSwitcher from "@/components/LanguageSwitcher"

export default function Header() {
  const { t } = useTranslations()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([])

  useBodyScrollLock(isMobileMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    {
      name: t('navigation.services'),
      path: "/services",
      dropdownItems: [
        { name: t('navigation.prints'), path: "/prints" },
        { name: t('navigation.graphic_design'), path: "/graphic-design" },
        { name: t('navigation.flyer_distribution'), path: "/flyer-distribution" },
        { name: t('navigation.website_development'), path: "/website-development" },
        { name: t('navigation.market_research'), path: "/market-research" },
      ],
    },
    { name: t('navigation.about'), path: "/about" },
    { name: t('navigation.projects'), path: "/projects" },
    { name: t('navigation.accessibility'), path: "/accessibility" },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-[#030B10]/90 backdrop-blur-md py-2 shadow-lg shadow-black/10"
            : "bg-gradient-to-b from-[#040D12] to-[#040D12]/80 py-4"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo with hover effect */}
            <Link href="/" className="relative group">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={120}
                  height={120}
                  className="w-24 md:w-32 relative z-10"
                  priority
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#01FFFF]/20 to-[#01A9FF]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav id="navigation" role="navigation" aria-label="Main navigation" className="hidden lg:block">
              <ul className="flex space-x-8">
                {menuItems.map((item, index) => (
                  <li key={index} className="relative group">
                    {item.dropdownItems ? (
                      <div>
                        <Link
                          href={item.path}
                          className="flex items-center py-2 px-1 text-white hover:text-[#01FFFF] transition-colors group-hover:text-[#01FFFF]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            size={16}
                            className="ml-1 transition-transform duration-300 group-hover:rotate-180 group-hover:text-[#01FFFF]"
                          />
                        </Link>
                        <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-20">
                          <div className="pt-2">
                            <div className="bg-gradient-to-b from-[#071218] to-[#0A1A24] rounded-xl overflow-hidden shadow-xl border border-cyan-900/30 backdrop-blur-sm">
                              <div className="absolute inset-0 bg-gradient-to-b from-[#01FFFF]/5 to-transparent opacity-60"></div>
                              <ul className="relative z-10 py-2">
                                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                  <li key={dropdownIndex}>
                                    <Link
                                      href={dropdownItem.path}
                                      className="block px-4 py-2.5 text-white hover:bg-[#01FFFF]/10 hover:text-[#01FFFF] transition-colors"
                                    >
                                      {dropdownItem.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className="block py-2 px-1 text-white hover:text-[#01FFFF] transition-colors relative group"
                      >
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#01FFFF] group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 hover:text-[#01FFFF] transition-colors relative"
                whileTap={{ scale: 0.9 }}
                aria-label="Menu"
              >
                <Menu className="h-6 w-6" />
                {!isMobileMenuOpen && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#01FFFF] rounded-full animate-pulse"></span>
                )}
              </motion.button>
            </div>

            {/* Language Switcher & Contact Button - Desktop Only */}
            <div className="hidden lg:flex items-center space-x-4">
              <LanguageSwitcher />
              <Link href="/contact#contact-form" className="hidden lg:block">
                <motion.button
                  className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-medium py-2 px-6 rounded-full hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('navigation.contact')}
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={menuItems}
      />
    </>
  )
}
