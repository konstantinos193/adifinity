import type { ContentPage } from '../types'

export const page: ContentPage = {
  path: '/flyers',
  kind: 'service',
  seoTitle: 'Εκτύπωση Φυλλαδίων Άρτα | Από {price:flyersPer500} τα 500, Σχεδιασμός & Διανομή',
  seoDescription:
    'Εκτύπωση φυλλαδίων στην Άρτα σε A6, A5, A4 και DL, από {price:flyersPer500} τα 500. Σχεδιασμός αν χρειάζεται και διανομή πόρτα-πόρτα με GPS από το ίδιο γραφείο.',
  badge: { el: 'Εκτυπώσεις', en: 'Printing' },
  h1: { el: 'Φυλλάδια', en: 'Flyers' },
  summary: {
    el: 'Σχεδιασμός, εκτύπωση και, αν θέλετε, διανομή στη γειτονιά που επιλέγετε. Από {price:flyersPer500} τα 500 τεμάχια.',
    en: 'Design, printing and, if you want, distribution in the neighbourhood you choose. From {price:flyersPer500} per 500.',
  },
  intro: [
    {
      el: 'Τυπώνουμε φυλλάδια στην Άρτα από {price:flyersPer500} τα 500 τεμάχια, σε μεγέθη A6, A5, A4 και DL, μονόφυλλα ή διπλωμένα σε δίπτυχο και τρίπτυχο. Παράδοση σε 2-3 εργάσιμες, express σε 24 ώρες. Αν δεν έχετε αρχείο, το σχεδιάζουμε, και αν θέλετε να φτάσουν σε συγκεκριμένους δρόμους, τα μοιράζουμε εμείς με καταγραφή διαδρομής GPS.',
      en: 'We print flyers in Arta from {price:flyersPer500} per 500, in A6, A5, A4 and DL, single-sheet or folded into bi-fold and tri-fold. Delivery in 2-3 working days, express in 24 hours. If you have no file we design it, and if you want them to reach specific streets we distribute them ourselves with GPS route logging.',
    },
  ],
  sections: [
    {
      heading: { el: 'Μεγέθη, χαρτιά και τιμές', en: 'Sizes, papers and prices' },
      table: {
        head: [
          { el: 'Μέγεθος', en: 'Size' },
          { el: 'Διαστάσεις', en: 'Dimensions' },
          { el: 'Πού ταιριάζει', en: 'Where it fits' },
        ],
        rows: [
          [
            { el: 'A6', en: 'A6' },
            { el: '105 x 148 χιλ.', en: '105 x 148 mm' },
            { el: 'Γραμματοκιβώτιο, μοίρασμα στον δρόμο, εκπτωτικό κουπόνι', en: 'Letterbox, street hand-outs, discount voucher' },
          ],
          [
            { el: 'A5', en: 'A5' },
            { el: '148 x 210 χιλ.', en: '148 x 210 mm' },
            { el: 'Το πιο συνηθισμένο: προσφορές, μενού, εκδηλώσεις', en: 'The most common: offers, menus, events' },
          ],
          [
            { el: 'DL', en: 'DL' },
            { el: '99 x 210 χιλ.', en: '99 x 210 mm' },
            { el: 'Τρίπτυχο A4 που χωρά σε φάκελο, τιμοκατάλογοι υπηρεσιών', en: 'A4 tri-fold that fits an envelope, service price lists' },
          ],
          [
            { el: 'A4', en: 'A4' },
            { el: '210 x 297 χιλ.', en: '210 x 297 mm' },
            { el: 'Μενού, ενημερωτικά, δίπτυχα με περισσότερο περιεχόμενο', en: 'Menus, information sheets, bi-folds with more content' },
          ],
        ],
      },
      paragraphs: [
        {
          el: 'Χαρτί από 115 έως 300 γραμμάρια, ματ ή γυαλιστερό. Για φυλλάδια που θα μοιραστούν στον δρόμο προτείνουμε 135-170 γρ., για μενού ή τιμοκαταλόγους που μένουν στο κατάστημα 250-300 γρ. με πλαστικοποίηση. Τα πακέτα εκτύπωσης ξεκινούν από {price:printsSmall} για έως 500 αντίτυπα και από {price:printsMedium} για 500-2.000.',
          en: 'Paper from 115 to 300 gsm, matt or gloss. For flyers handed out on the street we suggest 135-170 gsm; for menus or price lists that stay in the shop, 250-300 gsm with lamination. Print packages start from {price:printsSmall} for up to 500 copies and from {price:printsMedium} for 500-2,000.',
        },
      ],
    },
    {
      heading: { el: 'Τι κάνει ένα φυλλάδιο να δουλεύει', en: 'What makes a flyer work' },
      bullets: [
        { el: 'Μία προσφορά, όχι πέντε. Ο παραλήπτης το κοιτά για δύο δευτερόλεπτα', en: 'One offer, not five. The recipient looks at it for two seconds' },
        { el: 'Τηλέφωνο και διεύθυνση μεγάλα, το λογότυπο μικρότερο από ό,τι θα θέλατε', en: 'Phone and address large, the logo smaller than you would like' },
        { el: 'Ένα QR code που οδηγεί σε ιστοσελίδα, μενού ή Instagram, ώστε να μετράτε ποιοι το σάρωσαν', en: 'A QR code leading to a website, menu or Instagram, so you can measure who scanned it' },
        { el: 'Ημερομηνία λήξης στην προσφορά. Χωρίς αυτή το φυλλάδιο πάει στο συρτάρι', en: 'An expiry date on the offer. Without it the flyer goes in a drawer' },
      ],
      paragraphs: [
        {
          el: 'Αν σχεδιάζουμε εμείς το φυλλάδιο, αυτά είναι δεδομένα. Αν στείλετε δικό σας αρχείο, το ελέγχουμε για ανάλυση, διαστάσεις και περιθώρια κοπής και σας λέμε αν κάτι θα βγει λάθος.',
          en: 'If we design the flyer, these are a given. If you send your own file, we check it for resolution, size and trim margins and tell you if something will come out wrong.',
        },
      ],
    },
    {
      heading: { el: 'Εκτύπωση και διανομή ως ένα έργο', en: 'Printing and distribution as one job' },
      paragraphs: [
        {
          el: 'Το φυλλάδιο δεν δουλεύει αν μείνει σε κούτα. Αναλαμβάνουμε τη διανομή πόρτα-πόρτα σε κατοικίες ή στοχευμένα σε επιχειρήσεις, στους δρόμους που επιλέγετε, με καταγραφή διαδρομής GPS και αναφορά κάλυψης ανά περιοχή. Η τοπική διανομή έως 1.000 φυλλαδίων ξεκινά από {price:distributionLocal}.',
          en: 'A flyer does not work if it stays in a box. We handle door-to-door distribution to households, or targeted to businesses, in the streets you choose, with GPS route logging and a coverage report per area. Local distribution of up to 1,000 flyers starts from {price:distributionLocal}.',
        },
        {
          el: 'Σχεδιασμός, εκτύπωση και διανομή από το ίδιο γραφείο σημαίνει ότι δεν συντονίζετε εσείς τρεις προμηθευτές, και ότι η ποσότητα εκτύπωσης βγαίνει από τον αριθμό των γραμματοκιβωτίων, όχι από εικασία.',
          en: 'Design, printing and distribution from one office means you are not coordinating three suppliers, and the print quantity comes from the number of letterboxes, not a guess.',
        },
      ],
      link: { path: '/flyer-distribution', label: { el: 'Διανομή φυλλαδίων στην Άρτα', en: 'Flyer distribution in Arta' } },
    },
  ],
  faq: [
    {
      q: { el: 'Πόσο κοστίζουν 500 φυλλάδια;', en: 'How much do 500 flyers cost?' },
      a: {
        el: 'Από {price:flyersPer500} για μονόφυλλο A5 σε 135 γρ. χαρτί. Διπλωμένα, βαρύτερο χαρτί και πλαστικοποίηση κοστολογούνται επιπλέον. Το πακέτο μικρής τιράζ, έως 500 αντίτυπα σε κάθε τύπο εντύπου, ξεκινά από {price:printsSmall}.',
        en: 'From {price:flyersPer500} for a single-sheet A5 on 135 gsm paper. Folding, heavier paper and lamination are priced extra. The small-run package, up to 500 copies of any print item, starts from {price:printsSmall}.',
      },
    },
    {
      q: { el: 'Σε πόσο χρόνο είναι έτοιμα;', en: 'How soon are they ready?' },
      a: {
        el: 'Σε 2-3 εργάσιμες από την έγκριση του δείγματος. Express σε 24 ώρες για μονόφυλλα, εφόσον το αρχείο είναι σωστό.',
        en: 'In 2-3 working days from proof approval. Express in 24 hours for single sheets, provided the file is correct.',
      },
    },
    {
      q: { el: 'Μπορείτε να τα μοιράσετε κιόλας;', en: 'Can you also distribute them?' },
      a: {
        el: 'Ναι, σε Άρτα και Ήπειρο, πόρτα-πόρτα ή σε επιχειρήσεις, με καταγραφή GPS και αναφορά. Από {price:distributionLocal} για έως 1.000 φυλλάδια σε μία ζώνη.',
        en: 'Yes, in Arta and Epirus, door-to-door or to businesses, with GPS logging and a report. From {price:distributionLocal} for up to 1,000 flyers in one zone.',
      },
    },
    {
      q: { el: 'Τι αρχείο χρειάζεστε;', en: 'What file do you need?' },
      a: {
        el: 'PDF σε 300 dpi, CMYK, με 3 χιλιοστά ξάκρισμα και τις γραμματοσειρές ενσωματωμένες. Αν δεν το έχετε, το σχεδιάζουμε εμείς με βάση το λογότυπο και το κείμενό σας.',
        en: 'A 300 dpi CMYK PDF with 3 mm bleed and embedded fonts. If you do not have it, we design it from your logo and text.',
      },
    },
  ],
  priceFrom: 'flyersPer500',
  priceLabel: { el: '500 φυλλάδια', en: '500 flyers' },
  priceNote: { el: 'Μονόφυλλο A5, 135 γρ. Παράδοση σε 2-3 εργάσιμες, express σε 24 ώρες.', en: 'Single-sheet A5, 135 gsm. Delivery in 2-3 working days, express in 24 hours.' },
  related: [
    { path: '/flyer-distribution', label: { el: 'Διανομή φυλλαδίων', en: 'Flyer distribution' }, description: { el: 'Πόρτα-πόρτα με καταγραφή GPS, από {price:distributionLocal}.', en: 'Door-to-door with GPS logging, from {price:distributionLocal}.' } },
    { path: '/prints', label: { el: 'Εκτυπώσεις Άρτα', en: 'Printing Arta' }, description: { el: 'Κάρτες, κατάλογοι, αφίσες και όλα τα έντυπα.', en: 'Cards, catalogues, posters and all print.' } },
    { path: '/epaggelmatikes-kartes', label: { el: 'Επαγγελματικές κάρτες', en: 'Business cards' }, description: { el: 'Από {price:businessCardsPer100} τα 100.', en: 'From {price:businessCardsPer100} per 100.' } },
    { path: '/guides/odigos-diafimisis-mikris-epixeirisis-arta', label: { el: 'Οδηγός διαφήμισης για μικρή επιχείρηση', en: 'Small-business advertising guide' }, description: { el: 'Φυλλάδια ή Facebook; Εξαρτάται από τον πελάτη.', en: 'Flyers or Facebook? Depends on the customer.' } },
  ],
  projectsRoute: '/prints',
  breadcrumb: [
    { name: 'Υπηρεσίες', path: '/services' },
    { name: 'Εκτυπώσεις Άρτα', path: '/prints' },
    { name: 'Φυλλάδια', path: '/flyers' },
  ],
  service: {
    name: 'Εκτύπωση Φυλλαδίων',
    description: 'Σχεδιασμός και εκτύπωση φυλλαδίων στην Άρτα σε A6, A5, A4 και DL, μονόφυλλα ή διπλωμένα, με προαιρετική διανομή πόρτα-πόρτα. Από {price:flyersPer500} τα 500.',
    serviceType: ['Flyer Printing', 'Printing', 'Print Design', 'Flyer Distribution'],
  },
}
