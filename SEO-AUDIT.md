# SEO Audit — adinfinity.gr

**Scope:** `E:\programming\adinfinity\adifinity` (main Next.js site)
**Date:** 2026-08-25
**Baseline (GSC):** 12 indexed / 40 not indexed · 41 clicks · 326 impressions · 93% Greece

---

## Follow-up — 2026-09-11

**GSC at this date:** 15 indexed / 76 not indexed · 16 months: 146 clicks / 3,268 impressions.
The 2026-08-25 fixes are live (66 sitemap URLs, all static, all with real breadcrumbs), but
the export exposed two infrastructure bugs that were quietly undoing them.

### What was actually wrong

| Finding | Evidence | Fix |
|---|---|---|
| **`https://www.adinfinity.gr/*` served 200 for every route.** `proxy.ts` stripped `www.` *before* comparing to the canonical host, so www requests were treated as canonical. Two full copies of the site. | `curl -I https://www.adinfinity.gr/prints` → `200`. In GSC the homepage's impressions split across `http://adinfinity.gr/` (2,322) and `https://adinfinity.gr/` (694) — Google has been choosing between four homepages. | Host check fixed in `proxy.ts`; www→apex also declared in `redirects.mjs` so Vercel resolves it at the edge before any render. |
| **Legacy Joomla URLs looped forever.** The `next.config.mjs` rule `/` + `?option=com_k2` → `https://adinfinity.gr` re-appended the query to its own destination. | `curl -L 'https://adinfinity.gr/?option=com_k2'` → gave up after 50 redirects. Every old-site URL Google still remembers was a "Redirect error". | Rule removed. `proxy.ts` handles all Joomla params with one 301 to `/`. |
| The proxy's redirect tests had never run — they targeted Jest globals with no Jest installed. | The www case above would have failed. | Tests ported to `node:test`; `pnpm test` runs them plus a new sitemap ↔ filesystem ↔ redirects parity suite. |
| Image sitemap listed the OG card under 31 URLs. Google Images only indexes images it also finds in the page body. | `og-image.png` on 25 URLs, `og-*.svg` on 6. | Only on-page images remain (office, team, portfolio). Test enforces it. |
| `/projects` and `/dsa-compliance` shipped **English** title/description on `<html lang="el">` pages; `/dsa-compliance` also redefined the Organization with a second, transliterated address. | — | Greek metadata; DSA page uses the shared `pageGraph()`. |

### Titles rewritten against real queries (0-click impressions in the export)

| Query | Impr. | Pos. | Page | Change |
|---|---|---|---|---|
| `graphic design` | 197 | 3.8 | `/graphic-design` | Title/desc now carry the English term the query uses |
| `διαφημιστικο γραφειο` | 48 | 52.8 | `/` | Phrase never appeared on the site; now leads the description |
| `τυπογραφειο αρτα`, `τυπογραφειο κοντα μου` | 2 | 11 | `/prints` | "Τυπογραφείο" added to title + desc |
| `διαφημιστική πινακίδα`, `επιγραφεσ γραμματα` | 8 | 1.5–4.3 | `/epigrafes-arta` | "Διαφημιστικές Πινακίδες" + "γράμματα" |
| `διαφημιστικα ειδη` | 3 | 9 | `/diafimistika-dora` | "& Είδη" |
| `διανομη εντυπων`, `εταιρειεσ διανομησ φυλλαδιων` | 24 | 73–78 | `/flyer-distribution` | "Εταιρεία διανομής εντύπων & φυλλαδίων" |
| `μελέτη ανάλυσης ανταγωνισμού` | 3 | 16.7 | `/market-research` | Exact phrase in title |

### Do in Search Console (cannot be done from code)

1. **URL Inspection → `https://adinfinity.gr/`** → *Request indexing*. Then inspect `http://adinfinity.gr/` and confirm it now reports "Page with redirect". Google has held `http://` as the homepage canonical for 16 months; the www fix removes the last competing signal, but a recrawl request shortens the wait.
2. **Pages report → "Redirect error"** should drain to zero over the next 2–3 crawl cycles. If any remain, they are the legacy `.html`/`?option=` URLs and are now correct 301s.
3. **Pages report → "Duplicate without user-selected canonical" / "Alternate page with proper canonical tag"** — expect the www copies to leave the index. Do not "Remove" them manually; the 308 does it.
4. Watch **`graphic design` CTR** on `/graphic-design` over 28 days — that is the cleanest A/B this change offers (197 impressions, previously 0 clicks).

### Applied the same day: the 55-section audit (`D:\donwloads\adinfinity-seo-audit.md`)

Everything in that document that can be done in the repo is done. Status by section:

| Sections | Status | Where |
|---|---|---|
| §4, §39, §40, §41 facts & prices in one place | Done, then **prices removed** (owner's decision, 2026-09-11) | `lib/company.ts` facts + `withFactsDeep()` applied at message load. The site publishes **no prices**: every service is "Κατόπιν προσφοράς" with a written quote in `QUOTE_TURNAROUND_HOURS` (24). `/pricing` is now the packages page (what each includes, how it is priced, delivery); `__tests__/seo-registry.test.ts` fails on any `€` / `{price:` in content pages, FAQ arrays, related links or message files (Shopify's own fee is the one allowed third-party figure) |
| §5, §31, §34, §44, §52 one page one job, titles | Done | 12 pages retitled to the keyword map; `/diafimistiki-eteria` = local hub, `/services` = plain catalogue, `/diafimistiki` = guide |
| §6, §28, §43 clone routes | Done | `/web-development-arta` → `/website-development`, `/dianomi-fylladion-arta` → `/flyer-distribution` (308), their body + FAQ merged into the parents |
| §7 case studies | Already existed; **claims verified over SSH** | Asterias: 1 paid Stripe booking (Jul 2026), 22 Booking.com reviews at 4.5, 7 apts, 6 seasons. KYKLOS: 2,143 επιτυχόντες 1992-2025, 35 Panhellenic papers. Fabricated "95% speed / 40% bookings / 500+ students / Top 3" removed from 3 pages + `projects.json` |
| §8, §9, §24, §47 sub-services & vertical | Done | `/sxediasmos-logotypou`, `/etairiki-tautotita`, `/epaggelmatikes-kartes`, `/flyers`, `/banners-roll-up`, `/led-neon`, `/website-development/booking-systems`, `/istoselides-xenodoxeion` |
| §17, §37, §43 guides hub | Done | `/guides` + 5 guides (website cost, logo cost, sign cost, WordPress vs Next.js, small-business advertising in Arta); the two legacy guides listed on the hub |
| §11 homepage | Done | H1 "Διαφημιστική Εταιρεία στην Άρτα για Design, Εκτυπώσεις & Digital"; selected projects moved above the logo wall; invitations promo moved down |
| §12, §26 About / E-E-A-T | Done | Person nodes for both team members, verifiable facts block, specialties + "see their work" links; dead Organization with wrong socials removed |
| §14 local hub | Done | `LocalHubSection` on `/diafimistiki-eteria`: services, office hours, visit reasons, reach by region, industries |
| §15, §16 cluster links | Done | `RelatedLinks` blocks on prints, graphic design, branding, signage, web; case-study tags link to the selling page (`Booking System` → booking page) |
| §19, §20, §30 technical, schema, breadcrumbs | Done | Visible `Breadcrumbs` on 41 pages from the same trail as the JSON-LD; Article/Service/FAQPage graph on every content page |
| §21, §22 images | Done | 27 portfolio images renamed to descriptive slugs (`apofa-logo-arta.png`), 32 references updated, header alt text |
| §23 portfolio taxonomy | Done | Industry filter (`lib/industries.ts`), client state only, no filter URLs |
| §27 language | Done | 224 → 116 English-only strings; what remains is tool/tech names |
| §29 navigation | Done | Υπηρεσίες / Έργα / Πακέτα / Σχετικά / Οδηγοί / Επικοινωνία; sub-services in the footer cluster |
| §33 conversion tracking | Done | GA4 `generate_lead`, `click_to_call`, `click_to_email`, `contact_cta_click`, `pricing_tab_view` (`lib/analytics.ts`, consent-gated) |
| §42 governance | Done | `lib/seo-registry.ts` + test: every hand-built route has an owner, primary keyword, review date; no two share a keyword; content pages must have breadcrumb, 3+ related, 3+ FAQ, no em dashes, ≤70/≤175 metadata |
| §13, §32, §36, §45 (GBP, GSC, links), §51 dashboard | **Not code** | Yours: Business Profile, Search Console monitoring, link outreach, monthly dashboard |

Verified: 32 tests, `tsc`, production build (86 routes, all static), `scripts/audit-seo.mjs` over 78 sitemap URLs, zero placeholder leaks in rendered HTML.

**Assumed, please confirm:** `CLIENTS_CLAIM = 50` and `COMPLETED_PROJECTS_CLAIM = 200` in `lib/company.ts` are stated as found on the site; no database backs them. Change them there and they change everywhere. (The `PRICES` table is gone: no price is published anywhere, by decision of the owner.)

### Still open

- `κατασκευη web εφαρμογων` and `έρευνα ανταγωνισμού` remain authority problems; the guides hub is the lever, and it needs time.
- `physioelpida.gr` serves a self-signed certificate (browsers block it). Left as instructed.
- The English `messages/en/*.json` `seo` blocks are never served and have drifted; harmless.

---

## TL;DR

Your **technical** SEO is already good — metadata, JSON-LD `@graph`, canonicals, robots,
AI-crawler rules, image sitemap, HTTPS/www redirects are all correctly implemented.
**None of that is what's holding you back.**

The problem is **information architecture**:

| Metric | Count |
|---|---|
| Pages linked from nav + footer | **13** |
| Pages Google actually indexed | **12** |
| Sitemap pages with **zero** inbound internal links | **14** |
| Case studies with rich unique content but **no URL** | **30** |

You are asking Google to index 40 pages while telling it, through your own link
graph, that only 13 matter. Google is agreeing with your link graph.

**The single highest-value action isn't fixing the orphans — it's shipping
`/projects/[slug]`.** You are sitting on 30 genuinely excellent, unique, locally-relevant
case studies that currently have no URL at all.

---

## 1. Root cause: orphan pages

A sitemap is a *hint*. Internal links are the *signal*. A page with zero inbound
links tells Google nobody at adinfinity thinks it's worth linking to — so it lands in
"Discovered / Crawled – currently not indexed" and stays there.

**Nav links** ([`app/components/Header.tsx:29-46`](app/components/Header.tsx#L29-L46)):
`/services` · `/prints` · `/graphic-design` · `/flyer-distribution` · `/website-development` ·
`/digital-marketing` · `/branding` · `/market-research` · `/invitations` · `/about` ·
`/projects` · `/contact` · `/`  → **13**

**Footer** ([`app/components/Footer.tsx`](app/components/Footer.tsx)) adds only legal pages.

**Indexed: 12.** That correlation is the entire story.

### True orphans (0 inbound links anywhere in the codebase)

| Route | Note |
|---|---|
| `/pricing` | **A money page with zero internal links.** Worst offender. |
| `/diafimistiki` | thin clone |
| `/diafimistiki-eteria` | thin clone, near-duplicate of the above |
| `/ektypwseis-arta` | thin clone |
| `/grafistas-arta` | thin clone |
| `/web-development-arta` | thin clone |
| `/dianomi-fylladion-arta` | thin clone |
| `/epigrafes-arta` | linked only from JSON-LD, not a crawlable `<a>` |
| `/diafimistika-dora` | linked only from JSON-LD, not a crawlable `<a>` |
| `/psifiako-prosklitirio-gamou` | thin clone + cannibalized (§4) |
| `/ilektroniko-prosklitirio-gamou` | thin clone + cannibalized (§4) |
| `/site-gamou-rsvp` | thin clone + cannibalized (§4) |
| `/graphic-design-guide` | editorial, unlinked |
| `/katastrifi-web-efarmogon` | editorial, unlinked |

> The `SERVICES` array in [`app/layout.tsx:24-33`](app/layout.tsx#L24-L33) puts `/epigrafes-arta`
> and `/diafimistika-dora` in the Organization `OfferCatalog`. Structured data is **not**
> a crawl path — it doesn't pass link equity or discovery weight like an `<a href>` does.

---

## 2. The landing pages are template clones

`/grafistas-arta/page.tsx` and `/ektypwseis-arta/page.tsx` are **220 lines each and
differ by 54 lines** — icons, the component name, and translation keys. Everything else
is identical scaffolding.

Unique copy per page (measured from `messages/el/*.json`, **including JSON keys**, so
real prose is meaningfully lower):

| Page | Words |
|---|---|
| `psifiako_prosklitirio_gamou_page` | 109 |
| `ektypwseis_arta_page` | 119 |
| `ilektroniko_prosklitirio_gamou_page` | 120 |
| `site_gamou_rsvp_page` | 129 |
| `web_development_arta_page` | 136 |
| `dianomi_fylladion_arta_page` | 143 |
| `grafistas_arta_page` | 161 |
| `epigrafes_arta_page` | 202 |
| `diafimistiki_eteria_page` | 212 |
| `diafimistika_dora_page` | 221 |
| `diafimistiki_page` | 233 |

**Orphaned + thin + templated + keyword-slug is the textbook doorway-page fingerprint.**
Google's spam policy names this pattern explicitly. Publishing 11 of them at
`priority: 0.9` in the sitemap while linking to none of them is actively working
against you — it dilutes crawl budget and signals low quality sitewide.

Additionally, `/diafimistiki` and `/diafimistiki-eteria` target essentially the same
query ("διαφημιστική" / "διαφημιστική εταιρεία"). They compete with each other **and**
with your homepage, which already ranks for
*"Διαφημιστική Εταιρεία Άρτα"* — your single best-performing query.

---

## 3. Missing `<h1>` on three top pages

| Route | Status |
|---|---|
| `/about` | **no `<h1>`** — `AboutHero.tsx` has no heading tag at all |
| `/services` | **no `<h1>`** — first heading is an `<h2>` on the CTA ([`ServicesPageClient.tsx:138`](app/services/ServicesPageClient.tsx#L138)) |
| `/projects` | **no `<h1>`** — first heading is an `<h3>` ([`ProjectsClient.tsx:164`](app/projects/ProjectsClient.tsx#L164)) |

These are three of your most important nav-linked, indexed pages. `/about` already
earns clicks for *"Σχετικά με adinfinity"*. This is a 15-minute fix.

---

## 4. Cross-property cannibalization (wedding funnel)

The main site and `invitations.adinfinity.gr` ship competing pages for identical queries —
including a route with the **literally identical slug**:

| Main site | Invitations subdomain |
|---|---|
| `/ilektroniko-prosklitirio-gamou` | `/ilektroniko-prosklitirio-gamou` ← same slug |
| `/psifiako-prosklitirio-gamou` | `/psifiakes-proskliseis-gamou` |
| `/site-gamou-rsvp` | `/prosklitirio-gamou-rsvp` |

Two properties splitting the same signals. The subdomain's versions are the better
product (real demos, a request flow, live invitation pages); the main site's three are
109–129-word clones.

---

## 5. What's already correct — don't touch

- [`app/robots.ts`](app/robots.ts) — `/_next/` correctly **not** blocked; AI citation bots explicitly allowed; `host` correctly omitted
- [`app/layout.tsx`](app/layout.tsx) — single cross-linked JSON-LD `@graph`; `metadataBase`; correct `viewport` as a separate export; `googleBot` `max-image-preview: large`
- Correctly **no** `title.template` (avoids `… | adinfinity | adinfinity`)
- Correctly **no** `hreflang` — locale is client-switched at the same URL, so advertising `/en` would 404
- Content is genuinely server-rendered — messages are statically bundled in [`components/useTranslations.tsx`](components/useTranslations.tsx), Greek is the SSR default. Crawlers see real HTML.
- [`next.config.mjs`](next.config.mjs) — AVIF/WebP, sane `deviceSizes`, HTTP→HTTPS + www→apex 308s, legacy Joomla `?option=com_k2` redirect
- Sitemap `lastModified` is a stable constant, not `new Date()` — correct; Google distrusts lastmod that moves every deploy

---

# The plan

## ADD

**A1. Link the orphans. Highest leverage, lowest effort.**
- Add a **second nav column** ("Υπηρεσίες στην Άρτα") to the `menuItems` dropdown in
  [`Header.tsx:33-42`](app/components/Header.tsx#L33-L42) for the local-intent pages you keep after §REMOVE.
- Add a proper **footer sitemap block** — 3-4 columns (Υπηρεσίες / Περιοχές / Εταιρεία / Νομικά).
  Right now the footer links only legal pages. This alone can unlock most of the orphans.
- Add **`/pricing` to the main nav.** It's a money page with zero links.

**A2. Contextual cross-links.** Each service page should link to its related local page and
to 2-3 relevant case studies. `/prints` → `/ektypwseis-arta` → case studies for print clients.
This builds real topical clusters instead of isolated islands.

**A3. Add `<h1>` to `/about`, `/services`, `/projects`.** See §3.

**A4. Breadcrumb JSON-LD on the sub-pages.** GSC already reports 10 valid breadcrumbs —
extend it to `/website-development/*` and the new `/projects/[slug]`.

## REMOVE

**R1. Delete or consolidate the doorway clones.** Pick per page — keep the ones you can
genuinely make substantial (600+ words, real photos, real pricing, real FAQs), 301 the rest.

| Route | Action |
|---|---|
| `/diafimistiki` | **301 → `/`** — cannibalizes the homepage on your best query |
| `/diafimistiki-eteria` | **301 → `/`** — same, near-duplicate of the above |
| `/ektypwseis-arta` | **Keep + expand** — `/prints` already earns clicks; this is a real local query |
| `/grafistas-arta` | **Keep + expand** — real local query |
| `/epigrafes-arta` | **Keep + expand** — no competing English page; it's your only signage page |
| `/web-development-arta` | **301 → `/website-development`** unless expanded |
| `/dianomi-fylladion-arta` | **301 → `/flyer-distribution`** unless expanded |
| `/diafimistika-dora` | **Keep + expand** — no competing page |
| `/katastrifi-web-efarmogon` | **301 → `/website-development/custom-web-apps`** — duplicate topic |

**R2. Resolve the wedding cannibalization.** Recommended: **301 the main site's three
wedding pages to their subdomain equivalents**, and make `/invitations` the hub that links
out. This kills the duplication with the least work and concentrates signals on the
better product.

**R3. Drop removed routes from [`app/sitemap.ts`](app/sitemap.ts).** Never leave a 301'd
or noindex'd URL in the sitemap — it's a direct quality signal to Google.

**R4. Rebalance sitemap priorities.** Thin local clones are currently `0.9` — the same as
`/services`. Priority is relative; flattening everything to 0.9 makes it meaningless.

## CREATE

**C1. `/projects/[slug]` — 30 real case study pages. Do this first.**

[`app/data/projects.json`](app/data/projects.json) already contains **30 fully-written
bilingual case studies**, each with `description` / `challenge` / `solution` / `results` /
`businessType` / `location` / `services` / `year` / `duration`. That's roughly
**250-400 words of unique Greek prose per entry** — 2-3× the content of any doorway clone,
and infinitely higher quality: real named local businesses (Α.Π.Ο.Φ.Α, Bohĕme Beach Bar,
Physio Elpida, ΚΥΚΛΟΣ Εκπαίδευση, Αστεριάς Κορωνησία…), real outcomes, real E-E-A-T.

**All 30 are currently locked inside a modal with no URL.** They are invisible to Google.

```
app/projects/[slug]/page.tsx        → generateStaticParams() over projects.json
app/projects/[slug]/opengraph-image.tsx → per-project OG card via ImageResponse
```

Each page should carry `CreativeWork` + `Organization` JSON-LD, breadcrumbs, a canonical,
and links back to the relevant service page. Add the slugs to the sitemap.

This converts your best existing asset into ~30 indexable pages targeting long-tail
local-business queries — and it is *legitimate* content, not doorway pages. It also
gives `/projects` real internal links to distribute.

**C2. A blog / knowledge hub (`/blog` or `/odigoi`).** You have zero editorial surface.
`/graphic-design-guide` is a lone orphan doing this job badly. A hub with 8-10 genuine
Greek-language posts ("Πόσο κοστίζει ένα λογότυπο", "Τι χρειάζεται για μια ιστοσελίδα
επιχείρησης") builds the topical authority that makes the local pages rank.

**C3. Location pages — only if genuinely served.** `/diafimistiki-arta` style pages for
Ιωάννινα / Πρέβεζα / Ηγουμενίτσα are legitimate **only** with unique local content
(local clients, local projects, local contact detail). Do **not** clone the current
template into more cities — that repeats the mistake at greater scale.

**C4. FAQ JSON-LD on the service pages.** The `ServiceLandingPage` template already
renders a `faq` array — it isn't being emitted as `FAQPage` structured data.

---

## Priority order

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | `/projects/[slug]` — 30 case study pages (**C1**) | M | **Very high** |
| 2 | Footer sitemap block + nav expansion (**A1**) | S | **Very high** |
| 3 | Add `<h1>` to `/about` `/services` `/projects` (**A3**) | XS | Medium |
| 4 | 301 the doorway clones, clean the sitemap (**R1, R3**) | S | High |
| 5 | Resolve wedding cannibalization (**R2**) | S | High |
| 6 | Expand the 4 surviving local pages to 600+ words (**R1**) | M | High |
| 7 | Contextual cross-linking / topical clusters (**A2**) | M | Medium |
| 8 | Blog hub (**C2**) | L | High (slow) |
| 9 | FAQ + breadcrumb JSON-LD (**A4, C4**) | S | Low-Medium |

---

## Notes

- **Core Web Vitals: "No data"** in GSC for both mobile and desktop. That's a traffic-volume
  problem, not a performance problem — CrUX needs sufficient real-user samples. It will
  populate as traffic grows. Don't chase it yet.
- **Verify before assuming penalty.** Use the GSC URL Inspection tool on 2-3 orphans to
  confirm the exact reason string ("Discovered – currently not indexed" vs "Crawled –
  currently not indexed"). "Crawled – not indexed" confirms the thin-content read;
  "Discovered – not indexed" confirms the link-graph read. Both fixes above apply either way.
- [`next.config.mjs`](next.config.mjs) sets `typescript.ignoreBuildErrors: true`. Not an SEO
  issue, but it means type regressions in metadata code ship silently.
- English currently earns nothing organically — all locales serve from one URL with
  client-side switching. That's the correct call for a 93%-Greece audience. Only revisit
  if you actively want international traffic, and only with a real `/en` URL space.
