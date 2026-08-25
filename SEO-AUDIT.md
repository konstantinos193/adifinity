# SEO Audit — adinfinity.gr

**Scope:** `E:\programming\adinfinity\adifinity` (main Next.js site)
**Date:** 2026-08-25
**Baseline (GSC):** 12 indexed / 40 not indexed · 41 clicks · 326 impressions · 93% Greece

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
