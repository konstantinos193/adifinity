import type { RelatedLink } from "./RelatedLinks"
import { withFactsDeep } from "@/lib/company"

/**
 * Hub page -> the local-intent landing pages it should link to in-body.
 *
 * Pairings follow real search intent from Search Console rather than site
 * structure: `/prints` already ranks for `εκτυπώσεις` and `επιγραφές
 * καταστημάτων`, so it is the natural parent for the two Arta-specific pages
 * targeting those exact queries.
 */

export const PRINTS_RELATED: RelatedLink[] = withFactsDeep([
  {
    path: "/epaggelmatikes-kartes",
    el: "Επαγγελματικές Κάρτες",
    en: "Business Cards",
    elDesc: "Χαρτιά, φινιρίσματα και τιμές, από {price:businessCardsPer100} τα 100.",
    enDesc: "Papers, finishes and prices, from {price:businessCardsPer100} per 100.",
  },
  {
    path: "/flyers",
    el: "Φυλλάδια",
    en: "Flyers",
    elDesc: "Μεγέθη, χαρτιά, σχεδιασμός και διανομή, από {price:flyersPer500} τα 500.",
    enDesc: "Sizes, papers, design and distribution, from {price:flyersPer500} per 500.",
  },
  {
    path: "/banners-roll-up",
    el: "Banner & Roll-up",
    en: "Banners & Roll-ups",
    elDesc: "Μουσαμάδες, roll-up και forex, από {price:bannerPerSqm}/τμ².",
    enDesc: "Vinyl, roll-ups and foam board, from {price:bannerPerSqm}/m².",
  },
  {
    path: "/ektypwseis-arta",
    el: "Εκτυπώσεις Άρτα",
    en: "Printing in Arta",
    elDesc: "Κάρτες, φυλλάδια, κατάλογοι και έντυπα με παράδοση στην Άρτα.",
    enDesc: "Business cards, flyers, catalogues and print work delivered in Arta.",
  },
  {
    path: "/epigrafes-arta",
    el: "Επιγραφές Καταστημάτων Άρτα",
    en: "Store Signage in Arta",
    elDesc: "Neon, LED και ακρυλικές επιγραφές, με εγκατάσταση σε όλη την Ήπειρο.",
    enDesc: "Neon, LED and acrylic signage, installed across Epirus.",
  },
  {
    path: "/diafimistika-dora",
    el: "Διαφημιστικά Δώρα",
    en: "Promotional Gifts",
    elDesc: "Στυλό, κούπες, μπλούζες και εταιρικά δώρα με το λογότυπό σας.",
    enDesc: "Pens, mugs, shirts and corporate gifts carrying your logo.",
  },
])

export const GRAPHIC_DESIGN_RELATED: RelatedLink[] = withFactsDeep([
  {
    path: "/sxediasmos-logotypou",
    el: "Σχεδιασμός Λογοτύπου",
    en: "Logo Design",
    elDesc: "Προτάσεις, διορθώσεις και όλα τα αρχεία, από {price:logo}.",
    enDesc: "Concepts, revisions and all files, from {price:logo}.",
  },
  {
    path: "/guides/poso-kostizei-logo",
    el: "Πόσο Κοστίζει ένα Λογότυπο",
    en: "How Much a Logo Costs",
    elDesc: "Τι περιλαμβάνει κάθε τιμή και τι να ζητήσετε.",
    enDesc: "What each price includes and what to ask for.",
  },
  {
    path: "/grafistas-arta",
    el: "Γραφίστας Άρτα",
    en: "Graphic Designer in Arta",
    elDesc: "Logo, εταιρική ταυτότητα και branding από γραφίστα στην Άρτα.",
    enDesc: "Logo, corporate identity and branding from a designer in Arta.",
  },
  {
    path: "/graphic-design-guide",
    el: "Οδηγός Γραφιστικής",
    en: "Graphic Design Guide",
    elDesc: "Τι να ζητήσετε από έναν γραφίστα και πώς κοστολογείται μια δουλειά.",
    enDesc: "What to ask a designer for, and how design work is priced.",
  },
  {
    path: "/diafimistiki-eteria",
    el: "Διαφημιστική Εταιρεία Άρτα",
    en: "Advertising Agency in Arta",
    elDesc: "Full-service διαφημιστική: στρατηγική, δημιουργικό και υλοποίηση.",
    enDesc: "Full-service agency: strategy, creative and delivery.",
  },
])

/**
 * Points at the invitations product on its own subdomain, not at the three
 * local clone routes.
 *
 * `/psifiako-prosklitirio-gamou`, `/ilektroniko-prosklitirio-gamou` and
 * `/site-gamou-rsvp` now 308 into `/invitations` (see next.config.mjs), so
 * linking to them would send crawlers and readers through a redirect. Pointing
 * at the subdomain instead also feeds it authority it cannot otherwise get:
 * Google treats invitations.adinfinity.gr as a separate site, and it had almost
 * no inbound links, which is why its homepage sat unindexed.
 */
export const INVITATIONS_RELATED: RelatedLink[] = withFactsDeep([
  {
    path: "https://invitations.adinfinity.gr/psifiakes-proskliseis-gamou",
    el: "Ψηφιακές Προσκλήσεις Γάμου",
    en: "Digital Wedding Invitations",
    elDesc: "Τι περιλαμβάνει μια ψηφιακή πρόσκληση: RSVP, countdown, χάρτες και video.",
    enDesc: "What a digital invite includes: RSVP, countdown, maps and video.",
    external: true,
  },
  {
    path: "https://invitations.adinfinity.gr/prosklitirio-gamou-rsvp",
    el: "Προσκλητήριο Γάμου με RSVP",
    en: "Wedding Invitation with RSVP",
    elDesc: "Οι καλεσμένοι απαντούν από το κινητό χωρίς εγγραφή, σε πραγματικό χρόνο.",
    enDesc: "Guests reply from their phone with no sign-up, in real time.",
    external: true,
  },
  {
    path: "https://invitations.adinfinity.gr/prosklitiria-gamou-arta",
    el: "Προσκλητήρια Γάμου Άρτα",
    en: "Wedding Invitations in Arta",
    elDesc: "Ψηφιακά προσκλητήρια για γάμους στην Άρτα και την Ήπειρο.",
    enDesc: "Digital wedding invitations for Arta and Epirus.",
    external: true,
  },
])

export const BRANDING_RELATED: RelatedLink[] = withFactsDeep([
  {
    path: "/etairiki-tautotita",
    el: "Εταιρική Ταυτότητα",
    en: "Corporate Identity",
    elDesc: "Λογότυπο, χρώματα, τυπογραφία και brand guidelines, από {price:brandIdentity}.",
    enDesc: "Logo, colours, typography and brand guidelines, from {price:brandIdentity}.",
  },
  {
    path: "/sxediasmos-logotypou",
    el: "Σχεδιασμός Λογοτύπου",
    en: "Logo Design",
    elDesc: "Μόνο το σήμα, με όλα τα αρχεία, από {price:logo}.",
    enDesc: "The mark alone, with all files, from {price:logo}.",
  },
  {
    path: "/guides/poso-kostizei-logo",
    el: "Πόσο Κοστίζει ένα Λογότυπο",
    en: "How Much a Logo Costs",
    elDesc: "Ο οδηγός με τις τιμές και τι να ρωτήσετε πριν αναθέσετε.",
    enDesc: "The guide with prices and what to ask before you commission.",
  },
])

export const SIGNAGE_RELATED: RelatedLink[] = withFactsDeep([
  {
    path: "/led-neon",
    el: "Φωτεινές Επιγραφές LED & Neon",
    en: "LED & Neon Signs",
    elDesc: "Κατασκευή και τοποθέτηση, LED από {price:signageLed}, neon από {price:signageNeon}.",
    enDesc: "Fabrication and installation, LED from {price:signageLed}, neon from {price:signageNeon}.",
  },
  {
    path: "/guides/poso-kostizei-epigrafi",
    el: "Πόσο Κοστίζει μια Επιγραφή",
    en: "How Much a Sign Costs",
    elDesc: "Τι καθορίζει την τιμή και τι να μετρήσετε πριν ζητήσετε προσφορά.",
    enDesc: "What sets the price and what to measure before asking for a quote.",
  },
  {
    path: "/banners-roll-up",
    el: "Banner & Roll-up",
    en: "Banners & Roll-ups",
    elDesc: "Για προσωρινή προβολή, από {price:bannerPerSqm}/τμ².",
    enDesc: "For temporary display, from {price:bannerPerSqm}/m².",
  },
])

export const WEB_DEVELOPMENT_RELATED: RelatedLink[] = withFactsDeep([
  {
    path: "/istoselides-xenodoxeion",
    el: "Ιστοσελίδες για Καταλύματα",
    en: "Websites for Accommodation",
    elDesc: "Σελίδα ανά δωμάτιο, απευθείας κρατήσεις, γλώσσες, τοπικό SEO.",
    enDesc: "A page per room, direct bookings, languages, local SEO.",
  },
  {
    path: "/guides/poso-kostizei-istoselida",
    el: "Πόσο Κοστίζει μια Ιστοσελίδα",
    en: "How Much a Website Costs",
    elDesc: "Τα τρία επίπεδα τιμών και τα κόστη που έρχονται μετά.",
    enDesc: "The three price levels and the costs that follow.",
  },
  {
    // /web-development-arta folded into /website-development; the booking
    // systems page is the sub-service every accommodation client asks about.
    path: "/website-development/booking-systems",
    el: "Συστήματα Κρατήσεων",
    en: "Booking Systems",
    elDesc: "Online κρατήσεις χωρίς προμήθειες τρίτων, για καταλύματα, ιατρεία και ενοικιάσεις.",
    enDesc: "Direct online bookings with no third-party commission, for stays, clinics and rentals.",
  },
  {
    // Was /katastrifi-web-efarmogon, which now 308s here-adjacent. This is the
    // page that actually holds the web-app content.
    path: "/website-development/web-apps",
    el: "Web Εφαρμογές & SaaS",
    en: "Web Applications & SaaS",
    elDesc: "Custom web applications σε React & Node.js, χωρίς έτοιμα templates.",
    enDesc: "Custom web applications in React & Node.js — no templates.",
  },
  {
    path: "/pricing",
    el: "Τιμοκατάλογος",
    en: "Pricing",
    elDesc: "Τι κοστίζει μια ιστοσελίδα, ένα e-shop και μια web εφαρμογή.",
    enDesc: "What a website, an e-shop and a web app actually cost.",
  },
])
