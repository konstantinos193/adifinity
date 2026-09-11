import type { ContentPage } from '../types'

export const page: ContentPage = {
  path: '/led-neon',
  kind: 'service',
  seoTitle: 'Φωτεινές Επιγραφές LED & Neon Άρτα | Από {price:signageLed}, με Τοποθέτηση',
  seoDescription:
    'Φωτεινές επιγραφές στην Άρτα και την Ήπειρο: LED από {price:signageLed}, neon από {price:signageNeon}, τοποθέτηση δωρεάν πάνω από {price:signageInstallIncludedFrom}. Μέτρηση στον χώρο, σε 5-7 εργάσιμες.',
  badge: { el: 'Επιγραφές', en: 'Signage' },
  h1: { el: 'Φωτεινές επιγραφές LED & neon', en: 'LED & neon lit signs' },
  summary: {
    el: 'Η επιγραφή που φαίνεται και το βράδυ. Κατασκευή στο εργαστήριό μας, τοποθέτηση από το συνεργείο μας, σε Άρτα και Ήπειρο.',
    en: 'The sign that shows at night too. Built in our workshop, installed by our crew, in Arta and Epirus.',
  },
  intro: [
    {
      el: 'Κατασκευάζουμε και τοποθετούμε φωτεινές επιγραφές LED από {price:signageLed} και neon από {price:signageNeon}, με την τοποθέτηση να περιλαμβάνεται για επιγραφές άνω των {price:signageInstallIncludedFrom}. Ερχόμαστε και μετράμε στον χώρο σας, σας δείχνουμε πρόταση πάνω στη φωτογραφία της πρόσοψης, και παραδίδουμε σε 5-7 εργάσιμες. Συντήρηση και επισκευή από το ίδιο εργαστήριο, όταν χρειαστεί.',
      en: 'We fabricate and install LED lit signs from {price:signageLed} and neon from {price:signageNeon}, with installation included for signs over {price:signageInstallIncludedFrom}. We come and measure on site, show you a proposal on a photo of your frontage, and deliver in 5-7 working days. Maintenance and repair from the same workshop, when needed.',
    },
  ],
  sections: [
    {
      heading: { el: 'LED ή neon: ποιο ταιριάζει στην επιχείρησή σας', en: 'LED or neon: which fits your business' },
      table: {
        head: [
          { el: '', en: '' },
          { el: 'LED', en: 'LED' },
          { el: 'Neon', en: 'Neon' },
        ],
        rows: [
          [
            { el: 'Από', en: 'From' },
            { el: '{price:signageLed}', en: '{price:signageLed}' },
            { el: '{price:signageNeon}', en: '{price:signageNeon}' },
          ],
          [
            { el: 'Κατανάλωση', en: 'Consumption' },
            { el: 'Χαμηλή', en: 'Low' },
            { el: 'Υψηλότερη', en: 'Higher' },
          ],
          [
            { el: 'Εμφάνιση', en: 'Look' },
            { el: 'Ομοιόμορφος, καθαρός φωτισμός. Γράμματα με εσωτερικό ή περιμετρικό φως', en: 'Even, clean light. Letters lit from inside or around the edge' },
            { el: 'Η χαρακτηριστική λάμψη του γυάλινου σωλήνα', en: 'The characteristic glow of the glass tube' },
          ],
          [
            { el: 'Πού ταιριάζει', en: 'Where it fits' },
            { el: 'Καταστήματα, ιατρεία, γραφεία, φαρμακεία, καταλύματα', en: 'Shops, clinics, offices, pharmacies, accommodation' },
            { el: 'Καφέ, μπαρ, εστιατόρια, χώροι όπου η επιγραφή είναι μέρος της ατμόσφαιρας', en: 'Cafés, bars, restaurants, places where the sign is part of the atmosphere' },
          ],
          [
            { el: 'Συντήρηση', en: 'Maintenance' },
            { el: 'Ελάχιστη', en: 'Minimal' },
            { el: 'Λίγο περισσότερη προσοχή, επισκευή σωλήνα αν σπάσει', en: 'A little more care, tube repair if it breaks' },
          ],
        ],
      },
      paragraphs: [
        {
          el: 'Αν δεν είστε σίγουροι, η προεπιλογή είναι LED. Το neon το επιλέγουν όσοι ξέρουν ότι το θέλουν για την αίσθησή του.',
          en: 'If you are not sure, the default is LED. Neon is chosen by those who know they want it for the feel.',
        },
      ],
    },
    {
      heading: { el: 'Τι περιλαμβάνει', en: 'What is included' },
      bullets: [
        { el: 'Μέτρηση στον χώρο και φωτογραφίες της πρόσοψης, χωρίς χρέωση σε Άρτα και Ήπειρο', en: 'On-site measurement and photos of the frontage, free of charge in Arta and Epirus' },
        { el: 'Πρόταση πάνω στη φωτογραφία, με υλικά, διαστάσεις και γραπτή προσφορά', en: 'A proposal on the photo, with materials, dimensions and a written quote' },
        { el: 'Κατασκευή στο εργαστήριό μας: γράμματα από ακρυλικό ή αλουμίνιο, φωτισμός LED ή σωλήνας neon, τροφοδοτικό', en: 'Fabrication in our workshop: acrylic or aluminium letters, LED lighting or neon tube, power supply' },
        { el: 'Τοποθέτηση από το συνεργείο μας, με ηλεκτρολογική σύνδεση, περιλαμβάνεται για επιγραφές άνω των {price:signageInstallIncludedFrom}', en: 'Installation by our crew, with electrical connection, included for signs over {price:signageInstallIncludedFrom}' },
        { el: 'Τα σχέδια και τις διαστάσεις που θα σας ζητήσει ο δήμος για τη δήλωση της επιγραφής', en: 'The drawings and dimensions the municipality will ask for when you register the sign' },
        { el: 'Συντήρηση και επισκευή από το ίδιο εργαστήριο', en: 'Maintenance and repair from the same workshop' },
      ],
    },
    {
      heading: { el: 'Πώς γίνεται, βήμα-βήμα', en: 'How it happens, step by step' },
      bullets: [
        { el: 'Μας στέλνετε φωτογραφία της πρόσοψης και το λογότυπο, ή περνάμε εμείς να μετρήσουμε', en: 'You send us a photo of the frontage and the logo, or we come by to measure' },
        { el: 'Λαμβάνετε πρόταση με σχέδιο πάνω στη φωτογραφία και προσφορά, συνήθως την επόμενη μέρα', en: 'You receive a proposal with a mock-up on the photo and a quote, usually the next day' },
        { el: 'Εγκρίνετε, και ξεκινά η κατασκευή στο εργαστήριο, 5-7 εργάσιμες', en: 'You approve, and fabrication starts in the workshop, 5-7 working days' },
        { el: 'Τοποθέτηση σε ημερομηνία που συμφωνούμε, συνήθως μέσα σε λίγες ώρες', en: 'Installation on an agreed date, usually within a few hours' },
      ],
      paragraphs: [
        {
          el: 'Για εγκαίνια με ημερομηνία, υπάρχει express κατασκευή σε 2-3 εργάσιμες με μικρή επιβάρυνση. Πείτε το από την αρχή.',
          en: 'For an opening with a fixed date, there is express fabrication in 2-3 working days at a small premium. Say so at the start.',
        },
      ],
    },
    {
      heading: { el: 'Το λογότυπο στην επιγραφή', en: 'The logo on the sign' },
      paragraphs: [
        {
          el: 'Μια φωτεινή επιγραφή δείχνει κάθε αδυναμία του λογοτύπου: πολύ λεπτές γραμμές δεν φωτίζονται, πολύ μικρά γράμματα δεν κόβονται. Αν το λογότυπό σας υπάρχει μόνο ως εικόνα, το ξανασχεδιάζουμε σε διανυσματική μορφή πριν την κατασκευή. Αν δεν έχετε λογότυπο, ο σχεδιασμός του ξεκινά από {price:logo} και γίνεται από το ίδιο γραφείο, με την επιγραφή στο μυαλό μας.',
          en: 'A lit sign exposes every weakness in a logo: very thin lines do not light up, very small letters cannot be cut. If your logo only exists as an image, we redraw it as a vector before fabrication. If you have no logo, its design starts from {price:logo} and is done by the same office, with the sign in mind.',
        },
      ],
      link: { path: '/sxediasmos-logotypou', label: { el: 'Σχεδιασμός λογοτύπου', en: 'Logo design' } },
    },
  ],
  faq: [
    {
      q: { el: 'Πόσο κοστίζει μια φωτεινή επιγραφή;', en: 'How much does a lit sign cost?' },
      a: {
        el: 'LED από {price:signageLed}, neon από {price:signageNeon}. Η τελική τιμή εξαρτάται από το μέγεθος, τα γράμματα και το ύψος τοποθέτησης. Με μια φωτογραφία και διαστάσεις σας δίνουμε εκτίμηση την ίδια μέρα.',
        en: 'LED from {price:signageLed}, neon from {price:signageNeon}. The final price depends on size, lettering and mounting height. With a photo and dimensions we give an estimate the same day.',
      },
    },
    {
      q: { el: 'Περιλαμβάνεται η τοποθέτηση;', en: 'Is installation included?' },
      a: {
        el: 'Για επιγραφές άνω των {price:signageInstallIncludedFrom}, ναι, σε όλη την Ήπειρο, μαζί με την ηλεκτρολογική σύνδεση. Για μικρότερες χρεώνεται ξεχωριστά και το γράφουμε στην προσφορά.',
        en: 'For signs over {price:signageInstallIncludedFrom}, yes, across Epirus, including the electrical connection. For smaller ones it is charged separately and stated in the quote.',
      },
    },
    {
      q: { el: 'Χρειάζεται άδεια;', en: 'Is a permit needed?' },
      a: {
        el: 'Η επιγραφή δηλώνεται στον δήμο και μπορεί να υπόκειται σε τέλος ανάλογα με το μέγεθος και τον φωτισμό. Σας δίνουμε τα σχέδια και τις διαστάσεις που θα ζητηθούν και σας λέμε τι ισχύει στην Άρτα.',
        en: 'The sign is declared to the municipality and may be subject to a fee depending on size and lighting. We give you the drawings and dimensions that will be requested and tell you what applies in Arta.',
      },
    },
    {
      q: { el: 'Τι γίνεται αν χαλάσει;', en: 'What if it breaks?' },
      a: {
        el: 'Επισκευή από το ίδιο εργαστήριο που την κατασκεύασε: αλλαγή τροφοδοτικού, LED ή σωλήνα neon. Μας καλείτε στο 2681 303007 και κανονίζουμε επίσκεψη.',
        en: 'Repair by the same workshop that built it: replacing the power supply, LEDs or neon tube. Call us on 2681 303007 and we arrange a visit.',
      },
    },
  ],
  priceFrom: 'signageLed',
  priceLabel: { el: 'Επιγραφή LED', en: 'LED sign' },
  priceNote: { el: 'Neon από {price:signageNeon}. Τοποθέτηση περιλαμβάνεται πάνω από {price:signageInstallIncludedFrom}. 5-7 εργάσιμες.', en: 'Neon from {price:signageNeon}. Installation included above {price:signageInstallIncludedFrom}. 5-7 working days.' },
  related: [
    { path: '/epigrafes-arta', label: { el: 'Επιγραφές καταστημάτων Άρτα', en: 'Shop signage Arta' }, description: { el: 'Ακρυλικές, αλουμινίου, σήμανση χώρων, γραφικά οχημάτων.', en: 'Acrylic, aluminium, wayfinding, vehicle graphics.' } },
    { path: '/guides/poso-kostizei-epigrafi', label: { el: 'Πόσο κοστίζει μια επιγραφή', en: 'How much a sign costs' }, description: { el: 'Ο οδηγός: τι καθορίζει την τιμή, τι να μετρήσετε.', en: 'The guide: what sets the price, what to measure.' } },
    { path: '/sxediasmos-logotypou', label: { el: 'Σχεδιασμός λογοτύπου', en: 'Logo design' }, description: { el: 'Το λογότυπο που θα φωτίζεται.', en: 'The logo that will light up.' } },
    { path: '/banners-roll-up', label: { el: 'Banner & roll-up', en: 'Banners & roll-ups' }, description: { el: 'Για προσωρινή προβολή, από {price:bannerPerSqm}/τμ².', en: 'For temporary display, from {price:bannerPerSqm}/m².' } },
  ],
  projectsRoute: '/epigrafes-arta',
  breadcrumb: [
    { name: 'Υπηρεσίες', path: '/services' },
    { name: 'Επιγραφές Άρτα', path: '/epigrafes-arta' },
    { name: 'Φωτεινές επιγραφές LED & neon', path: '/led-neon' },
  ],
  service: {
    name: 'Φωτεινές Επιγραφές LED & Neon',
    description: 'Κατασκευή και τοποθέτηση φωτεινών επιγραφών LED και neon στην Άρτα και την Ήπειρο, με μέτρηση στον χώρο, πρόταση πάνω στη φωτογραφία και συντήρηση. LED από {price:signageLed}, neon από {price:signageNeon}.',
    serviceType: ['LED Signs', 'Neon Signs', 'Illuminated Signage', 'Sign Installation'],
  },
}
