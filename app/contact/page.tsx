'use client';

import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-5xl text-center mb-6 text-[#01FFFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ΕΠΙΚΟΙΝΩΝΗΣΤΕ ΜΑΖΙ ΜΑΣ
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-center mb-8 opacity-80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ενδιαφέρεστε να μάθετε πώς μπορούμε να σας υποστηρίξουμε; Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε σύντομα!
        </motion.p>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div id="contact-form">
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-[#0A1A24] p-4 rounded-lg mb-6">
                <h2 className="text-lg font-bold mb-4 text-[#01FFFF]">Στοιχεία Επικοινωνίας</h2>
                <ul className="space-y-4 text-sm">
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
              
              <div className="bg-[#0A1A24] p-6 rounded-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3132.374123456789!2d20.9820707!3d39.161524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135c1b5d07d43ef5%3A0xabf7d7e07637ddbe!2sΔιαφημιστική+adinfinity!5e0!3m2!1sen!2sgr!4v1691234567890!5m2!1sen!2sgr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
