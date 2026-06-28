# adifinity

<p align="center">
  <img src="public/logo.png" alt="adifinity logo" width="220" />
</p>

> Because your business deserves better than a Wix template, and your competitors deserve to cry.

The official website for **adifinity** — a Greek marketing agency operating since 2013, back when jQuery was still considered cutting-edge. Built with Next.js 16 App Router, fully bilingual (Greek/English), accessibility-compliant, GDPR-ready, and fast enough to impress even the pickiest Google crawler.

Available at **[adinfinity.gr](https://adinfinity.gr)** · Greek by default · English because we're fancy

---

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-4-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-latest-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-latest-161618?style=for-the-badge&logo=radix-ui&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-latest-000000?style=for-the-badge)

---

## What We Do

Full-service marketing agency based in Arta, Greece. Making businesses look good since 2013.

- **Print Services** — Flyers, packaging, business cards
- **Graphic Design** — Brand identity that doesn't embarrass
- **Flyer Distribution** — Old-school marketing that still works
- **Website Development** — Custom web apps, e-commerce, landing pages, technical SEO
- **Market Research** — Data before decisions. Guessing is for amateurs.

---

## Features

- Dark theme, fully bilingual (Greek/English), responsive design
- Smooth animations with Framer Motion, 3D elements with Three.js
- Contact forms with file upload, project gallery with case studies
- GDPR and DSA compliant with cookie consent
- WCAG accessibility compliance with custom widget
- SEO optimized with dynamic metadata, hreflang, structured data
- Core Web Vitals tracking via Vercel Analytics
- Automatic HTTPS redirects and legacy Joomla URL migration

---

## Getting Started

Node.js 18+ and pnpm required.

```bash
# Install pnpm if needed
npm install -g pnpm

# Clone and install
git clone <your-repo-url>
cd adifinity
pnpm install

# Setup environment
cp .env.example .env
# Edit .env with EMAIL_USER and EMAIL_PASS (use Gmail App Password)

# Development
npm run dev
# Open http://localhost:3000

# Production
pnpm build
pnpm start
```

---

## Project Structure

```
adifinity/
├── app/                    # Next.js App Router (pages, API routes, components)
├── components/             # Shared components (UI library, language switcher)
├── messages/               # Translation files (el/ and en/)
├── hooks/                  # Custom React hooks
├── lib/                    # Utilities (cn(), security)
├── types/                  # TypeScript definitions
├── styles/                 # Global CSS and accessibility overrides
├── public/                 # Static assets (images, flags, logo)
├── middleware.ts           # HTTP redirects
├── i18n.ts                 # next-intl config
└── next.config.mjs         # Next.js config + Joomla redirects
```

---

## Internationalization

- Default: Greek (`el`), Secondary: English (`en`)
- Library: `next-intl` with client-side language switching
- 29 namespaced translation files per language
- SEO: `hreflang` tags, localized metadata and Open Graph
- Update both `messages/el/` and `messages/en/` when editing translations

---

## SEO & Accessibility

- Dynamic metadata per page/language via `DynamicSEO.tsx`
- Structured data (Organization, LocalBusiness JSON-LD)
- Open Graph + Twitter Cards, canonical URLs, hreflang
- Core Web Vitals tracked via Vercel Analytics
- WCAG compliance with skip links, accessibility widget, semantic HTML
- Accessibility page at `/accessibility`

---

## Contact API

`POST /api/contact` — Handles form submissions with optional file attachment. Sends email via Nodemailer (Gmail transport). Returns `{ success: boolean, message: string }`.

---

## Compliance

- **GDPR**: Cookie consent banner, settings modal, privacy policy, cookie policy
- **DSA**: EU Digital Services Act compliance page with content reporting form

---

## Contributing

- Update both language directories when editing translations
- Add `layout.tsx` with proper metadata for new pages
- Put shared components in `components/ui/`, page-specific in `app/components/`
- Verify metadata renders correctly in both languages for SEO changes

---

## License

Copyright 2026 adifinity. All rights reserved. This repository is for demonstration purposes. Unauthorized copying, distribution, or modification is prohibited.

---

## Contact

Email: adenfinity@gmail.com
Phone: +30 2681 303007
Address: Βασ. Πύρρου 30, Άρτα 471 32, Greece
Website: [adinfinity.gr](https://adinfinity.gr)

---

*Built with caffeine, obsessive attention to detail, and a deep personal grudge against slow websites.*
