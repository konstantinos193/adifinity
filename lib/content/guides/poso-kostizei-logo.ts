import type { ContentPage } from '../types'

export const page: ContentPage = {
  path: '/guides/poso-kostizei-logo',
  kind: 'guide',
  seoTitle: 'Πόσο Κοστίζει ένα Λογότυπο το 2026; Τιμές & Τι Περιλαμβάνουν',
  seoDescription:
    'Λογότυπο από {price:logo}, πακέτο με κάρτες από {price:brandBasicPackage}, εταιρική ταυτότητα από {price:brandIdentity}. Τι παίρνετε σε κάθε τιμή, πόσο διαρκεί και τι να ζητήσετε.',
  badge: { el: 'Οδηγός κόστους', en: 'Cost guide' },
  h1: { el: 'Πόσο κοστίζει ένα λογότυπο;', en: 'How much does a logo cost?' },
  summary: {
    el: 'Τι περιλαμβάνει κάθε τιμή, πού πηγαίνει η διαφορά και τι πρέπει να παραλάβετε στο τέλος.',
    en: 'What each price includes, where the difference goes, and what you should receive at the end.',
  },
  intro: [
    {
      el: 'Στην adinfinity ο σχεδιασμός λογοτύπου ξεκινά από {price:logo}. Ένα βασικό πακέτο με λογότυπο, δύο εναλλακτικές προτάσεις και επαγγελματικές κάρτες κοστίζει από {price:brandBasicPackage}, και η πλήρης εταιρική ταυτότητα (λογότυπο, χρώματα, γραμματοσειρές, κάρτες, επιστολόχαρτο, social media, brand guidelines) από {price:brandIdentity}.',
      en: 'At adinfinity logo design starts from {price:logo}. A basic package with the logo, two alternative concepts and business cards costs from {price:brandBasicPackage}, and the full corporate identity (logo, colours, typefaces, cards, letterhead, social media, brand guidelines) from {price:brandIdentity}.',
    },
    {
      el: 'Η διαφορά ανάμεσα σε ένα λογότυπο των 50 ευρώ από πλατφόρμα και σε ένα των {price:logo} δεν είναι το σχέδιο. Είναι ποιος το σχεδίασε, πόσες φορές θα το δείτε πριν αποφασίσετε, και τι αρχεία θα κρατήσετε στο τέλος.',
      en: 'The difference between a 50-euro logo from a platform and one at {price:logo} is not the drawing. It is who designed it, how many rounds you see before deciding, and which files you keep at the end.',
    },
  ],
  sections: [
    {
      heading: { el: 'Τι πληρώνετε σε κάθε τιμή', en: 'What you pay for at each price' },
      table: {
        head: [
          { el: 'Πακέτο', en: 'Package' },
          { el: 'Τιμή', en: 'Price' },
          { el: 'Τι περιλαμβάνει', en: 'What it includes' },
          { el: 'Χρόνος', en: 'Time' },
        ],
        rows: [
          [
            { el: 'Λογότυπο', en: 'Logo' },
            { el: 'από {price:logo}', en: 'from {price:logo}' },
            { el: 'Πρωτότυπος σχεδιασμός, παραλλαγές (οριζόντια, κάθετη, μονόχρωμη), όλα τα διανυσματικά αρχεία', en: 'Original design, variants (horizontal, vertical, monochrome), all vector files' },
            { el: '3-5 εργάσιμες', en: '3-5 working days' },
          ],
          [
            { el: 'Βασικό πακέτο', en: 'Basic package' },
            { el: 'από {price:brandBasicPackage}', en: 'from {price:brandBasicPackage}' },
            { el: 'Λογότυπο με 2 εναλλακτικές, αρχεία AI/PDF/PNG, επαγγελματικές κάρτες, 1 αναθεώρηση', en: 'Logo with 2 alternatives, AI/PDF/PNG files, business cards, 1 revision' },
            { el: '1-2 εβδομάδες', en: '1-2 weeks' },
          ],
          [
            { el: 'Εταιρική ταυτότητα', en: 'Corporate identity' },
            { el: 'από {price:brandIdentity}', en: 'from {price:brandIdentity}' },
            { el: '3 εναλλακτικές, χρώματα και γραμματοσειρές, κάρτες και επιστολόχαρτο, social media profile και cover, brand guidelines, 3 αναθεωρήσεις', en: '3 alternatives, colours and typefaces, cards and letterhead, social profile and cover, brand guidelines, 3 revisions' },
            { el: '2-4 εβδομάδες', en: '2-4 weeks' },
          ],
          [
            { el: 'Premium', en: 'Premium' },
            { el: 'από {price:brandPremium}', en: 'from {price:brandPremium}' },
            { el: 'Όλα τα παραπάνω συν διαφημιστικά και banners, εκτυπώσιμα υλικά, social templates, παρουσίαση, απεριόριστες αναθεωρήσεις', en: 'Everything above plus ads and banners, print materials, social templates, presentation deck, unlimited revisions' },
            { el: '4-6 εβδομάδες', en: '4-6 weeks' },
          ],
        ],
      },
      paragraphs: [
        {
          el: 'Οι τιμές είναι τιμές εκκίνησης. Ένα λογότυπο για ένα καφέ με ένα όνομα και ένα σύμβολο κοστολογείται στη βάση. Μια ταυτότητα για εταιρεία με τρεις θυγατρικές, που πρέπει να δουλεύει σε φορτηγά, στολές και εφαρμογή, όχι.',
          en: 'These are starting prices. A logo for a café with one name and one symbol is priced at the base. An identity for a company with three subsidiaries that has to work on trucks, uniforms and an app is not.',
        },
      ],
    },
    {
      heading: { el: 'Πού πηγαίνει η διαφορά από τα 50 στα {price:logo}', en: 'Where the difference from 50 to {price:logo} goes' },
      paragraphs: [
        {
          el: 'Ένα λογότυπο από πλατφόρμα ή γεννήτρια είναι συνήθως ένα εικονίδιο από βιβλιοθήκη δίπλα σε μια γραμματοσειρά. Θα το δείτε και σε άλλες επιχειρήσεις, δεν θα το κατοχυρώσετε ως σήμα, και συχνά θα παραλάβετε μόνο ένα PNG που δεν μεγεθύνεται για επιγραφή.',
          en: 'A logo from a platform or a generator is usually a stock icon next to a typeface. You will see it on other businesses, you cannot register it as a trademark, and you often receive only a PNG that does not scale up for a shop sign.',
        },
        {
          el: 'Στα {price:logo} πληρώνετε τρία πράγματα: μια συζήτηση για το τι κάνει η επιχείρησή σας και σε ποιους απευθύνεται, σχεδιασμό από την αρχή με προτάσεις που βλέπετε και σχολιάζετε, και τα αρχεία προέλευσης που σας ανήκουν. Το τελευταίο είναι αυτό που οι περισσότεροι ανακαλύπτουν ότι λείπει όταν πάνε να τυπώσουν μια επιγραφή τριών μέτρων.',
          en: 'At {price:logo} you pay for three things: a conversation about what your business does and who it is for, design from scratch with concepts you see and comment on, and the source files, which are yours. The last one is what most people discover is missing when they try to print a three-metre sign.',
        },
      ],
    },
    {
      heading: { el: 'Τι πρέπει να παραλάβετε', en: 'What you should receive' },
      bullets: [
        { el: 'Διανυσματικά αρχεία (AI, EPS, PDF) που μεγεθύνονται χωρίς απώλεια, από κάρτα μέχρι πρόσοψη καταστήματος', en: 'Vector files (AI, EPS, PDF) that scale without loss, from a business card to a shopfront' },
        { el: 'PNG με διαφανές φόντο και JPG για οθόνη, social media και έγγραφα', en: 'PNG with transparent background and JPG for screens, social media and documents' },
        { el: 'Παραλλαγές: οριζόντια και κάθετη διάταξη, έκδοση για σκούρο φόντο, μονόχρωμη', en: 'Variants: horizontal and vertical layout, dark-background version, monochrome' },
        { el: 'Κωδικούς χρωμάτων (CMYK για εκτύπωση, RGB και HEX για οθόνη) και τις γραμματοσειρές', en: 'Colour codes (CMYK for print, RGB and HEX for screen) and the typefaces' },
        { el: 'Γραπτή επιβεβαίωση ότι τα αρχεία σάς ανήκουν και μπορείτε να συνεργαστείτε με οποιονδήποτε στο μέλλον', en: 'Written confirmation that the files are yours and you can work with anyone in future' },
      ],
    },
    {
      heading: { el: 'Πώς δουλεύουμε ένα λογότυπο', en: 'How we work on a logo' },
      paragraphs: [
        {
          el: 'Ξεκινάμε με μια συζήτηση 20 λεπτών, από κοντά στην Άρτα ή τηλεφωνικά: τι πουλάτε, σε ποιους, τι σας αρέσει και τι όχι, πού θα χρησιμοποιηθεί το λογότυπο. Μετά παρουσιάζουμε δύο ή τρεις διαφορετικές κατευθύνσεις, όχι παραλλαγές της ίδιας ιδέας. Επιλέγετε μία και δουλεύουμε πάνω της με γύρους διορθώσεων που συμφωνούμε γραπτώς από την αρχή.',
          en: 'We start with a 20-minute conversation, in person in Arta or by phone: what you sell, to whom, what you like and dislike, where the logo will be used. Then we present two or three different directions, not variations of one idea. You choose one and we refine it through revision rounds agreed in writing up front.',
        },
        {
          el: 'Για την Α.Π.Ο.Φ.Α, τη φοιτητική αθλητική και πολιτιστική ομάδα της Άρτας, η κατεύθυνση που επιλέχθηκε συνδύαζε ένα άγαλμα και ένα πουλί: παράδοση και ελευθερία σε ένα σήμα. Μπορείτε να δείτε το σκεπτικό και το αποτέλεσμα στη μελέτη περίπτωσης.',
          en: 'For A.P.O.F.A., the student sports and cultural association of Arta, the chosen direction combined a statue and a bird: tradition and freedom in one mark. You can see the reasoning and the result in the case study.',
        },
      ],
      link: { path: '/projects/apofa', label: { el: 'Δείτε τη μελέτη περίπτωσης Α.Π.Ο.Φ.Α', en: 'See the A.P.O.F.A. case study' } },
    },
    {
      heading: { el: 'Λογότυπο ή εταιρική ταυτότητα;', en: 'Logo or corporate identity?' },
      paragraphs: [
        {
          el: 'Αν ανοίγετε ένα κατάστημα και χρειάζεστε κάτι για την επιγραφή και τις κάρτες, το λογότυπο αρκεί. Αν θα εμφανίζεστε σε πολλά σημεία (κάρτες, φυλλάδια, social media, ιστοσελίδα, όχημα, στολές) και θέλετε να μοιάζουν όλα δικά σας χωρίς να αποφασίζετε κάθε φορά από την αρχή, χρειάζεστε ταυτότητα: χρώματα, γραμματοσειρές και κανόνες που θα ακολουθεί όποιος φτιάχνει κάτι για εσάς.',
          en: 'If you are opening a shop and need something for the sign and the cards, the logo is enough. If you will appear in many places (cards, flyers, social media, website, vehicle, uniforms) and want them all to look like yours without deciding from scratch each time, you need an identity: colours, typefaces and rules that whoever makes something for you will follow.',
        },
        {
          el: 'Η πρακτική διαφορά: το λογότυπο των {price:logo} σάς δίνει ένα σήμα. Η ταυτότητα των {price:brandIdentity} σάς δίνει και το εγχειρίδιο για το πώς χρησιμοποιείται, ώστε η επιγραφή, το φυλλάδιο και το Instagram να μη μοιάζουν με τρεις διαφορετικές επιχειρήσεις.',
          en: 'The practical difference: the {price:logo} logo gives you a mark. The {price:brandIdentity} identity also gives you the manual for how it is used, so the sign, the flyer and the Instagram do not look like three different businesses.',
        },
      ],
      link: { path: '/etairiki-tautotita', label: { el: 'Τι περιλαμβάνει η εταιρική ταυτότητα', en: 'What corporate identity includes' } },
    },
    {
      heading: { el: 'Τι να ρωτήσετε πριν αναθέσετε', en: 'What to ask before you commission' },
      bullets: [
        { el: 'Πόσες αρχικές προτάσεις θα δω, και είναι διαφορετικές ιδέες ή παραλλαγές;', en: 'How many initial concepts will I see, and are they different ideas or variations?' },
        { el: 'Πόσοι γύροι διορθώσεων περιλαμβάνονται, και τι κοστίζει ο επιπλέον;', en: 'How many revision rounds are included, and what does an extra one cost?' },
        { el: 'Ποια αρχεία παραλαμβάνω, και μου ανήκουν;', en: 'Which files do I receive, and do I own them?' },
        { el: 'Μπορώ να δω δουλειά σας για επιχείρηση του κλάδου μου;', en: 'Can I see your work for a business in my sector?' },
        { el: 'Αν χρειαστώ κάρτες ή επιγραφή, γίνεται από το ίδιο γραφείο;', en: 'If I need cards or a sign, does the same office handle it?' },
      ],
      paragraphs: [
        {
          el: 'Στην adinfinity οι απαντήσεις είναι: δύο ή τρεις διαφορετικές ιδέες, γύροι που συμφωνούνται γραπτώς, όλα τα αρχεία δικά σας, {projects} δημοσιευμένα έργα από την Άρτα και την Ήπειρο, και ναι, εκτύπωση και επιγραφή από το ίδιο γραφείο.',
          en: 'At adinfinity the answers are: two or three different ideas, rounds agreed in writing, all files yours, {projects} published projects from Arta and Epirus, and yes, printing and signage from the same office.',
        },
      ],
    },
  ],
  faq: [
    {
      q: { el: 'Γιατί κοστίζει {price:logo} ένα λογότυπο ενώ υπάρχουν δωρεάν γεννήτριες;', en: 'Why does a logo cost {price:logo} when there are free generators?' },
      a: {
        el: 'Η γεννήτρια σάς δίνει ένα εικονίδιο από βιβλιοθήκη που χρησιμοποιούν και άλλοι, χωρίς διανυσματικά αρχεία και χωρίς δικαίωμα κατοχύρωσης. Τα {price:logo} πληρώνουν σχεδιασμό από την αρχή, γύρους διορθώσεων και αρχεία που σας ανήκουν και μεγεθύνονται για επιγραφή.',
        en: 'A generator gives you a library icon others also use, with no vector files and no right to register it. The {price:logo} pays for design from scratch, revision rounds, and files that are yours and scale up for a sign.',
      },
    },
    {
      q: { el: 'Πόσο διαρκεί ο σχεδιασμός;', en: 'How long does the design take?' },
      a: {
        el: 'Ένα λογότυπο ολοκληρώνεται συνήθως σε 3-5 εργάσιμες από τη στιγμή που έχουμε τις πληροφορίες. Η πλήρης εταιρική ταυτότητα χρειάζεται 2-4 εβδομάδες.',
        en: 'A logo is usually complete in 3-5 working days once we have the information. A full corporate identity takes 2-4 weeks.',
      },
    },
    {
      q: { el: 'Μπορώ να αλλάξω ένα υπάρχον λογότυπο αντί να φτιάξω νέο;', en: 'Can I refresh an existing logo instead of making a new one?' },
      a: {
        el: 'Ναι. Ένα rebranding που κρατά την αναγνωρισιμότητα και διορθώνει τυπογραφία, αναλογίες και χρώματα κοστολογείται συχνά στο επίπεδο του απλού λογοτύπου. Το συζητάμε αφού δούμε το υπάρχον.',
        en: 'Yes. A rebrand that keeps recognition and fixes typography, proportions and colours is often priced at the level of a simple logo. We discuss it after seeing the existing one.',
      },
    },
    {
      q: { el: 'Τα αρχεία μού ανήκουν;', en: 'Do I own the files?' },
      a: {
        el: 'Ναι. Παραλαμβάνετε όλα τα αρχεία προέλευσης και μπορείτε να τα δώσετε σε οποιονδήποτε τυπογράφο, κατασκευαστή επιγραφών ή προγραμματιστή στο μέλλον.',
        en: 'Yes. You receive all source files and can hand them to any printer, sign maker or developer in the future.',
      },
    },
  ],
  priceFrom: 'logo',
  related: [
    { path: '/sxediasmos-logotypou', label: { el: 'Σχεδιασμός λογοτύπου', en: 'Logo design' }, description: { el: 'Η υπηρεσία: διαδικασία, παραδοτέα, τιμή.', en: 'The service: process, deliverables, price.' } },
    { path: '/etairiki-tautotita', label: { el: 'Εταιρική ταυτότητα', en: 'Corporate identity' }, description: { el: 'Λογότυπο, χρώματα, τυπογραφία και brand guidelines.', en: 'Logo, colours, typography and brand guidelines.' } },
    { path: '/graphic-design-guide', label: { el: 'Οδηγός γραφιστικής', en: 'Graphic design guide' }, description: { el: 'Τι να ζητήσετε από έναν γραφίστα.', en: 'What to ask a graphic designer for.' } },
    { path: '/pricing', label: { el: 'Τιμοκατάλογος', en: 'Price list' }, description: { el: 'Όλες οι τιμές εκκίνησης σε έναν πίνακα.', en: 'Every starting price in one table.' } },
  ],
  projectSlugs: ['apofa', 'energy-house', 'boheme-beach-bar', 'box-bijou'],
  breadcrumb: [
    { name: 'Οδηγοί', path: '/guides' },
    { name: 'Πόσο κοστίζει ένα λογότυπο', path: '/guides/poso-kostizei-logo' },
  ],
  datePublished: '2026-09-11',
  dateModified: '2026-09-11',
  readingMinutes: 5,
}
