import type { ContentPage } from '../types'

export const page: ContentPage = {
  path: '/epaggelmatikes-kartes',
  kind: 'service',
  seoTitle: 'Επαγγελματικές Κάρτες Άρτα | Από {price:businessCardsPer100} τα 100, σε 24 Ώρες',
  seoDescription:
    'Επαγγελματικές κάρτες στην Άρτα: χαρτιά, ματ ή γυαλιστερή πλαστικοποίηση, soft-touch, χρυσοτυπία, ανάγλυφο. Από {price:businessCardsPer100} τα 100, σε 24-72 ώρες.',
  badge: { el: 'Εκτυπώσεις', en: 'Printing' },
  h1: { el: 'Επαγγελματικές κάρτες', en: 'Business cards' },
  summary: {
    el: 'Η κάρτα που φεύγει από το χέρι σας είναι το μόνο υλικό που κρατά ο πελάτης. Χαρτί, φινίρισμα και ποσότητα, με τιμή από {price:businessCardsPer100} τα 100.',
    en: 'The card that leaves your hand is the one thing the customer keeps. Paper, finish and quantity, from {price:businessCardsPer100} per 100.',
  },
  intro: [
    {
      el: 'Τυπώνουμε επαγγελματικές κάρτες στην Άρτα από {price:businessCardsPer100} τα 100 τεμάχια, με παράδοση σε 2-3 εργάσιμες ή express σε 24 ώρες. Επιλέγετε χαρτί, φινίρισμα (ματ, γυαλιστερό ή soft-touch), και αν θέλετε χρυσοτυπία, ανάγλυφο ή UV spot για τις λεπτομέρειες. Ελέγχουμε πάντα το αρχείο σας πριν την παραγωγή, και αν δεν έχετε αρχείο, τη σχεδιάζουμε.',
      en: 'We print business cards in Arta from {price:businessCardsPer100} per 100, delivered in 2-3 working days or express within 24 hours. You choose the paper, the finish (matt, gloss or soft-touch), and whether you want gold foil, embossing or spot UV for the details. We always check your file before production, and if you have no file, we design it.',
    },
  ],
  sections: [
    {
      heading: { el: 'Επιλογές και τιμές', en: 'Options and prices' },
      table: {
        head: [
          { el: 'Επιλογή', en: 'Option' },
          { el: 'Τι είναι', en: 'What it is' },
          { el: 'Πότε αξίζει', en: 'When it is worth it' },
        ],
        rows: [
          [
            { el: 'Απλή κάρτα', en: 'Standard card' },
            { el: '85 x 55 χιλ., χαρτί 300-350 γρ., ματ ή γυαλιστερή πλαστικοποίηση', en: '85 x 55 mm, 300-350 gsm card, matt or gloss lamination' },
            { el: 'Η καθημερινή κάρτα. Από {price:businessCardsPer100} τα 100', en: 'The everyday card. From {price:businessCardsPer100} per 100' },
          ],
          [
            { el: 'Soft-touch', en: 'Soft-touch' },
            { el: 'Βελούδινη πλαστικοποίηση που το χέρι θυμάται', en: 'Velvet lamination the hand remembers' },
            { el: 'Επαγγέλματα όπου η πρώτη εντύπωση μετρά: αρχιτέκτονες, δικηγόροι, καταλύματα', en: 'Professions where first impressions count: architects, lawyers, accommodation' },
          ],
          [
            { el: 'Χρυσοτυπία / ασημοτυπία', en: 'Gold / silver foil' },
            { el: 'Μεταλλικό φύλλο σε λογότυπο ή όνομα', en: 'Metallic foil on the logo or name' },
            { el: 'Κοσμηματοπωλεία, γάμοι, premium υπηρεσίες', en: 'Jewellers, weddings, premium services' },
          ],
          [
            { el: 'Ανάγλυφο (embossing)', en: 'Embossing' },
            { el: 'Το λογότυπο ανασηκωμένο από το χαρτί', en: 'The logo raised from the paper' },
            { el: 'Όταν το λογότυπο είναι απλό και δυνατό σχήμα', en: 'When the logo is a simple, strong shape' },
          ],
          [
            { el: 'UV spot', en: 'Spot UV' },
            { el: 'Γυαλιστερό βερνίκι μόνο πάνω στο λογότυπο, σε ματ φόντο', en: 'Gloss varnish only on the logo, over a matt background' },
            { el: 'Διακριτική λεπτομέρεια, χαμηλό επιπλέον κόστος', en: 'Subtle detail, low extra cost' },
          ],
        ],
      },
      paragraphs: [
        {
          el: 'Οι συνηθισμένες ποσότητες είναι 100, 250, 500 και 1.000. Η τιμή ανά κάρτα πέφτει αισθητά από τις 250 και πάνω. Για δύο ή τρία ονόματα στην ίδια επιχείρηση, τυπώνουμε μαζί και μοιράζουμε την ποσότητα.',
          en: 'Common quantities are 100, 250, 500 and 1,000. The price per card drops noticeably from 250 upwards. For two or three names in the same business, we print together and split the quantity.',
        },
      ],
    },
    {
      heading: { el: 'Τι χρειαζόμαστε από το αρχείο σας', en: 'What we need from your file' },
      bullets: [
        { el: 'Διαστάσεις 85 x 55 χιλιοστά, με 3 χιλιοστά ξάκρισμα (bleed) γύρω-γύρω', en: 'Size 85 x 55 mm, with 3 mm bleed all round' },
        { el: 'Ανάλυση 300 dpi και χρώματα σε CMYK, όχι RGB', en: '300 dpi resolution and CMYK colours, not RGB' },
        { el: 'Κείμενα και λογότυπο τουλάχιστον 3 χιλιοστά μέσα από την άκρη', en: 'Text and logo at least 3 mm inside the edge' },
        { el: 'PDF με ενσωματωμένες γραμματοσειρές, ή AI/EPS με τα κείμενα σε καμπύλες', en: 'PDF with embedded fonts, or AI/EPS with text converted to outlines' },
      ],
      paragraphs: [
        {
          el: 'Ελέγχουμε κάθε αρχείο πριν την παραγωγή για ανάλυση, διαστάσεις και περιθώρια κοπής, και σας ενημερώνουμε αν κάτι θα βγει λάθος. Αν έχετε μόνο λογότυπο ή καθόλου αρχείο, ο σχεδιασμός της κάρτας περιλαμβάνεται στο βασικό πακέτο λογοτύπου.',
          en: 'We check every file before production for resolution, size and trim margins, and tell you if something will come out wrong. If you only have a logo, or no file at all, card design is included in the basic logo package.',
        },
      ],
      link: { path: '/sxediasmos-logotypou', label: { el: 'Σχεδιασμός λογοτύπου και κάρτας', en: 'Logo and card design' } },
    },
    {
      heading: { el: 'Χρόνοι και παράδοση', en: 'Timing and delivery' },
      paragraphs: [
        {
          el: 'Κανονική παραγωγή σε 2-3 εργάσιμες από την έγκριση του δείγματος. Express σε 24 ώρες για επείγουσες περιπτώσεις, με μικρή επιβάρυνση. Παραλαβή από το γραφείο μας στη Βασ. Πύρρου 30 ή παράδοση στην Άρτα και σε όλη την Ήπειρο.',
          en: 'Standard production in 2-3 working days from proof approval. Express in 24 hours for urgent cases, at a small premium. Collect from our office at Vas. Pyrrou 30 or delivery in Arta and across Epirus.',
        },
      ],
    },
    {
      heading: { el: 'Μαζί με τις κάρτες', en: 'Along with the cards' },
      paragraphs: [
        {
          el: 'Οι περισσότεροι πελάτες παραγγέλνουν μαζί επιστολόχαρτο, φακέλους ή φυλλάδια, γιατί τυπώνονται από το ίδιο αρχείο και στα ίδια χρώματα. Και τα διαφημιστικά δώρα (στυλό, μπλοκ) με το ίδιο λογότυπο κοστίζουν λιγότερο ως μία παραγγελία.',
          en: 'Most clients order letterhead, envelopes or flyers at the same time, because they print from the same file and in the same colours. Promotional gifts (pens, notepads) with the same logo also cost less as one order.',
        },
      ],
      link: { path: '/flyers', label: { el: 'Φυλλάδια', en: 'Flyers' } },
    },
  ],
  faq: [
    {
      q: { el: 'Πόσο κοστίζουν 100 επαγγελματικές κάρτες;', en: 'How much do 100 business cards cost?' },
      a: {
        el: 'Από {price:businessCardsPer100} για απλή κάρτα με πλαστικοποίηση. Soft-touch, χρυσοτυπία και ανάγλυφο κοστολογούνται επιπλέον, και σας το λέμε στην προσφορά.',
        en: 'From {price:businessCardsPer100} for a standard laminated card. Soft-touch, foil and embossing are priced extra, and we state it in the quote.',
      },
    },
    {
      q: { el: 'Μπορώ να τις έχω αύριο;', en: 'Can I have them tomorrow?' },
      a: {
        el: 'Ναι, με express παραγωγή σε 24 ώρες, εφόσον το αρχείο είναι σωστό ή το στείλετε πρωί. Για κάρτες με χρυσοτυπία ή ανάγλυφο χρειάζονται 3-5 εργάσιμες.',
        en: 'Yes, with express production in 24 hours, provided the file is correct or arrives in the morning. Cards with foil or embossing need 3-5 working days.',
      },
    },
    {
      q: { el: 'Δεν έχω λογότυπο. Τι κάνω;', en: 'I have no logo. What do I do?' },
      a: {
        el: 'Το βασικό πακέτο λογοτύπου από {price:brandBasicPackage} περιλαμβάνει λογότυπο με δύο εναλλακτικές και τον σχεδιασμό της κάρτας. Έτσι η κάρτα και ό,τι ακολουθήσει (επιγραφή, φυλλάδια) ξεκινούν από το ίδιο αρχείο.',
        en: 'The basic logo package from {price:brandBasicPackage} includes a logo with two alternatives and the card design. That way the card and whatever follows (sign, flyers) start from the same file.',
      },
    },
    {
      q: { el: 'Θα δω δείγμα πριν τυπωθούν;', en: 'Will I see a proof before printing?' },
      a: {
        el: 'Ναι. Στέλνουμε ψηφιακό δείγμα για έγκριση, και για ειδικά φινιρίσματα μπορείτε να δείτε δείγματα χαρτιών από κοντά στο γραφείο.',
        en: 'Yes. We send a digital proof for approval, and for special finishes you can see paper samples in person at the office.',
      },
    },
  ],
  priceFrom: 'businessCardsPer100',
  priceLabel: { el: '100 κάρτες', en: '100 cards' },
  priceNote: { el: 'Απλή κάρτα με πλαστικοποίηση. Παράδοση σε 2-3 εργάσιμες, express σε 24 ώρες.', en: 'Standard laminated card. Delivery in 2-3 working days, express in 24 hours.' },
  related: [
    { path: '/prints', label: { el: 'Εκτυπώσεις Άρτα', en: 'Printing Arta' }, description: { el: 'Όλες οι εκτυπώσεις: κάρτες, φυλλάδια, κατάλογοι, αφίσες.', en: 'All printing: cards, flyers, catalogues, posters.' } },
    { path: '/flyers', label: { el: 'Φυλλάδια', en: 'Flyers' }, description: { el: 'Από {price:flyersPer500} τα 500, με διανομή αν θέλετε.', en: 'From {price:flyersPer500} per 500, with distribution if you like.' } },
    { path: '/sxediasmos-logotypou', label: { el: 'Σχεδιασμός λογοτύπου', en: 'Logo design' }, description: { el: 'Το λογότυπο που θα μπει στην κάρτα.', en: 'The logo that goes on the card.' } },
    { path: '/diafimistika-dora', label: { el: 'Διαφημιστικά δώρα', en: 'Promotional gifts' }, description: { el: 'Στυλό και μπλοκ με το ίδιο λογότυπο.', en: 'Pens and notepads with the same logo.' } },
  ],
  projectsRoute: '/prints',
  breadcrumb: [
    { name: 'Υπηρεσίες', path: '/services' },
    { name: 'Εκτυπώσεις Άρτα', path: '/prints' },
    { name: 'Επαγγελματικές κάρτες', path: '/epaggelmatikes-kartes' },
  ],
  service: {
    name: 'Εκτύπωση Επαγγελματικών Καρτών',
    description: 'Εκτύπωση επαγγελματικών καρτών στην Άρτα με επιλογή χαρτιού και φινιρίσματος, έλεγχο αρχείου και παράδοση σε 24-72 ώρες. Από {price:businessCardsPer100} τα 100 τεμάχια.',
    serviceType: ['Business Card Printing', 'Printing', 'Print Design'],
  },
}
