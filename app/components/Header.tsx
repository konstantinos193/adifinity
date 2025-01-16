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
        isScrolled ? 'bg-[#07141C]' : 'bg-transparent'
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
            {['Αρχική', 'Υπηρεσίες', 'Ποιοι Είμαστε', 'Επικοινωνία'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="hover:text-[#01FFFF] transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="btn btn-primary">Ξεκινήστε Τώρα</button>
      </div>
    </motion.header>
  )
}

