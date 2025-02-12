import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#07141C] py-12">
      <div className="container mx-auto px-4">
        {/* Desktop Footer */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Image src="/logo.png" alt="adinfinity logo" width={140} height={140} className="mb-2" />
            <p className="opacity-80 text-center text-sm">Σας ευχαριστούμε που μας εμπιστεύεστε για την ανάπτυξη της επιχείρησής σας.</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4">Γρήγορη Πλοήγηση</h3>
            <ul className="space-y-2 text-center">
              <li>
                <Link href="/" className="hover:text-[#01FFFF] transition-colors text-sm">
                  Αρχική
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#01FFFF] transition-colors text-sm">
                  Υπηρεσίες
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#01FFFF] transition-colors text-sm">
                  Ποιοι Είμαστε
                </Link>
              </li>
              <li>
                <Link href="/contact#contact-form" className="hover:text-[#01FFFF] transition-colors text-sm">
                  Επικοινωνία
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4">Ακολουθήστε μας</h3>
            <p className="opacity-80 mb-4 text-center">Ακολουθήστε μας στα social media για περισσότερα νέα και ιδέες.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/1.adinfinity" target="_blank" rel="noopener noreferrer" className="text-[#01FFFF] hover:text-white transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="https://www.instagram.com/adinfinityads/" target="_blank" rel="noopener noreferrer" className="text-[#01FFFF] hover:text-white transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/adinfinity-ads-bb0a398a/?originalSubdomain=gr" target="_blank" rel="noopener noreferrer" className="text-[#01FFFF] hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center hidden md:block">
          <p className="opacity-80 text-xs">© 2025 adinfinity.gr. All rights reserved.</p>
        </div>

        {/* Mobile Footer */}
        <div className="flex md:hidden flex-col items-center text-center gap-4 mt-8">
          <div className="flex justify-between w-full px-4">
            <Image src="/logo.png" alt="adinfinity logo" width={80} height={80} />
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/1.adinfinity" target="_blank" rel="noopener noreferrer" className="text-[#01FFFF] hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="https://www.instagram.com/adinfinityads/" target="_blank" rel="noopener noreferrer" className="text-[#01FFFF] hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/in/adinfinity-ads-bb0a398a/?originalSubdomain=gr" target="_blank" rel="noopener noreferrer" className="text-[#01FFFF] hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          <p className="opacity-80 text-xs mt-4">© 2025 adinfinity.gr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
