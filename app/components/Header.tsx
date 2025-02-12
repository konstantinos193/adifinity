'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const menuItems = [
    { name: 'Αρχική', path: '/' },
    { name: 'Υπηρεσίες', path: '/services', dropdownItems: [
      { name: 'Εκτυπώσεις', path: '/prints' },
      { name: 'Γραφικές τέχνες', path: '/graphic-design' },
      { name: 'Έντυποδιανομές', path: '/flyer-distribution' },
      { name: 'Ιστοσελίδες', path: '/website-development' },
      { name: 'Έρευνα αγοράς', path: '/market-research' }
    ]},
    { name: 'Ποιοι Είμαστε', path: '/about' },
    { name: 'Τα Έργα μας', path: '/projects' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled ? 'bg-[#030B10]/95 backdrop-blur-sm' : 'bg-[#040D12]'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={120}
              height={120}
              className="w-24 md:w-32"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {menuItems.map((item, index) => (
                <li key={index} className="relative group">
                  <Link href={item.path} className="hover:text-[#01FFFF] transition-colors text-white">
                    {item.name}
                  </Link>
                  {item.dropdownItems && (
                    <ul className="absolute left-0 mt-2 w-48 bg-[#040D12] shadow-lg rounded-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                      {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                        <li key={dropdownIndex} className="px-4 py-2 hover:bg-[#01FFFF] hover:text-black">
                          <Link href={dropdownItem.path} className="block w-full h-full">
                            {dropdownItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2 hover:text-[#01FFFF] transition-colors"
              aria-label="Menu"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Contact Button (Desktop) */}
          <Link href="/contact#contact-form" className="hidden md:block">
            <button className="btn btn-primary">Επικοινωνία</button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[300px] bg-[#030B10] z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-semibold text-[#01FFFF]">Μενού</h2>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-[#01FFFF] transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                </div>

                <nav>
                  <ul className="space-y-6">
                    {menuItems.map((item, index) => (
                      <li key={index} className="border-b border-gray-800 pb-4">
                        <Link 
                          href={item.path}
                          className="text-lg text-white hover:text-[#01FFFF] transition-colors block"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        {item.dropdownItems && (
                          <ul className="mt-3 space-y-2 pl-4">
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <li key={dropdownIndex}>
                                <Link 
                                  href={dropdownItem.path}
                                  className="text-gray-400 hover:text-[#01FFFF] transition-colors block py-1"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {dropdownItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                    <li>
                      <Link 
                        href="/contact#contact-form"
                        className="btn btn-primary w-full text-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Επικοινωνία
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
