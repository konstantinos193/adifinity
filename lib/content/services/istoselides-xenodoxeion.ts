import type { ContentPage } from '../types'

export const page: ContentPage = {
  path: '/istoselides-xenodoxeion',
  kind: 'vertical',
  seoTitle: 'Ιστοσελίδες για Ξενοδοχεία & Καταλύματα | Απευθείας Κρατήσεις',
  seoDescription:
    'Ιστοσελίδες για ξενοδοχεία και καταλύματα: σελίδα ανά δωμάτιο, απευθείας κρατήσεις με πληρωμή, γλώσσες, συγχρονισμός Booking.com, τοπικό SEO. Δύο online σε Άρτα και Πρέβεζα.',
  badge: { el: 'Κλάδος: Φιλοξενία', en: 'Sector: Hospitality' },
  h1: { el: 'Ιστοσελίδες για ξενοδοχεία και καταλύματα', en: 'Websites for hotels and accommodation' },
  summary: {
    el: 'Μια ιστοσελίδα καταλύματος έχει μία δουλειά: να μετατρέψει τον επισκέπτη που σας βρήκε σε κράτηση χωρίς προμήθεια.',
    en: 'An accommodation website has one job: to turn the visitor who found you into a booking without commission.',
  },
  intro: [
    {
      el: 'Χτίζουμε ιστοσελίδες για ξενοδοχεία, ενοικιαζόμενα δωμάτια και διαμερίσματα διακοπών στην Ήπειρο και σε όλη την Ελλάδα, με ξεχωριστή σελίδα για κάθε δωμάτιο, φωτογραφικό gallery, σελίδες τοποθεσίας και παροχών, σύστημα απευθείας κρατήσεων με online πληρωμή, περιεχόμενο σε όσες γλώσσες μιλούν οι επισκέπτες σας, συγχρονισμό διαθεσιμότητας με Booking.com, και τοπικό SEO ώστε να σας βρίσκει όποιος ψάχνει διαμονή στην περιοχή σας.',
      en: 'We build websites for hotels, rooms to let and holiday apartments in Epirus and across Greece, with a separate page for every room, a photo gallery, location and amenity pages, a direct-booking system with online payment, content in the languages your guests speak, availability sync with Booking.com, and local SEO so anyone searching for a stay in your area finds you.',
    },
    {
      el: 'Δύο τέτοια καταλύματα λειτουργούν τώρα με ιστοσελίδες μας: το Αστεριας στην Κορωνησία Άρτας και τα L’Incanto Apartments στα Χρονέικα Πρέβεζας.',
      en: 'Two such properties are running on our websites right now: Asterias in Koronisia, Arta, and L’Incanto Apartments in Chroneika, Preveza.',
    },
  ],
  sections: [
    {
      heading: { el: 'Πώς δομείται μια ιστοσελίδα καταλύματος', en: 'How an accommodation website is structured' },
      bullets: [
        { el: 'Αρχική: τι είναι το κατάλυμα, πού είναι, με μία φωτογραφία που λέει την αλήθεια και κουμπί κράτησης πάνω-πάνω', en: 'Home: what the property is, where it is, one honest photo and a booking button at the top' },
        { el: 'Μία σελίδα ανά δωμάτιο ή διαμέρισμα, με gallery, παροχές, χωρητικότητα και τιμή ανά εποχή. Έτσι σας βρίσκουν και για «διαμέρισμα 4 ατόμων Πρέβεζα», όχι μόνο για το όνομά σας', en: 'One page per room or apartment, with gallery, amenities, capacity and price per season. That way you are found for "4-person apartment Preveza", not only for your name' },
        { el: 'Τοποθεσία: παραλίες, αποστάσεις, τι υπάρχει γύρω. Ο επισκέπτης αποφασίζει με βάση την περιοχή όσο και το δωμάτιο', en: 'Location: beaches, distances, what is nearby. Guests decide on the area as much as on the room' },
        { el: 'Κρατήσεις: διαθεσιμότητα, τιμές, πληρωμή ή αίτημα, επιβεβαίωση με email', en: 'Bookings: availability, prices, payment or request, email confirmation' },
        { el: 'Κριτικές από Booking.com ή Google, συγχρονισμένες αυτόματα, γιατί οι δικές σας λέξεις πείθουν λιγότερο από τις λέξεις των προηγούμενων επισκεπτών', en: 'Reviews from Booking.com or Google, synced automatically, because your own words convince less than the words of previous guests' },
        { el: 'Γλώσσες: ελληνικά, αγγλικά και όποια άλλη μιλούν οι επισκέπτες σας. Στα L’Incanto προστέθηκαν ιταλικά, στο Αστεριας γερμανικά', en: 'Languages: Greek, English and whatever else your guests speak. L’Incanto added Italian, Asterias German' },
      ],
    },
    {
      heading: { el: 'Δύο καταλύματα, δύο διαφορετικά προβλήματα', en: 'Two properties, two different problems' },
      paragraphs: [
        {
          el: 'Το Αστεριας, οικογενειακό κατάλυμα με 7 παραδοσιακά διαμερίσματα στην Κορωνησία, χρειαζόταν να δέχεται κρατήσεις με online πληρωμή και να διαχειρίζεται εποχιακές τιμές μόνο του. Χτίσαμε σύστημα κρατήσεων με Stripe, έξι εποχιακές περιόδους τιμών που αλλάζουν από το admin, συγχρονισμό των 22 κριτικών του από το Booking.com και περιεχόμενο σε τρεις γλώσσες. Η πρώτη πληρωμένη απευθείας κράτηση ήρθε μέσα από το site τον Ιούλιο του 2026.',
          en: 'Asterias, a family-run property with 7 traditional apartments in Koronisia, needed to take bookings with online payment and manage seasonal prices on its own. We built a booking system with Stripe, six seasonal price periods editable from the admin, sync of its 22 Booking.com reviews, and content in three languages. The first paid direct booking came through the site in July 2026.',
        },
        {
          el: 'Τα L’Incanto Apartments, δέκα πολυτελή παραθαλάσσια διαμερίσματα στην Πρέβεζα, ήθελαν να μειώσουν την εξάρτηση από πλατφόρμες και να πείσουν τον επισκέπτη να κλείσει απευθείας. Σχεδιάσαμε ξεχωριστή σελίδα για καθένα από τα δέκα διαμερίσματα, σελίδες παραλιών και παροχών, φόρμα απευθείας κράτησης, QR code για το ίδιο το κατάλυμα, τρεις γλώσσες με τοπικό SEO για την Πρέβεζα και δομημένα δεδομένα καταλύματος.',
          en: 'L’Incanto Apartments, ten luxury seafront apartments in Preveza, wanted to reduce dependence on platforms and persuade visitors to book directly. We designed a separate page for each of the ten apartments, beach and amenity pages, a direct-booking form, a QR code for the property itself, three languages with local SEO for Preveza and accommodation structured data.',
        },
      ],
      link: { path: '/projects/lincanto-apartments', label: { el: 'Δείτε τη μελέτη περίπτωσης L’Incanto', en: 'See the L’Incanto case study' } },
    },
    {
      heading: { el: 'Τοπικό SEO για καταλύματα', en: 'Local SEO for accommodation' },
      paragraphs: [
        {
          el: 'Ο επισκέπτης δεν ψάχνει το όνομά σας. Ψάχνει «διαμονή Κορωνησία», «διαμερίσματα Πρέβεζα κοντά στη θάλασσα», «ξενοδοχείο Άρτα». Για να εμφανίζεστε εκεί, η ιστοσελίδα χρειάζεται σελίδες που απαντούν σε αυτές τις αναζητήσεις, δομημένα δεδομένα τύπου καταλύματος που διαβάζει η Google, σύνδεση με το Google Business Profile, και ταχύτητα σε κινητό, από όπου γίνονται οι περισσότερες αναζητήσεις διακοπών.',
          en: 'Guests do not search for your name. They search for "stay Koronisia", "apartments Preveza near the sea", "hotel Arta". To appear there the website needs pages that answer those searches, accommodation structured data Google can read, a link to your Google Business Profile, and speed on mobile, where most holiday searches happen.',
        },
        {
          el: 'Όλα αυτά είναι μέρος της κατασκευής, όχι επιπλέον πακέτο.',
          en: 'All of that is part of the build, not an extra package.',
        },
      ],
    },
    {
      heading: { el: 'Κόστος', en: 'Cost' },
      paragraphs: [
        {
          el: 'Το κόστος εξαρτάται από τρία πράγματα: πόσα δωμάτια ή διαμερίσματα έχουν δική τους σελίδα, πόσες γλώσσες, και αν θέλετε φόρμα αιτήματος κράτησης ή πλήρες σύστημα με online πληρωμές, εποχιακές τιμές και συγχρονισμό με πλατφόρμες. Με αυτά τα τρία σας στέλνουμε γραπτή προσφορά μέσα σε 24 ώρες. Ο χρόνος κατασκευής είναι 6-10 εβδομάδες. Η ετήσια συντήρηση, με ενημερώσεις ασφαλείας και μικροαλλαγές πριν τη σεζόν, είναι ξεχωριστό μηνιαίο πακέτο.',
          en: 'The cost depends on three things: how many rooms or apartments get their own page, how many languages, and whether you want a booking-request form or a full system with online payments, seasonal pricing and platform sync. With those three we send a written quote within 24 hours. Build time is 6-10 weeks. Annual maintenance, with security updates and small changes before the season, is a separate monthly package.',
        },
        {
          el: 'Το σημείο σύγκρισης: η προμήθεια που πληρώνετε σε πλατφόρμες σε μία σεζόν. Αν είναι μερικές χιλιάδες ευρώ, η ιστοσελίδα που φέρνει ένα μέρος αυτών των κρατήσεων απευθείας αποσβένεται μέσα στην πρώτη ή τη δεύτερη σεζόν.',
          en: 'The comparison point: the commission you pay platforms in one season. If it is a few thousand euros, a website that brings part of those bookings directly pays for itself within the first or second season.',
        },
      ],
      link: { path: '/website-development/booking-systems', label: { el: 'Πώς δουλεύει το σύστημα κρατήσεων', en: 'How the booking system works' } },
    },
  ],
  faq: [
    {
      q: { el: 'Έχω ήδη προφίλ στο Booking.com. Γιατί χρειάζομαι ιστοσελίδα;', en: 'I already have a Booking.com listing. Why do I need a website?' },
      a: {
        el: 'Για τον επισκέπτη που σας ξέρει ήδη: έμεινε πέρσι, σας βρήκε από σύσταση ή από το Instagram. Αν κλείσει μέσω πλατφόρμας πληρώνετε προμήθεια για μια κράτηση που ήταν δική σας. Η ιστοσελίδα παίρνει αυτές τις κρατήσεις και συγχρονίζει τη διαθεσιμότητα με την πλατφόρμα.',
        en: 'For the guest who already knows you: stayed last year, found you by recommendation or on Instagram. If they book through a platform you pay commission on a booking that was yours. The website takes those bookings and syncs availability with the platform.',
      },
    },
    {
      q: { el: 'Σε πόσες γλώσσες;', en: 'In how many languages?' },
      a: {
        el: 'Όσες χρειάζεστε. Συνήθως ελληνικά και αγγλικά, και μία ακόμη ανάλογα με το κοινό: γερμανικά, ιταλικά, γαλλικά. Κάθε γλώσσα έχει δικές της διευθύνσεις σελίδων, ώστε να εμφανίζεται σωστά στη Google της κάθε χώρας.',
        en: 'As many as you need. Usually Greek and English, plus one more depending on your guests: German, Italian, French. Each language has its own page addresses, so it appears correctly on each country’s Google.',
      },
    },
    {
      q: { el: 'Μπορώ να αλλάζω τιμές και διαθεσιμότητα μόνος μου;', en: 'Can I change prices and availability myself?' },
      a: {
        el: 'Ναι, από τον πίνακα διαχείρισης: εποχιακές τιμές, αποκλεισμένες ημερομηνίες, ελάχιστη διαμονή, φωτογραφίες και κείμενα. Το κατάλυμα Αστεριας διαχειρίζεται έξι εποχιακές περιόδους τιμών χωρίς να μας καλεί.',
        en: 'Yes, from the admin panel: seasonal prices, blocked dates, minimum stay, photos and texts. The Asterias property manages six seasonal price periods without calling us.',
      },
    },
    {
      q: { el: 'Πόσο κοστίζει;', en: 'How much does it cost?' },
      a: {
        el: 'Κατόπιν προσφοράς. Πείτε μας τον αριθμό των δωματίων, τις γλώσσες και αν θέλετε αίτημα κράτησης ή πλήρες σύστημα με online πληρωμές, και έχετε γραπτή προσφορά μέσα σε 24 ώρες, χωρίς δέσμευση.',
        en: 'On quotation. Tell us the number of rooms, the languages and whether you want booking requests or a full system with online payments, and you have a written quote within 24 hours, no obligation.',
      },
    },
  ],
  quoteNote: { el: 'Εξαρτάται από δωμάτια, γλώσσες και αν θέλετε αίτημα κράτησης ή online πληρωμές. 6-10 εβδομάδες.', en: 'Depends on rooms, languages and whether you want booking requests or online payments. 6-10 weeks.' },
  related: [
    { path: '/website-development/booking-systems', label: { el: 'Συστήματα κρατήσεων', en: 'Booking systems' }, description: { el: 'Διαθεσιμότητα, πληρωμές, συγχρονισμός πλατφορμών.', en: 'Availability, payments, platform sync.' } },
    { path: '/website-development', label: { el: 'Κατασκευή ιστοσελίδων', en: 'Website development' }, description: { el: 'Όλες οι υπηρεσίες web, τα πακέτα και τα έργα.', en: 'All web services, packages and projects.' } },
    { path: '/branding', label: { el: 'Branding για καταλύματα', en: 'Branding for accommodation' }, description: { el: 'Λογότυπο, επιγραφή και έντυπα για το κατάλυμα.', en: 'Logo, sign and print for the property.' } },
    { path: '/guides/poso-kostizei-istoselida', label: { el: 'Πόσο κοστίζει μια ιστοσελίδα', en: 'How much a website costs' }, description: { el: 'Τι καθορίζει το κόστος και τι έρχεται μετά.', en: 'What sets the cost and what comes afterwards.' } },
  ],
  projectSlugs: ['asterias-koronisia', 'lincanto-apartments', 'boheme-beach-bar', 'maxim-cafe-bar'],
  breadcrumb: [
    { name: 'Υπηρεσίες', path: '/services' },
    { name: 'Κατασκευή Ιστοσελίδων', path: '/website-development' },
    { name: 'Ιστοσελίδες για καταλύματα', path: '/istoselides-xenodoxeion' },
  ],
  service: {
    name: 'Ιστοσελίδες για Ξενοδοχεία & Καταλύματα',
    description: 'Κατασκευή ιστοσελίδων για ξενοδοχεία και καταλύματα με σελίδα ανά δωμάτιο, απευθείας κρατήσεις, πολλές γλώσσες, συγχρονισμό Booking.com και τοπικό SEO. Κατόπιν προσφοράς.',
    serviceType: ['Hotel Website Development', 'Accommodation Websites', 'Booking System Development', 'Local SEO'],
  },
}
