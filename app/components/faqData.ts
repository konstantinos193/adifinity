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
 * No prices. The site quotes every service per project (see `QUOTE_TURNAROUND_HOURS`
 * in `lib/company.ts`), so every cost question answers what determines the cost
 * and routes to a written quote — inventing figures for a real business is not
 * acceptable, and neither is publishing ones the owner did not ask to publish.
 *
 * Bilingual: `q`/`a` are Greek — what the server renders and what the JSON-LD
 * carries (see `lib/metadata.ts`) — and `en` is what `<FAQSection>` shows once
 * a visitor switches the site to English. `en` is required so a new question
 * cannot ship in one language only; before this the FAQ was the one block on
 * ten pages that stayed Greek after the toggle.
 */
import { COMPANY_FACTS, QUOTE_TURNAROUND_HOURS } from "@/lib/company"

const QUOTE_LINE = `Γραπτή προσφορά μέσα σε ${QUOTE_TURNAROUND_HOURS} ώρες, χωρίς δέσμευση.`
const QUOTE_LINE_EN = `Written quote within ${QUOTE_TURNAROUND_HOURS} hours, no obligation.`

/** One question and its answer, in one language. */
export interface FaqCopy {
  q: string
  a: string
}

export interface FaqItem extends FaqCopy {
  en: FaqCopy
}

/**
 * Builds the FAQPage JSON-LD from the same array the visible section renders,
 * so the structured data can never describe questions the page does not show.
 */
export function faqPageSchema(items: FaqCopy[]) {
  return { '@context': 'https://schema.org', ...faqNode(items) }
}

/**
 * The same FAQPage node without `@context`, for embedding in a page's `@graph`.
 *
 * Every route now emits one JSON-LD block rather than three or four competing
 * ones (see `lib/schema.ts`), and `@context` belongs on the graph, not on the
 * nodes inside it.
 */
export function faqNode(items: FaqCopy[]) {
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
    a: `Κατόπιν προσφοράς. Το κόστος εξαρτάται από το είδος του εντύπου, την ποσότητα, το χαρτί και το φινίρισμα: οι κάρτες κοστολογούνται ανά 100 τεμάχια, τα φυλλάδια ανά 500, τα banner ανά τετραγωνικό μέτρο. Στείλτε μας τι χρειάζεστε και σε τι ποσότητα. ${QUOTE_LINE}`,
    en: {
      q: 'How much does printing cost?',
      a: `On quotation. The cost depends on the type of print, the quantity, the paper and the finish: cards are priced per 100 pieces, flyers per 500, banners per square metre. Send us what you need and in what quantity. ${QUOTE_LINE_EN}`,
    },
  },
  {
    q: 'Πόσο χρόνο παίρνει η παράδοση;',
    a: 'Οι κανονικές παραγγελίες παραδίδονται σε 2-3 εργάσιμες. Για επείγουσες περιπτώσεις υπάρχει express παράδοση σε 24 ώρες.',
    en: {
      q: 'How long does delivery take?',
      a: 'Standard orders are delivered in 2-3 working days. For urgent cases there is express delivery within 24 hours.',
    },
  },
  {
    q: 'Μπορείτε να σχεδιάσετε εσείς το υλικό;',
    a: 'Ναι. Μπορείτε να στείλετε έτοιμα αρχεία εκτύπωσης ή να αναλάβουμε εμείς τον σχεδιασμό. Ελέγχουμε πάντα τα αρχεία πριν την παραγωγή για ανάλυση, διαστάσεις και περιθώρια κοπής.',
    en: {
      q: 'Can you design the material yourselves?',
      a: 'Yes. You can send print-ready files or we can take on the design. We always check files before production for resolution, dimensions and bleed.',
    },
  },
]

export const GRAPHIC_DESIGN_FAQ: FaqItem[] = [
  {
    q: 'Πόσο κοστίζει ο σχεδιασμός λογοτύπου;',
    a: `Κατόπιν προσφοράς. Η τιμή εξαρτάται από το τι περιλαμβάνει το έργο: μόνο λογότυπο, λογότυπο με επαγγελματικές κάρτες, ή πλήρη εταιρική ταυτότητα με χρώματα, γραμματοσειρές και brand guidelines. Πείτε μας τι χρειάζεστε. ${QUOTE_LINE}`,
    en: {
      q: 'How much does logo design cost?',
      a: `On quotation. The price depends on what the project includes: a logo only, a logo with business cards, or a full corporate identity with colours, typefaces and brand guidelines. Tell us what you need. ${QUOTE_LINE_EN}`,
    },
  },
  {
    q: 'Ποια αρχεία παραλαμβάνω;',
    a: 'Παραλαμβάνετε όλα τα αρχεία προέλευσης (AI, EPS, PDF, PNG και JPG) μαζί με τις γραμματοσειρές και τους κωδικούς χρωμάτων. Τα αρχεία σάς ανήκουν και μπορείτε να συνεργαστείτε με οποιονδήποτε στο μέλλον.',
    en: {
      q: 'Which files do I receive?',
      a: 'You receive all the source files (AI, EPS, PDF, PNG and JPG) together with the typefaces and colour codes. The files belong to you and you can work with anyone in the future.',
    },
  },
  {
    q: 'Πόσο διαρκεί ένα project;',
    a: 'Ένα λογότυπο ολοκληρώνεται συνήθως σε 3-5 εργάσιμες. Ένα πλήρες project εταιρικής ταυτότητας χρειάζεται 2-4 εβδομάδες, ανάλογα με το εύρος.',
    en: {
      q: 'How long does a project take?',
      a: 'A logo is usually completed in 3-5 working days. A full corporate identity project takes 2-4 weeks, depending on scope.',
    },
  },
]

export const EKTYPWSEIS_FAQ: FaqItem[] = [
  {
    q: 'Τι μεγέθη μπορείτε να εκτυπώσετε;',
    a: 'Καλύπτουμε ψηφιακή εκτύπωση μεγάλου μεγέθους: banner, roll-up, αφίσες, αυτοκόλλητα βιτρίνας και εκτυπώσεις συσκευασίας. Για ασυνήθιστες διαστάσεις στείλτε μας τα μέτρα και σας λέμε τι είναι εφικτό.',
    en: {
      q: 'What sizes can you print?',
      a: 'We cover large-format digital printing: banners, roll-ups, posters, window stickers and packaging prints. For unusual dimensions send us the measurements and we will tell you what is feasible.',
    },
  },
  {
    q: 'Θα δω δείγμα πριν την παραγωγή;',
    a: 'Ναι. Πριν από κάθε παραγγελία μεγάλου μεγέθους στέλνουμε ψηφιακή προεπισκόπηση για έγκριση, ώστε να μην υπάρξει έκπληξη στο τελικό αποτέλεσμα.',
    en: {
      q: 'Will I see a proof before production?',
      a: 'Yes. Before every large-format order we send a digital proof for approval, so there are no surprises in the final result.',
    },
  },
  {
    q: 'Σε τι ανάλυση πρέπει να είναι τα αρχεία μου;',
    a: 'Για μεγάλα μεγέθη προτιμούμε διανυσματικά αρχεία (AI, EPS, PDF). Αν έχετε μόνο φωτογραφία, την ελέγχουμε και σας ενημερώνουμε αν η ανάλυση επαρκεί για το μέγεθος που θέλετε.',
    en: {
      q: 'What resolution do my files need to be?',
      a: 'For large sizes we prefer vector files (AI, EPS, PDF). If all you have is a photo, we check it and let you know whether the resolution is enough for the size you want.',
    },
  },
]

export const GRAFISTAS_FAQ: FaqItem[] = [
  {
    q: 'Δουλεύετε από κοντά ή μόνο online;',
    a: 'Το γραφείο μας είναι στη Βασ. Πύρρου 30 στην Άρτα. Μπορείτε να περάσετε να δείτε δείγματα και να συζητήσουμε το project από κοντά. Δεν είμαστε πλατφόρμα με ανώνυμους συνεργάτες.',
    en: {
      q: 'Do you work in person or only online?',
      a: 'Our office is at Vas. Pirrou 30 in Arta. You can drop by to see samples and discuss the project in person. We are not a platform with anonymous freelancers.',
    },
  },
  {
    q: 'Τι χρειάζεστε από εμένα για να ξεκινήσουμε;',
    a: 'Χρειαζόμαστε να καταλάβουμε τι κάνει η επιχείρησή σας, σε ποιους απευθύνεται και τι σας αρέσει οπτικά. Μια πρώτη κουβέντα 20 λεπτών συνήθως αρκεί για να ξεκινήσουμε.',
    en: {
      q: 'What do you need from me to get started?',
      a: 'We need to understand what your business does, who it serves and what you like visually. A first 20-minute conversation is usually enough to get started.',
    },
  },
  {
    q: 'Πόσες προτάσεις και διορθώσεις περιλαμβάνονται;',
    a: 'Παρουσιάζουμε αρχικές προτάσεις και στη συνέχεια δουλεύουμε πάνω σε αυτή που επιλέγετε με γύρους διορθώσεων. Ο ακριβής αριθμός συμφωνείται από την αρχή, γραπτώς, ώστε να μην υπάρχουν παρεξηγήσεις.',
    en: {
      q: 'How many concepts and revisions are included?',
      a: 'We present initial concepts and then develop the one you choose through revision rounds. The exact number is agreed up front, in writing, so there are no misunderstandings.',
    },
  },
]

/**
 * `/flyer-distribution` — the merged FAQ of that page and of the former
 * `/dianomi-fylladion-arta`, which 308s into it. The page used to render its
 * questions from `messages/*.json` while the layout emitted a hand-copied
 * FAQPage node; both now read this array.
 */
export const FLYER_DISTRIBUTION_FAQ: FaqItem[] = [
  {
    q: 'Πόσο κοστίζει η διανομή φυλλαδίων;',
    a: `Κατόπιν προσφοράς. Το κόστος εξαρτάται από την ποσότητα των φυλλαδίων, τον αριθμό των ζωνών (μία γειτονιά, έως τρεις ζώνες, ή ολόκληρη η πόλη και η περιφέρεια) και το αν θέλετε διανομή σε κατοικίες ή στοχευμένα σε επιχειρήσεις. Η εκτύπωση μπαίνει στην ίδια προσφορά ή ξεχωριστά, όπως προτιμάτε. ${QUOTE_LINE}`,
    en: {
      q: 'How much does flyer distribution cost?',
      a: `On quotation. The cost depends on the number of flyers, the number of zones (one neighbourhood, up to three zones, or the whole town and region) and whether you want door-to-door delivery or targeted delivery to businesses. Printing goes on the same quote or separately, as you prefer. ${QUOTE_LINE_EN}`,
    },
  },
  {
    q: 'Πώς ξέρω ότι τα φυλλάδια μοιράστηκαν πραγματικά;',
    a: 'Καταγράφουμε τη διαδρομή της διανομής με GPS και σας παραδίδουμε αναφορά κάλυψης ανά περιοχή. Βλέπετε πού πήγε το υλικό σας, όχι απλώς ότι «μοιράστηκε».',
    en: {
      q: 'How do I know the flyers were actually distributed?',
      a: 'We GPS-log the distribution route and hand you a coverage report by area. You see where your material went, not just that it "was distributed".',
    },
  },
  {
    q: 'Μπορώ να επιλέξω συγκεκριμένες περιοχές;',
    a: 'Ναι. Επιλέγετε γειτονιές ή δρόμους και ορίζετε αν η διανομή θα γίνει πόρτα-πόρτα σε κατοικίες ή στοχευμένα σε επιχειρήσεις. Αναλύουμε το κοινό-στόχο σας και σχεδιάζουμε τη βέλτιστη διαδρομή.',
    en: {
      q: 'Can I choose specific areas?',
      a: 'Yes. You pick neighbourhoods or streets and decide whether distribution goes door to door to homes or targeted to businesses. We analyse your target audience and plan the best route.',
    },
  },
  {
    q: 'Πόσα φυλλάδια μπορείτε να διανείμετε και σε πόσο χρόνο;',
    a: 'Αναλαμβάνουμε καμπάνιες από 500 έως 50.000+ έντυπα. Μια τυπική καμπάνια στην Άρτα ολοκληρώνεται σε 1-5 εργάσιμες ημέρες, σε ημερομηνίες που συμφωνούμε από πριν.',
    en: {
      q: 'How many flyers can you distribute, and how fast?',
      a: 'We take on campaigns from 500 to 50,000+ flyers. A typical campaign in Arta is completed in 1-5 working days, on dates we agree in advance.',
    },
  },
  {
    q: 'Σε ποιες περιοχές δραστηριοποιείστε;',
    a: 'Καλύπτουμε την Άρτα και την ευρύτερη Ήπειρο (Πρέβεζα, Ιωάννινα, Θεσπρωτία), καθώς και τα χωριά του νομού. Για μεγάλες καμπάνιες εκτός Άρτας συμφωνούμε τις ζώνες πάνω σε χάρτη.',
    en: {
      q: 'Which areas do you cover?',
      a: 'We cover Arta and the wider Epirus region (Preveza, Ioannina, Thesprotia), as well as the villages of the prefecture. For large campaigns outside Arta we agree the zones on a map.',
    },
  },
  {
    q: 'Αναλαμβάνετε και την εκτύπωση των φυλλαδίων;',
    a: 'Ναι. Μπορούμε να αναλάβουμε σχεδιασμό, εκτύπωση και διανομή ως ένα έργο (φυλλάδια, κατάλογοι, μενού εστιατορίων, ενημερωτικά έντυπα), ώστε να μην συντονίζετε εσείς διαφορετικούς προμηθευτές.',
    en: {
      q: 'Do you also print the flyers?',
      a: 'Yes. We can handle design, printing and distribution as one project (flyers, catalogues, restaurant menus, information leaflets), so you are not coordinating separate suppliers.',
    },
  },
]

export const HOME_FAQ: FaqItem[] = [
  {
    q: 'Ποιες υπηρεσίες προσφέρει η adinfinity;',
    a: 'Γραφιστική και branding, επαγγελματικές εκτυπώσεις, επιγραφές καταστημάτων, κατασκευή ιστοσελίδων και web εφαρμογών, διανομή εντύπων, διαφημιστικά δώρα, έρευνα αγοράς και digital marketing, όλα από το ίδιο γραφείο.',
    en: {
      q: 'What services does adinfinity offer?',
      a: 'Graphic design and branding, professional printing, shop signage, website and web application development, flyer distribution, promotional gifts, market research and digital marketing, all from the same office.',
    },
  },
  {
    q: 'Πού βρίσκεται η adinfinity;',
    // The original answer read "Η adfinity εδρεύει" — a misspelling of the brand
    // inside indexable structured data.
    a: 'Το γραφείο μας είναι στην Άρτα, στην οδό Βασιλείου Πύρρου 30. Εξυπηρετούμε πελάτες σε όλη την Ελλάδα και την Κύπρο.',
    en: {
      q: 'Where is adinfinity located?',
      a: 'Our office is in Arta, at 30 Vasileiou Pirrou Street. We serve clients across Greece and Cyprus.',
    },
  },
  {
    q: 'Πόσο καιρό λειτουργεί η adinfinity;',
    a: `Η adinfinity λειτουργεί από το ${COMPANY_FACTS.foundedYear} και έχει συνεργαστεί με πάνω από ${COMPANY_FACTS.clients} επιχειρήσεις σε διάφορους κλάδους, με ${COMPANY_FACTS.completedProjects}+ ολοκληρωμένα έργα.`,
    en: {
      q: 'How long has adinfinity been operating?',
      a: `adinfinity has been operating since ${COMPANY_FACTS.foundedYear} and has worked with more than ${COMPANY_FACTS.clients} businesses across a range of sectors, with ${COMPANY_FACTS.completedProjects}+ completed projects.`,
    },
  },
  {
    q: 'Πώς μπορώ να επικοινωνήσω μαζί σας;',
    a: 'Τηλεφωνικά στο 2681 303007, με email στο info@adinfinity.gr, ή περνώντας από το γραφείο μας στη Βασ. Πύρρου 30 στην Άρτα.',
    en: {
      q: 'How can I get in touch?',
      a: 'By phone on 2681 303007, by email at info@adinfinity.gr, or by dropping by our office at Vas. Pirrou 30 in Arta.',
    },
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
    en: {
      q: 'What is graphic design?',
      a: 'Graphic design is the visual communication of an idea through typography, image, colour and layout. In practice it is the work that makes a business recognisable and understandable at a glance.',
    },
  },
  {
    q: 'Πόσο κοστίζει η γραφιστική;',
    a: `Κατόπιν προσφοράς. Το κόστος εξαρτάται από το εύρος του έργου: ένα λογότυπο με τα αρχεία του κοστίζει διαφορετικά από μια ολοκληρωμένη εταιρική ταυτότητα με έντυπα και οδηγό χρήσης. ${QUOTE_LINE}`,
    en: {
      q: 'How much does graphic design cost?',
      a: `On quotation. The cost depends on the scope of the project: a logo with its files is priced differently from a complete corporate identity with stationery and a usage guide. ${QUOTE_LINE_EN}`,
    },
  },
  {
    q: 'Ποια αρχεία παραλαμβάνω;',
    a: 'Παραλαμβάνετε όλα τα αρχεία προέλευσης (AI, EPS, PDF, PNG και JPG) μαζί με τις γραμματοσειρές και τους κωδικούς χρωμάτων.',
    en: {
      q: 'Which files do I receive?',
      a: 'You receive all the source files (AI, EPS, PDF, PNG and JPG) together with the typefaces and colour codes.',
    },
  },
]

export const INVITATIONS_FAQ: FaqItem[] = [
  {
    q: 'Πώς μπορώ να δημιουργήσω ψηφιακή πρόσκληση γάμου;',
    a: 'Επισκεφθείτε το invitations.adinfinity.gr, επιλέξτε τύπο πρόσκλησης, στείλτε μας τα στοιχεία σας και λαμβάνετε έναν μοναδικό σύνδεσμο που κοινοποιείτε στους καλεσμένους.',
    en: {
      q: 'How can I create a digital wedding invitation?',
      a: 'Visit invitations.adinfinity.gr, choose an invitation type, send us your details and you receive a unique link to share with your guests.',
    },
  },
  {
    q: 'Πώς λειτουργεί το RSVP;',
    a: 'Οι καλεσμένοι συμπληρώνουν τη φόρμα μέσα από τη σελίδα της πρόσκλησης, χωρίς εγγραφή. Βλέπετε τις απαντήσεις σε πίνακα διαχείρισης, με δυνατότητα εξαγωγής σε Excel.',
    en: {
      q: 'How does the RSVP work?',
      a: 'Guests fill in the form on the invitation page, with no sign-up. You see the responses in an admin panel, with export to Excel.',
    },
  },
  {
    q: 'Μπορώ να βάλω βίντεο στην πρόσκληση;',
    a: 'Ναι. Με τους τύπους Video και Video Pro ανεβάζετε δικό σας βίντεο ή προσθέτετε μουσική στην πρόσκληση.',
    en: {
      q: 'Can I add a video to the invitation?',
      a: 'Yes. With the Video and Video Pro types you upload your own video or add music to the invitation.',
    },
  },
]

export const WEBDEV_FAQ: FaqItem[] = [
  {
    q: 'Τι διαφορά έχει μια web εφαρμογή από μια ιστοσελίδα;',
    a: 'Η ιστοσελίδα παρουσιάζει· η web εφαρμογή κάνει δουλειά. Πίνακες διαχείρισης, συστήματα κρατήσεων, portals και SaaS εργαλεία είναι ολοκληρωμένα συστήματα, χτισμένα σε React και Next.js.',
    en: {
      q: 'What is the difference between a web application and a website?',
      a: 'A website presents; a web application does work. Admin panels, booking systems, portals and SaaS tools are complete systems, built in React and Next.js.',
    },
  },
  {
    q: 'Πόσο κοστίζει μια ιστοσελίδα ή μια web εφαρμογή;',
    a: `Κατόπιν προσφοράς. Το κόστος εξαρτάται από τον αριθμό των σελίδων, τις γλώσσες, το αν χρειάζεστε πίνακα διαχείρισης, e-shop ή σύστημα κρατήσεων, και από τις λειτουργίες μιας web εφαρμογής. Περιγράψτε μας τι θέλετε να κάνει η ιστοσελίδα. ${QUOTE_LINE}`,
    en: {
      q: 'How much does a website or web application cost?',
      a: `On quotation. The cost depends on the number of pages, the languages, whether you need an admin panel, an e-shop or a booking system, and on the features of a web application. Describe to us what you want the site to do. ${QUOTE_LINE_EN}`,
    },
  },
  {
    q: 'Πόσο διαρκεί η κατασκευή;',
    a: 'Μια επαγγελματική ιστοσελίδα παραδίδεται σε 2-4 εβδομάδες. Οι web εφαρμογές χρειάζονται 4-12 εβδομάδες ανάλογα με την πολυπλοκότητα. Σε όλη τη διάρκεια μιλάτε απευθείας με τον developer.',
    en: {
      q: 'How long does development take?',
      a: 'A business website is delivered in 2-4 weeks. Web applications take 4-12 weeks depending on complexity. Throughout, you talk directly to the developer.',
    },
  },
  {
    q: 'Τι τεχνολογία χρησιμοποιείτε;',
    a: 'Στα νέα έργα δουλεύουμε custom σε React και Next.js, χωρίς έτοιμα themes ή page builders. Το portfolio μας περιλαμβάνει και παλαιότερα έργα σε διαφορετική τεχνολογία.',
    en: {
      q: 'What technology do you use?',
      a: 'On new projects we build custom in React and Next.js, with no off-the-shelf themes or page builders. Our portfolio also includes older projects on different technology.',
    },
  },
  {
    q: 'Περιλαμβάνεται SEO;',
    a: 'Ναι. Κάθε ιστοσελίδα παραδίδεται με τεχνικό SEO: δομή επικεφαλίδων, meta δεδομένα, sitemap, robots.txt και structured data.',
    en: {
      q: 'Is SEO included?',
      a: 'Yes. Every website is delivered with technical SEO: heading structure, metadata, sitemap, robots.txt and structured data.',
    },
  },
  // Merged from /web-development-arta, which 308s into /website-development.
  {
    q: 'Ποιος θα υποστηρίζει την ιστοσελίδα μετά την παράδοση;',
    a: 'Ο ίδιος άνθρωπος που την έφτιαξε. Είμαστε στην Άρτα, μας βρίσκετε στο τηλέφωνο και δεν περνάτε από σύστημα ticket για μια αλλαγή κειμένου.',
    en: {
      q: 'Who supports the website after delivery?',
      a: 'The same person who built it. We are in Arta, you can reach us by phone, and you do not go through a ticketing system for a text change.',
    },
  },
  {
    q: 'Η ιστοσελίδα θα μου ανήκει;',
    a: 'Ναι. Ο κώδικας, το domain και τα περιεχόμενα είναι δικά σας. Δεν σας κλειδώνουμε σε πλατφόρμα ή σε μηνιαία συνδρομή για να παραμείνει online η σελίδα σας.',
    en: {
      q: 'Will I own the website?',
      a: 'Yes. The code, the domain and the content are yours. We do not lock you into a platform or a monthly subscription to keep your site online.',
    },
  },
  {
    q: 'Μπορώ να ενημερώνω μόνος μου το περιεχόμενο;',
    a: 'Ναι, εφόσον το ζητήσετε από την αρχή. Παραδίδουμε τη σελίδα με σύστημα διαχείρισης και σας δείχνουμε πώς να αλλάζετε κείμενα, φωτογραφίες και νέα.',
    en: {
      q: 'Can I update the content myself?',
      a: 'Yes, as long as you ask for it from the start. We deliver the site with a content management system and show you how to change text, photos and news.',
    },
  },
]
