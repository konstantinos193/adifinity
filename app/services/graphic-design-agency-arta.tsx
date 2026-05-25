import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Γραφιστικό Γραφείο Άρτα | #1 Graphic Design Agency | adinfinity',
  description: 'Κορυφαίο γραφιστικό γραφείο στην Άρτα. Επαγγελματικό graphic design, branding, logo design. 10+ χρόνια εμπειρίας. Αποτελέσματα που μιλάνε!',
  keywords: [
    'γραφιστικο γραφειο',
    'γραφικά γραφεία',
    'graphic design agency',
    'design agency',
    'creative agency',
    'γραφιστική εταιρεία Άρτα',
    'graphic design Άρτα',
    'design studio Άρτα',
    'creative studio',
    'visual design agency',
  ],
}

export default function GraphicDesignAgencyArta() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#07141C] to-[#0A1A24]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#01FFFF] to-[#01A9FF]">
          Γραφιστικό Γραφείο Άρτα
        </h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-12 text-gray-300">
          Το adinfinity είναι το κορυφαίο γραφιστικό γραφείο στην Άρτα, με πάνω από 10 χρόνια εμπειρίας στο graphic design και branding. 
          Δημιουργούμε οπτικές ταυτότητες που ξεχωρίζουν και αποφέρουν πραγματικά αποτελέσματα.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#0A1A24] p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-[#01FFFF]">Γιατί να επιλέξετε το γραφιστικό μας γραφείο;</h2>
            <ul className="space-y-3 text-gray-300">
              <li>✓ 10+ χρόνια εμπειρίας στο graphic design</li>
              <li>✓ 100+ επιτυχημένα projects</li>
              <li>✓ Τοπική γνώση της αγοράς της Άρτας</li>
              <li>✓ Πρωτότυπα designs που δεν αντιγράφονται</li>
              <li>✓ Γρήγορη παράδοση και υποστήριξη</li>
            </ul>
          </div>
          
          <div className="bg-[#0A1A24] p-8 rounded-xl">
            <h2 className="text-2xl font-bold mb-4 text-[#01FFFF]">Υπηρεσίες Graphic Design</h2>
            <ul className="space-y-3 text-gray-300">
              <li>✓ Logo Design & Branding</li>
              <li>✓ Εταιρική Ταυτότητα</li>
              <li>✓ Διαφημιστικά Έντυπα</li>
              <li>✓ Social Media Graphics</li>
              <li>✓ Packaging Design</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-[#01FFFF] to-[#01A9FF] text-[#07141C] font-bold py-3 px-8 rounded-full text-lg shadow-lg shadow-cyan-500/20 inline-block"
          >
            Μιλήστε με έναν Design Expert
          </a>
        </div>
      </div>
    </div>
  )
}
