import type { RelatedLink } from "./RelatedLinks"

/**
 * Hub page -> the local-intent landing pages it should link to in-body.
 *
 * Pairings follow real search intent from Search Console rather than site
 * structure: `/prints` already ranks for `εκτυπώσεις` and `επιγραφές
 * καταστημάτων`, so it is the natural parent for the two Arta-specific pages
 * targeting those exact queries.
 */

export const PRINTS_RELATED: RelatedLink[] = [
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
]

export const GRAPHIC_DESIGN_RELATED: RelatedLink[] = [
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
]

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
export const INVITATIONS_RELATED: RelatedLink[] = [
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
]

export const WEB_DEVELOPMENT_RELATED: RelatedLink[] = [
  {
    path: "/web-development-arta",
    el: "Κατασκευή Ιστοσελίδων Άρτα",
    en: "Web Development in Arta",
    elDesc: "Ιστοσελίδες για επιχειρήσεις στην Άρτα και την Ήπειρο.",
    enDesc: "Websites for businesses in Arta and Epirus.",
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
]
