import type { ContentPage } from '../types'

export const page: ContentPage = {
  path: '/website-development/booking-systems',
  kind: 'service',
  seoTitle: 'Συστήματα Κρατήσεων | Απευθείας Κρατήσεις Χωρίς Προμήθειες',
  seoDescription:
    'Συστήματα online κρατήσεων για καταλύματα, ιατρεία και ενοικιάσεις: διαθεσιμότητα, εποχιακές τιμές, πληρωμή Stripe, συγχρονισμός Booking.com. Τέσσερα online, χωρίς προμήθειες.',
  badge: { el: 'Web εφαρμογές', en: 'Web applications' },
  h1: { el: 'Συστήματα κρατήσεων', en: 'Booking systems' },
  summary: {
    el: 'Κρατήσεις και πληρωμές μέσα από τη δική σας ιστοσελίδα, χωρίς προμήθεια πλατφόρμας. Τέσσερα συστήματα που χτίσαμε λειτουργούν σήμερα.',
    en: 'Bookings and payments through your own website, with no platform commission. Four systems we built are running today.',
  },
  intro: [
    {
      el: 'Χτίζουμε συστήματα online κρατήσεων σε React και Next.js για καταλύματα, ιατρεία, ενοικιάσεις ακινήτων και επαγγελματίες με ραντεβού. Ο επισκέπτης βλέπει διαθεσιμότητα, επιλέγει ημερομηνίες, πληρώνει με κάρτα μέσω Stripe, και εσείς διαχειρίζεστε κρατήσεις, τιμές και αποκλεισμένες ημερομηνίες από δικό σας πίνακα διαχείρισης. Κάθε κράτηση που έρχεται έτσι είναι μια κράτηση χωρίς προμήθεια πλατφόρμας.',
      en: 'We build online booking systems in React and Next.js for accommodation, clinics, property rentals and professionals who take appointments. The visitor sees availability, picks dates, pays by card through Stripe, and you manage bookings, prices and blocked dates from your own admin panel. Every booking that arrives this way is a booking without platform commission.',
    },
    {
      el: 'Δεν είναι θεωρία: το Αστεριας στην Κορωνησία, τα L’Incanto Apartments στην Πρέβεζα, η πλατφόρμα ακινήτων SMH Real Estate και το κέντρο φυσιοθεραπείας Physio Elpida δέχονται κρατήσεις ή ραντεβού μέσα από συστήματα που χτίσαμε.',
      en: 'It is not theory: Asterias in Koronisia, L’Incanto Apartments in Preveza, the SMH Real Estate property platform and the Physio Elpida physiotherapy centre take bookings or appointments through systems we built.',
    },
  ],
  sections: [
    {
      heading: { el: 'Τι κάνει ένα σύστημα κρατήσεων', en: 'What a booking system does' },
      bullets: [
        { el: 'Ημερολόγιο διαθεσιμότητας ανά δωμάτιο, διαμέρισμα ή ώρα ραντεβού', en: 'Availability calendar per room, apartment or appointment slot' },
        { el: 'Τιμές ανά εποχή και ανά αριθμό ατόμων, με ελάχιστη διαμονή και προκαταβολή όπου χρειάζεται', en: 'Prices per season and per number of guests, with minimum stay and deposit where needed' },
        { el: 'Online πληρωμή με κάρτα μέσω Stripe, ή αίτημα κράτησης χωρίς πληρωμή αν το προτιμάτε', en: 'Online card payment through Stripe, or a booking request without payment if you prefer' },
        { el: 'Email επιβεβαίωσης σε εσάς και στον πελάτη, με τα στοιχεία της κράτησης', en: 'Confirmation email to you and the customer, with the booking details' },
        { el: 'Πίνακας διαχείρισης: κρατήσεις, αποκλεισμένες ημερομηνίες, τιμές, ρυθμίσεις, χωρίς προγραμματιστή', en: 'Admin panel: bookings, blocked dates, prices, settings, without a developer' },
        { el: 'Συγχρονισμός με Booking.com και άλλες πλατφόρμες μέσω iCal, ώστε να μη γίνει διπλή κράτηση', en: 'Sync with Booking.com and other platforms via iCal, so there is no double booking' },
        { el: 'Λογαριασμοί χρηστών και ιστορικό, όπου το απαιτεί η περίπτωση', en: 'User accounts and history, where the case requires it' },
      ],
    },
    {
      heading: { el: 'Τέσσερα συστήματα που λειτουργούν', en: 'Four systems that are running' },
      table: {
        head: [
          { el: 'Έργο', en: 'Project' },
          { el: 'Τι κάνει', en: 'What it does' },
          { el: 'Χρόνος', en: 'Time' },
        ],
        rows: [
          [
            { el: 'Αστεριας Κορωνησία', en: 'Asterias Koronisia' },
            { el: '7 διαμερίσματα, εποχιακές τιμές, πληρωμή Stripe, συγχρονισμός κριτικών Booking.com, τρεις γλώσσες. Η πρώτη πληρωμένη απευθείας κράτηση ήρθε τον Ιούλιο 2026', en: '7 apartments, seasonal pricing, Stripe payment, Booking.com review sync, three languages. The first paid direct booking came in July 2026' },
            { el: '7 εβδομάδες', en: '7 weeks' },
          ],
          [
            { el: 'L’Incanto Apartments', en: 'L’Incanto Apartments' },
            { el: '10 διαμερίσματα με δική τους σελίδα, φόρμα απευθείας κράτησης, QR στο κατάλυμα, ελληνικά, αγγλικά, ιταλικά', en: '10 apartments with their own page, direct-booking form, QR code at the property, Greek, English, Italian' },
            { el: '8 εβδομάδες', en: '8 weeks' },
          ],
          [
            { el: 'SMH Real Estate', en: 'SMH Real Estate' },
            { el: 'Πλατφόρμα ακινήτων σε Next.js και PostgreSQL: αναζήτηση με φίλτρα, χάρτες, κρατήσεις με πληρωμή Stripe, λογαριασμοί χρηστών, admin σε δύο γλώσσες', en: 'Property platform in Next.js and PostgreSQL: filtered search, maps, bookings with Stripe payment, user accounts, bilingual admin' },
            { el: '3 μήνες', en: '3 months' },
          ],
          [
            { el: 'Physio Elpida', en: 'Physio Elpida' },
            { el: 'Online κράτηση ραντεβού για κέντρο φυσιοθεραπείας, με παρουσίαση υπηρεσιών και εξοπλισμού', en: 'Online appointment booking for a physiotherapy centre, with services and equipment presentation' },
            { el: '3 εβδομάδες', en: '3 weeks' },
          ],
        ],
      },
      link: { path: '/projects/asterias-koronisia', label: { el: 'Δείτε τη μελέτη περίπτωσης Αστεριας', en: 'See the Asterias case study' } },
    },
    {
      heading: { el: 'Γιατί όχι μόνο Booking.com', en: 'Why not just Booking.com' },
      paragraphs: [
        {
          el: 'Οι πλατφόρμες φέρνουν πελάτες που δεν σας ήξεραν, και γι’ αυτό αξίζουν την προμήθειά τους. Το πρόβλημα είναι ο πελάτης που σας ήξερε: έμεινε πέρσι, σας βρήκε από σύσταση, σας είδε στο Instagram. Αν κλείσει μέσω πλατφόρμας, πληρώνετε προμήθεια για μια κράτηση που ήταν ήδη δική σας.',
          en: 'Platforms bring guests who did not know you, and that is why they earn their commission. The problem is the guest who did know you: stayed last year, found you by recommendation, saw you on Instagram. If they book through a platform, you pay commission on a booking that was already yours.',
        },
        {
          el: 'Ένα δικό σας σύστημα κρατήσεων δεν αντικαθιστά τις πλατφόρμες. Παίρνει τις κρατήσεις που σας ανήκουν, και συγχρονίζει τη διαθεσιμότητα με τις πλατφόρμες ώστε να μη γίνει διπλή κράτηση.',
          en: 'Your own booking system does not replace the platforms. It takes the bookings that are yours, and syncs availability with the platforms so there is no double booking.',
        },
      ],
    },
    {
      heading: { el: 'Κόστος και χρόνος', en: 'Cost and time' },
      paragraphs: [
        {
          el: 'Ένα σύστημα κρατήσεων είναι web εφαρμογή και κοστολογείται ανάλογα με τις λειτουργίες. Για να έχετε τάξη μεγέθους: μια ιστοσελίδα καταλύματος με φόρμα αιτήματος κράτησης και admin ξεκινά στο επίπεδο του πακέτου Business, από {price:websiteBusiness}. Με online πληρωμές, εποχιακές τιμές και συγχρονισμό πλατφορμών, πλησιάζει το επίπεδο του E-shop, από {price:eshop}. Ο χρόνος είναι 4-12 εβδομάδες.',
          en: 'A booking system is a web application and is priced by its features. For an order of magnitude: an accommodation website with a booking-request form and admin starts at the Business package level, from {price:websiteBusiness}. With online payments, seasonal pricing and platform sync it approaches the E-shop level, from {price:eshop}. Time is 4-12 weeks.',
        },
        {
          el: 'Η αριθμητική που μετράει: αν το κατάλυμά σας κάνει κρατήσεις αξίας 30.000 ευρώ τον χρόνο μέσω πλατφορμών, κάθε 10% που μεταφέρεται σε απευθείας κρατήσεις είναι 3.000 ευρώ τον χρόνο που μένουν σε εσάς αντί στην πλατφόρμα.',
          en: 'The arithmetic that matters: if your property takes 30,000 euros of bookings a year through platforms, every 10% moved to direct bookings is 3,000 euros a year that stays with you instead of the platform.',
        },
      ],
      link: { path: '/pricing', label: { el: 'Τιμοκατάλογος', en: 'Price list' } },
    },
  ],
  faq: [
    {
      q: { el: 'Πόσο κοστίζει ένα σύστημα κρατήσεων;', en: 'How much does a booking system cost?' },
      a: {
        el: 'Από {price:websiteBusiness} για ιστοσελίδα με αίτημα κράτησης και admin, από {price:eshop} με online πληρωμές, εποχιακές τιμές και συγχρονισμό πλατφορμών. Το ακριβές ποσό βγαίνει αφού καταγράψουμε τις λειτουργίες που χρειάζεστε.',
        en: 'From {price:websiteBusiness} for a website with booking requests and admin, from {price:eshop} with online payments, seasonal pricing and platform sync. The exact figure comes after we list the features you need.',
      },
    },
    {
      q: { el: 'Υπάρχει προμήθεια ανά κράτηση;', en: 'Is there a commission per booking?' },
      a: {
        el: 'Όχι από εμάς. Το μόνο κόστος ανά συναλλαγή είναι η χρέωση της Stripe για την επεξεργασία της κάρτας, που είναι πολύ μικρότερη από την προμήθεια μιας πλατφόρμας κρατήσεων.',
        en: 'Not from us. The only per-transaction cost is Stripe’s card-processing fee, which is far smaller than a booking platform’s commission.',
      },
    },
    {
      q: { el: 'Θα συνεχίσω να δουλεύω με Booking.com;', en: 'Will I keep working with Booking.com?' },
      a: {
        el: 'Ναι, αν θέλετε. Το σύστημα συγχρονίζει τη διαθεσιμότητα μέσω iCal, ώστε μια κράτηση από την πλατφόρμα να κλείνει τις ημερομηνίες στο site σας και αντίστροφα.',
        en: 'Yes, if you want. The system syncs availability via iCal, so a platform booking blocks the dates on your site and vice versa.',
      },
    },
    {
      q: { el: 'Μπορώ να διαχειρίζομαι τις κρατήσεις μόνος μου;', en: 'Can I manage bookings myself?' },
      a: {
        el: 'Ναι. Παραδίδουμε πίνακα διαχείρισης για κρατήσεις, τιμές, αποκλεισμένες ημερομηνίες και ρυθμίσεις, και σας δείχνουμε πώς δουλεύει. Είμαστε στο τηλέφωνο για ό,τι προκύψει.',
        en: 'Yes. We deliver an admin panel for bookings, prices, blocked dates and settings, and show you how it works. We are on the phone for anything that comes up.',
      },
    },
  ],
  priceFrom: 'websiteBusiness',
  priceLabel: { el: 'Ιστοσελίδα με κρατήσεις', en: 'Website with bookings' },
  priceNote: { el: 'Με online πληρωμές και συγχρονισμό πλατφορμών από {price:eshop}. 4-12 εβδομάδες.', en: 'With online payments and platform sync from {price:eshop}. 4-12 weeks.' },
  related: [
    { path: '/istoselides-xenodoxeion', label: { el: 'Ιστοσελίδες για καταλύματα', en: 'Websites for accommodation' }, description: { el: 'Δωμάτια, παραλίες, γλώσσες, κρατήσεις: όλη η δομή.', en: 'Rooms, beaches, languages, bookings: the whole structure.' } },
    { path: '/website-development/web-apps', label: { el: 'Web εφαρμογές & SaaS', en: 'Web applications & SaaS' }, description: { el: 'Πλατφόρμες και εργαλεία σε React και Node.js.', en: 'Platforms and tools in React and Node.js.' } },
    { path: '/website-development/e-commerce', label: { el: 'Κατασκευή e-shop', en: 'E-shop development' }, description: { el: 'Πληρωμές, αποθήκη, παραγγελίες.', en: 'Payments, inventory, orders.' } },
    { path: '/guides/poso-kostizei-istoselida', label: { el: 'Πόσο κοστίζει μια ιστοσελίδα', en: 'How much a website costs' }, description: { el: 'Τα τρία επίπεδα τιμών και τα κόστη μετά.', en: 'The three price levels and the costs afterwards.' } },
  ],
  projectSlugs: ['asterias-koronisia', 'lincanto-apartments', 'smh-real-estate', 'physio-elpida'],
  breadcrumb: [
    { name: 'Υπηρεσίες', path: '/services' },
    { name: 'Κατασκευή Ιστοσελίδων', path: '/website-development' },
    { name: 'Συστήματα κρατήσεων', path: '/website-development/booking-systems' },
  ],
  service: {
    name: 'Συστήματα Online Κρατήσεων',
    description: 'Κατασκευή συστημάτων online κρατήσεων σε React και Next.js για καταλύματα, ιατρεία και ενοικιάσεις, με διαθεσιμότητα, εποχιακές τιμές, πληρωμή Stripe, συγχρονισμό iCal και πίνακα διαχείρισης.',
    serviceType: ['Booking System Development', 'Web Application Development', 'Hotel Booking Engine', 'Appointment Booking'],
  },
}
