import type { ContentPage } from '../types'

export const page: ContentPage = {
  path: '/banners-roll-up',
  kind: 'service',
  seoTitle: 'Banner & Roll-up Άρτα | Από {price:bannerPerSqm}/τμ², Δείγμα Πριν την Εκτύπωση',
  seoDescription:
    'Banner, roll-up, X-banner, μουσαμάδες, forex και καμβάς στην Άρτα. Banner από {price:bannerPerSqm}/τμ², roll-up 85x200 με μηχανισμό, δείγμα πριν την παραγωγή. Σε 2-3 εργάσιμες.',
  badge: { el: 'Εκτυπώσεις μεγάλου μεγέθους', en: 'Large-format printing' },
  h1: { el: 'Banner & roll-up', en: 'Banners & roll-ups' },
  summary: {
    el: 'Μουσαμάς για την πρόσοψη, roll-up για την έκθεση, forex για τον τοίχο. Από {price:bannerPerSqm} το τετραγωνικό, με δείγμα πριν τυπωθεί.',
    en: 'Vinyl for the frontage, a roll-up for the trade show, foam board for the wall. From {price:bannerPerSqm} per square metre, with a proof before printing.',
  },
  intro: [
    {
      el: 'Τυπώνουμε banner μεγάλου μεγέθους στην Άρτα από {price:bannerPerSqm} το τετραγωνικό μέτρο: μουσαμάδες με τρύπες για δέσιμο, roll-up 85 x 200 με μηχανισμό και τσάντα, X-banner, εκτυπώσεις σε forex και foam board, καμβάδες και αυτοκόλλητα βιτρίνας. Πριν από κάθε παραγγελία στέλνουμε ψηφιακή προεπισκόπηση για έγκριση, ώστε να μην υπάρξει έκπληξη σε ένα κομμάτι τριών μέτρων. Παράδοση σε 2-3 εργάσιμες.',
      en: 'We print large-format banners in Arta from {price:bannerPerSqm} per square metre: eyeleted vinyl banners, 85 x 200 roll-ups with mechanism and bag, X-banners, prints on foam board and forex, canvas and window stickers. Before every order we send a digital proof for approval, so there are no surprises on a three-metre piece. Delivery in 2-3 working days.',
    },
  ],
  sections: [
    {
      heading: { el: 'Τι τυπώνουμε και πού ταιριάζει', en: 'What we print and where it fits' },
      table: {
        head: [
          { el: 'Προϊόν', en: 'Product' },
          { el: 'Τι είναι', en: 'What it is' },
          { el: 'Πού ταιριάζει', en: 'Where it fits' },
        ],
        rows: [
          [
            { el: 'Μουσαμάς (banner)', en: 'Vinyl banner' },
            { el: 'Ανθεκτικό PVC με τρύπες περιμετρικά για δέσιμο, από {price:bannerPerSqm}/τμ²', en: 'Durable PVC with eyelets around the edge, from {price:bannerPerSqm}/m²' },
            { el: 'Πρόσοψη σε εκπτώσεις και εγκαίνια, φράχτης εργοταξίου, εκδηλώσεις σε εξωτερικό χώρο', en: 'Frontage for sales and openings, site fencing, outdoor events' },
          ],
          [
            { el: 'Roll-up 85 x 200', en: 'Roll-up 85 x 200' },
            { el: 'Εκτύπωση σε μηχανισμό αλουμινίου που τυλίγεται, με τσάντα μεταφοράς', en: 'Print on a retractable aluminium mechanism, with carry bag' },
            { el: 'Εκθέσεις, είσοδος καταστήματος, γραφείο, εκδηλώσεις', en: 'Trade shows, shop entrance, office, events' },
          ],
          [
            { el: 'X-banner', en: 'X-banner' },
            { el: 'Ελαφρύ σταντ με τεντωμένη εκτύπωση, οικονομικότερο από roll-up', en: 'Light stand with a tensioned print, cheaper than a roll-up' },
            { el: 'Προσωρινή χρήση, μια εκδήλωση', en: 'Temporary use, a single event' },
          ],
          [
            { el: 'Forex / foam board', en: 'Forex / foam board' },
            { el: 'Άκαμπτο φύλλο με εκτύπωση, 3-10 χιλιοστά', en: 'Rigid printed sheet, 3-10 mm' },
            { el: 'Πινακίδες εσωτερικού χώρου, τιμοκατάλογοι, πάνελ παρουσίασης', en: 'Indoor signs, price boards, presentation panels' },
          ],
          [
            { el: 'Καμβάς', en: 'Canvas' },
            { el: 'Εκτύπωση σε ύφασμα σε τελάρο', en: 'Print on stretched canvas' },
            { el: 'Φωτογραφίες σε χώρους εστίασης, γραφεία, καταλύματα', en: 'Photography in restaurants, offices, accommodation' },
          ],
          [
            { el: 'Αυτοκόλλητα βιτρίνας', en: 'Window stickers' },
            { el: 'Βινύλιο κομμένο ή εκτυπωμένο, διάφανο ή αδιαφανές', en: 'Cut or printed vinyl, clear or opaque' },
            { el: 'Ωράριο, λογότυπο, προσφορές πάνω στο τζάμι', en: 'Opening hours, logo, offers on the glass' },
          ],
        ],
      },
    },
    {
      heading: { el: 'Το αρχείο για μεγάλα μεγέθη', en: 'The file for large formats' },
      paragraphs: [
        {
          el: 'Σε ένα banner τριών μέτρων, ένα λογότυπο που φαινόταν καλά στην οθόνη μπορεί να βγει θολό. Γι’ αυτό προτιμούμε διανυσματικά αρχεία (AI, EPS, PDF) για λογότυπα και κείμενα, που μεγεθύνονται χωρίς απώλεια. Για φωτογραφίες, ελέγχουμε την ανάλυση σε σχέση με το τελικό μέγεθος και σας λέμε από πριν αν επαρκεί.',
          en: 'On a three-metre banner, a logo that looked fine on screen can come out blurred. That is why we prefer vector files (AI, EPS, PDF) for logos and text, which scale without loss. For photos, we check the resolution against the final size and tell you in advance whether it is enough.',
        },
        {
          el: 'Αν έχετε μόνο μια φωτογραφία ή ένα PNG, μην το απορρίψετε: το ελέγχουμε πρώτα. Συχνά αρκεί για το μέγεθος που θέλετε, και αν όχι, ξανασχεδιάζουμε το λογότυπο σε διανυσματική μορφή.',
          en: 'If you only have a photo or a PNG, do not write it off: we check it first. It is often enough for the size you want, and if not, we redraw the logo as a vector.',
        },
      ],
    },
    {
      heading: { el: 'Δείγμα πριν την παραγωγή', en: 'A proof before production' },
      paragraphs: [
        {
          el: 'Για κάθε παραγγελία μεγάλου μεγέθους στέλνουμε ψηφιακή προεπισκόπηση στις πραγματικές αναλογίες, με τα σημεία κοπής και τις τρύπες. Εγκρίνετε, και τότε τυπώνουμε. Δεν χρεώνουμε αλλαγές πριν την έγκριση.',
          en: 'For every large-format order we send a digital proof at the real proportions, with trim marks and eyelet positions. You approve, then we print. Changes before approval are not charged.',
        },
      ],
    },
    {
      heading: { el: 'Χρόνοι και παράδοση', en: 'Timing and delivery' },
      paragraphs: [
        {
          el: 'Μουσαμάδες, forex και αυτοκόλλητα σε 2-3 εργάσιμες. Roll-up και X-banner σε 2-4 εργάσιμες, ανάλογα με τη διαθεσιμότητα μηχανισμών. Παραλαβή από το γραφείο μας ή παράδοση στην Άρτα και σε όλη την Ήπειρο. Για μουσαμά στην πρόσοψη, αναλαμβάνουμε και την τοποθέτηση.',
          en: 'Vinyl banners, foam board and stickers in 2-3 working days. Roll-ups and X-banners in 2-4 working days, depending on mechanism availability. Collect from our office or delivery in Arta and across Epirus. For a frontage banner we also handle installation.',
        },
      ],
      link: { path: '/epigrafes-arta', label: { el: 'Για μόνιμη επιγραφή, δείτε τις επιγραφές καταστημάτων', en: 'For a permanent sign, see shop signage' } },
    },
  ],
  faq: [
    {
      q: { el: 'Πόσο κοστίζει ένα banner 3 x 1 μέτρων;', en: 'How much does a 3 x 1 metre banner cost?' },
      a: {
        el: 'Τρία τετραγωνικά μέτρα επί {price:bannerPerSqm} το τετραγωνικό, δηλαδή από 90 ευρώ, με τρύπες περιμετρικά. Η τοποθέτηση, αν τη θέλετε, κοστολογείται ξεχωριστά.',
        en: 'Three square metres at {price:bannerPerSqm} per square metre, so from 90 euros, with eyelets. Installation, if you want it, is priced separately.',
      },
    },
    {
      q: { el: 'Το roll-up περιλαμβάνει τον μηχανισμό;', en: 'Does the roll-up include the mechanism?' },
      a: {
        el: 'Ναι. Η τιμή του roll-up περιλαμβάνει την εκτύπωση 85 x 200, τον μηχανισμό αλουμινίου και την τσάντα μεταφοράς. Αν έχετε ήδη μηχανισμό, τυπώνουμε μόνο το πανό.',
        en: 'Yes. The roll-up price includes the 85 x 200 print, the aluminium mechanism and the carry bag. If you already have a mechanism, we print just the graphic.',
      },
    },
    {
      q: { el: 'Πόσο αντέχει ο μουσαμάς σε εξωτερικό χώρο;', en: 'How long does a vinyl banner last outdoors?' },
      a: {
        el: 'Για εποχιακή χρήση (εκπτώσεις, εγκαίνια, εκδηλώσεις) είναι η σωστή επιλογή. Για μόνιμη επιγραφή που θα μείνει χρόνια στην πρόσοψη, προτείνουμε ακρυλική ή αλουμινίου επιγραφή, που κοστίζει περισσότερο αλλά δεν ξεθωριάζει.',
        en: 'For seasonal use (sales, openings, events) it is the right choice. For a permanent sign that will stay on the frontage for years, we recommend an acrylic or aluminium sign, which costs more but does not fade.',
      },
    },
    {
      q: { el: 'Μπορώ να δω δείγμα υλικού;', en: 'Can I see a material sample?' },
      a: {
        el: 'Ναι, στο γραφείο μας στη Βασ. Πύρρου 30 έχουμε δείγματα μουσαμά, forex, καμβά και βινυλίου για να τα δείτε από κοντά.',
        en: 'Yes, at our office at Vas. Pyrrou 30 we have samples of vinyl, foam board, canvas and adhesive vinyl to see in person.',
      },
    },
  ],
  priceFrom: 'bannerPerSqm',
  priceLabel: { el: 'Banner, ανά τετραγωνικό', en: 'Banner, per square metre' },
  priceNote: { el: 'Μουσαμάς με τρύπες. Ψηφιακό δείγμα πριν την παραγωγή, παράδοση σε 2-3 εργάσιμες.', en: 'Eyeleted vinyl. Digital proof before production, delivery in 2-3 working days.' },
  related: [
    { path: '/ektypwseis-arta', label: { el: 'Εκτυπώσεις μεγάλου μεγέθους Άρτα', en: 'Large-format printing Arta' }, description: { el: 'Αφίσες, αυτοκόλλητα, συσκευασία και όλα τα μεγάλα μεγέθη.', en: 'Posters, stickers, packaging and every large format.' } },
    { path: '/epigrafes-arta', label: { el: 'Επιγραφές καταστημάτων', en: 'Shop signage' }, description: { el: 'Για ό,τι πρέπει να μείνει στην πρόσοψη για χρόνια.', en: 'For whatever must stay on the frontage for years.' } },
    { path: '/prints', label: { el: 'Εκτυπώσεις Άρτα', en: 'Printing Arta' }, description: { el: 'Κάρτες, φυλλάδια, κατάλογοι.', en: 'Cards, flyers, catalogues.' } },
    { path: '/pricing', label: { el: 'Τιμοκατάλογος', en: 'Price list' }, description: { el: 'Όλες οι τιμές εκκίνησης.', en: 'Every starting price.' } },
  ],
  projectsRoute: '/ektypwseis-arta',
  breadcrumb: [
    { name: 'Υπηρεσίες', path: '/services' },
    { name: 'Εκτυπώσεις Άρτα', path: '/prints' },
    { name: 'Banner & roll-up', path: '/banners-roll-up' },
  ],
  service: {
    name: 'Εκτύπωση Banner & Roll-up',
    description: 'Εκτύπωση μεγάλου μεγέθους στην Άρτα: μουσαμάδες, roll-up, X-banner, forex, καμβάς και αυτοκόλλητα βιτρίνας, με ψηφιακό δείγμα πριν την παραγωγή. Από {price:bannerPerSqm}/τμ².',
    serviceType: ['Large Format Printing', 'Banner Printing', 'Roll-up Banners', 'Printing'],
  },
}
