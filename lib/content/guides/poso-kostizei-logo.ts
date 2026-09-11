import type { ContentPage } from '../types'

export const page: ContentPage = {
  path: '/guides/poso-kostizei-logo',
  kind: 'guide',
  seoTitle: 'Πόσο Κοστίζει ένα Λογότυπο; Τι Καθορίζει την Τιμή',
  seoDescription:
    'Τι καθορίζει το κόστος ενός λογοτύπου, τι περιλαμβάνει κάθε πακέτο (λογότυπο, βασικό, εταιρική ταυτότητα) και τι να ρωτήσετε πριν αναθέσετε. Γραπτή προσφορά σε 24 ώρες.',
  badge: { el: 'Οδηγός κόστους', en: 'Cost guide' },
  h1: { el: 'Πόσο κοστίζει ένα λογότυπο;', en: 'How much does a logo cost?' },
  summary: {
    el: 'Τι καθορίζει την τιμή, τι περιλαμβάνει κάθε πακέτο, πού πηγαίνει η διαφορά και τι πρέπει να παραλάβετε στο τέλος.',
    en: 'What sets the price, what each package includes, where the difference goes, and what you should receive at the end.',
  },
  intro: [
    {
      el: 'Το κόστος ενός λογοτύπου εξαρτάται από τέσσερα πράγματα: πόσες διαφορετικές προτάσεις θα δείτε, πόσοι γύροι διορθώσεων περιλαμβάνονται, σε πόσες εφαρμογές πρέπει να δουλεύει (κάρτα, επιγραφή, όχημα, οθόνη) και αν παραδίδεται μόνο του ή μαζί με εταιρική ταυτότητα. Στην adinfinity κάθε λογότυπο κοστολογείται γραπτώς, μετά από μια συζήτηση 20 λεπτών, και η προσφορά έρχεται μέσα σε 24 ώρες.',
      en: 'The cost of a logo depends on four things: how many different concepts you will see, how many revision rounds are included, how many applications it must work in (card, sign, vehicle, screen) and whether it comes alone or with a corporate identity. At adinfinity every logo is quoted in writing after a 20-minute conversation, and the quote arrives within 24 hours.',
    },
    {
      el: 'Η διαφορά ανάμεσα σε ένα λογότυπο από πλατφόρμα και σε ένα από γραφίστα δεν είναι το σχέδιο. Είναι ποιος το σχεδίασε, πόσες φορές θα το δείτε πριν αποφασίσετε, και τι αρχεία θα κρατήσετε στο τέλος.',
      en: 'The difference between a logo from a platform and one from a designer is not the drawing. It is who designed it, how many rounds you see before deciding, and which files you keep at the end.',
    },
  ],
  sections: [
    {
      heading: { el: 'Τι περιλαμβάνει κάθε πακέτο', en: 'What each package includes' },
      table: {
        head: [
          { el: 'Πακέτο', en: 'Package' },
          { el: 'Τι περιλαμβάνει', en: 'What it includes' },
          { el: 'Χρόνος', en: 'Time' },
        ],
        rows: [
          [
            { el: 'Λογότυπο', en: 'Logo' },
            { el: 'Πρωτότυπος σχεδιασμός, παραλλαγές (οριζόντια, κάθετη, μονόχρωμη), όλα τα διανυσματικά αρχεία', en: 'Original design, variants (horizontal, vertical, monochrome), all vector files' },
            { el: '3-5 εργάσιμες', en: '3-5 working days' },
          ],
          [
            { el: 'Βασικό πακέτο', en: 'Basic package' },
            { el: 'Λογότυπο με 2 εναλλακτικές, αρχεία AI/PDF/PNG, επαγγελματικές κάρτες, 1 αναθεώρηση', en: 'Logo with 2 alternatives, AI/PDF/PNG files, business cards, 1 revision' },
            { el: '1-2 εβδομάδες', en: '1-2 weeks' },
          ],
          [
            { el: 'Εταιρική ταυτότητα', en: 'Corporate identity' },
            { el: '3 εναλλακτικές, χρώματα και γραμματοσειρές, κάρτες και επιστολόχαρτο, social media profile και cover, brand guidelines, 3 αναθεωρήσεις', en: '3 alternatives, colours and typefaces, cards and letterhead, social profile and cover, brand guidelines, 3 revisions' },
            { el: '2-4 εβδομάδες', en: '2-4 weeks' },
          ],
          [
            { el: 'Premium', en: 'Premium' },
            { el: 'Όλα τα παραπάνω συν διαφημιστικά και banners, εκτυπώσιμα υλικά, social templates, παρουσίαση, απεριόριστες αναθεωρήσεις', en: 'Everything above plus ads and banners, print materials, social templates, presentation deck, unlimited revisions' },
            { el: '4-6 εβδομάδες', en: '4-6 weeks' },
          ],
        ],
      },
      paragraphs: [
        {
          el: 'Ένα λογότυπο για ένα καφέ με ένα όνομα και ένα σύμβολο κοστολογείται στη βάση. Μια ταυτότητα για εταιρεία με τρεις θυγατρικές, που πρέπει να δουλεύει σε φορτηγά, στολές και εφαρμογή, όχι. Γι’ αυτό η προσφορά είναι γραπτή και συγκεκριμένη: ξέρετε τι περιλαμβάνει πριν ξεκινήσουμε.',
          en: 'A logo for a café with one name and one symbol is priced at the base. An identity for a company with three subsidiaries that has to work on trucks, uniforms and an app is not. That is why the quote is written and specific: you know what it includes before we start.',
        },
      ],
    },
    {
      heading: { el: 'Τι καθορίζει την τιμή', en: 'What sets the price' },
      bullets: [
        { el: 'Αριθμός αρχικών προτάσεων: δύο ή τρεις διαφορετικές κατευθύνσεις κοστίζουν περισσότερο από παραλλαγές μίας ιδέας, και αξίζουν τη διαφορά', en: 'Number of initial concepts: two or three different directions cost more than variations on one idea, and are worth the difference' },
        { el: 'Γύροι διορθώσεων: συμφωνούνται από την αρχή, γραπτώς. Ο επιπλέον γύρος χρεώνεται, και το ξέρετε από πριν', en: 'Revision rounds: agreed up front, in writing. An extra round is charged, and you know that in advance' },
        { el: 'Εφαρμογές: ένα λογότυπο που θα μπει σε κάρτα και Instagram είναι πιο απλό από ένα που πρέπει να κοπεί σε plexiglass και να κεντηθεί σε στολή', en: 'Applications: a logo for a card and Instagram is simpler than one that must be cut in plexiglass and embroidered on a uniform' },
        { el: 'Παραδοτέα: μόνο το σήμα, ή σήμα με χρώματα, γραμματοσειρές, κάρτες και εγχειρίδιο χρήσης', en: 'Deliverables: the mark alone, or the mark with colours, typefaces, cards and a usage manual' },
        { el: 'Rebranding ή νέο: η ανανέωση ενός υπάρχοντος λογοτύπου κοστίζει συχνά λιγότερο από τον σχεδιασμό από το μηδέν', en: 'Rebrand or new: refreshing an existing logo often costs less than designing from zero' },
      ],
    },
    {
      heading: { el: 'Πού πηγαίνει η διαφορά από την πλατφόρμα στον γραφίστα', en: 'Where the difference between a platform and a designer goes' },
      paragraphs: [
        {
          el: 'Ένα λογότυπο από πλατφόρμα ή γεννήτρια είναι συνήθως ένα εικονίδιο από βιβλιοθήκη δίπλα σε μια γραμματοσειρά. Θα το δείτε και σε άλλες επιχειρήσεις, δεν θα το κατοχυρώσετε ως σήμα, και συχνά θα παραλάβετε μόνο ένα PNG που δεν μεγεθύνεται για επιγραφή.',
          en: 'A logo from a platform or a generator is usually a stock icon next to a typeface. You will see it on other businesses, you cannot register it as a trademark, and you often receive only a PNG that does not scale up for a shop sign.',
        },
        {
          el: 'Σε έναν γραφίστα πληρώνετε τρία πράγματα: μια συζήτηση για το τι κάνει η επιχείρησή σας και σε ποιους απευθύνεται, σχεδιασμό από την αρχή με προτάσεις που βλέπετε και σχολιάζετε, και τα αρχεία προέλευσης που σας ανήκουν. Το τελευταίο είναι αυτό που οι περισσότεροι ανακαλύπτουν ότι λείπει όταν πάνε να τυπώσουν μια επιγραφή τριών μέτρων.',
          en: 'With a designer you pay for three things: a conversation about what your business does and who it is for, design from scratch with concepts you see and comment on, and the source files, which are yours. The last one is what most people discover is missing when they try to print a three-metre sign.',
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
          el: 'Ξεκινάμε με μια συζήτηση 20 λεπτών, από κοντά στην Άρτα ή τηλεφωνικά: τι πουλάτε, σε ποιους, τι σας αρέσει και τι όχι, πού θα χρησιμοποιηθεί το λογότυπο. Με αυτά σας στέλνουμε γραπτή προσφορά μέσα σε 24 ώρες. Μετά παρουσιάζουμε δύο ή τρεις διαφορετικές κατευθύνσεις, όχι παραλλαγές της ίδιας ιδέας. Επιλέγετε μία και δουλεύουμε πάνω της με τους γύρους διορθώσεων που συμφωνήσαμε.',
          en: 'We start with a 20-minute conversation, in person in Arta or by phone: what you sell, to whom, what you like and dislike, where the logo will be used. With that we send a written quote within 24 hours. Then we present two or three different directions, not variations of one idea. You choose one and we refine it through the revision rounds we agreed.',
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
          el: 'Η πρακτική διαφορά: το λογότυπο σάς δίνει ένα σήμα. Η ταυτότητα σάς δίνει και το εγχειρίδιο για το πώς χρησιμοποιείται, ώστε η επιγραφή, το φυλλάδιο και το Instagram να μη μοιάζουν με τρεις διαφορετικές επιχειρήσεις.',
          en: 'The practical difference: the logo gives you a mark. The identity also gives you the manual for how it is used, so the sign, the flyer and the Instagram do not look like three different businesses.',
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
      q: { el: 'Γιατί να πληρώσω γραφίστα ενώ υπάρχουν δωρεάν γεννήτριες;', en: 'Why pay a designer when there are free generators?' },
      a: {
        el: 'Η γεννήτρια σάς δίνει ένα εικονίδιο από βιβλιοθήκη που χρησιμοποιούν και άλλοι, χωρίς διανυσματικά αρχεία και χωρίς δικαίωμα κατοχύρωσης. Ο γραφίστας σάς δίνει σχεδιασμό από την αρχή, γύρους διορθώσεων και αρχεία που σας ανήκουν και μεγεθύνονται για επιγραφή.',
        en: 'A generator gives you a library icon others also use, with no vector files and no right to register it. A designer gives you design from scratch, revision rounds, and files that are yours and scale up for a sign.',
      },
    },
    {
      q: { el: 'Πόσο κοστίζει, τελικά;', en: 'So how much does it cost?' },
      a: {
        el: 'Κατόπιν προσφοράς, γιατί εξαρτάται από τις προτάσεις, τους γύρους και τις εφαρμογές που χρειάζεστε. Μας λέτε τι κάνει η επιχείρηση και πού θα μπει το λογότυπο, και έχετε γραπτή προσφορά μέσα σε 24 ώρες, χωρίς δέσμευση.',
        en: 'On quotation, because it depends on the concepts, rounds and applications you need. Tell us what the business does and where the logo will go, and you have a written quote within 24 hours, no obligation.',
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
      q: { el: 'Τα αρχεία μού ανήκουν;', en: 'Do I own the files?' },
      a: {
        el: 'Ναι. Παραλαμβάνετε όλα τα αρχεία προέλευσης και μπορείτε να τα δώσετε σε οποιονδήποτε τυπογράφο, κατασκευαστή επιγραφών ή προγραμματιστή στο μέλλον.',
        en: 'Yes. You receive all source files and can hand them to any printer, sign maker or developer in the future.',
      },
    },
  ],
  related: [
    { path: '/sxediasmos-logotypou', label: { el: 'Σχεδιασμός λογοτύπου', en: 'Logo design' }, description: { el: 'Η υπηρεσία: διαδικασία και παραδοτέα.', en: 'The service: process and deliverables.' } },
    { path: '/etairiki-tautotita', label: { el: 'Εταιρική ταυτότητα', en: 'Corporate identity' }, description: { el: 'Λογότυπο, χρώματα, τυπογραφία και brand guidelines.', en: 'Logo, colours, typography and brand guidelines.' } },
    { path: '/graphic-design-guide', label: { el: 'Οδηγός γραφιστικής', en: 'Graphic design guide' }, description: { el: 'Τι να ζητήσετε από έναν γραφίστα.', en: 'What to ask a graphic designer for.' } },
    { path: '/pricing', label: { el: 'Πακέτα υπηρεσιών', en: 'Service packages' }, description: { el: 'Τι περιλαμβάνει κάθε πακέτο, σε έναν πίνακα.', en: 'What every package includes, in one table.' } },
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
