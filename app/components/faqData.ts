/**
 * Single source of truth for page FAQs — both the visible section and the
 * FAQPage JSON-LD are built from these entries.
 *
 * Why one source: `/prints` and `/graphic-design` shipped FAQPage structured
 * data whose questions appeared nowhere on the page. Google's structured-data
 * policy requires FAQ content to be visible to users, so schema-only FAQ is a
 * rich-result suppression (and potential manual-action) risk. Deriving both
 * from the same array means they cannot drift apart again.
 *
 * Prices appear here only where the page already commits to them publicly.
 * Pages without a published price answer the scope/process question instead and
 * route to a quote — inventing figures for a real business is not acceptable.
 */
export interface FaqItem {
  q: string
  a: string
}

/**
 * Builds the FAQPage JSON-LD from the same array the visible section renders,
 * so the structured data can never describe questions the page does not show.
 */
export function faqPageSchema(items: FaqItem[]) {
  return { '@context': 'https://schema.org', ...faqNode(items) }
}

/**
 * The same FAQPage node without `@context`, for embedding in a page's `@graph`.
 *
 * Every route now emits one JSON-LD block rather than three or four competing
 * ones (see `lib/schema.ts`), and `@context` belongs on the graph, not on the
 * nodes inside it.
 */
export function faqNode(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}

/**
 * Same node, built from a `{ question, answer }[]` array in a message file.
 *
 * Some routes render their FAQ straight from `messages/el/*.json` rather than
 * from the arrays below. `/diafimistiki` is the case that motivated this: its
 * JSON-LD was hand-copied from the message file and had drifted to three
 * questions while the page displayed more. Reading the same array the section
 * renders keeps the two in step by construction.
 */
export function faqNodeFromMessages(items: { question: string; answer: string }[]) {
  // A missing namespace resolves to '' (or []) rather than throwing, so guard
  // instead of calling `.map` on whatever came back — that turns a silent
  // translation miss into a build-breaking prerender error.
  if (!Array.isArray(items) || items.length === 0) return undefined
  return faqNode(items.map((item) => ({ q: item.question, a: item.answer })))
}

export const PRINTS_FAQ: FaqItem[] = [
  {
    q: 'Πόσο κοστίζουν οι εκτυπώσεις;',
    a: 'Οι τιμές εξαρτώνται από το είδος και την ποσότητα. Επαγγελματικές κάρτες από €5 τα 100 τεμάχια, φυλλάδια από €20 τα 500 τεμάχια, banner από €30/τμ². Στείλτε μας τι χρειάζεστε και λαμβάνετε ακριβή προσφορά.',
  },
  {
    q: 'Πόσο χρόνο παίρνει η παράδοση;',
    a: 'Οι κανονικές παραγγελίες παραδίδονται σε 2-3 εργάσιμες. Για επείγουσες περιπτώσεις υπάρχει express παράδοση σε 24 ώρες.',
  },
  {
    q: 'Μπορείτε να σχεδιάσετε εσείς το υλικό;',
    a: 'Ναι. Μπορείτε να στείλετε έτοιμα αρχεία εκτύπωσης ή να αναλάβουμε εμείς τον σχεδιασμό. Ελέγχουμε πάντα τα αρχεία πριν την παραγωγή για ανάλυση, διαστάσεις και περιθώρια κοπής.',
  },
]

export const GRAPHIC_DESIGN_FAQ: FaqItem[] = [
  {
    q: 'Πόσο κοστίζει ο σχεδιασμός λογοτύπου;',
    a: 'Ο σχεδιασμός λογοτύπου ξεκινά από €150 για βασικές προτάσεις και φτάνει τα €300 και άνω για ολοκληρωμένο πακέτο εταιρικής ταυτότητας.',
  },
  {
    q: 'Ποια αρχεία παραλαμβάνω;',
    a: 'Παραλαμβάνετε όλα τα αρχεία προέλευσης — AI, EPS, PDF, PNG και JPG — μαζί με τις γραμματοσειρές και τους κωδικούς χρωμάτων. Τα αρχεία σάς ανήκουν και μπορείτε να συνεργαστείτε με οποιονδήποτε στο μέλλον.',
  },
  {
    q: 'Πόσο διαρκεί ένα project;',
    a: 'Ένα λογότυπο ολοκληρώνεται συνήθως σε 3-5 εργάσιμες. Ένα πλήρες project εταιρικής ταυτότητας χρειάζεται 2-4 εβδομάδες, ανάλογα με το εύρος.',
  },
]

export const EKTYPWSEIS_FAQ: FaqItem[] = [
  {
    q: 'Τι μεγέθη μπορείτε να εκτυπώσετε;',
    a: 'Καλύπτουμε ψηφιακή εκτύπωση μεγάλου μεγέθους: banner, roll-up, αφίσες, αυτοκόλλητα βιτρίνας και εκτυπώσεις συσκευασίας. Για ασυνήθιστες διαστάσεις στείλτε μας τα μέτρα και σας λέμε τι είναι εφικτό.',
  },
  {
    q: 'Θα δω δείγμα πριν την παραγωγή;',
    a: 'Ναι. Πριν από κάθε παραγγελία μεγάλου μεγέθους στέλνουμε ψηφιακή προεπισκόπηση για έγκριση, ώστε να μην υπάρξει έκπληξη στο τελικό αποτέλεσμα.',
  },
  {
    q: 'Σε τι ανάλυση πρέπει να είναι τα αρχεία μου;',
    a: 'Για μεγάλα μεγέθη προτιμούμε διανυσματικά αρχεία (AI, EPS, PDF). Αν έχετε μόνο φωτογραφία, την ελέγχουμε και σας ενημερώνουμε αν η ανάλυση επαρκεί για το μέγεθος που θέλετε.',
  },
]

export const GRAFISTAS_FAQ: FaqItem[] = [
  {
    q: 'Δουλεύετε από κοντά ή μόνο online;',
    a: 'Το γραφείο μας είναι στη Βασ. Πύρρου 30 στην Άρτα. Μπορείτε να περάσετε να δείτε δείγματα και να συζητήσουμε το project από κοντά — δεν είμαστε πλατφόρμα με ανώνυμους συνεργάτες.',
  },
  {
    q: 'Τι χρειάζεστε από εμένα για να ξεκινήσουμε;',
    a: 'Χρειαζόμαστε να καταλάβουμε τι κάνει η επιχείρησή σας, σε ποιους απευθύνεται και τι σας αρέσει οπτικά. Μια πρώτη κουβέντα 20 λεπτών συνήθως αρκεί για να ξεκινήσουμε.',
  },
  {
    q: 'Πόσες προτάσεις και διορθώσεις περιλαμβάνονται;',
    a: 'Παρουσιάζουμε αρχικές προτάσεις και στη συνέχεια δουλεύουμε πάνω σε αυτή που επιλέγετε με γύρους διορθώσεων. Ο ακριβής αριθμός συμφωνείται από την αρχή, γραπτώς, ώστε να μην υπάρχουν παρεξηγήσεις.',
  },
]

export const DIANOMI_FAQ: FaqItem[] = [
  {
    q: 'Πώς ξέρω ότι τα φυλλάδια μοιράστηκαν πραγματικά;',
    a: 'Καταγράφουμε τη διαδρομή της διανομής με GPS και σας παραδίδουμε αναφορά κάλυψης ανά περιοχή. Βλέπετε πού πήγε το υλικό σας, όχι απλώς ότι «μοιράστηκε».',
  },
  {
    q: 'Μπορώ να επιλέξω συγκεκριμένες περιοχές;',
    a: 'Ναι. Επιλέγετε γειτονιές ή δρόμους και ορίζετε αν η διανομή θα γίνει πόρτα-πόρτα σε κατοικίες ή στοχευμένα σε επιχειρήσεις.',
  },
  {
    q: 'Αναλαμβάνετε και την εκτύπωση των φυλλαδίων;',
    a: 'Ναι. Μπορούμε να αναλάβουμε σχεδιασμό, εκτύπωση και διανομή ως ένα έργο, ώστε να μην συντονίζετε εσείς διαφορετικούς προμηθευτές.',
  },
]

export const WEB_DEV_ARTA_FAQ: FaqItem[] = [
  {
    q: 'Ποιος θα υποστηρίζει την ιστοσελίδα μετά την παράδοση;',
    a: 'Ο ίδιος άνθρωπος που την έφτιαξε. Είμαστε στην Άρτα, μας βρίσκετε στο τηλέφωνο και δεν περνάτε από σύστημα ticket για μια αλλαγή κειμένου.',
  },
  {
    q: 'Η ιστοσελίδα θα μου ανήκει;',
    a: 'Ναι. Ο κώδικας, το domain και τα περιεχόμενα είναι δικά σας. Δεν σας κλειδώνουμε σε πλατφόρμα ή σε μηνιαία συνδρομή για να παραμείνει online η σελίδα σας.',
  },
  {
    q: 'Μπορώ να ενημερώνω μόνος μου το περιεχόμενο;',
    a: 'Ναι, εφόσον το ζητήσετε από την αρχή. Παραδίδουμε τη σελίδα με σύστημα διαχείρισης και σας δείχνουμε πώς να αλλάζετε κείμενα, φωτογραφίες και νέα.',
  },
]
export const HOME_FAQ: FaqItem[] = [
  {
    q: 'Ποιες υπηρεσίες προσφέρει η adinfinity;',
    a: 'Γραφιστική και branding, επαγγελματικές εκτυπώσεις, επιγραφές καταστημάτων, κατασκευή ιστοσελίδων και web εφαρμογών, διανομή εντύπων, διαφημιστικά δώρα, έρευνα αγοράς και digital marketing — όλα από το ίδιο γραφείο.',
  },
  {
    q: 'Πού βρίσκεται η adinfinity;',
    // The original answer read "Η adfinity εδρεύει" — a misspelling of the brand
    // inside indexable structured data.
    a: 'Το γραφείο μας είναι στην Άρτα, στην οδό Βασιλείου Πύρρου 30. Εξυπηρετούμε πελάτες σε όλη την Ελλάδα και την Κύπρο.',
  },
  {
    q: 'Πόσο καιρό λειτουργεί η adinfinity;',
    a: 'Η adinfinity λειτουργεί από το 2013 και έχει συνεργαστεί με πάνω από 100 επιχειρήσεις σε διάφορους κλάδους.',
  },
  {
    q: 'Πώς μπορώ να επικοινωνήσω μαζί σας;',
    a: 'Τηλεφωνικά στο 2681 303007, με email στο info@adinfinity.gr, ή περνώντας από το γραφείο μας στη Βασ. Πύρρου 30 στην Άρτα.',
  },
]

/**
 * Translated from English.
 *
 * These three questions shipped in English ("What is graphic design?") inside
 * the structured data of a Greek-language page targeting Greek queries.
 */
export const GUIDE_FAQ: FaqItem[] = [
  {
    q: 'Τι είναι η γραφιστική;',
    a: 'Γραφιστική είναι η οπτική επικοινωνία μιας ιδέας μέσα από τυπογραφία, εικόνα, χρώμα και διάταξη. Στην πράξη είναι η δουλειά που κάνει μια επιχείρηση αναγνωρίσιμη και κατανοητή με μια ματιά.',
  },
  {
    q: 'Πόσο κοστίζει η γραφιστική;',
    a: 'Το κόστος εξαρτάται από το εύρος του έργου. Ο σχεδιασμός λογοτύπου ξεκινά από €150, ενώ ένα ολοκληρωμένο πακέτο εταιρικής ταυτότητας κινείται από €300 και άνω.',
  },
  {
    q: 'Ποια αρχεία παραλαμβάνω;',
    a: 'Παραλαμβάνετε όλα τα αρχεία προέλευσης — AI, EPS, PDF, PNG και JPG — μαζί με τις γραμματοσειρές και τους κωδικούς χρωμάτων.',
  },
]

export const INVITATIONS_FAQ: FaqItem[] = [
  {
    q: 'Πώς μπορώ να δημιουργήσω ψηφιακή πρόσκληση γάμου;',
    a: 'Επισκεφθείτε το invitations.adinfinity.gr, επιλέξτε τύπο πρόσκλησης, στείλτε μας τα στοιχεία σας και λαμβάνετε έναν μοναδικό σύνδεσμο που κοινοποιείτε στους καλεσμένους.',
  },
  {
    q: 'Πώς λειτουργεί το RSVP;',
    a: 'Οι καλεσμένοι συμπληρώνουν τη φόρμα μέσα από τη σελίδα της πρόσκλησης, χωρίς εγγραφή. Βλέπετε τις απαντήσεις σε πίνακα διαχείρισης, με δυνατότητα εξαγωγής σε Excel.',
  },
  {
    q: 'Μπορώ να βάλω βίντεο στην πρόσκληση;',
    a: 'Ναι. Με τους τύπους Video και Video Pro ανεβάζετε δικό σας βίντεο ή προσθέτετε μουσική στην πρόσκληση.',
  },
]

export const WEBDEV_FAQ: FaqItem[] = [
  {
    q: 'Τι διαφορά έχει μια web εφαρμογή από μια ιστοσελίδα;',
    a: 'Η ιστοσελίδα παρουσιάζει· η web εφαρμογή κάνει δουλειά. Πίνακες διαχείρισης, συστήματα κρατήσεων, portals και SaaS εργαλεία είναι ολοκληρωμένα συστήματα, χτισμένα σε React και Next.js.',
  },
  {
    q: 'Πόσο κοστίζει μια ιστοσελίδα ή μια web εφαρμογή;',
    a: 'Μια επαγγελματική ιστοσελίδα ξεκινά από €800. Τα e-shop και οι web εφαρμογές κοστολογούνται ανάλογα με τις λειτουργίες που χρειάζονται — ζητήστε δωρεάν προσφορά για ακριβή εκτίμηση.',
  },
  {
    q: 'Πόσο διαρκεί η κατασκευή;',
    a: 'Μια επαγγελματική ιστοσελίδα παραδίδεται σε 2-4 εβδομάδες. Οι web εφαρμογές χρειάζονται 4-12 εβδομάδες ανάλογα με την πολυπλοκότητα. Σε όλη τη διάρκεια μιλάτε απευθείας με τον developer.',
  },
  {
    q: 'Τι τεχνολογία χρησιμοποιείτε;',
    a: 'Στα νέα έργα δουλεύουμε custom σε React και Next.js, χωρίς έτοιμα themes ή page builders. Το portfolio μας περιλαμβάνει και παλαιότερα έργα σε διαφορετική τεχνολογία.',
  },
  {
    q: 'Περιλαμβάνεται SEO;',
    a: 'Ναι. Κάθε ιστοσελίδα παραδίδεται με τεχνικό SEO: δομή επικεφαλίδων, meta δεδομένα, sitemap, robots.txt και structured data.',
  },
]
