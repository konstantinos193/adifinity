import type React from "react"

export const EasterEggIcon: React.FC = () => (
  <svg
    width="24"
    height="30"
    viewBox="0 0 24 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Easter egg icon"
  >
    {/* Egg shape */}
    <path
      d="M12 2C8 2 4 8 4 15C4 22 8 28 12 28C16 28 20 22 20 15C20 8 16 2 12 2Z"
      fill="url(#egg-gradient)"
      stroke="#01FFFF"
      strokeWidth="1.5"
      filter="url(#egg-shadow)"
    />

    {/* Playful patterns */}
    <path d="M8 10 Q9 8 10 10 T12 12" stroke="#FF4081" strokeWidth="1" strokeLinecap="round" />
    <circle cx="16" cy="12" r="1.5" fill="#C7CEEA" />
    <path d="M10 20 L12 22 L14 20" stroke="#FF4081" strokeWidth="1" strokeLinecap="round" />

    {/* Grass detail */}
    <path d="M8 26 L10 28 L12 26 L14 28 L16 26" stroke="#01FFFF" strokeWidth="1" strokeLinecap="round" />

    <defs>
      {/* Gradient for egg */}
      <linearGradient id="egg-gradient" x1="4" y1="2" x2="20" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFD1DC" />
        <stop offset="1" stopColor="#FF9999" />
      </linearGradient>

      {/* Shadow for egg */}
      <filter id="egg-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
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

export const EasterBunnyIcon: React.FC = () => (
  <svg
    width="28"
    height="32"
    viewBox="0 0 28 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Easter bunny icon"
  >
    {/* Bunny body */}
    <path
      d="M14 22C18.4183 22 22 18.4183 22 14C22 9.58172 18.4183 6 14 6C9.58172 6 6 9.58172 6 14C6 18.4183 9.58172 22 14 22Z"
      fill="url(#bunny-gradient)"
      stroke="#01FFFF"
      strokeWidth="1.5"
      filter="url(#bunny-shadow)"
    />

    {/* Eyes and nose */}
    <circle cx="11" cy="12" r="1" fill="#FF9AA2" />
    <circle cx="17" cy="12" r="1" fill="#FF9AA2" />
    <circle cx="14" cy="16" r="1" fill="#FF9AA2" />

    {/* Ears */}
    <path d="M8 4 C6 4 5 6 5.5 8 L7 12 C7.5 14 9 13 9 11 L8 4 Z" fill="#FFD1DC" stroke="#01FFFF" strokeWidth="1" />
    <path
      d="M20 4 C22 4 23 6 22.5 8 L21 12 C20.5 14 19 13 19 11 L20 4 Z"
      fill="#FFD1DC"
      stroke="#01FFFF"
      strokeWidth="1"
    />

    {/* Feet */}
    <path
      d="M11 22 C9 24 8 26 10 26 C12 26 12 24.5 12 23 C12 22.5 12 22 12 22"
      fill="#FFD1DC"
      stroke="#01FFFF"
      strokeWidth="1"
    />
    <path
      d="M17 22 C19 24 20 26 18 26 C16 26 16 24.5 16 23 C16 22.5 16 22 16 22"
      fill="#FFD1DC"
      stroke="#01FFFF"
      strokeWidth="1"
    />

    {/* Tiny egg detail */}
    <path
      d="M18 18 C19 18 20 19 20 20 C20 21 19 22 18 22 C17 22 16 21 16 20 C16 19 17 18 18 18 Z"
      fill="#FF4081"
      stroke="#01FFFF"
      strokeWidth="1"
    />

    <defs>
      {/* Gradient for bunny body */}
      <linearGradient id="bunny-gradient" x1="6" y1="6" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#E6E6E6" />
      </linearGradient>

      {/* Shadow for bunny */}
      <filter id="bunny-shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1" />
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
