"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<number | null>(null)
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const menuItems = [
    { name: "Αρχική", path: "/" },
    {
      name: "Υπηρεσίες",
      path: "/services",
      dropdownItems: [
        { name: "Εκτυπώσεις", path: "/prints" },
        { name: "Γραφικές τέχνες", path: "/graphic-design" },
        { name: "Έντυποδιανομές", path: "/flyer-distribution" },
        { name: "Ιστοσελίδες", path: "/website-development" },
        { name: "Έρευνα αγοράς", path: "/market-research" },
      ],
    },
    { name: "Ποιοι Είμαστε", path: "/about" },
    { name: "Τα Έργα μας", path: "/projects" },
  ]

  const toggleMobileDropdown = (index: number) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index)
  }

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
            <nav className="hidden lg:block">
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

            {/* Contact Button (Desktop) */}
            <Link href="/contact#contact-form" className="hidden lg:block">
              <motion.button
                className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-medium py-2 px-6 rounded-full hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Επικοινωνία
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with blur effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-in Menu with enhanced design */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-[100dvh] w-[300px] bg-gradient-to-b from-[#071218] to-[#0A1A24] z-[999] lg:hidden overflow-y-auto"
            >
              {/* Ambient glow effects */}
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#01FFFF]/5 rounded-full blur-2xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#01A9FF]/5 rounded-full blur-3xl"></div>

              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              ></div>

              <div className="p-6 relative z-10">
                <div className="flex justify-between items-center mb-8">
                  <motion.h2
                    className="text-xl font-semibold text-[#01FFFF]"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Μενού
                  </motion.h2>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white hover:text-[#01FFFF] transition-colors"
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                </div>

                <nav>
                  <ul className="space-y-5">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={index}
                        className="border-b border-cyan-900/20 pb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <div className="flex items-center justify-between">
                          <Link
                            href={item.path}
                            className="text-lg text-white hover:text-[#01FFFF] transition-colors"
                            onClick={() => !item.dropdownItems && setIsMobileMenuOpen(false)}
                          >
                            <span>{item.name}</span>
                          </Link>
                          <button
                            onClick={() => toggleMobileDropdown(index)}
                            className="focus:outline-none"
                            aria-label="Toggle dropdown"
                          >
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${
                                activeMobileDropdown === index ? "rotate-180 text-[#01FFFF]" : ""
                              }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence>
                          {item.dropdownItems && activeMobileDropdown === index && (
                            <motion.ul
                              className="mt-3 space-y-1 pl-4 border-l border-cyan-900/30"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                <motion.li
                                  key={dropdownIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.1 + dropdownIndex * 0.05 }}
                                >
                                  <Link
                                    href={dropdownItem.path}
                                    className="text-gray-400 hover:text-[#01FFFF] transition-colors block py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                </motion.li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </motion.li>
                    ))}

                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + menuItems.length * 0.1 }}
                      className="pt-4"
                    >
                      <Link href="/contact#contact-form" onClick={() => setIsMobileMenuOpen(false)}>
                        <motion.button
                          className="w-full bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
                          whileTap={{ scale: 0.95 }}
                        >
                          Επικοινωνία
                        </motion.button>
                      </Link>
                    </motion.li>
                  </ul>
                </nav>

                {/* Social media links */}
                <motion.div
                  className="mt-10 flex justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {/* Facebook */}
                  <a href="#" className="text-gray-400 hover:text-[#01FFFF] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a href="#" className="text-gray-400 hover:text-[#01FFFF] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
