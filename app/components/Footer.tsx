"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

// Custom SVG Icons for desktop
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#01FFFF" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879V14.89H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.879C18.343 21.128 22 16.991 22 12C22 6.477 17.523 2 12 2Z" />
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#01FFFF" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#01FFFF" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-[#071218] to-[#030B10] pt-10 pb-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#01FFFF]/20 to-transparent"></div>
      <div className="absolute -top-40 right-20 w-80 h-80 bg-[#01FFFF]/5 rounded-full blur-[80px]"></div>
      <div className="absolute -bottom-40 left-20 w-80 h-80 bg-[#01A9FF]/5 rounded-full blur-[80px]"></div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #01FFFF 1px, transparent 1px), linear-gradient(to bottom, #01FFFF 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop Footer */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="mb-4">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                <Image src="/logo.png" alt="adinfinity logo" width={120} height={120} className="mb-4" />
              </motion.div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Σας ευχαριστούμε που μας εμπιστεύεστε για την ανάπτυξη της επιχείρησής σας. Είμαστε εδώ για να σας
                βοηθήσουμε να ξεχωρίσετε.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mt-2">
              <h4 className="text-[#01FFFF] font-medium mb-4 text-sm">ΕΠΙΚΟΙΝΩΝΙΑ</h4>
              <div className="flex items-center text-gray-400 text-sm group">
                <Phone size={16} className="mr-2 text-[#01FFFF] group-hover:text-white transition-colors" />
                <a href="tel:+302681303007" className="hover:text-white transition-colors">
                  +30 2681 303007
                </a>
              </div>
              <div className="flex items-center text-gray-400 text-sm group">
                <Mail size={16} className="mr-2 text-[#01FFFF] group-hover:text-white transition-colors" />
                <a href="mailto:adenfinity@gmail.com" className="hover:text-white transition-colors">
                  adenfinity@gmail.com
                </a>
              </div>
              <div className="flex items-start text-gray-400 text-sm group">
                <MapPin size={16} className="mr-2 mt-1 text-[#01FFFF] group-hover:text-white transition-colors" />
                <a
                  href="https://maps.app.goo.gl/RfBa8nY7Yk13gPCP8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Βασ. Πύρρου 30, Άρτα 471 32
                </a>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-lg font-bold mb-4 text-white">Γρήγορη Πλοήγηση</h3>
            <ul className="space-y-2">
              {[
                { name: "Αρχική", path: "/" },
                { name: "Υπηρεσίες", path: "/services" },
                { name: "Ποιοι Είμαστε", path: "/about" },
                { name: "Τα Έργα μας", path: "/projects" },

                { name: "Επικοινωνία", path: "/contact" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#01FFFF]"
                    />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-lg font-bold mb-4 text-white">Υπηρεσίες</h3>
            <ul className="space-y-2">
              {[
                { name: "Εκτυπώσεις", path: "/prints" },
                { name: "Γραφικές τέχνες", path: "/graphic-design" },
                { name: "Έντυποδιανομές", path: "/flyer-distribution" },
                { name: "Ιστοσελίδες", path: "/website-development" },
                { name: "Έρευνα αγοράς", path: "/market-research" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight
                      size={14}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-[#01FFFF]"
                    />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact CTA & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-lg font-bold mb-4 text-white">Ξεκινήστε Σήμερα</h3>
            <p className="text-gray-400 text-sm mb-4">
              Είμαστε έτοιμοι να συζητήσουμε το επόμενο project σας και να σας βοηθήσουμε να ξεχωρίσετε στην αγορά.
            </p>

            {/* Contact CTA */}
            <Link href="/contact#contact-form">
              <motion.button
                className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#071218] font-medium py-2 px-6 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all w-full mb-6"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Επικοινωνήστε Μαζί Μας
              </motion.button>
            </Link>

            {/* Social Media with Custom Icons */}
            <div>
              <h4 className="text-white font-medium mb-4">Ακολουθήστε μας</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.facebook.com/1.adinfinity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/40 hover:bg-[#01FFFF]/20 border border-gray-600 hover:border-[#01FFFF]/70 p-2 rounded-full transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <FacebookIcon />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/adinfinityads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/40 hover:bg-[#01FFFF]/20 border border-gray-600 hover:border-[#01FFFF]/70 p-2 rounded-full transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <InstagramIcon />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/adinfinity-ads-bb0a398a/?originalSubdomain=gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800/40 hover:bg-[#01FFFF]/20 border border-gray-600 hover:border-[#01FFFF]/70 p-2 rounded-full transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <LinkedinIcon />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Desktop Copyright */}
        <div className="hidden lg:block mt-8 pt-6 border-t border-gray-800 relative z-10 w-full">
          <p className="text-center text-gray-400 text-sm">
            © {currentYear} adinfinity. Με επιφύλαξη παντός δικαιώματος.
          </p>
        </div>

        {/* Mobile Footer - Completely Redesigned for Compactness */}
        <div className="lg:hidden">
          {/* Logo and Social */}
          <div className="flex flex-col items-center text-center mb-4">
            <Image src="/logo.png" alt="adinfinity logo" width={70} height={70} className="mb-2" />
            <p className="text-gray-400 text-xs mb-3 max-w-xs">
              Σας ευχαριστούμε που μας εμπιστεύεστε για την ανάπτυξη της επιχείρησής σας.
            </p>

            {/* Social Media Icons - Simple SVGs with direct fill */}
            <div className="flex space-x-3 mb-2">
              <a
                href="https://www.facebook.com/1.adinfinity"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/40 border border-gray-600 hover:border-[#01FFFF]/70 p-1.5 rounded-full transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#01FFFF" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.991 5.657 21.128 10.438 21.879V14.89H7.898V12H10.438V9.797C10.438 7.291 11.93 5.907 14.215 5.907C15.309 5.907 16.453 6.102 16.453 6.102V8.562H15.193C13.95 8.562 13.563 9.333 13.563 10.124V12H16.336L15.893 14.89H13.563V21.879C18.343 21.128 22 16.991 22 12C22 6.477 17.523 2 12 2Z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/adinfinityads/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/40 border border-gray-600 hover:border-[#01FFFF]/70 p-1.5 rounded-full transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#01FFFF" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/adinfinity-ads-bb0a398a/?originalSubdomain=gr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800/40 border border-gray-600 hover:border-[#01FFFF]/70 p-1.5 rounded-full transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#01FFFF" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact info - Compact */}
          <div className="flex justify-center space-x-4 mb-4 text-xs text-gray-400">
            <a href="tel:+302681303007" className="flex items-center">
              <Phone size={12} className="mr-1 text-[#01FFFF]" />
              <span>2681 303007</span>
            </a>
            <a href="mailto:adenfinity@gmail.com" className="flex items-center">
              <Mail size={12} className="mr-1 text-[#01FFFF]" />
              <span>adenfinity@gmail.com</span>
            </a>
          </div>

          {/* Quick links - Two columns */}
          <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
              Αρχική
            </Link>
            <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
              Υπηρεσίες
            </Link>
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              Ποιοι Είμαστε
            </Link>
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
              Τα Έργα μας
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Επικοινωνία
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-xs border-t border-gray-800 pt-4">
            © {currentYear} adinfinity. Με επιφύλαξη παντός δικαιώματος.
          </div>
        </div>
      </div>
    </footer>
  )
}
