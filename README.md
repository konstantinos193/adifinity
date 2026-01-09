# adinfinity

> Because your business deserves better than a Wix template and your competitors deserve to cry.

A modern, dark-themed marketing agency website built with Next.js 16, because we're not living in 2020 anymore. This is where we showcase our services, projects, and convince people that yes, we can actually make their business look good.

## Tech Stack (The Usual Suspects)

### Core Framework
![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### Styling & UI
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-All_Components-161618?style=for-the-badge&logo=radix-ui&logoColor=white)

### Icons & Graphics
![Lucide React](https://img.shields.io/badge/Lucide_React-0.562.0-FF6B6B?style=for-the-badge)
![Heroicons](https://img.shields.io/badge/Heroicons-latest-7C3AED?style=for-the-badge)
![React Icons](https://img.shields.io/badge/React_Icons-latest-F7DF1E?style=for-the-badge&logo=react&logoColor=black)

### Forms & Validation
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7.70.0-EC5990?style=for-the-badge)
![Zod](https://img.shields.io/badge/Zod-4.3.5-3E63DD?style=for-the-badge)
![Hookform Resolvers](https://img.shields.io/badge/Hookform_Resolvers-5.2.2-FF6B6B?style=for-the-badge)

### Charts & Data Visualization
![Chart.js](https://img.shields.io/badge/Chart.js-4.5.1-FF6384?style=for-the-badge&logo=chart.js&logoColor=white)
![React ChartJS 2](https://img.shields.io/badge/React_ChartJS_2-5.3.1-FF6384?style=for-the-badge)
![Recharts](https://img.shields.io/badge/Recharts-3.6.0-00D9FF?style=for-the-badge)

### Maps & Location
![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900?style=for-the-badge&logo=leaflet&logoColor=white)

### Email & Communication
![EmailJS](https://img.shields.io/badge/EmailJS-4.4.1-FF6B6B?style=for-the-badge)
![Nodemailer](https://img.shields.io/badge/Nodemailer-7.0.12-FF6B6B?style=for-the-badge)
![Resend](https://img.shields.io/badge/Resend-6.7.0-FF6B6B?style=for-the-badge)

### Analytics & Performance
![Vercel Analytics](https://img.shields.io/badge/Vercel_Analytics-1.6.1-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Vercel Speed Insights](https://img.shields.io/badge/Speed_Insights-1.3.1-000000?style=for-the-badge&logo=vercel&logoColor=white)

### Utilities & Helpers
![Date-fns](https://img.shields.io/badge/date--fns-4.1.0-FF6B6B?style=for-the-badge)
![clsx](https://img.shields.io/badge/clsx-2.1.1-FF6B6B?style=for-the-badge)
![Tailwind Merge](https://img.shields.io/badge/Tailwind_Merge-3.4.0-38B2AC?style=for-the-badge)
![Class Variance Authority](https://img.shields.io/badge/CVA-0.7.1-FF6B6B?style=for-the-badge)

### Carousels & UI Components
![Embla Carousel](https://img.shields.io/badge/Embla_Carousel-8.6.0-FF6B6B?style=for-the-badge)
![React Slick](https://img.shields.io/badge/React_Slick-0.31.0-FF6B6B?style=for-the-badge)
![Slick Carousel](https://img.shields.io/badge/Slick_Carousel-1.8.1-FF6B6B?style=for-the-badge)

### Notifications
![Sonner](https://img.shields.io/badge/Sonner-2.0.7-FF6B6B?style=for-the-badge)

### Development Tools
![PostCSS](https://img.shields.io/badge/PostCSS-8-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)
![Autoprefixer](https://img.shields.io/badge/Autoprefixer-10.4.23-DD3735?style=for-the-badge)

## What This Thing Does

This is the website for adinfinity, a Greek marketing agency that's been around since 2013 (yes, we're old enough to remember when jQuery was cool). We offer:

- **Print Services** - Because sometimes you need things that exist in the real world
- **Graphic Design** - Making your brand look less like it was designed in MS Paint
- **Flyer Distribution** - Old school marketing that still works (somehow)
- **Website Development** - Modern websites that don't look like they're from 2005
- **Market Research** - Because guessing is for amateurs

## Features

- Dark theme that won't burn your retinas at 2 AM
- Responsive design that actually works on mobile (shocking, I know)
- Smooth animations because we're not savages
- Contact forms that actually send emails (revolutionary, right?)
- Project gallery to show off our work
- Service pages that explain what we do without putting you to sleep
- Easter egg theme toggle (because why not?)

## Getting Started

### Prerequisites

You'll need Node.js installed. If you don't have it, go get it. We're not your parents.

```bash
node --version  # Should be 18+ or you're living in the past
npm --version   # Or yarn, we don't judge (much)
```

### Installation

1. Clone this repository (or download it, we're not picky):
```bash
git clone <your-repo-url>
cd adifinity
```

2. Install dependencies (this might take a while, go grab coffee):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser and pray it works.

### Building for Production

When you're ready to deploy (or just want to see if everything breaks):

```bash
npm run build
npm start
```

If it builds without errors, congratulations. You've achieved the impossible.

## Project Structure

```
adifinity/
├── app/                    # Next.js app directory (because we're modern)
│   ├── components/         # React components (the good stuff)
│   ├── about/             # About page (we exist, here's proof)
│   ├── contact/           # Contact page (talk to us, maybe)
│   ├── services/          # Services page (what we do)
│   ├── projects/          # Projects page (what we've done)
│   └── [service-pages]/   # Individual service pages
├── components/            # Shared UI components (shadcn/ui stuff)
├── lib/                   # Utility functions (the boring but necessary stuff)
├── public/                # Static assets (images, logos, etc.)
└── styles/                # Global styles (because CSS is still a thing)
```

## Key Dependencies Explained

- **Next.js 16** - The framework that makes React actually usable for websites
- **TypeScript** - Because JavaScript errors at runtime are for masochists
- **Tailwind CSS** - Utility-first CSS that doesn't make you want to cry
- **Framer Motion** - Animations that don't look like they're from 2010
- **Radix UI** - Accessible components that don't make you hate yourself
- **React Hook Form** - Forms that don't make you question your life choices
- **Zod** - Validation that actually works (unlike your ex's promises)

## Contributing

Want to contribute? Great. Here's what you need to know:

1. Don't break things (obviously)
2. Follow the existing code style (or don't, we're not your boss)
3. Test your changes (or don't, live dangerously)
4. Write meaningful commit messages (or just write "fix stuff", we've all been there)

## License

Copyright 2026 adinfinity. All rights reserved. Because we said so.

## Support

Having issues? Check the code. Still having issues? Check it again. Still broken? That's on you, buddy.

For actual support, you can:
- Email us at adenfinity@gmail.com
- Call us at +30 2681 303007
- Visit us at Βασ. Πύρρου 30, Άρτα 471 32 (if you're in Greece)

## Acknowledgments

- Thanks to all the open-source maintainers who make our jobs possible
- Thanks to coffee for keeping us awake during late-night debugging sessions
- Thanks to Stack Overflow for existing (we all know we use it)

---

Built with questionable amounts of caffeine and an unhealthy obsession with making things look good.

