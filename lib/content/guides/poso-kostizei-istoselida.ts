import type { ContentPage } from '../types'

export const page: ContentPage = {
  path: '/guides/poso-kostizei-istoselida',
  kind: 'guide',
  seoTitle: 'Πόσο Κοστίζει μια Ιστοσελίδα το 2026; Τι Καθορίζει την Τιμή',
  seoDescription:
    'Τι καθορίζει το κόστος μιας ιστοσελίδας, τι περιλαμβάνει κάθε πακέτο (Starter, Business, E-shop), ποια κόστη έρχονται μετά και τι να ρωτήσετε. Γραπτή προσφορά σε 24 ώρες.',
  badge: { el: 'Οδηγός κόστους', en: 'Cost guide' },
  h1: { el: 'Πόσο κοστίζει μια ιστοσελίδα το 2026;', en: 'How much does a website cost in 2026?' },
  summary: {
    el: 'Τι καθορίζει την τιμή, τρία επίπεδα πακέτων και τι αγοράζει το καθένα, ποια κόστη έρχονται μετά και πότε αξίζει το μεγαλύτερο.',
    en: 'What sets the price, three package levels and what each one buys, which costs come afterwards, and when the bigger one is worth it.',
  },
  intro: [
    {
      el: 'Το κόστος μιας ιστοσελίδας καθορίζεται από τον αριθμό των σελίδων, το αν θα την ενημερώνετε μόνοι σας (πίνακας διαχείρισης), το αν πουλάει online ή δέχεται κρατήσεις, τις γλώσσες, και τις συνδέσεις με άλλα συστήματα. Στην adinfinity δουλεύουμε με τρία επίπεδα πακέτων, Starter, Business και E-shop, και κάθε έργο κοστολογείται γραπτώς μέσα σε 24 ώρες από την πρώτη συζήτηση.',
      en: 'The cost of a website is set by the number of pages, whether you will update it yourself (an admin panel), whether it sells online or takes bookings, the languages, and the connections to other systems. At adinfinity we work with three package levels, Starter, Business and E-shop, and every project is quoted in writing within 24 hours of the first conversation.',
    },
    {
      el: 'Το ερώτημα δεν είναι μόνο τι κοστίζει η κατασκευή. Είναι τι θα πληρώνετε κάθε μήνα μετά, ποιος θα την αλλάζει, και αν σας ανήκει. Αυτά αλλάζουν την πραγματική τιμή περισσότερο από το αρχικό ποσό.',
      en: 'The question is not only what the build costs. It is what you will pay every month afterwards, who will change it, and whether you own it. Those change the real price more than the initial figure.',
    },
  ],
  sections: [
    {
      heading: { el: 'Τα τρία επίπεδα πακέτων', en: 'The three package levels' },
      table: {
        head: [
          { el: 'Πακέτο', en: 'Package' },
          { el: 'Για ποιον', en: 'For whom' },
          { el: 'Τι περιλαμβάνει', en: 'What it includes' },
          { el: 'Χρόνος', en: 'Time' },
        ],
        rows: [
          [
            { el: 'Starter', en: 'Starter' },
            { el: 'Επαγγελματίες και μικρές επιχειρήσεις που χρειάζονται παρουσία και επικοινωνία', en: 'Professionals and small businesses that need a presence and a way to be contacted' },
            { el: 'Έως 5 ενότητες, responsive, βασικό SEO, φόρμα επικοινωνίας, SSL, 1 μήνας υποστήριξη', en: 'Up to 5 sections, responsive, basic SEO, contact form, SSL, 1 month of support' },
            { el: '2-3 εβδομάδες', en: '2-3 weeks' },
          ],
          [
            { el: 'Business', en: 'Business' },
            { el: 'Επιχειρήσεις με πολλές υπηρεσίες που θέλουν να ενημερώνουν μόνες τους το περιεχόμενο', en: 'Businesses with many services that want to update content themselves' },
            { el: 'Έως 15 σελίδες, custom admin, blog, προηγμένο SEO και Google Analytics, social integration, hosting 1 έτος, 3 μήνες υποστήριξη', en: 'Up to 15 pages, custom admin, blog, advanced SEO and Google Analytics, social integration, 1 year hosting, 3 months of support' },
            { el: '3-4 εβδομάδες', en: '3-4 weeks' },
          ],
          [
            { el: 'E-shop', en: 'E-shop' },
            { el: 'Καταστήματα που πουλάνε online', en: 'Shops selling online' },
            { el: 'Custom e-commerce σε Next.js, απεριόριστα προϊόντα, πληρωμές με κάρτα, διαχείριση αποθήκης και παραγγελιών, SEO, hosting 1 έτος, 6 μήνες υποστήριξη', en: 'Custom Next.js e-commerce, unlimited products, card payments, inventory and order management, SEO, 1 year hosting, 6 months of support' },
            { el: '6-10 εβδομάδες', en: '6-10 weeks' },
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
      heading: { el: 'Τι καθορίζει την τιμή', en: 'What sets the price' },
      bullets: [
        { el: 'Σελίδες και περιεχόμενο: πέντε ενότητες σε μία σελίδα είναι διαφορετική δουλειά από δεκαπέντε σελίδες με blog', en: 'Pages and content: five sections on one page is a different job from fifteen pages with a blog' },
        { el: 'Πίνακας διαχείρισης: αν θα αλλάζετε τιμές, μενού ή νέα μόνοι σας, χτίζεται admin για ό,τι αλλάζει', en: 'Admin panel: if you will change prices, menus or news yourself, an admin is built for what changes' },
        { el: 'Πωλήσεις ή κρατήσεις online: πληρωμές, αποθήκη, διαθεσιμότητα και συγχρονισμός με πλατφόρμες είναι λογισμικό, όχι σελίδες', en: 'Online sales or bookings: payments, inventory, availability and platform sync are software, not pages' },
        { el: 'Γλώσσες: κάθε γλώσσα είναι ξεχωριστό περιεχόμενο και ξεχωριστές διευθύνσεις για τη Google', en: 'Languages: each language is separate content and separate addresses for Google' },
        { el: 'Συνδέσεις: Booking.com, λογιστικό, CRM, χάρτες, email marketing', en: 'Connections: Booking.com, accounting, CRM, maps, email marketing' },
        { el: 'Υλικό: αν τα κείμενα και οι φωτογραφίες υπάρχουν ή πρέπει να γίνουν', en: 'Material: whether the texts and photos exist or must be produced' },
      ],
    },
    {
      heading: { el: 'Τα κόστη που έρχονται μετά', en: 'The costs that come afterwards' },
      paragraphs: [
        {
          el: 'Μια ιστοσελίδα έχει τρία τρέχοντα έξοδα: το domain (το όνομα, μια μικρή ετήσια χρέωση στον καταχωρητή), το hosting (ο server που τη σερβίρει) και τη συντήρηση (ενημερώσεις ασφαλείας, backup, μικροαλλαγές). Στα πακέτα Business και E-shop το hosting του πρώτου έτους περιλαμβάνεται.',
          en: 'A website has three running costs: the domain (the name, a small annual fee to the registrar), hosting (the server that serves it) and maintenance (security updates, backups, small changes). In the Business and E-shop packages the first year of hosting is included.',
        },
        {
          el: 'Το κόστος που συνήθως δεν αναφέρεται είναι η συνδρομή πλατφόρμας. Ένα e-shop σε Shopify πληρώνει μηνιαία συνδρομή στην πλατφόρμα, συν προμήθεια ανά συναλλαγή, για όσο καιρό υπάρχει. Ένα custom e-shop με Stripe δεν έχει μηνιαία συνδρομή πλατφόρμας. Σε τρία χρόνια η διαφορά είναι συχνά μεγαλύτερη από το αρχικό κόστος κατασκευής.',
          en: 'The cost usually left unsaid is the platform subscription. A Shopify e-shop pays a monthly subscription to the platform, plus a fee per transaction, for as long as it exists. A custom e-shop with Stripe has no monthly platform subscription. Over three years the difference is often larger than the initial build cost.',
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
      heading: { el: 'Πότε αξίζει το μεγαλύτερο πακέτο', en: 'When the bigger package is worth it' },
      paragraphs: [
        {
          el: 'Αν θα αλλάζετε τιμές, μενού, προσφορές ή νέα κάθε εβδομάδα, το Business με δικό σας admin αποσβένει τη διαφορά του μέσα σε λίγους μήνες, γιατί δεν θα χρεώνεστε για κάθε αλλαγή. Αν η σελίδα θα μείνει ίδια για έναν χρόνο, το Starter αρκεί.',
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
      q: { el: 'Πόσο κοστίζει, τελικά, μια ιστοσελίδα;', en: 'So how much does a website cost?' },
      a: {
        el: 'Κατόπιν προσφοράς, γιατί το ποσό αλλάζει με τις σελίδες, το admin, τις γλώσσες και το αν πουλάει ή δέχεται κρατήσεις. Μας λέτε τι πρέπει να κάνει η σελίδα και έχετε γραπτή προσφορά μέσα σε 24 ώρες, με το τι περιλαμβάνει, σε τι χρόνο και τι πληρώνετε μετά.',
        en: 'On quotation, because the figure changes with the pages, the admin, the languages and whether it sells or takes bookings. Tell us what the site must do and you have a written quote within 24 hours, with what it includes, the timeline and what you pay afterwards.',
      },
    },
    {
      q: { el: 'Γιατί μια custom ιστοσελίδα κοστίζει περισσότερο από ένα template;', en: 'Why does a custom website cost more than a template?' },
      a: {
        el: 'Το template είναι μια έτοιμη σελίδα με τα κείμενά σας μέσα, συνήθως σε πλατφόρμα με συνδρομή. Η custom κατασκευή αγοράζει σχεδιασμό για την επιχείρησή σας, κώδικα που σας ανήκει, τεχνικό SEO και έναν άνθρωπο που απαντά στο τηλέφωνο.',
        en: 'A template is a ready page with your texts inside, usually on a subscription platform. A custom build buys design for your business, code you own, technical SEO and a person who answers the phone.',
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
      q: { el: 'Μπορώ να πληρώσω σε δόσεις;', en: 'Can I pay in instalments?' },
      a: {
        el: 'Ναι, για μεγαλύτερα έργα προσφέρουμε τμηματική πληρωμή, συνήθως σε τρία μέρη: έναρξη, παράδοση σχεδιασμού, δημοσίευση. Το γράφουμε στην προσφορά.',
        en: 'Yes, for larger projects we offer staged payment, usually in three parts: start, design delivery, launch. It is stated in the quote.',
      },
    },
  ],
  related: [
    { path: '/website-development', label: { el: 'Κατασκευή ιστοσελίδων', en: 'Website development' }, description: { el: 'Η υπηρεσία, τα πακέτα και τα έργα.', en: 'The service, the packages and the projects.' } },
    { path: '/guides/wordpress-i-nextjs', label: { el: 'WordPress ή custom Next.js;', en: 'WordPress or custom Next.js?' }, description: { el: 'Πότε αξίζει το καθένα.', en: 'When each one is worth it.' } },
    { path: '/website-development/e-commerce', label: { el: 'Κατασκευή e-shop', en: 'E-shop development' }, description: { el: 'Χωρίς μηνιαίες χρεώσεις πλατφόρμας.', en: 'No monthly platform fees.' } },
    { path: '/pricing', label: { el: 'Πακέτα υπηρεσιών', en: 'Service packages' }, description: { el: 'Τι περιλαμβάνει κάθε πακέτο, σε έναν πίνακα.', en: 'What every package includes, in one table.' } },
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
