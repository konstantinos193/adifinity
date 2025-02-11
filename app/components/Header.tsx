'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-[#030B10]' : 'bg-[#040D12]'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
          />
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-[#01FFFF] transition-colors text-white">
                Αρχική
              </Link>
            </li>
            <li className="relative group">
              <Link href="/services" className="hover:text-[#01FFFF] transition-colors text-white cursor-pointer">
                <span className="hover:text-[#01FFFF] transition-colors text-white cursor-pointer">
                  Υπηρεσίες
                </span>
              </Link>
              <ul className="absolute left-0 mt-2 w-48 bg-[#040D12] shadow-lg rounded-lg invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">
                {[
                  { name: 'Εκτυπώσεις', path: '/prints' },
                  { name: 'Γραφικές τέχνες', path: '/graphic-design' },
                  { name: 'Έντυποδιανομές', path: '/flyer-distribution' },
                  { name: 'Ιστοσελίδες', path: '/website-development' },
                  { name: 'Έρευνα αγοράς', path: '/market-research' }
                ].map((item, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-[#01FFFF] hover:text-black">
                    <Link 
                      href={item.path} 
                      className="block w-full h-full"
                      onClick={(e) => {
                        if (!item.path) {
                          e.preventDefault();
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#01FFFF] transition-colors text-white">
                Ποιοι Είμαστε
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-[#01FFFF] transition-colors text-white">
                Τα Έργα μας
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/contact#contact-form">
          <button className="btn btn-primary">Επικοινωνία</button>
        </Link>
      </div>
    </motion.header>
  )
}
