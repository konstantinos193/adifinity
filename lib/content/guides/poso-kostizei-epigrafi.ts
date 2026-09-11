import type { ContentPage } from '../types'

export const page: ContentPage = {
  path: '/guides/poso-kostizei-epigrafi',
  kind: 'guide',
  seoTitle: 'Πόσο Κοστίζει μια Επιγραφή Καταστήματος; Τιμές LED, Neon, Ακρυλικό',
  seoDescription:
    'Ακρυλικές επιγραφές από {price:signageAcrylicPerSqm}/τμ², LED από {price:signageLed}, neon από {price:signageNeon}, τοποθέτηση δωρεάν πάνω από {price:signageInstallIncludedFrom}. Τι καθορίζει την τιμή, τι να μετρήσετε και πόσο διαρκεί.',
  badge: { el: 'Οδηγός κόστους', en: 'Cost guide' },
  h1: { el: 'Πόσο κοστίζει μια επιγραφή καταστήματος;', en: 'How much does a shop sign cost?' },
  summary: {
    el: 'Τι καθορίζει την τιμή, πόσο κοστίζει κάθε υλικό, τι να μετρήσετε πριν ζητήσετε προσφορά και τι να ρωτήσετε για την τοποθέτηση.',
    en: 'What sets the price, what each material costs, what to measure before asking for a quote, and what to ask about installation.',
  },
  intro: [
    {
      el: 'Στην adinfinity μια ακρυλική επιγραφή κοστίζει από {price:signageAcrylicPerSqm} το τετραγωνικό μέτρο, μια επιγραφή LED από {price:signageLed} και μια neon από {price:signageNeon}. Για επιγραφές άνω των {price:signageInstallIncludedFrom} η τοποθέτηση περιλαμβάνεται στην τιμή, σε όλη την Ήπειρο.',
      en: 'At adinfinity an acrylic sign costs from {price:signageAcrylicPerSqm} per square metre, an LED sign from {price:signageLed} and a neon sign from {price:signageNeon}. For signs over {price:signageInstallIncludedFrom}, installation is included in the price, across Epirus.',
    },
    {
      el: 'Η τελική τιμή εξαρτάται από τέσσερα πράγματα: το μέγεθος, το υλικό, αν φωτίζεται και πού θα τοποθετηθεί. Ένα καλό γραφείο τα μετρά επί τόπου πριν σας δώσει νούμερο.',
      en: 'The final price depends on four things: size, material, whether it is lit, and where it goes. A good workshop measures on site before giving you a number.',
    },
  ],
  sections: [
    {
      heading: { el: 'Τι κοστίζει κάθε είδος επιγραφής', en: 'What each kind of sign costs' },
      table: {
        head: [
          { el: 'Είδος', en: 'Type' },
          { el: 'Από', en: 'From' },
          { el: 'Πού ταιριάζει', en: 'Where it fits' },
          { el: 'Χρόνος', en: 'Time' },
        ],
        rows: [
          [
            { el: 'Ακρυλική / plexiglass', en: 'Acrylic / plexiglass' },
            { el: '{price:signageAcrylicPerSqm}/τμ²', en: '{price:signageAcrylicPerSqm}/m²' },
            { el: 'Πρόσοψη καταστήματος χωρίς φωτισμό, εσωτερική σήμανση, γραφεία', en: 'Unlit shopfront, interior signage, offices' },
            { el: '5-7 εργάσιμες', en: '5-7 working days' },
          ],
          [
            { el: 'LED', en: 'LED' },
            { el: '{price:signageLed}', en: '{price:signageLed}' },
            { el: 'Φωτεινή πρόσοψη με χαμηλή κατανάλωση, γράμματα με εσωτερικό φωτισμό', en: 'Lit shopfront with low consumption, internally lit letters' },
            { el: '5-7 εργάσιμες', en: '5-7 working days' },
          ],
          [
            { el: 'Neon', en: 'Neon' },
            { el: '{price:signageNeon}', en: '{price:signageNeon}' },
            { el: 'Καφέ, μπαρ, εστιατόρια: η χαρακτηριστική λάμψη που δεν μιμείται το LED', en: 'Cafés, bars, restaurants: the characteristic glow LED does not imitate' },
            { el: '5-7 εργάσιμες', en: '5-7 working days' },
          ],
          [
            { el: 'Γραφικά οχημάτων', en: 'Vehicle graphics' },
            { el: 'Με προσφορά', en: 'On quote' },
            { el: 'Εταιρικά αυτοκίνητα και φορτηγά, από γράμματα μέχρι πλήρες wrap', en: 'Company cars and vans, from lettering to a full wrap' },
            { el: '3-5 εργάσιμες', en: '3-5 working days' },
          ],
        ],
      },
      paragraphs: [
        {
          el: 'Express παραγωγή σε 2-3 εργάσιμες είναι εφικτή για τις περισσότερες επιγραφές, με μικρή επιβάρυνση. Ρωτήστε το από την αρχή αν έχετε ημερομηνία εγκαινίων.',
          en: 'Express production in 2-3 working days is possible for most signs at a small premium. Ask at the start if you have an opening date.',
        },
      ],
    },
    {
      heading: { el: 'Τι καθορίζει την τιμή', en: 'What sets the price' },
      bullets: [
        { el: 'Μέγεθος: το πλάτος της πρόσοψης, όχι το μήκος του ονόματος. Μια επιγραφή 4 μέτρων κοστίζει περισσότερο από μία 2 μέτρων ακόμη κι αν λέει το ίδιο', en: 'Size: the width of the frontage, not the length of the name. A 4-metre sign costs more than a 2-metre one even if it says the same thing' },
        { el: 'Υλικό: ακρυλικό, PVC, αλουμίνιο ή plexiglass. Το αλουμίνιο αντέχει περισσότερο στην ηλιοφάνεια της πρόσοψης, το PVC είναι οικονομικό για εσωτερικούς χώρους', en: 'Material: acrylic, PVC, aluminium or plexiglass. Aluminium lasts longer in direct sun on a frontage, PVC is economical indoors' },
        { el: 'Φωτισμός: LED ή neon προσθέτουν κόστος κατασκευής και ηλεκτρολογική σύνδεση, αλλά είναι αυτά που φαίνονται το βράδυ', en: 'Lighting: LED or neon add fabrication cost and an electrical connection, but they are what is seen at night' },
        { el: 'Γράμματα: κομμένα ανάγλυφα γράμματα κοστίζουν περισσότερο από εκτύπωση σε επίπεδη πινακίδα', en: 'Letters: cut, raised letters cost more than print on a flat panel' },
        { el: 'Τοποθέτηση: ύψος, πρόσβαση, τύπος τοίχου. Ένας δεύτερος όροφος με σκαλωσιά δεν κοστίζει όσο ένα ισόγειο', en: 'Installation: height, access, wall type. A second floor needing scaffolding does not cost the same as a ground floor' },
      ],
    },
    {
      heading: { el: 'LED ή neon;', en: 'LED or neon?' },
      paragraphs: [
        {
          el: 'Το LED καταναλώνει λιγότερο, διαρκεί περισσότερο και ταιριάζει σε κάθε είδος επιχείρησης. Είναι η προεπιλογή για φωτεινές επιγραφές καταστημάτων, ιατρείων και γραφείων.',
          en: 'LED consumes less, lasts longer and suits every kind of business. It is the default for lit signs on shops, clinics and offices.',
        },
        {
          el: 'Το neon έχει μια λάμψη που το LED μιμείται αλλά δεν αντιγράφει, και γι’ αυτό το επιλέγουν καφέ, μπαρ και εστιατόρια που θέλουν η επιγραφή να είναι μέρος της ατμόσφαιρας. Κοστίζει από {price:signageNeon} και χρειάζεται λίγο περισσότερη προσοχή στη συντήρηση.',
          en: 'Neon has a glow that LED imitates but does not copy, which is why cafés, bars and restaurants that want the sign to be part of the atmosphere choose it. It costs from {price:signageNeon} and needs a little more care in maintenance.',
        },
      ],
      link: { path: '/led-neon', label: { el: 'Επιγραφές LED και neon: η υπηρεσία', en: 'LED and neon signs: the service' } },
    },
    {
      heading: { el: 'Τι να μετρήσετε πριν ζητήσετε προσφορά', en: 'What to measure before asking for a quote' },
      bullets: [
        { el: 'Το πλάτος και το ύψος της επιφάνειας όπου θα μπει η επιγραφή, σε εκατοστά', en: 'The width and height of the surface the sign will go on, in centimetres' },
        { el: 'Το ύψος από το έδαφος μέχρι το κάτω μέρος της επιφάνειας', en: 'The height from the ground to the bottom of the surface' },
        { el: 'Αν υπάρχει παροχή ρεύματος κοντά, για φωτεινή επιγραφή', en: 'Whether there is a power supply nearby, for a lit sign' },
        { el: 'Μια φωτογραφία της πρόσοψης από απέναντι, την ημέρα', en: 'A photo of the frontage from across the street, in daylight' },
        { el: 'Το λογότυπό σας σε διανυσματικό αρχείο (AI, EPS, PDF), αν υπάρχει', en: 'Your logo as a vector file (AI, EPS, PDF), if it exists' },
      ],
      paragraphs: [
        {
          el: 'Με αυτά σας δίνουμε πρώτη εκτίμηση την ίδια μέρα. Για την τελική προσφορά περνάμε από τον χώρο και μετράμε εμείς, χωρίς χρέωση, σε Άρτα και Ήπειρο.',
          en: 'With those we give a first estimate the same day. For the final quote we visit and measure ourselves, free of charge, in Arta and Epirus.',
        },
      ],
    },
    {
      heading: { el: 'Άδεια και δήλωση επιγραφής', en: 'Permits and sign registration' },
      paragraphs: [
        {
          el: 'Στην Ελλάδα η τοποθέτηση επιγραφής σε πρόσοψη καταστήματος δηλώνεται στον δήμο και μπορεί να υπόκειται σε τέλος, ανάλογα με το μέγεθος και το αν φωτίζεται. Οι κανόνες διαφέρουν ανά δήμο και ανά περιοχή (π.χ. παραδοσιακοί οικισμοί). Δεν υποκαθιστούμε τον δήμο, αλλά σας λέμε τι ισχύει στην Άρτα και σας δίνουμε τα σχέδια και τις διαστάσεις που θα σας ζητήσουν.',
          en: 'In Greece a sign on a shopfront is declared to the municipality and may be subject to a fee, depending on size and whether it is lit. Rules differ by municipality and by area (e.g. traditional settlements). We do not replace the municipality, but we tell you what applies in Arta and give you the drawings and dimensions they will ask for.',
        },
      ],
    },
    {
      heading: { el: 'Πώς γίνεται μια επιγραφή, από τη μέτρηση στην τοποθέτηση', en: 'How a sign is made, from measurement to installation' },
      bullets: [
        { el: 'Μέτρηση στον χώρο και φωτογραφίες της πρόσοψης', en: 'On-site measurement and photos of the frontage' },
        { el: 'Πρόταση με σχέδιο πάνω στη φωτογραφία, υλικά και γραπτή προσφορά', en: 'Proposal with a mock-up on the photo, materials and a written quote' },
        { el: 'Κατασκευή στο εργαστήριο, με έλεγχο πριν φύγει', en: 'Fabrication in the workshop, checked before it leaves' },
        { el: 'Τοποθέτηση από το συνεργείο μας, με ηλεκτρολογική σύνδεση όπου χρειάζεται', en: 'Installation by our crew, with electrical connection where needed' },
        { el: 'Συντήρηση και επισκευή όταν χρειαστεί, από το ίδιο γραφείο', en: 'Maintenance and repair when needed, from the same office' },
      ],
    },
  ],
  faq: [
    {
      q: { el: 'Πόσο κοστίζει μια φωτεινή επιγραφή 3 μέτρων;', en: 'How much does a 3-metre lit sign cost?' },
      a: {
        el: 'Εξαρτάται από το ύψος, τα γράμματα και το υλικό, οπότε δεν υπάρχει ένα νούμερο. Για να έχετε τάξη μεγέθους: οι επιγραφές LED ξεκινούν από {price:signageLed} και η τοποθέτηση περιλαμβάνεται πάνω από {price:signageInstallIncludedFrom}. Στείλτε μας διαστάσεις και φωτογραφία και έχετε εκτίμηση την ίδια μέρα.',
        en: 'It depends on height, lettering and material, so there is no single number. For an order of magnitude: LED signs start from {price:signageLed} and installation is included above {price:signageInstallIncludedFrom}. Send us dimensions and a photo and you have an estimate the same day.',
      },
    },
    {
      q: { el: 'Περιλαμβάνεται η τοποθέτηση;', en: 'Is installation included?' },
      a: {
        el: 'Για επιγραφές άνω των {price:signageInstallIncludedFrom}, ναι, σε όλη την Ήπειρο. Για μικρότερες τη χρεώνουμε ξεχωριστά και το γράφουμε στην προσφορά.',
        en: 'For signs over {price:signageInstallIncludedFrom}, yes, across Epirus. For smaller ones we charge it separately and state it in the quote.',
      },
    },
    {
      q: { el: 'Πόσο χρόνο παίρνει;', en: 'How long does it take?' },
      a: {
        el: 'Κανονική παραγωγή 5-7 εργάσιμες από την έγκριση του σχεδίου. Express 2-3 εργάσιμες για επείγουσες περιπτώσεις.',
        en: 'Standard production 5-7 working days from design approval. Express 2-3 working days for urgent cases.',
      },
    },
    {
      q: { el: 'Κάνετε και τη διαφημιστική πινακίδα και τα γραφικά στο αυτοκίνητο;', en: 'Do you also do the advertising sign and the vehicle graphics?' },
      a: {
        el: 'Ναι. Πινακίδες, σήμανση εσωτερικών χώρων και γραφικά οχημάτων γίνονται από το ίδιο εργαστήριο, με το ίδιο λογότυπο και τα ίδια χρώματα, ώστε να ταιριάζουν.',
        en: 'Yes. Signs, interior wayfinding and vehicle graphics are made in the same workshop, with the same logo and colours, so they match.',
      },
    },
  ],
  priceFrom: 'signageLed',
  priceLabel: { el: 'Επιγραφή LED', en: 'LED sign' },
  related: [
    { path: '/epigrafes-arta', label: { el: 'Επιγραφές καταστημάτων Άρτα', en: 'Shop signage Arta' }, description: { el: 'Η υπηρεσία, τα υλικά και τα έργα.', en: 'The service, materials and projects.' } },
    { path: '/led-neon', label: { el: 'Επιγραφές LED & neon', en: 'LED & neon signs' }, description: { el: 'Φωτεινές επιγραφές, από την κατασκευή στην τοποθέτηση.', en: 'Lit signs, from fabrication to installation.' } },
    { path: '/sxediasmos-logotypou', label: { el: 'Σχεδιασμός λογοτύπου', en: 'Logo design' }, description: { el: 'Η επιγραφή ξεκινά από ένα λογότυπο που μεγεθύνεται.', en: 'A sign starts with a logo that scales.' } },
    { path: '/pricing', label: { el: 'Τιμοκατάλογος', en: 'Price list' }, description: { el: 'Όλες οι τιμές εκκίνησης σε έναν πίνακα.', en: 'Every starting price in one table.' } },
  ],
  projectsRoute: '/epigrafes-arta',
  breadcrumb: [
    { name: 'Οδηγοί', path: '/guides' },
    { name: 'Πόσο κοστίζει μια επιγραφή', path: '/guides/poso-kostizei-epigrafi' },
  ],
  datePublished: '2026-09-11',
  dateModified: '2026-09-11',
  readingMinutes: 5,
}
