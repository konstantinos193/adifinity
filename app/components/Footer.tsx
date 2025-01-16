import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#07141C] py-12 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Image src="/logo.png" alt="adinfinity logo" width={220} height={220} className="mb-4" />
            <p className="opacity-80 text-center">Σας ευχαριστούμε που μας εμπιστεύεστε για την ανάπτυξη της επιχείρησής σας.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Γρήγορη Πλοήγηση</h3>
            <ul className="space-y-2">
              {['Αρχική', 'Υπηρεσίες', 'Ποιοι Είμαστε', 'Επικοινωνία'].map((item) => (
                <li key={item}>
                  <Link href={`#${item.toLowerCase()}`} className="hover:text-[#01FFFF] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Ακολουθήστε μας</h3>
            <p className="opacity-80 mb-4">Ακολουθήστε μας στα social media για περισσότερα νέα και ιδέες.</p>
            <div className="flex space-x-4">
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <a key={index} href="#" className="text-[#01FFFF] hover:text-white transition-colors">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="opacity-80">© 2025 adinfinity.gr. Όλα τα δικαιώματα διατηρούνται.</p>
        </div>
      </div>
    </footer>
  )
}

