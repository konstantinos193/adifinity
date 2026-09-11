import type { ContentPage } from '../types'

export const page: ContentPage = {
  path: '/guides/poso-kostizei-istoselida',
  kind: 'guide',
  seoTitle: 'Πόσο Κοστίζει μια Ιστοσελίδα το 2026; Τιμές για Επιχειρήσεις',
  seoDescription:
    'Επαγγελματική ιστοσελίδα από {price:websiteStarter}, εταιρική με admin από {price:websiteBusiness}, e-shop από {price:eshop}. Τι περιλαμβάνει κάθε τιμή, τα κρυφά κόστη και πόσο διαρκεί.',
  badge: { el: 'Οδηγός κόστους', en: 'Cost guide' },
  h1: { el: 'Πόσο κοστίζει μια ιστοσελίδα το 2026;', en: 'How much does a website cost in 2026?' },
  summary: {
    el: 'Τρία επίπεδα τιμών, τι αγοράζει το καθένα, ποια κόστη έρχονται μετά και πότε αξίζει το ακριβότερο.',
    en: 'Three price levels, what each one buys, which costs come afterwards, and when the dearer one is worth it.',
  },
  intro: [
    {
      el: 'Στην adinfinity μια επαγγελματική ιστοσελίδα για επιχείρηση ξεκινά από {price:websiteStarter}. Μια πλήρης εταιρική παρουσία έως 15 σελίδες με δικό σας πίνακα διαχείρισης, blog και analytics ξεκινά από {price:websiteBusiness}, και ένα custom e-shop με online πληρωμές και διαχείριση αποθήκης από {price:eshop}.',
      en: 'At adinfinity a professional business website starts from {price:websiteStarter}. A full corporate presence of up to 15 pages with your own admin panel, blog and analytics starts from {price:websiteBusiness}, and a custom e-shop with online payments and inventory management from {price:eshop}.',
    },
    {
      el: 'Το ερώτημα δεν είναι μόνο τι κοστίζει η κατασκευή. Είναι τι θα πληρώνετε κάθε μήνα μετά, ποιος θα την αλλάζει, και αν σας ανήκει. Αυτά αλλάζουν την πραγματική τιμή περισσότερο από το αρχικό ποσό.',
      en: 'The question is not only what the build costs. It is what you will pay every month afterwards, who will change it, and whether you own it. Those change the real price more than the initial figure.',
    },
  ],
  sections: [
    {
      heading: { el: 'Τα τρία επίπεδα τιμών', en: 'The three price levels' },
      table: {
        head: [
          { el: 'Πακέτο', en: 'Package' },
          { el: 'Τιμή', en: 'Price' },
          { el: 'Για ποιον', en: 'For whom' },
          { el: 'Τι περιλαμβάνει', en: 'What it includes' },
        ],
        rows: [
          [
            { el: 'Starter', en: 'Starter' },
            { el: 'από {price:websiteStarter}', en: 'from {price:websiteStarter}' },
            { el: 'Επαγγελματίες και μικρές επιχειρήσεις που χρειάζονται παρουσία και επικοινωνία', en: 'Professionals and small businesses that need a presence and a way to be contacted' },
            { el: 'Έως 5 ενότητες, responsive, βασικό SEO, φόρμα επικοινωνίας, SSL, 1 μήνας υποστήριξη', en: 'Up to 5 sections, responsive, basic SEO, contact form, SSL, 1 month of support' },
          ],
          [
            { el: 'Business', en: 'Business' },
            { el: 'από {price:websiteBusiness}', en: 'from {price:websiteBusiness}' },
            { el: 'Επιχειρήσεις με πολλές υπηρεσίες που θέλουν να ενημερώνουν μόνες τους το περιεχόμενο', en: 'Businesses with many services that want to update content themselves' },
            { el: 'Έως 15 σελίδες, custom admin, blog, προηγμένο SEO και Google Analytics, social integration, hosting 1 έτος, 3 μήνες υποστήριξη', en: 'Up to 15 pages, custom admin, blog, advanced SEO and Google Analytics, social integration, 1 year hosting, 3 months of support' },
          ],
          [
            { el: 'E-shop', en: 'E-shop' },
            { el: 'από {price:eshop}', en: 'from {price:eshop}' },
            { el: 'Καταστήματα που πουλάνε online', en: 'Shops selling online' },
            { el: 'Custom e-commerce σε Next.js, απεριόριστα προϊόντα, πληρωμές με κάρτα, διαχείριση αποθήκης και παραγγελιών, SEO, hosting 1 έτος, 6 μήνες υποστήριξη', en: 'Custom Next.js e-commerce, unlimited products, card payments, inventory and order management, SEO, 1 year hosting, 6 months of support' },
          ],
        ],
      },
      paragraphs: [
        {
          el: 'Οι web εφαρμογές (συστήματα κρατήσεων, πλατφόρμες, εργαλεία διαχείρισης) κοστολογούνται ανάλογα με τις λειτουργίες. Για παράδειγμα, η πλατφόρμα ακινήτων της SMH Real Estate, με αναζήτηση, κρατήσεις, online πληρωμές, λογαριασμούς χρηστών και admin panel σε δύο γλώσσες, χρειάστηκε τρεις μήνες δουλειάς.',
          en: 'Web applications (booking systems, platforms, management tools) are priced by their features. For example, the SMH Real Estate property platform, with search, bookings, online payments, user accounts and a bilingual admin panel, took three months of work.',
        },
      ],
      link: { path: '/projects/smh-real-estate', label: { el: 'Δείτε τη μελέτη περίπτωσης SMH Real Estate', en: 'See the SMH Real Estate case study' } },
    },
    {
      heading: { el: 'Τα κόστη που έρχονται μετά', en: 'The costs that come afterwards' },
      paragraphs: [
        {
          el: 'Μια ιστοσελίδα έχει τρία τρέχοντα έξοδα: το domain (το όνομα, περίπου 10-20 ευρώ τον χρόνο για .gr), το hosting (ο server που τη σερβίρει) και τη συντήρηση (ενημερώσεις ασφαλείας, backup, μικροαλλαγές). Στα πακέτα Business και E-shop το hosting του πρώτου έτους περιλαμβάνεται.',
          en: 'A website has three running costs: the domain (the name, roughly 10-20 euros a year for .gr), hosting (the server that serves it) and maintenance (security updates, backups, small changes). In the Business and E-shop packages the first year of hosting is included.',
        },
        {
          el: 'Το κόστος που συνήθως δεν αναφέρεται είναι η συνδρομή πλατφόρμας. Ένα e-shop σε Shopify πληρώνει 30 έως 500 ευρώ τον μήνα στην πλατφόρμα, συν προμήθεια ανά συναλλαγή, για όσο καιρό υπάρχει. Ένα custom e-shop με Stripe δεν έχει μηνιαία συνδρομή πλατφόρμας. Σε τρία χρόνια η διαφορά ξεπερνά συχνά το αρχικό κόστος κατασκευής.',
          en: 'The cost usually left unsaid is the platform subscription. A Shopify e-shop pays 30 to 500 euros a month to the platform, plus a fee per transaction, for as long as it exists. A custom e-shop with Stripe has no monthly platform subscription. Over three years the difference often exceeds the initial build cost.',
        },
      ],
      link: { path: '/website-development/maintenance', label: { el: 'Μηνιαία πακέτα συντήρησης', en: 'Monthly maintenance packages' } },
    },
    {
      heading: { el: 'Σας ανήκει η ιστοσελίδα;', en: 'Do you own the website?' },
      paragraphs: [
        {
          el: 'Ρωτήστε το πριν υπογράψετε, γιατί η απάντηση αλλάζει τα πάντα. Σε πολλές προσφορές το «δικό σας site» ζει σε λογαριασμό του κατασκευαστή ή σε πλατφόρμα με συνδρομή: αν σταματήσετε να πληρώνετε ή θελήσετε να αλλάξετε συνεργάτη, μένετε χωρίς site.',
          en: 'Ask before you sign, because the answer changes everything. In many offers "your site" lives in the builder’s account or on a subscription platform: stop paying or try to change partner and you are left without a site.',
        },
        {
          el: 'Στην adinfinity ο κώδικας, το domain και το περιεχόμενο είναι δικά σας. Παραδίδουμε πρόσβαση σε όλα και δεν σας κλειδώνουμε σε πλατφόρμα ή μηνιαία συνδρομή για να παραμείνει η σελίδα online.',
          en: 'At adinfinity the code, the domain and the content are yours. We hand over access to everything and do not lock you into a platform or a monthly subscription to keep the site online.',
        },
      ],
    },
    {
      heading: { el: 'Πόσο διαρκεί η κατασκευή', en: 'How long the build takes' },
      bullets: [
        { el: 'Starter: 2-3 εβδομάδες από τη στιγμή που έχουμε κείμενα και φωτογραφίες', en: 'Starter: 2-3 weeks once we have texts and photos' },
        { el: 'Business: 3-4 εβδομάδες, με τον πίνακα διαχείρισης και την εκπαίδευση στη χρήση του', en: 'Business: 3-4 weeks, including the admin panel and training on it' },
        { el: 'E-shop: 6-10 εβδομάδες, ανάλογα με τα προϊόντα και τις πληρωμές', en: 'E-shop: 6-10 weeks, depending on products and payments' },
        { el: 'Web εφαρμογές: 4-12 εβδομάδες. Το κατάλυμα Αστεριας στην Κορωνησία, με σύστημα κρατήσεων και online πληρωμές, χρειάστηκε 7 εβδομάδες', en: 'Web applications: 4-12 weeks. The Asterias property in Koronisia, with a booking system and online payments, took 7 weeks' },
      ],
      paragraphs: [
        {
          el: 'Ο συνηθέστερος λόγος καθυστέρησης δεν είναι ο κώδικας. Είναι τα κείμενα και οι φωτογραφίες που δεν έχουν παραδοθεί. Αν δεν τα έχετε, το λέμε από την αρχή και βοηθάμε.',
          en: 'The most common cause of delay is not the code. It is the texts and photos that have not been delivered. If you do not have them, we say so at the start and help.',
        },
      ],
    },
    {
      heading: { el: 'Πότε αξίζει το ακριβότερο πακέτο', en: 'When the dearer package is worth it' },
      paragraphs: [
        {
          el: 'Αν θα αλλάζετε τιμές, μενού, προσφορές ή νέα κάθε εβδομάδα, το Business με δικό σας admin πληρώνει τη διαφορά του μέσα σε λίγους μήνες, γιατί δεν θα χρεώνεστε για κάθε αλλαγή. Αν η σελίδα θα μείνει ίδια για έναν χρόνο, το Starter αρκεί.',
          en: 'If you will change prices, menus, offers or news every week, Business with your own admin pays back its difference within a few months, because you will not be charged for every change. If the site will stay the same for a year, Starter is enough.',
        },
        {
          el: 'Αν δέχεστε κρατήσεις ή ραντεβού, το σύστημα κρατήσεων δεν είναι πολυτέλεια: κάθε κράτηση που έρχεται απευθείας αντί μέσω πλατφόρμας γλιτώνει την προμήθεια της πλατφόρμας.',
          en: 'If you take bookings or appointments, a booking system is not a luxury: every booking that arrives directly instead of via a platform saves that platform’s commission.',
        },
      ],
      link: { path: '/website-development/booking-systems', label: { el: 'Συστήματα κρατήσεων', en: 'Booking systems' } },
    },
    {
      heading: { el: 'Τι να ρωτήσετε πριν αναθέσετε', en: 'What to ask before you commission' },
      bullets: [
        { el: 'Μου ανήκει ο κώδικας, το domain και το περιεχόμενο;', en: 'Do I own the code, the domain and the content?' },
        { el: 'Τι πληρώνω κάθε μήνα μετά την παράδοση, και σε ποιον;', en: 'What do I pay each month after delivery, and to whom?' },
        { el: 'Μπορώ να αλλάζω κείμενα και φωτογραφίες μόνος μου;', en: 'Can I change texts and photos myself?' },
        { el: 'Ποιος απαντά αν κάτι χαλάσει, και σε πόσο χρόνο;', en: 'Who answers if something breaks, and how quickly?' },
        { el: 'Μπορώ να δω τρεις ιστοσελίδες σας που είναι online τώρα;', en: 'Can I see three of your websites that are online right now?' },
      ],
      paragraphs: [
        {
          el: 'Οι δικές μας: {liveSites} ιστοσελίδες online, με μελέτη περίπτωσης για την καθεμία. Δείτε τες πριν μας καλέσετε.',
          en: 'Ours: {liveSites} websites online, each with a case study. See them before you call.',
        },
      ],
      link: { path: '/projects', label: { el: 'Δείτε τα έργα', en: 'See the projects' } },
    },
  ],
  faq: [
    {
      q: { el: 'Γιατί μια ιστοσελίδα κοστίζει {price:websiteStarter} και όχι 300 ευρώ;', en: 'Why does a website cost {price:websiteStarter} and not 300 euros?' },
      a: {
        el: 'Τα 300 ευρώ αγοράζουν συνήθως ένα έτοιμο template με τα κείμενά σας μέσα, σε πλατφόρμα με συνδρομή. Τα {price:websiteStarter} αγοράζουν σχεδιασμό για την επιχείρησή σας, κώδικα που σας ανήκει, τεχνικό SEO και έναν άνθρωπο που απαντά στο τηλέφωνο.',
        en: 'The 300 euros usually buy a ready template with your texts inside, on a subscription platform. The {price:websiteStarter} buys design for your business, code you own, technical SEO and a person who answers the phone.',
      },
    },
    {
      q: { el: 'Περιλαμβάνεται το SEO;', en: 'Is SEO included?' },
      a: {
        el: 'Το τεχνικό SEO ναι, σε κάθε πακέτο: δομή επικεφαλίδων, meta δεδομένα, sitemap, robots.txt, structured data και ταχύτητα. Η συνεχής βελτιστοποίηση περιεχομένου και οι διαφημίσεις είναι ξεχωριστή, μηνιαία υπηρεσία.',
        en: 'Technical SEO yes, in every package: heading structure, meta data, sitemap, robots.txt, structured data and speed. Ongoing content optimisation and advertising are a separate, monthly service.',
      },
    },
    {
      q: { el: 'Χρειάζομαι WordPress;', en: 'Do I need WordPress?' },
      a: {
        el: 'Όχι απαραίτητα. Το WordPress είναι μια καλή επιλογή για ιστολόγια και για ομάδες με πολλούς συντάκτες. Για επιχειρήσεις που θέλουν ταχύτητα, ασφάλεια χωρίς plugins και συγκεκριμένες λειτουργίες, χτίζουμε custom σε Next.js. Έχουμε ξεχωριστό οδηγό για την απόφαση.',
        en: 'Not necessarily. WordPress is a good choice for blogs and for teams with many editors. For businesses that want speed, security without plugins and specific functionality, we build custom in Next.js. There is a separate guide for that decision.',
      },
    },
    {
      q: { el: 'Μπορώ να πληρώσω σε δόσεις;', en: 'Can I pay in instalments?' },
      a: {
        el: 'Ναι, για μεγαλύτερα έργα προσφέρουμε τμηματική πληρωμή, συνήθως σε τρία μέρη: έναρξη, παράδοση σχεδιασμού, δημοσίευση.',
        en: 'Yes, for larger projects we offer staged payment, usually in three parts: start, design delivery, launch.',
      },
    },
  ],
  priceFrom: 'websiteStarter',
  related: [
    { path: '/website-development', label: { el: 'Κατασκευή ιστοσελίδων', en: 'Website development' }, description: { el: 'Η υπηρεσία, τα πακέτα και τα έργα.', en: 'The service, the packages and the projects.' } },
    { path: '/guides/wordpress-i-nextjs', label: { el: 'WordPress ή custom Next.js;', en: 'WordPress or custom Next.js?' }, description: { el: 'Πότε αξίζει το καθένα.', en: 'When each one is worth it.' } },
    { path: '/website-development/e-commerce', label: { el: 'Κατασκευή e-shop', en: 'E-shop development' }, description: { el: 'Χωρίς μηνιαίες χρεώσεις πλατφόρμας.', en: 'No monthly platform fees.' } },
    { path: '/pricing', label: { el: 'Τιμοκατάλογος', en: 'Price list' }, description: { el: 'Όλες οι τιμές εκκίνησης σε έναν πίνακα.', en: 'Every starting price in one table.' } },
  ],
  projectSlugs: ['asterias-koronisia', 'smh-real-estate', 'lincanto-apartments', 'kyklos-education'],
  breadcrumb: [
    { name: 'Οδηγοί', path: '/guides' },
    { name: 'Πόσο κοστίζει μια ιστοσελίδα', path: '/guides/poso-kostizei-istoselida' },
  ],
  datePublished: '2026-09-11',
  dateModified: '2026-09-11',
  readingMinutes: 6,
}
