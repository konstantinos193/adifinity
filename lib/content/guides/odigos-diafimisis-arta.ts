import type { ContentPage } from '../types'

export const page: ContentPage = {
  path: '/guides/odigos-diafimisis-mikris-epixeirisis-arta',
  kind: 'guide',
  seoTitle: 'Οδηγός Διαφήμισης για Μικρή Επιχείρηση στην Άρτα (2026)',
  seoDescription:
    'Τι χρειάζεται μια μικρή επιχείρηση στην Άρτα για να τη βρίσκουν: λογότυπο, επιγραφή, κάρτες, Google Business Profile, ιστοσελίδα, φυλλάδια. Με σειρά, τιμές και χρόνους.',
  badge: { el: 'Τοπικός οδηγός', en: 'Local guide' },
  h1: { el: 'Οδηγός διαφήμισης για μικρή επιχείρηση στην Άρτα', en: 'Advertising guide for a small business in Arta' },
  summary: {
    el: 'Με ποια σειρά να τα κάνετε, τι κοστίζει το καθένα και τι δουλεύει σε μια πόλη όπου όλοι ξέρουν όλους.',
    en: 'In which order to do things, what each one costs, and what works in a town where everyone knows everyone.',
  },
  intro: [
    {
      el: 'Μια μικρή επιχείρηση στην Άρτα δεν χρειάζεται «καμπάνια». Χρειάζεται, με αυτή τη σειρά: ένα λογότυπο που μεγεθύνεται, μια επιγραφή που φαίνεται από τον δρόμο, κάρτες και μενού ή τιμοκατάλογο, ένα σωστά συμπληρωμένο Google Business Profile, μια ιστοσελίδα που φορτώνει στο κινητό, και μετά social media ή φυλλάδια ανάλογα με το ποιον θέλετε να φτάσετε.',
      en: 'A small business in Arta does not need a "campaign". It needs, in this order: a logo that scales, a sign visible from the street, cards and a menu or price list, a properly completed Google Business Profile, a website that loads on a phone, and then social media or flyers depending on who you want to reach.',
    },
    {
      el: 'Όλα μαζί, στη βασική τους μορφή, κοστίζουν λιγότερο από ό,τι φαντάζονται οι περισσότεροι. Παρακάτω τα βάζουμε σε σειρά με τιμές από τον τιμοκατάλογό μας και χρόνους που τηρούμε.',
      en: 'All together, in their basic form, they cost less than most people imagine. Below we put them in order with prices from our price list and lead times we keep.',
    },
  ],
  sections: [
    {
      heading: { el: 'Η σειρά που έχει σημασία', en: 'The order that matters' },
      paragraphs: [
        {
          el: 'Το λάθος που βλέπουμε πιο συχνά: η επιχείρηση παραγγέλνει επιγραφή, μετά κάρτες από αλλού, μετά ανοίγει Facebook με ένα τρίτο λογότυπο, και στο τέλος έχει τρεις εικόνες για μία επιχείρηση. Ξεκινήστε από το λογότυπο, γιατί όλα τα υπόλοιπα το χρησιμοποιούν.',
          en: 'The mistake we see most often: the business orders a sign, then cards from somewhere else, then opens Facebook with a third logo, and ends up with three images for one business. Start with the logo, because everything else uses it.',
        },
      ],
      table: {
        head: [
          { el: 'Βήμα', en: 'Step' },
          { el: 'Από', en: 'From' },
          { el: 'Χρόνος', en: 'Time' },
          { el: 'Γιατί πρώτα', en: 'Why first' },
        ],
        rows: [
          [
            { el: '1. Λογότυπο', en: '1. Logo' },
            { el: '{price:logo}', en: '{price:logo}' },
            { el: '3-5 εργάσιμες', en: '3-5 working days' },
            { el: 'Μπαίνει στην επιγραφή, στις κάρτες, στο Google, παντού', en: 'Goes on the sign, the cards, Google, everywhere' },
          ],
          [
            { el: '2. Επιγραφή', en: '2. Sign' },
            { el: '{price:signageAcrylicPerSqm}/τμ²', en: '{price:signageAcrylicPerSqm}/m²' },
            { el: '5-7 εργάσιμες', en: '5-7 working days' },
            { el: 'Το πρώτο πράγμα που βλέπει όποιος περνά από τον δρόμο', en: 'The first thing anyone passing on the street sees' },
          ],
          [
            { el: '3. Κάρτες, μενού, τιμοκατάλογος', en: '3. Cards, menu, price list' },
            { el: '{price:businessCardsPer100} / 100 κάρτες', en: '{price:businessCardsPer100} / 100 cards' },
            { el: '2-3 εργάσιμες', en: '2-3 working days' },
            { el: 'Ό,τι φεύγει από το κατάστημα μαζί με τον πελάτη', en: 'Whatever leaves the shop with the customer' },
          ],
          [
            { el: '4. Google Business Profile', en: '4. Google Business Profile' },
            { el: 'Δωρεάν', en: 'Free' },
            { el: '1 ημέρα', en: '1 day' },
            { el: 'Έτσι σας βρίσκουν στο «κοντά μου» και στους χάρτες', en: 'This is how people find you in "near me" and on maps' },
          ],
          [
            { el: '5. Ιστοσελίδα', en: '5. Website' },
            { el: '{price:websiteStarter}', en: '{price:websiteStarter}' },
            { el: '2-4 εβδομάδες', en: '2-4 weeks' },
            { el: 'Η μόνη διεύθυνση online που σας ανήκει', en: 'The only online address you own' },
          ],
          [
            { el: '6. Social media ή φυλλάδια', en: '6. Social media or flyers' },
            { el: '{price:socialMonthly}/μήνα ή {price:distributionLocal}', en: '{price:socialMonthly}/month or {price:distributionLocal}' },
            { el: 'Συνεχές ή 1-5 ημέρες', en: 'Ongoing or 1-5 days' },
            { el: 'Ανάλογα με το αν το κοινό σας είναι στο κινητό ή στη γειτονιά', en: 'Depending on whether your audience is on the phone or in the neighbourhood' },
          ],
        ],
      },
    },
    {
      heading: { el: 'Το Google Business Profile πριν από την ιστοσελίδα', en: 'Google Business Profile before the website' },
      paragraphs: [
        {
          el: 'Στην Άρτα οι περισσότερες αναζητήσεις που φέρνουν πελάτη είναι της μορφής «κομμωτήριο Άρτα» ή «τυπογραφείο κοντά μου», από κινητό. Αυτές τις απαντά ο χάρτης της Google, όχι η ιστοσελίδα σας. Ένα σωστά συμπληρωμένο προφίλ, με κατηγορία, ωράριο, φωτογραφίες του χώρου και της δουλειάς σας, και αληθινές κριτικές, είναι δωρεάν και φέρνει κλήσεις από την πρώτη εβδομάδα.',
          en: 'In Arta most searches that bring a customer look like "hairdresser Arta" or "print shop near me", from a phone. Those are answered by Google Maps, not by your website. A properly completed profile, with category, opening hours, photos of your premises and your work, and genuine reviews, is free and brings calls from the first week.',
        },
        {
          el: 'Τι ζητάμε από τους πελάτες μας: όταν κάποιος μείνει ικανοποιημένος, να του ζητήσετε να γράψει τι ακριβώς αγόρασε. Μια κριτική που λέει «έφτιαξαν την επιγραφή μας» αξίζει περισσότερο από πέντε που λένε «τέλειοι».',
          en: 'What we ask our clients: when someone is satisfied, ask them to write what exactly they bought. A review that says "they made our sign" is worth more than five that say "perfect".',
        },
      ],
    },
    {
      heading: { el: 'Φυλλάδια ή Facebook; Εξαρτάται από τον πελάτη', en: 'Flyers or Facebook? Depends on the customer' },
      paragraphs: [
        {
          el: 'Αν οι πελάτες σας είναι τα νοικοκυριά μιας γειτονιάς (ταβέρνα, φούρνος, τεχνικός, ιατρείο), 1.000 φυλλάδια πόρτα-πόρτα με καταγραφή διαδρομής GPS κοστίζουν από {price:distributionLocal} και ξέρετε ακριβώς σε ποιους δρόμους πήγαν. Αν οι πελάτες σας είναι κάτω των 40 και αποφασίζουν από το κινητό (καφέ, μπαρ, ρούχα, κομμωτήριο), η διαχείριση social media από {price:socialMonthly} τον μήνα και μια μικρή καμπάνια με {price:adSpendMin}-{price:adSpendMax} τον μήνα σε διαφημιστικό budget φτάνουν περισσότερους για τα ίδια χρήματα.',
          en: 'If your customers are the households of a neighbourhood (taverna, bakery, technician, clinic), 1,000 door-to-door flyers with GPS route logging cost from {price:distributionLocal} and you know exactly which streets they went to. If your customers are under 40 and decide from their phone (café, bar, clothing, hairdresser), social media management from {price:socialMonthly} a month plus a small campaign with {price:adSpendMin}-{price:adSpendMax} a month in ad spend reaches more people for the same money.',
        },
        {
          el: 'Τα δύο δεν αποκλείονται. Ένα φυλλάδιο με QR που οδηγεί στο Instagram σας δουλεύει και για τους δύο.',
          en: 'The two are not mutually exclusive. A flyer with a QR code leading to your Instagram works for both.',
        },
      ],
      link: { path: '/flyer-distribution', label: { el: 'Διανομή φυλλαδίων στην Άρτα', en: 'Flyer distribution in Arta' } },
    },
    {
      heading: { el: 'Τι δουλεύει στην Άρτα και τι όχι', en: 'What works in Arta and what does not' },
      bullets: [
        { el: 'Δουλεύει: η επιγραφή. Η Άρτα είναι πόλη που τη διασχίζεις με τα πόδια ή με το αυτοκίνητο δύο φορές τη μέρα. Μια καθαρή, φωτεινή επιγραφή σε κεντρικό δρόμο φέρνει πελάτες για χρόνια', en: 'Works: the sign. Arta is a town you cross on foot or by car twice a day. A clean, lit sign on a central street brings customers for years' },
        { el: 'Δουλεύει: το «κοντά μου» της Google, από κινητό, από ανθρώπους που έχουν ήδη αποφασίσει να αγοράσουν', en: 'Works: Google "near me" searches, from phones, by people who have already decided to buy' },
        { el: 'Δουλεύει: η σύσταση. Ό,τι κάνετε πρέπει να κάνει εύκολο σε έναν πελάτη να σας πει σε άλλον: κάρτα με τηλέφωνο, όνομα που θυμάται, ιστοσελίδα που βρίσκει', en: 'Works: word of mouth. Everything you do should make it easy for one customer to tell another: a card with a phone number, a name they remember, a website they can find' },
        { el: 'Δεν δουλεύει: η διαφήμιση σε κοινό εκτός Ηπείρου, εκτός αν πουλάτε online. Το budget πάει σε ανθρώπους που δεν θα έρθουν ποτέ', en: 'Does not work: advertising to audiences outside Epirus, unless you sell online. The budget goes to people who will never come' },
        { el: 'Δεν δουλεύει: το «θα το κάνω μόνος μου» στο λογότυπο. Θα το βλέπετε κάθε μέρα για δέκα χρόνια', en: 'Does not work: "I will do the logo myself". You will see it every day for ten years' },
      ],
    },
    {
      heading: { el: 'Τι κοστίζει το βασικό πακέτο εκκίνησης', en: 'What the basic starter set costs' },
      paragraphs: [
        {
          el: 'Λογότυπο ({price:logo}), 200 επαγγελματικές κάρτες, μια ακρυλική επιγραφή δύο τετραγωνικών και μια ιστοσελίδα Starter ({price:websiteStarter}) κοστίζουν συνολικά λιγότερο από 1.700 ευρώ, με το Google Business Profile δωρεάν. Είναι το σύνολο που χρειάζεται μια νέα επιχείρηση για να τη βρίσκουν, και γίνεται σε τρεις έως τέσσερις εβδομάδες από ένα γραφείο, στην Άρτα.',
          en: 'A logo ({price:logo}), 200 business cards, a two-square-metre acrylic sign and a Starter website ({price:websiteStarter}) come to under 1,700 euros in total, with the Google Business Profile free. That is the set a new business needs to be found, and it is done in three to four weeks by one office, in Arta.',
        },
        {
          el: 'Αν ο προϋπολογισμός είναι μικρότερος, η σειρά μένει η ίδια: λογότυπο, επιγραφή, κάρτες, Google. Η ιστοσελίδα μπορεί να περιμένει έναν-δύο μήνες. Το λογότυπο όχι.',
          en: 'If the budget is smaller, the order stays the same: logo, sign, cards, Google. The website can wait a month or two. The logo cannot.',
        },
      ],
      link: { path: '/pricing', label: { el: 'Όλες οι τιμές στον τιμοκατάλογο', en: 'All prices on the price list' } },
    },
  ],
  faq: [
    {
      q: { el: 'Από πού ξεκινάω αν έχω μόνο 500 ευρώ;', en: 'Where do I start if I only have 500 euros?' },
      a: {
        el: 'Λογότυπο ({price:logo}) και κάρτες. Μετά συμπληρώστε το Google Business Profile μόνοι σας, δωρεάν, με φωτογραφίες του χώρου. Η επιγραφή και η ιστοσελίδα έρχονται μόλις μπουν τα πρώτα έσοδα.',
        en: 'Logo ({price:logo}) and cards. Then complete the Google Business Profile yourself, free, with photos of the premises. The sign and the website come once the first revenue is in.',
      },
    },
    {
      q: { el: 'Χρειάζομαι ιστοσελίδα αν έχω Facebook;', en: 'Do I need a website if I have Facebook?' },
      a: {
        el: 'Το Facebook δεν σας ανήκει και δεν εμφανίζεται στη Google όπως μια ιστοσελίδα. Για καφέ ή μπαρ μπορεί να αρκεί για έναν χρόνο. Για ιατρείο, τεχνικό γραφείο ή κατάλυμα, όχι: ο πελάτης ψάχνει στη Google και περιμένει να βρει σελίδα με υπηρεσίες, τιμές και τηλέφωνο.',
        en: 'Facebook is not yours and does not appear on Google the way a website does. For a café or bar it may be enough for a year. For a clinic, a technical office or accommodation, no: the customer searches Google and expects a page with services, prices and a phone number.',
      },
    },
    {
      q: { el: 'Πόσο κοστίζει η διαφήμιση στη Google για τοπική επιχείρηση;', en: 'How much does Google advertising cost for a local business?' },
      a: {
        el: 'Για τοπική στόχευση στην Άρτα και την Ήπειρο, ένα ρεαλιστικό σημείο εκκίνησης είναι {price:adSpendMin}-{price:adSpendMax} τον μήνα σε διαφημιστικό budget, που πληρώνεται στην πλατφόρμα, συν η διαχείριση από {price:adsMonthly} τον μήνα. Ξεκινήστε όμως από το δωρεάν Google Business Profile.',
        en: 'For local targeting in Arta and Epirus a realistic starting point is {price:adSpendMin}-{price:adSpendMax} a month in ad budget, paid to the platform, plus management from {price:adsMonthly} a month. But start with the free Google Business Profile.',
      },
    },
    {
      q: { el: 'Μπορώ να τα κάνω όλα από ένα γραφείο;', en: 'Can I get it all from one office?' },
      a: {
        el: 'Ναι, αυτό ακριβώς κάνουμε: λογότυπο, επιγραφή, εκτυπώσεις, ιστοσελίδα, social media και διανομές από το γραφείο μας στη Βασ. Πύρρου 30. Το πλεονέκτημα δεν είναι η ευκολία, είναι ότι όλα ταιριάζουν μεταξύ τους.',
        en: 'Yes, that is exactly what we do: logo, sign, printing, website, social media and distribution from our office at Vas. Pyrrou 30. The advantage is not convenience, it is that everything matches.',
      },
    },
  ],
  related: [
    { path: '/diafimistiki-eteria', label: { el: 'Διαφημιστική εταιρεία στην Άρτα', en: 'Advertising agency in Arta' }, description: { el: 'Ο κόμβος: υπηρεσίες, γραφείο, περιοχές.', en: 'The hub: services, office, areas.' } },
    { path: '/guides/poso-kostizei-logo', label: { el: 'Πόσο κοστίζει ένα λογότυπο', en: 'How much a logo costs' }, description: { el: 'Το πρώτο βήμα, αναλυτικά.', en: 'The first step, in detail.' } },
    { path: '/guides/poso-kostizei-epigrafi', label: { el: 'Πόσο κοστίζει μια επιγραφή', en: 'How much a sign costs' }, description: { el: 'Υλικά, φωτισμός, τοποθέτηση.', en: 'Materials, lighting, installation.' } },
    { path: '/digital-marketing', label: { el: 'Digital marketing στην Άρτα', en: 'Digital marketing in Arta' }, description: { el: 'Social media, Google Ads, Meta Ads.', en: 'Social media, Google Ads, Meta Ads.' } },
  ],
  projectSlugs: ['four-aces', 'bocca-cucina-italiana', 'storkway', 'ta-leme-stis-sofias'],
  breadcrumb: [
    { name: 'Οδηγοί', path: '/guides' },
    { name: 'Διαφήμιση μικρής επιχείρησης στην Άρτα', path: '/guides/odigos-diafimisis-mikris-epixeirisis-arta' },
  ],
  datePublished: '2026-09-11',
  dateModified: '2026-09-11',
  readingMinutes: 6,
}
