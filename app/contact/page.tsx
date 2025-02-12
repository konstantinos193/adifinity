'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

// Dynamically import the map component
const Map = dynamic(() => import('../components/Map'), { ssr: false });

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl text-center mb-6 text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ
        </motion.h1>
        
        <motion.p 
          className="text-base sm:text-lg md:text-xl text-center mb-8 opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ενδιαφέρεστε να μάθετε πώς μπορούμε να σας υποστηρίξουμε; Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε σύντομα!
        </motion.p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-12">
            <div id="contact-form" className="w-full">
              <ContactForm />
            </div>
            
            <div className="w-full">
              <div className="bg-[#0A1A24] p-4 rounded-lg mb-6">
                <h2 className="text-lg sm:text-xl font-bold mb-4 text-[#01FFFF]">Στοιχεία Επικοινωνίας</h2>
                <ul className="space-y-4 text-sm sm:text-base">
                  <li className="flex items-center">
                    <MapPin className="text-[#01FFFF] mr-2" />
                    <span>Βασ. Πύρρου 30, Άρτα 471 32</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="text-[#01FFFF] mr-2" />
                    <span>+30 2681303007</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="text-[#01FFFF] mr-2" />
                    <span>adenfinity@gmail.com</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#0A1A24] p-6 rounded-lg h-64 sm:h-80">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
