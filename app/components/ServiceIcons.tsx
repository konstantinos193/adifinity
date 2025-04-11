import type React from "react"

interface IconProps {
  className?: string
}

// Printing icon with paper, business cards and large format prints
export const PrintingIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Printer icon"
  >
    {/* Main printer body */}
    <rect
      x="8"
      y="12"
      width="48"
      height="36"
      rx="5"
      fill="url(#printing-machine-gradient)"
      stroke="#01FFFF"
      strokeWidth="1.5"
    />

    {/* Top paper tray */}
    <rect x="16" y="6" width="32" height="8" rx="2" fill="url(#tray-gradient)" stroke="#01FFFF" strokeWidth="1.5" />

    {/* Bottom paper tray */}
    <rect x="16" y="48" width="32" height="8" rx="2" fill="url(#tray-gradient)" stroke="#01FFFF" strokeWidth="1.5" />

    {/* Paper inside printer */}
    <rect
      x="22"
      y="22"
      width="20"
      height="16"
      rx="1"
      fill="white"
      stroke="#01FFFF"
      strokeWidth="1.5"
      filter="url(#inner-shadow)"
    />

    {/* Control buttons / indicators */}
    <circle cx="46" cy="26" r="2" fill="#01FFFF" />
    <circle cx="46" cy="34" r="2" fill="#01FFFF" />
    <circle cx="18" cy="26" r="2" fill="#01FFFF" />
    <circle cx="18" cy="34" r="2" fill="#01FFFF" />

    <defs>
      {/* Gradient for main body */}
      <linearGradient id="printing-machine-gradient" x1="8" y1="12" x2="56" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#01FFFF" stopOpacity="0.3" />
        <stop offset="1" stopColor="#01A9FF" stopOpacity="0.3" />
      </linearGradient>

      {/* Gradient for trays */}
      <linearGradient id="tray-gradient" x1="16" y1="6" x2="48" y2="14" gradientUnits="userSpaceOnUse">
        <stop stopColor="#01FFFF" stopOpacity="0.1" />
        <stop offset="1" stopColor="#01A9FF" stopOpacity="0.1" />
      </linearGradient>

      {/* Subtle shadow for paper */}
      <filter id="inner-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="0" dy="1" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
)

// Graphic design icon with pen tool, artboard and design elements
export const GraphicDesignIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Graphic design icon"
  >
    {/* Background canvas */}
    <rect x="8" y="8" width="48" height="48" rx="6" fill="url(#design-gradient)" stroke="#01FFFF" strokeWidth="1.5" />

    {/* Pencil (sketching) */}
    <path
      d="M18 42 L22 38 L40 20 L44 24 L26 42 Z"
      fill="#01A9FF"
      stroke="#01FFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M22 38 L26 34" stroke="#01FFFF" strokeWidth="1.5" strokeLinecap="round" />

    {/* Logo-like emblem (branding) */}
    <path
      d="M32 24 A8 8 0 0 1 40 32 A8 8 0 0 1 32 40 A8 8 0 0 1 24 32 A8 8 0 0 1 32 24 Z"
      fill="white"
      stroke="#01FFFF"
      strokeWidth="1.5"
      filter="url(#emblem-shadow)"
    />
    <path d="M32 28 A4 4 0 0 1 36 32 A4 4 0 0 1 32 36 A4 4 0 0 1 28 32 A4 4 0 0 1 32 28 Z" fill="#01A9FF" />

    {/* Color swatch/droplet (color selection) */}
    <path d="M44 44 Q46 48 44 50 Q42 48 40 44 Q42 40 44 44 Z" fill="#01FFFF" stroke="#01A9FF" strokeWidth="1.5" />

    <defs>
      {/* Gradient for canvas */}
      <linearGradient id="design-gradient" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#01FFFF" stopOpacity="0.2" />
        <stop offset="1" stopColor="#01A9FF" stopOpacity="0.2" />
      </linearGradient>

      {/* Shadow for emblem */}
      <filter id="emblem-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="0" dy="1" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
)

// Flyer distribution icon with hand giving flyer and multiple papers
export const FlyerDistributionIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Flyer distribution icon"
  >
    {/* Background (optional subtle ground) */}
    <rect x="8" y="48" width="48" height="8" rx="2" fill="url(#ground-gradient)" stroke="#01FFFF" strokeWidth="1.5" />

    {/* Flyer stack */}
    <rect
      x="16"
      y="20"
      width="24"
      height="16"
      rx="1"
      transform="rotate(-10 16 20)"
      fill="white"
      stroke="#01FFFF"
      strokeWidth="1.5"
      filter="url(#stack-shadow)"
    />
    <rect
      x="18"
      y="22"
      width="24"
      height="16"
      rx="1"
      transform="rotate(-5 18 22)"
      fill="url(#flyer-gradient)"
      stroke="#01FFFF"
      strokeWidth="1.5"
    />

    {/* Single flyer in motion */}
    <rect
      x="40"
      y="16"
      width="16"
      height="8"
      rx="1"
      transform="rotate(15 40 16)"
      fill="#01A9FF"
      stroke="#01FFFF"
      strokeWidth="1.5"
    />

    {/* Hand distributing flyer */}
    <path
      d="M24 40 C20 40 16 36 16 32 C16 28 20 24 24 24 L28 24 C30 24 32 26 32 28 L32 36 C32 38 30 40 28 40 Z"
      fill="#01A9FF"
      stroke="#01FFFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Motion lines */}
    <path d="M36 20 C38 20 40 22 40 24" stroke="#01FFFF" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M38 16 C40 16 42 18 42 20" stroke="#01FFFF" strokeWidth="1.5" strokeLinecap="round" />

    <defs>
      {/* Gradient for flyers */}
      <linearGradient id="flyer-gradient" x1="18" y1="22" x2="42" y2="38" gradientUnits="userSpaceOnUse">
        <stop stopColor="#01FFFF" stopOpacity="0.3" />
        <stop offset="1" stopColor="#01A9FF" stopOpacity="0.3" />
      </linearGradient>

      {/* Gradient for ground */}
      <linearGradient id="ground-gradient" x1="8" y1="48" x2="56" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#01FFFF" stopOpacity="0.1" />
        <stop offset="1" stopColor="#01A9FF" stopOpacity="0.1" />
      </linearGradient>

      {/* Shadow for flyer stack */}
      <filter id="stack-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="0" dy="1" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
)

// Website development icon with code brackets, responsive devices
export const WebsiteIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Website icon"
  >
    {/* Browser window */}
    <rect x="8" y="8" width="48" height="40" rx="4" fill="url(#website-gradient)" stroke="#01FFFF" strokeWidth="1.5" />

    {/* Navigation bar */}
    <rect
      x="10"
      y="10"
      width="44"
      height="6"
      rx="1"
      fill="#01FFFF"
      fillOpacity="0.2"
      stroke="#01FFFF"
      strokeWidth="1.5"
    />
    <circle cx="14" cy="13" r="1.5" fill="#01FFFF" />
    <circle cx="20" cy="13" r="1.5" fill="#01FFFF" />
    <circle cx="26" cy="13" r="1.5" fill="#01FFFF" />

    {/* Hero section */}
    <rect
      x="12"
      y="18"
      width="40"
      height="10"
      rx="2"
      fill="white"
      stroke="#01FFFF"
      strokeWidth="1.5"
      filter="url(#content-shadow)"
    />

    {/* Content cards */}
    <rect x="12" y="32" width="12" height="12" rx="2" fill="#01A9FF" stroke="#01FFFF" strokeWidth="1.5" />
    <rect x="28" y="32" width="12" height="12" rx="2" fill="#01A9FF" stroke="#01FFFF" strokeWidth="1.5" />
    <rect x="44" y="32" width="8" height="12" rx="2" fill="#01A9FF" stroke="#01FFFF" strokeWidth="1.5" />

    {/* Cursor */}
    <path
      d="M20 24 L16 28 L18 30 L22 26 Z"
      fill="#01FFFF"
      stroke="#01A9FF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <defs>
      {/* Gradient for screen */}
      <linearGradient id="website-gradient" x1="8" y1="8" x2="56" y2="48" gradientUnits="userSpaceOnUse">
        <stop stopColor="#01FFFF" stopOpacity="0.3" />
        <stop offset="1" stopColor="#01A9FF" stopOpacity="0.3" />
      </linearGradient>

      {/* Shadow for content */}
      <filter id="content-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="0" dy="1" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
)

export const MarketResearchIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Market research icon"
  >
    {/* Background workspace */}
    <rect x="8" y="8" width="48" height="48" rx="6" fill="url(#research-gradient)" stroke="#01FFFF" strokeWidth="1.5" />

    {/* Bar chart */}
    <rect
      x="16"
      y="32"
      width="8"
      height="16"
      rx="1"
      fill="white"
      stroke="#01FFFF"
      strokeWidth="1.5"
      filter="url(#chart-shadow)"
    />
    <rect x="26" y="24" width="8" height="24" rx="1" fill="#01A9FF" stroke="#01FFFF" strokeWidth="1.5" />
    <rect x="36" y="36" width="8" height="12" rx="1" fill="white" stroke="#01FFFF" strokeWidth="1.5" />

    {/* Magnifying glass */}
    <circle cx="44" cy="20" r="6" fill="none" stroke="#01FFFF" strokeWidth="1.5" />
    <path d="M48 24 L52 28" stroke="#01FFFF" strokeWidth="1.5" strokeLinecap="round" />

    {/* Consumer figure or checkmark */}
    <path d="M20 48 L24 52 L28 48" stroke="#01A9FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

    <defs>
      {/* Gradient for background */}
      <linearGradient id="research-gradient" x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
        <stop stopColor="#01FFFF" stopOpacity="0.2" />
        <stop offset="1" stopColor="#01A9FF" stopOpacity="0.2" />
      </linearGradient>

      {/* Shadow for chart */}
      <filter id="chart-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
        <feOffset dx="0" dy="1" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.2" />
        </feComponentTransfer>
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
)
