import type { ContentPage } from '../types'

export const page: ContentPage = {
  path: '/guides/wordpress-i-nextjs',
  kind: 'guide',
  seoTitle: 'WordPress ή Custom Next.js; Πότε Αξίζει το Καθένα',
  seoDescription:
    'Οδηγός απόφασης για επιχειρήσεις: πότε αρκεί το WordPress, πότε αξίζει custom ιστοσελίδα σε Next.js, τι αλλάζει σε κόστος, ταχύτητα, ασφάλεια και συντήρηση. Χωρίς δογματισμό.',
  badge: { el: 'Οδηγός απόφασης', en: 'Decision guide' },
  h1: { el: 'WordPress ή custom Next.js;', en: 'WordPress or custom Next.js?' },
  summary: {
    el: 'Έχουμε παραδώσει και τα δύο. Να πότε αρκεί το ένα και πότε το άλλο πληρώνει τη διαφορά του.',
    en: 'We have delivered both. Here is when one is enough and when the other pays back its difference.',
  },
  intro: [
    {
      el: 'Σύντομη απάντηση: αν η ιστοσελίδα σας είναι κυρίως άρθρα και σελίδες που ενημερώνουν πολλοί άνθρωποι, και ο προϋπολογισμός είναι μικρός, το WordPress είναι λογική επιλογή. Αν χρειάζεστε κρατήσεις, πληρωμές, ενσωματώσεις, μεγάλη ταχύτητα σε κινητό ή απλώς κάτι που δεν θα σπάσει με την επόμενη ενημέρωση plugin, η custom κατασκευή σε Next.js αξίζει τη διαφορά.',
      en: 'Short answer: if your website is mostly articles and pages updated by many people, and the budget is small, WordPress is a sensible choice. If you need bookings, payments, integrations, real speed on mobile, or simply something that will not break with the next plugin update, a custom Next.js build is worth the difference.',
    },
    {
      el: 'Στα νέα μας έργα δουλεύουμε custom σε React και Next.js. Το portfolio μας περιλαμβάνει και παλαιότερα έργα σε άλλη τεχνολογία, οπότε η σύγκριση παρακάτω είναι από εμπειρία και στις δύο πλευρές.',
      en: 'On new projects we build custom in React and Next.js. Our portfolio also includes older projects on other technology, so the comparison below comes from experience on both sides.',
    },
  ],
  sections: [
    {
      heading: { el: 'Η σύγκριση σε έναν πίνακα', en: 'The comparison in one table' },
      table: {
        head: [
          { el: 'Κριτήριο', en: 'Criterion' },
          { el: 'WordPress', en: 'WordPress' },
          { el: 'Custom Next.js', en: 'Custom Next.js' },
        ],
        rows: [
          [
            { el: 'Αρχικό κόστος', en: 'Initial cost' },
            { el: 'Χαμηλότερο, ειδικά με έτοιμο theme', en: 'Lower, especially with a ready theme' },
            { el: 'Υψηλότερο· κατόπιν προσφοράς, ανάλογα με σελίδες, admin και λειτουργίες', en: 'Higher; on quotation, depending on pages, admin and features' },
          ],
          [
            { el: 'Ταχύτητα', en: 'Speed' },
            { el: 'Εξαρτάται από theme, plugins και hosting. Συχνά βαριά', en: 'Depends on theme, plugins and hosting. Often heavy' },
            { el: 'Στατική παράδοση σελίδων, μόνο ο κώδικας που χρειάζεται', en: 'Static page delivery, only the code that is needed' },
          ],
          [
            { el: 'Ασφάλεια', en: 'Security' },
            { el: 'Ο πιο στοχευμένος στόχος στο web. Χρειάζεται συνεχείς ενημερώσεις plugins', en: 'The most targeted platform on the web. Needs constant plugin updates' },
            { el: 'Χωρίς plugins τρίτων, χωρίς πίνακα σύνδεσης εκτεθειμένο σε όλους', en: 'No third-party plugins, no login panel exposed to everyone' },
          ],
          [
            { el: 'Συντήρηση', en: 'Maintenance' },
            { el: 'Μηνιαία: ενημερώσεις core, theme, plugins, έλεγχος συμβατότητας', en: 'Monthly: core, theme and plugin updates, compatibility checks' },
            { el: 'Ενημερώσεις ασφαλείας και backup, χωρίς εξαρτήσεις που σπάνε', en: 'Security updates and backups, without dependencies that break' },
          ],
          [
            { el: 'Επεξεργασία περιεχομένου', en: 'Content editing' },
            { el: 'Ώριμος editor, ιδανικός για πολλούς συντάκτες', en: 'Mature editor, ideal for many editors' },
            { el: 'Custom admin για ό,τι αλλάζει πραγματικά, όχι για τα πάντα', en: 'Custom admin for what actually changes, not for everything' },
          ],
          [
            { el: 'Κρατήσεις, πληρωμές, ενσωματώσεις', en: 'Bookings, payments, integrations' },
            { el: 'Μέσω plugins, με περιορισμούς και συνδρομές', en: 'Via plugins, with limits and subscriptions' },
            { el: 'Χτισμένα για την περίπτωσή σας', en: 'Built for your case' },
          ],
          [
            { el: 'E-shop', en: 'E-shop' },
            { el: 'WooCommerce: δωρεάν πυρήνας, επί πληρωμή επεκτάσεις', en: 'WooCommerce: free core, paid extensions' },
            { el: 'Custom με Stripe, χωρίς μηνιαία συνδρομή πλατφόρμας', en: 'Custom with Stripe, no monthly platform subscription' },
          ],
        ],
      },
    },
    {
      heading: { el: 'Πότε αρκεί το WordPress', en: 'When WordPress is enough' },
      bullets: [
        { el: 'Η σελίδα είναι κυρίως άρθρα, νέα ή ενημερωτικό περιεχόμενο που ανανεώνεται συχνά', en: 'The site is mostly articles, news or informational content updated often' },
        { el: 'Πολλοί άνθρωποι θα γράφουν και θα επεξεργάζονται περιεχόμενο', en: 'Many people will write and edit content' },
        { el: 'Ο προϋπολογισμός είναι πολύ μικρός και χρειάζεστε κάτι online γρήγορα', en: 'The budget is very small and you need something online quickly' },
        { el: 'Δεν χρειάζεστε κρατήσεις, πληρωμές ή σύνδεση με άλλα συστήματα', en: 'You do not need bookings, payments or connection to other systems' },
      ],
      paragraphs: [
        {
          el: 'Σε αυτές τις περιπτώσεις το WordPress είναι μια ώριμη, λογική επιλογή. Το μόνο που πρέπει να προϋπολογίσετε είναι η μηνιαία συντήρηση: οι ενημερώσεις δεν είναι προαιρετικές, γιατί η πλατφόρμα είναι ο πιο συχνός στόχος επιθέσεων στο web.',
          en: 'In those cases WordPress is a mature, sensible choice. The one thing to budget for is monthly maintenance: updates are not optional, because the platform is the most frequent target of attacks on the web.',
        },
      ],
    },
    {
      heading: { el: 'Πότε αξίζει η custom κατασκευή', en: 'When a custom build is worth it' },
      bullets: [
        { el: 'Δέχεστε κρατήσεις ή ραντεβού και θέλετε να μην πληρώνετε προμήθεια σε πλατφόρμες', en: 'You take bookings or appointments and do not want to pay platform commission' },
        { el: 'Πουλάτε online και δεν θέλετε μηνιαία συνδρομή πλατφόρμας για πάντα', en: 'You sell online and do not want a platform subscription forever' },
        { el: 'Η ταχύτητα σε κινητό μετράει, γιατί από εκεί έρχονται οι πελάτες σας', en: 'Mobile speed matters, because that is where your customers come from' },
        { el: 'Χρειάζεστε σύνδεση με άλλα συστήματα: Booking.com, λογιστικό, CRM, χάρτες, πληρωμές', en: 'You need connection to other systems: Booking.com, accounting, CRM, maps, payments' },
        { el: 'Θέλετε η σελίδα να μοιάζει δική σας, όχι το ίδιο theme με άλλες χίλιες', en: 'You want the site to look like yours, not the same theme as a thousand others' },
      ],
      paragraphs: [
        {
          el: 'Παράδειγμα: τα L’Incanto Apartments στην Πρέβεζα ήθελαν να δέχονται απευθείας κρατήσεις αντί να εξαρτώνται από πλατφόρμες, με ξεχωριστή σελίδα για καθένα από τα δέκα διαμερίσματα και περιεχόμενο σε ελληνικά, αγγλικά και ιταλικά. Αυτό δεν είναι δουλειά για theme.',
          en: 'Example: L’Incanto Apartments in Preveza wanted to take direct bookings instead of depending on platforms, with a separate page for each of the ten apartments and content in Greek, English and Italian. That is not a job for a theme.',
        },
      ],
      link: { path: '/projects/lincanto-apartments', label: { el: 'Δείτε τη μελέτη περίπτωσης L’Incanto', en: 'See the L’Incanto case study' } },
    },
    {
      heading: { el: 'Τι σημαίνει «custom» στην πράξη', en: 'What "custom" means in practice' },
      paragraphs: [
        {
          el: 'Δεν σημαίνει ότι γράφουμε τα πάντα από το μηδέν κάθε φορά. Σημαίνει ότι η σελίδα χτίζεται σε React και Next.js με τον κώδικα που χρειάζεται η δική σας περίπτωση, χωρίς page builder, χωρίς plugins τρίτων που ενημερώνονται από άγνωστους, και με πίνακα διαχείρισης μόνο για ό,τι θα αλλάζετε πραγματικά.',
          en: 'It does not mean we write everything from zero each time. It means the site is built in React and Next.js with the code your case needs, without a page builder, without third-party plugins updated by strangers, and with an admin panel only for what you will actually change.',
        },
        {
          el: 'Το αποτέλεσμα φορτώνει γρήγορα γιατί σερβίρεται σε μεγάλο βαθμό ως στατικές σελίδες, και συντηρείται εύκολα γιατί δεν έχει σαράντα εξαρτήσεις που πρέπει να συμφωνούν μεταξύ τους.',
          en: 'The result loads fast because it is largely served as static pages, and it is easy to maintain because it does not have forty dependencies that must agree with each other.',
        },
      ],
    },
    {
      heading: { el: 'Η μετάβαση από WordPress', en: 'Migrating from WordPress' },
      paragraphs: [
        {
          el: 'Αν έχετε ήδη WordPress και σκέφτεστε αλλαγή, το κρίσιμο είναι να μη χαθεί ό,τι έχει κερδίσει η σελίδα στη Google. Κρατάμε τις διευθύνσεις που έχουν επισκεψιμότητα ή τις ανακατευθύνουμε μία προς μία, μεταφέρουμε το περιεχόμενο, και συνδέουμε τη νέα σελίδα στο Search Console πριν τη δημοσίευση. Το ίδιο κάναμε και στη δική μας μετάβαση από την παλιά Joomla ιστοσελίδα.',
          en: 'If you already have WordPress and are considering a change, the critical part is not losing what the site has earned on Google. We keep the addresses that have traffic or redirect them one by one, move the content, and connect the new site to Search Console before launch. We did the same in our own migration from the old Joomla site.',
        },
      ],
    },
  ],
  faq: [
    {
      q: { el: 'Είναι το WordPress «κακό»;', en: 'Is WordPress "bad"?' },
      a: {
        el: 'Όχι. Είναι η σωστή επιλογή για ιστολόγια, ενημερωτικά sites και ομάδες με πολλούς συντάκτες. Γίνεται λάθος επιλογή όταν φορτώνεται με plugins για να κάνει δουλειά για την οποία δεν σχεδιάστηκε.',
        en: 'No. It is the right choice for blogs, editorial sites and teams with many editors. It becomes the wrong choice when it is loaded with plugins to do work it was not designed for.',
      },
    },
    {
      q: { el: 'Μπορώ να αλλάζω περιεχόμενο σε custom ιστοσελίδα;', en: 'Can I edit content on a custom website?' },
      a: {
        el: 'Ναι, εφόσον το ζητήσετε από την αρχή. Παραδίδουμε πίνακα διαχείρισης για κείμενα, φωτογραφίες, τιμές, νέα ή ό,τι αλλάζει στη δική σας σελίδα, και σας δείχνουμε πώς δουλεύει.',
        en: 'Yes, if you ask for it at the start. We deliver an admin panel for texts, photos, prices, news or whatever changes on your site, and show you how it works.',
      },
    },
    {
      q: { el: 'Πόσο κοστίζει η custom κατασκευή;', en: 'How much does a custom build cost?' },
      a: {
        el: 'Κατόπιν προσφοράς: εξαρτάται από τις σελίδες, το admin, τις γλώσσες και τις λειτουργίες (κρατήσεις, πληρωμές, συνδέσεις). Μας λέτε τι πρέπει να κάνει η σελίδα και έχετε γραπτή προσφορά μέσα σε 24 ώρες.',
        en: 'On quotation: it depends on the pages, the admin, the languages and the features (bookings, payments, integrations). Tell us what the site must do and you have a written quote within 24 hours.',
      },
    },
    {
      q: { el: 'Το Next.js είναι καλό για SEO;', en: 'Is Next.js good for SEO?' },
      a: {
        el: 'Ναι. Οι σελίδες παράγονται ως πλήρες HTML στον server, όπως ακριβώς θέλει η Google, και έχουμε πλήρη έλεγχο σε meta δεδομένα, structured data, sitemap και ταχύτητα. Αυτή η ιστοσελίδα είναι χτισμένη έτσι.',
        en: 'Yes. Pages are generated as complete HTML on the server, exactly as Google wants, and we have full control over meta data, structured data, sitemap and speed. This website is built that way.',
      },
    },
  ],
  related: [
    { path: '/guides/poso-kostizei-istoselida', label: { el: 'Πόσο κοστίζει μια ιστοσελίδα', en: 'How much a website costs' }, description: { el: 'Τα τρία επίπεδα τιμών και τα κόστη που έρχονται μετά.', en: 'The three price levels and the costs that follow.' } },
    { path: '/website-development/custom-web-apps', label: { el: 'Custom εταιρικές ιστοσελίδες', en: 'Custom corporate websites' }, description: { el: 'Χωρίς templates, σε React και Next.js.', en: 'No templates, in React and Next.js.' } },
    { path: '/website-development/e-commerce', label: { el: 'Κατασκευή e-shop', en: 'E-shop development' }, description: { el: 'Custom με Stripe, χωρίς συνδρομή πλατφόρμας.', en: 'Custom with Stripe, no platform subscription.' } },
    { path: '/website-development/maintenance', label: { el: 'Συντήρηση ιστοσελίδας', en: 'Website maintenance' }, description: { el: 'Μηνιαία πακέτα, χωρίς έκπληξη στον λογαριασμό.', en: 'Monthly packages, no surprises on the bill.' } },
  ],
  projectSlugs: ['lincanto-apartments', 'smh-real-estate', 'asterias-koronisia', 'kyklos-education'],
  breadcrumb: [
    { name: 'Οδηγοί', path: '/guides' },
    { name: 'WordPress ή Next.js', path: '/guides/wordpress-i-nextjs' },
  ],
  datePublished: '2026-09-11',
  dateModified: '2026-09-11',
  readingMinutes: 6,
}
