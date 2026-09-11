/**
 * Per-page body content for the local landing pages.
 *
 * These eight pages were generated from one shared template and carried roughly
 * 250-350 unique words each — the profile Search Console reports as "Crawled —
 * currently not indexed". Near-identical pages give Google no reason to index
 * more than one of them, so what each page needed was substance that exists
 * nowhere else on the site.
 *
 * Everything here is descriptive of how the work is actually done. No prices,
 * guarantees or turnaround claims appear unless the page already publishes
 * them — inventing commercial terms for a real business is not acceptable.
 *
 * Bilingual: each block is written out in full in Greek and in English, and
 * `ServiceDetailsSection` picks the one for the active locale. The server
 * renders Greek (see `lib/metadata.ts`); English is the client-side toggle.
 * Before this the section was Greek-only, so the largest block of body copy on
 * these pages never followed the language switch.
 */
export interface ServiceDetailsCopy {
  /** Opening paragraph. Carries the target query in natural prose, not stuffed. */
  intro: string
  includesTitle: string
  includes: { title: string; body: string }[]
  processTitle: string
  /** Ordered steps, rendered as <ol> so the sequence is machine-readable. */
  process: { step: string; body: string }[]
}

export interface ServiceDetails {
  el: ServiceDetailsCopy
  en: ServiceDetailsCopy
}

export const EKTYPWSEIS_DETAILS: ServiceDetails = {
  el: {
    intro:
      'Η ψηφιακή εκτύπωση μεγάλου μεγέθους έχει διαφορετικές απαιτήσεις από την εκτύπωση εντύπων. Ένα banner που θα διαβαστεί από δέκα μέτρα απόσταση δεν χρειάζεται την ίδια ανάλυση με μια επαγγελματική κάρτα, χρειάζεται όμως σωστή επιλογή υλικού ώστε να αντέξει σε ήλιο, υγρασία και άνεμο. Στην Άρτα αναλαμβάνουμε όλη τη διαδικασία: έλεγχο αρχείων, δοκιμαστική εκτύπωση, παραγωγή και φινίρισμα.',
    includesTitle: 'Τι αναλαμβάνουμε',
    includes: [
      {
        title: 'Banner & roll-up',
        body: 'Εκτύπωση σε μουσαμά ή ύφασμα με ραφή και κρίκους, ή σε μηχανισμό roll-up για εκθέσεις και παρουσιάσεις. Επιλέγουμε υλικό ανάλογα με το αν θα μείνει σε εξωτερικό χώρο ή θα μεταφέρεται.',
      },
      {
        title: 'Αφίσες & καταχωρήσεις',
        body: 'Αφίσες σε μεγέθη από A3 έως και μεγάλες διαστάσεις βιτρίνας, σε χαρτί ή αυτοκόλλητο. Για εξωτερική τοιχοκόλληση χρησιμοποιούμε υλικά ανθεκτικά στην υγρασία.',
      },
      {
        title: 'Αυτοκόλλητα & σήμανση βιτρίνας',
        body: 'Κοπτικά γράμματα, αυτοκόλλητα βιτρίνας, ωράρια λειτουργίας και σήμανση καταστήματος. Η τοποθέτηση γίνεται από εμάς ώστε να μην υπάρξουν φυσαλίδες ή κακή ευθυγράμμιση.',
      },
      {
        title: 'Εκτυπώσεις συσκευασίας',
        body: 'Ετικέτες προϊόντων, αυτοκόλλητα συσκευασίας και εκτυπώσεις σε χαρτοκιβώτια για επιχειρήσεις που στέλνουν προϊόντα με το δικό τους brand.',
      },
    ],
    processTitle: 'Πώς προχωράει μια παραγγελία',
    process: [
      { step: 'Στέλνετε τα αρχεία', body: 'Σε AI, EPS ή PDF. Αν έχετε μόνο εικόνα, την ελέγχουμε και σας λέμε αν η ανάλυση φτάνει για το μέγεθος που θέλετε.' },
      { step: 'Ελέγχουμε πριν την παραγωγή', body: 'Κοιτάμε διαστάσεις, περιθώρια κοπής, χρωματικό προφίλ και ανάλυση — τα τέσσερα σημεία όπου συνήθως χαλάει μια μεγάλη εκτύπωση.' },
      { step: 'Εγκρίνετε την προεπισκόπηση', body: 'Λαμβάνετε ψηφιακή προεπισκόπηση με τις τελικές διαστάσεις. Τίποτα δεν μπαίνει σε παραγωγή χωρίς τη δική σας έγκριση.' },
      { step: 'Παραγωγή & φινίρισμα', body: 'Εκτύπωση, κοπή, ραφή ή πλαστικοποίηση ανάλογα με το προϊόν, και παράδοση ή τοποθέτηση.' },
    ],
  },
  en: {
    intro:
      'Large-format digital printing has different requirements from printing stationery. A banner that will be read from ten metres away does not need the resolution of a business card, but it does need the right material to survive sun, damp and wind. In Arta we handle the whole process: file checks, a test print, production and finishing.',
    includesTitle: 'What we take on',
    includes: [
      {
        title: 'Banners & roll-ups',
        body: 'Printed on PVC or fabric with hems and eyelets, or on a roll-up mechanism for trade shows and presentations. We choose the material depending on whether it will stay outdoors or travel with you.',
      },
      {
        title: 'Posters & adverts',
        body: 'Posters from A3 up to full shop-window sizes, on paper or self-adhesive vinyl. For outdoor fly-posting we use moisture-resistant materials.',
      },
      {
        title: 'Stickers & window graphics',
        body: 'Cut vinyl lettering, window stickers, opening hours and shop signage. We do the fitting ourselves so there are no bubbles or crooked edges.',
      },
      {
        title: 'Packaging prints',
        body: 'Product labels, packaging stickers and printed cartons for businesses that ship products under their own brand.',
      },
    ],
    processTitle: 'How an order proceeds',
    process: [
      { step: 'You send the files', body: 'In AI, EPS or PDF. If all you have is an image, we check it and tell you whether the resolution is enough for the size you want.' },
      { step: 'We check before production', body: 'Dimensions, bleed, colour profile and resolution — the four places where a large print usually goes wrong.' },
      { step: 'You approve the proof', body: 'You receive a digital proof at final dimensions. Nothing goes into production without your sign-off.' },
      { step: 'Production & finishing', body: 'Printing, cutting, hemming or laminating depending on the product, then delivery or installation.' },
    ],
  },
}

export const GRAFISTAS_DETAILS: ServiceDetails = {
  el: {
    intro:
      'Ένας γραφίστας δεν παραδίδει μόνο ένα αρχείο με λογότυπο. Παραδίδει ένα σύστημα που πρέπει να δουλεύει σε μια πινακίδα τριών μέτρων και σε ένα εικονίδιο εφαρμογής, ασπρόμαυρο και έγχρωμο, τυπωμένο και σε οθόνη. Στην Άρτα δουλεύουμε από κοντά με την επιχείρηση, γιατί οι περισσότερες αποφάσεις ταυτότητας βγαίνουν πιο γρήγορα σε μια κουβέντα παρά σε ανταλλαγή email.',
    includesTitle: 'Τι περιλαμβάνει η δουλειά',
    includes: [
      {
        title: 'Λογότυπο',
        body: 'Σχεδιασμός σε διανυσματική μορφή, με παραλλαγές για οριζόντια και κάθετη χρήση, μονόχρωμη εκδοχή και ελάχιστο μέγεθος αναγνωσιμότητας.',
      },
      {
        title: 'Εταιρική ταυτότητα',
        body: 'Επαγγελματική κάρτα, επιστολόχαρτο, φάκελος, σφραγίδα και υπογραφή email — τα υλικά που χρησιμοποιεί καθημερινά μια επιχείρηση.',
      },
      {
        title: 'Έντυπο υλικό',
        body: 'Φυλλάδια, καταλόγους, τιμοκαταλόγους και καταχωρήσεις, σχεδιασμένα ώστε να περνούν σωστά στην εκτύπωση από την πρώτη φορά.',
      },
      {
        title: 'Υλικό για social media',
        body: 'Πρότυπα αναρτήσεων και εξώφυλλα, ώστε να μπορείτε να δημοσιεύετε μόνοι σας χωρίς να χαλάει η οπτική συνέπεια.',
      },
    ],
    processTitle: 'Πώς δουλεύουμε',
    process: [
      { step: 'Πρώτη συζήτηση', body: 'Τι κάνει η επιχείρηση, σε ποιους απευθύνεται, τι υπάρχει ήδη και τι σας αρέσει οπτικά. Συνήθως αρκούν είκοσι λεπτά.' },
      { step: 'Προτάσεις', body: 'Παρουσιάζουμε σχεδιαστικές κατευθύνσεις, όχι δεκάδες παραλλαγές του ίδιου πράγματος. Διαλέγετε κατεύθυνση και δουλεύουμε πάνω σε αυτή.' },
      { step: 'Διορθώσεις', body: 'Γύροι διορθώσεων με συμφωνημένο εύρος από την αρχή, ώστε να ξέρετε τι περιλαμβάνεται πριν ξεκινήσουμε.' },
      { step: 'Παράδοση αρχείων', body: 'Παίρνετε όλα τα αρχεία προέλευσης, τις γραμματοσειρές και τους κωδικούς χρωμάτων. Δεν κλειδώνεστε σε εμάς για μελλοντικές δουλειές.' },
    ],
  },
  en: {
    intro:
      'A graphic designer does not just hand over a logo file. They hand over a system that has to work on a three-metre sign and on an app icon, in black and white and in colour, in print and on screen. In Arta we work closely with the business, because most identity decisions get made faster in a conversation than over email.',
    includesTitle: 'What the work includes',
    includes: [
      {
        title: 'Logo',
        body: 'Designed as vector artwork, with horizontal and vertical variants, a single-colour version and a minimum size at which it stays legible.',
      },
      {
        title: 'Corporate identity',
        body: 'Business card, letterhead, envelope, stamp and email signature — the materials a business uses every day.',
      },
      {
        title: 'Print material',
        body: 'Flyers, catalogues, price lists and adverts, set up so they go through print correctly the first time.',
      },
      {
        title: 'Social media material',
        body: 'Post templates and cover images, so you can publish on your own without the look falling apart.',
      },
    ],
    processTitle: 'How we work',
    process: [
      { step: 'First conversation', body: 'What the business does, who it serves, what already exists and what you like visually. Twenty minutes is usually enough.' },
      { step: 'Directions', body: 'We present design directions, not dozens of variations of the same thing. You pick a direction and we develop it.' },
      { step: 'Revisions', body: 'Revision rounds with a scope agreed up front, so you know what is included before we start.' },
      { step: 'File hand-over', body: 'You get all the source files, the typefaces and the colour codes. You are not locked in to us for future work.' },
    ],
  },
}

export const EPIGRAFES_DETAILS: ServiceDetails = {
  el: {
    intro:
      'Η επιγραφή είναι συνήθως το πρώτο πράγμα που βλέπει ένας πελάτης και το τελευταίο που αλλάζει μια επιχείρηση, γιατί κοστίζει να γίνει δεύτερη φορά. Οι δύο αποφάσεις που καθορίζουν το αποτέλεσμα είναι το υλικό και ο φωτισμός: τι αντέχει στις συνθήκες του σημείου και πώς διαβάζεται το βράδυ. Αναλαμβάνουμε μελέτη, κατασκευή και τοποθέτηση σε Άρτα και Ήπειρο.',
    includesTitle: 'Τύποι επιγραφών',
    includes: [
      { title: 'Φωτεινές επιγραφές LED', body: 'Κουτί με πρόσοψη plexiglass και εσωτερικό φωτισμό LED. Χαμηλή κατανάλωση και ομοιόμορφος φωτισμός, κατάλληλο για καταστήματα με βραδινό ωράριο.' },
      { title: 'Neon & εύκαμπτο neon LED', body: 'Για επιχειρήσεις που θέλουν χαρακτήρα και όχι τυποποιημένη πινακίδα. Το σύγχρονο εύκαμπτο neon LED έχει την ίδια αισθητική με μικρότερη κατανάλωση και μεγαλύτερη αντοχή.' },
      { title: 'Ανάγλυφα γράμματα', body: 'Κομμένα γράμματα από plexiglass, inox ή αλουμίνιο, με ή χωρίς κρυφό φωτισμό, τοποθετημένα απευθείας στην πρόσοψη.' },
      { title: 'Σήμανση οχημάτων', body: 'Αυτοκόλλητα εταιρικών οχημάτων, μερική ή ολική κάλυψη, με υλικά που αφαιρούνται χωρίς να αφήσουν σημάδι στη βαφή.' },
    ],
    processTitle: 'Από τη μέτρηση στην τοποθέτηση',
    process: [
      { step: 'Αυτοψία στο σημείο', body: 'Μετράμε την πρόσοψη, ελέγχουμε παροχή ρεύματος και βλέπουμε από πού θα φαίνεται η επιγραφή στην πράξη.' },
      { step: 'Πρόταση & προσχέδιο', body: 'Σας δείχνουμε πώς θα δείχνει η επιγραφή πάνω σε φωτογραφία του καταστήματος, μέρα και νύχτα.' },
      { step: 'Κατασκευή', body: 'Παραγωγή με τα υλικά που επιλέχθηκαν για τις συνθήκες του σημείου — παραθαλάσσιο, ορεινό ή κεντρικός δρόμος με σκόνη.' },
      { step: 'Τοποθέτηση', body: 'Εγκατάσταση και ηλεκτρολογική σύνδεση από το συνεργείο μας, σε όλη την Ήπειρο.' },
    ],
  },
  en: {
    intro:
      'The sign is usually the first thing a customer sees and the last thing a business changes, because doing it twice is expensive. The two decisions that determine the result are the material and the lighting: what survives the conditions at the site, and how it reads at night. We handle the survey, fabrication and installation across Arta and Epirus.',
    includesTitle: 'Types of sign',
    includes: [
      { title: 'LED lit signs', body: 'A box with an acrylic face and internal LED lighting. Low consumption and even illumination, suited to shops that trade in the evening.' },
      { title: 'Neon & flexible LED neon', body: 'For businesses that want character rather than a standard sign. Modern flexible LED neon has the same look with lower consumption and a longer life.' },
      { title: 'Raised lettering', body: 'Letters cut from acrylic, stainless steel or aluminium, with or without halo lighting, mounted directly on the frontage.' },
      { title: 'Vehicle graphics', body: 'Stickers for company vehicles, partial or full wraps, in materials that come off without marking the paint.' },
    ],
    processTitle: 'From measuring to fitting',
    process: [
      { step: 'Site visit', body: 'We measure the frontage, check the power supply and look at where the sign will actually be seen from.' },
      { step: 'Proposal & mock-up', body: 'We show you how the sign will look on a photo of your shop, by day and by night.' },
      { step: 'Fabrication', body: 'Built with the materials chosen for the conditions at the site — seaside, mountain, or a dusty main road.' },
      { step: 'Installation', body: 'Fitting and electrical connection by our own crew, anywhere in Epirus.' },
    ],
  },
}

export const DIANOMI_DETAILS: ServiceDetails = {
  el: {
    intro:
      'Το πρόβλημα με τη διανομή φυλλαδίων δεν είναι το κόστος, είναι ότι σπάνια μπορείτε να επαληθεύσετε ότι έγινε. Γι’ αυτό καταγράφουμε τη διαδρομή κάθε διανομής με GPS και σας παραδίδουμε αναφορά κάλυψης ανά περιοχή. Βλέπετε σε ποιους δρόμους πέρασε το υλικό σας και πότε, αντί να βασίζεστε σε μια προφορική διαβεβαίωση.',
    includesTitle: 'Τύποι διανομής',
    includes: [
      { title: 'Πόρτα-πόρτα σε κατοικίες', body: 'Διανομή σε γραμματοκιβώτια επιλεγμένων γειτονιών. Κατάλληλο για εστίαση, delivery, τοπικά καταστήματα και υπηρεσίες γειτονιάς.' },
      { title: 'Στοχευμένα σε επιχειρήσεις', body: 'Παράδοση σε καταστήματα και γραφεία συγκεκριμένου κλάδου, όταν το προϊόν σας απευθύνεται σε επαγγελματίες και όχι σε καταναλωτές.' },
      { title: 'Χέρι με χέρι', body: 'Διανομή σε σημεία με κίνηση, σε ώρες που καθορίζονται μαζί σας ανάλογα με το κοινό που θέλετε να πετύχετε.' },
      { title: 'Ένθετα σε τοπικό τύπο', body: 'Τοποθέτηση του εντύπου σας μέσα σε τοπικές εφημερίδες, για κοινό που δεν φτάνετε ψηφιακά.' },
    ],
    processTitle: 'Πώς οργανώνεται μια καμπάνια',
    process: [
      { step: 'Ορίζουμε την περιοχή', body: 'Επιλέγετε γειτονιές ή δρόμους πάνω σε χάρτη και αποφασίζουμε μαζί τον αριθμό των εντύπων.' },
      { step: 'Ετοιμάζεται το υλικό', body: 'Αν χρειάζεται, αναλαμβάνουμε σχεδιασμό και εκτύπωση, ώστε να μην συντονίζετε εσείς διαφορετικούς προμηθευτές.' },
      { step: 'Εκτέλεση με καταγραφή', body: 'Η διανομή γίνεται σε συμφωνημένες ημερομηνίες, με καταγραφή διαδρομής GPS καθ’ όλη τη διάρκεια.' },
      { step: 'Αναφορά', body: 'Παραλαμβάνετε αναφορά κάλυψης ανά περιοχή, ώστε να ξέρετε τι πληρώσατε και πού πήγε.' },
    ],
  },
  en: {
    intro:
      'The problem with flyer distribution is not the cost, it is that you can rarely verify it happened. That is why we GPS-log the route of every distribution and hand you a coverage report by area. You see which streets your material went down and when, instead of relying on someone’s word.',
    includesTitle: 'Types of distribution',
    includes: [
      { title: 'Door to door', body: 'Delivery to the letterboxes of selected neighbourhoods. Suited to restaurants, delivery, local shops and neighbourhood services.' },
      { title: 'Targeted to businesses', body: 'Delivery to shops and offices in a specific sector, when your product is aimed at professionals rather than consumers.' },
      { title: 'Hand to hand', body: 'Distribution at busy spots, at times agreed with you according to the audience you want to reach.' },
      { title: 'Local press inserts', body: 'Your flyer placed inside local newspapers, for an audience you do not reach online.' },
    ],
    processTitle: 'How a campaign is organised',
    process: [
      { step: 'We define the area', body: 'You pick neighbourhoods or streets on a map and we settle the number of flyers together.' },
      { step: 'The material is prepared', body: 'If needed, we handle design and printing, so you are not coordinating separate suppliers.' },
      { step: 'Logged execution', body: 'Distribution runs on agreed dates, with GPS route logging throughout.' },
      { step: 'Report', body: 'You receive a coverage report by area, so you know what you paid for and where it went.' },
    ],
  },
}

export const WEB_DEV_ARTA_DETAILS: ServiceDetails = {
  el: {
    intro:
      'Οι περισσότερες επιχειρήσεις στην Άρτα δεν χρειάζονται εντυπωσιακή ιστοσελίδα, χρειάζονται μια σελίδα που φορτώνει γρήγορα στο κινητό, βρίσκεται στο Google και μπορεί να ενημερωθεί χωρίς να χρεωθεί κάθε αλλαγή. Χτίζουμε ιστοσελίδες που τις κατέχετε εξ ολοκλήρου — κώδικας, domain και περιεχόμενο — και τις υποστηρίζουμε από εδώ, όχι μέσω συστήματος ticket.',
    includesTitle: 'Τι περιλαμβάνει το έργο',
    includes: [
      { title: 'Σχεδιασμός mobile-first', body: 'Τα δύο τρίτα των επισκεπτών έρχονται από κινητό. Ο σχεδιασμός ξεκινά από εκεί και προσαρμόζεται στη συνέχεια σε υπολογιστή.' },
      { title: 'Τεχνικό SEO από την αρχή', body: 'Σωστή δομή επικεφαλίδων, meta δεδομένα, sitemap, structured data και ταχύτητα φόρτωσης — όχι ως επιπλέον πακέτο, αλλά ως προϋπόθεση.' },
      { title: 'Σύστημα διαχείρισης', body: 'Εφόσον το ζητήσετε, παραδίδουμε τη σελίδα με πίνακα διαχείρισης και σας δείχνουμε πώς αλλάζετε κείμενα, φωτογραφίες και νέα.' },
      { title: 'Σύνδεση με Google', body: 'Ρύθμιση Search Console και Analytics, ώστε να βλέπετε πραγματικά νούμερα επισκεψιμότητας και όχι εκτιμήσεις.' },
    ],
    processTitle: 'Πώς εξελίσσεται ένα έργο',
    process: [
      { step: 'Καταγραφή αναγκών', body: 'Τι πρέπει να κάνει η σελίδα, ποιος θα τη διαχειρίζεται και τι υπάρχει ήδη σε περιεχόμενο και φωτογραφίες.' },
      { step: 'Δομή & σχεδιασμός', body: 'Συμφωνούμε σελίδες και ιεραρχία πριν γραφτεί κώδικας, γιατί οι αλλαγές δομής αργότερα κοστίζουν χρόνο.' },
      { step: 'Ανάπτυξη', body: 'Υλοποίηση σε React και Next.js, με έλεγχο σε πραγματικές συσκευές και όχι μόνο σε προσομοίωση.' },
      { step: 'Παράδοση & υποστήριξη', body: 'Παραδίδουμε πρόσβαση σε όλα, εξηγούμε τη διαχείριση και είμαστε διαθέσιμοι στο τηλέφωνο για ό,τι προκύψει.' },
    ],
  },
  en: {
    intro:
      'Most businesses in Arta do not need a spectacular website. They need a page that loads fast on a phone, shows up on Google and can be updated without paying for every change. We build websites you own outright — code, domain and content — and support them from here, not through a ticketing system.',
    includesTitle: 'What the project includes',
    includes: [
      { title: 'Mobile-first design', body: 'Two thirds of visitors arrive on a phone. The design starts there and is then adapted to desktop.' },
      { title: 'Technical SEO from the start', body: 'Proper heading structure, metadata, sitemap, structured data and load speed — not as an add-on package, but as a baseline.' },
      { title: 'Content management', body: 'If you want it, we deliver the site with an admin panel and show you how to change text, photos and news.' },
      { title: 'Google connection', body: 'Search Console and Analytics set up, so you see real traffic numbers rather than estimates.' },
    ],
    processTitle: 'How a project unfolds',
    process: [
      { step: 'Scoping', body: 'What the site has to do, who will manage it, and what already exists in content and photography.' },
      { step: 'Structure & design', body: 'We agree the pages and hierarchy before any code is written, because structural changes later cost time.' },
      { step: 'Development', body: 'Built in React and Next.js, tested on real devices and not only in emulation.' },
      { step: 'Hand-over & support', body: 'We hand over access to everything, walk you through the admin, and are available by phone for whatever comes up.' },
    ],
  },
}

export const DIAFIMISTIKA_DORA_DETAILS: ServiceDetails = {
  el: {
    intro:
      'Το διαφημιστικό δώρο δουλεύει όταν είναι κάτι που ο παραλήπτης χρησιμοποιεί, όχι κάτι που καταλήγει σε συρτάρι. Ένα στυλό που γράφει καλά και μια κούπα που αντέχει στο πλυντήριο μένουν στο γραφείο για χρόνια με το λογότυπό σας πάνω τους. Αναλαμβάνουμε επιλογή προϊόντος, εκτύπωση λογοτύπου και παράδοση σε ποσότητα.',
    includesTitle: 'Κατηγορίες προϊόντων',
    includes: [
      { title: 'Γραφική ύλη', body: 'Στυλό, μπλοκ, ημερολόγια και ντοσιέ — τα κλασικά εταιρικά δώρα, με εκτύπωση ή χάραξη λογοτύπου.' },
      { title: 'Κούπες & είδη κουζίνας', body: 'Κούπες, θερμός και παγούρια, με εκτύπωση ανθεκτική στο πλύσιμο ώστε το λογότυπο να μην ξεθωριάσει στον πρώτο μήνα.' },
      { title: 'Ρουχισμός', body: 'Μπλούζες, φούτερ, καπέλα και ποδιές για προσωπικό ή για προωθητικές ενέργειες, με μεταξοτυπία ή κέντημα.' },
      { title: 'Τσάντες & συσκευασία', body: 'Υφασμάτινες τσάντες και χάρτινες σακούλες με το brand σας, που λειτουργούν ταυτόχρονα ως συσκευασία και ως διαφήμιση.' },
    ],
    processTitle: 'Από την επιλογή στην παράδοση',
    process: [
      { step: 'Επιλογή προϊόντος', body: 'Ξεκινάμε από το ποιος θα το λάβει και σε τι περίσταση, και προτείνουμε προϊόντα που ταιριάζουν στον προϋπολογισμό.' },
      { step: 'Προσαρμογή λογοτύπου', body: 'Προσαρμόζουμε το λογότυπο στη μέθοδο εκτύπωσης κάθε προϊόντος — δεν τυπώνονται όλα με τον ίδιο τρόπο.' },
      { step: 'Δείγμα', body: 'Για μεγάλες ποσότητες βλέπετε δείγμα ή ψηφιακή προεπισκόπηση πριν την παραγγελία.' },
      { step: 'Παραγωγή & παράδοση', body: 'Παραγωγή σε ποσότητα και παράδοση στον χώρο σας, με τιμές που κλιμακώνονται ανάλογα με τα τεμάχια.' },
    ],
  },
  en: {
    intro:
      'A promotional gift works when it is something the recipient actually uses, not something that ends up in a drawer. A pen that writes well and a mug that survives the dishwasher stay on a desk for years with your logo on them. We handle product selection, logo printing and delivery in quantity.',
    includesTitle: 'Product categories',
    includes: [
      { title: 'Stationery', body: 'Pens, notepads, diaries and folders — the classic corporate gifts, with your logo printed or engraved.' },
      { title: 'Mugs & drinkware', body: 'Mugs, flasks and bottles, with wash-resistant printing so the logo does not fade in the first month.' },
      { title: 'Apparel', body: 'T-shirts, hoodies, caps and aprons for staff or for promotional events, screen-printed or embroidered.' },
      { title: 'Bags & packaging', body: 'Cotton tote bags and paper carrier bags with your brand, working as packaging and advertising at the same time.' },
    ],
    processTitle: 'From selection to delivery',
    process: [
      { step: 'Product selection', body: 'We start from who will receive it and on what occasion, and suggest products that fit the budget.' },
      { step: 'Logo adaptation', body: 'We adapt the logo to each product’s printing method — not everything prints the same way.' },
      { step: 'Sample', body: 'For large quantities you see a sample or a digital proof before ordering.' },
      { step: 'Production & delivery', body: 'Produced in quantity and delivered to your premises, with prices that scale with the number of pieces.' },
    ],
  },
}

export const DIAFIMISTIKI_ETERIA_DETAILS: ServiceDetails = {
  el: {
    intro:
      'Οι περισσότερες επιχειρήσεις δεν χρειάζονται μία υπηρεσία, χρειάζονται κάποιον που τις συνδέει: το λογότυπο πρέπει να δουλεύει στην επιγραφή, η επιγραφή να ταιριάζει με το φυλλάδιο, το φυλλάδιο να οδηγεί σε μια σελίδα που υπάρχει. Επειδή όλα γίνονται από το ίδιο γραφείο στην Άρτα, δεν μεταφράζετε εσείς το ένα κομμάτι στο άλλο ούτε κυνηγάτε τρεις προμηθευτές.',
    includesTitle: 'Τι αναλαμβάνουμε',
    includes: [
      { title: 'Ταυτότητα & γραφιστική', body: 'Λογότυπο, εταιρική ταυτότητα και όλο το έντυπο υλικό, με ενιαία γραμμή σε κάθε εφαρμογή.' },
      { title: 'Εκτυπώσεις & επιγραφές', body: 'Από την επαγγελματική κάρτα μέχρι την πρόσοψη του καταστήματος, με τον ίδιο σχεδιαστικό έλεγχο.' },
      { title: 'Ψηφιακή παρουσία', body: 'Ιστοσελίδες, e-shop, διαχείριση social media και καμπάνιες Google και Meta Ads.' },
      { title: 'Διανομές & προώθηση', body: 'Διανομή εντύπων με καταγραφή διαδρομής και διαφημιστικά δώρα για ενέργειες πιστότητας.' },
    ],
    processTitle: 'Πώς ξεκινάει μια συνεργασία',
    process: [
      { step: 'Συνάντηση', body: 'Καταλαβαίνουμε τι πουλάτε, σε ποιους, και τι έχει ήδη δοκιμαστεί — συχνά το πιο χρήσιμο κομμάτι της κουβέντας.' },
      { step: 'Πρόταση', body: 'Λαμβάνετε γραπτή πρόταση με το τι περιλαμβάνεται, σε τι χρόνο και σε τι κόστος, πριν δεσμευτείτε.' },
      { step: 'Υλοποίηση', body: 'Ένα πρόσωπο επικοινωνίας για όλα τα κομμάτια, ώστε να μην επαναλαμβάνετε το ίδιο brief σε τρεις ανθρώπους.' },
      { step: 'Παρακολούθηση', body: 'Μετά την παράδοση βλέπουμε τι απέδωσε και τι όχι, και προσαρμόζουμε αντί να επαναλαμβάνουμε.' },
    ],
  },
  en: {
    intro:
      'Most businesses do not need one service, they need someone to connect them: the logo has to work on the sign, the sign has to match the flyer, the flyer has to lead to a page that exists. Because everything is done by the same office in Arta, you are not translating one piece into the next or chasing three suppliers.',
    includesTitle: 'What we take on',
    includes: [
      { title: 'Identity & graphic design', body: 'Logo, corporate identity and all print material, with one consistent line across every application.' },
      { title: 'Printing & signage', body: 'From the business card to the shop frontage, under the same design control.' },
      { title: 'Digital presence', body: 'Websites, e-shops, social media management and Google and Meta Ads campaigns.' },
      { title: 'Distribution & promotion', body: 'Flyer distribution with route logging, and promotional gifts for loyalty campaigns.' },
    ],
    processTitle: 'How a collaboration starts',
    process: [
      { step: 'Meeting', body: 'We work out what you sell, to whom, and what has already been tried — often the most useful part of the conversation.' },
      { step: 'Proposal', body: 'You receive a written proposal with what is included, in what time and at what cost, before you commit.' },
      { step: 'Delivery', body: 'One point of contact for all the pieces, so you are not repeating the same brief to three people.' },
      { step: 'Follow-up', body: 'After delivery we look at what performed and what did not, and adjust rather than repeat.' },
    ],
  },
}

export const DIAFIMISTIKI_DETAILS: ServiceDetails = {
  el: {
    intro:
      'Ο όρος «διαφημιστική» καλύπτει πολύ διαφορετικά πράγματα, και εκεί ξεκινούν οι παρεξηγήσεις στο κόστος. Ένα γραφείο που φτιάχνει λογότυπα, ένα που τρέχει καμπάνιες Google Ads και ένα που τυπώνει φυλλάδια λέγονται και τα τρία διαφημιστικές. Παρακάτω εξηγούμε τι περιλαμβάνει η καθεμία κατηγορία, ώστε να ξέρετε τι ζητάτε πριν ζητήσετε προσφορά.',
    includesTitle: 'Οι βασικές κατηγορίες',
    includes: [
      { title: 'Δημιουργικό', body: 'Σχεδιασμός ταυτότητας και επικοινωνιακού υλικού. Χρεώνεται ανά έργο και το αποτέλεσμα σάς ανήκει ως αρχεία.' },
      { title: 'Παραγωγή', body: 'Εκτυπώσεις, επιγραφές και διαφημιστικά δώρα. Χρεώνεται ανά τεμάχιο ή τετραγωνικό και κλιμακώνεται με την ποσότητα.' },
      { title: 'Ψηφιακή διαφήμιση', body: 'Google και Meta Ads. Εδώ υπάρχουν δύο κόστη που συχνά μπερδεύονται: το διαφημιστικό budget που πάει στην πλατφόρμα και η αμοιβή διαχείρισης.' },
      { title: 'Παρουσία & περιεχόμενο', body: 'Ιστοσελίδα, social media και περιεχόμενο. Συνήθως μηνιαία συνεργασία, γιατί η αξία της βγαίνει στη συνέχεια και όχι σε μία ενέργεια.' },
    ],
    processTitle: 'Τι να ρωτήσετε πριν αναθέσετε',
    process: [
      { step: 'Τι ακριβώς παραδίδεται;', body: 'Ζητήστε γραπτή λίστα παραδοτέων. «Πακέτο social media» χωρίς αριθμό αναρτήσεων δεν είναι προσφορά.' },
      { step: 'Ποια αρχεία παίρνω;', body: 'Αν δεν παραλαμβάνετε τα αρχεία προέλευσης του λογοτύπου σας, δεν το κατέχετε στην πράξη.' },
      { step: 'Πού πάει το budget;', body: 'Στη ψηφιακή διαφήμιση, ζητήστε διαχωρισμό ανάμεσα στο ποσό που πάει στην πλατφόρμα και στην αμοιβή διαχείρισης.' },
      { step: 'Πώς μετριέται;', body: 'Συμφωνήστε από την αρχή τι θα θεωρηθεί επιτυχία — κλήσεις, επισκέψεις ή παραγγελίες — και πώς θα το βλέπετε.' },
    ],
  },
  en: {
    intro:
      'The term "advertising agency" covers very different things, and that is where the misunderstandings about cost begin. A studio that designs logos, a firm that runs Google Ads campaigns and a shop that prints flyers are all called advertising agencies. Below we explain what each category includes, so you know what you are asking for before you ask for a quote.',
    includesTitle: 'The main categories',
    includes: [
      { title: 'Creative', body: 'Identity and communication material design. Charged per project, and the result belongs to you as files.' },
      { title: 'Production', body: 'Printing, signage and promotional gifts. Charged per piece or per square metre, and scales with quantity.' },
      { title: 'Digital advertising', body: 'Google and Meta Ads. There are two costs here that are often confused: the ad budget that goes to the platform, and the management fee.' },
      { title: 'Presence & content', body: 'Website, social media and content. Usually a monthly engagement, because its value comes from continuity rather than a single action.' },
    ],
    processTitle: 'What to ask before you commission',
    process: [
      { step: 'What exactly is delivered?', body: 'Ask for a written list of deliverables. A "social media package" with no number of posts is not a quote.' },
      { step: 'Which files do I get?', body: 'If you do not receive the source files of your logo, you do not own it in practice.' },
      { step: 'Where does the budget go?', body: 'In digital advertising, ask for a split between the amount that goes to the platform and the management fee.' },
      { step: 'How is it measured?', body: 'Agree from the start what will count as success — calls, visits or orders — and how you will see it.' },
    ],
  },
}
