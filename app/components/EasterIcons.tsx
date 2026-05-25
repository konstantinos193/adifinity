import type React from "react"
import Image from "next/image"

export const EasterEggIcon: React.FC = () => (
  <div className="relative inline-block dark:opacity-90 transition-all duration-300 ease-in-out">
    <Image
      src="/easteregg.svg"
      alt="Easter egg icon"
      width={24}
      height={30}
      className="w-auto h-auto"
    />
  </div>
)

export const EasterBunnyIcon: React.FC = () => (
  <svg
    width="28"
    height="32"
    viewBox="0 0 28 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Easter bunny icon"
    className="dark:opacity-90 transition-all duration-300 ease-in-out"
    style={{ willChange: 'transform, opacity' }}
  >
    {/* Bunny body */}
    <path
      d="M14 22C18.4183 22 22 18.4183 22 14C22 9.58172 18.4183 6 14 6C9.58172 6 6 9.58172 6 14C6 18.4183 9.58172 22 14 22Z"
      fill="url(#bunny-gradient)"
      className="dark:stroke-[#80ffff] transition-colors duration-300"
      stroke="#01FFFF"
      strokeWidth="1.5"
      filter="url(#bunny-shadow)"
    />

    {/* Eyes and nose */}
    <circle cx="11" cy="12" r="1" className="dark:fill-[#ffb3b9] fill-[#FF9AA2] transition-colors duration-300" />
    <circle cx="17" cy="12" r="1" className="dark:fill-[#ffb3b9] fill-[#FF9AA2] transition-colors duration-300" />
    <circle cx="14" cy="16" r="1" className="dark:fill-[#ffb3b9] fill-[#FF9AA2] transition-colors duration-300" />

    {/* Ears */}
    <path 
      d="M8 4 C6 4 5 6 5.5 8 L7 12 C7.5 14 9 13 9 11 L8 4 Z" 
      className="dark:fill-[#ffe6ec] dark:stroke-[#80ffff] fill-[#FFD1DC] transition-colors duration-300" 
      stroke="#01FFFF" 
      strokeWidth="1" 
    />
    <path
      d="M20 4 C22 4 23 6 22.5 8 L21 12 C20.5 14 19 13 19 11 L20 4 Z"
      className="dark:fill-[#ffe6ec] dark:stroke-[#80ffff] fill-[#FFD1DC] transition-colors duration-300"
      stroke="#01FFFF"
      strokeWidth="1"
    />

    {/* Feet */}
    <path
      d="M11 22 C9 24 8 26 10 26 C12 26 12 24.5 12 23 C12 22.5 12 22 12 22"
      className="dark:fill-[#ffe6ec] dark:stroke-[#80ffff] fill-[#FFD1DC] transition-colors duration-300"
      stroke="#01FFFF"
      strokeWidth="1"
    />
    <path
      d="M17 22 C19 24 20 26 18 26 C16 26 16 24.5 16 23 C16 22.5 16 22 16 22"
      className="dark:fill-[#ffe6ec] dark:stroke-[#80ffff] fill-[#FFD1DC] transition-colors duration-300"
      stroke="#01FFFF"
      strokeWidth="1"
    />

    {/* Tiny egg detail */}
    <path
      d="M18 18 C19 18 20 19 20 20 C20 21 19 22 18 22 C17 22 16 21 16 20 C16 19 17 18 18 18 Z"
      className="dark:fill-[#ff80b3] dark:stroke-[#80ffff] fill-[#FF4081] transition-colors duration-300"
      stroke="#01FFFF"
      strokeWidth="1"
    />

    <defs>
      {/* Gradient for bunny body */}
      <linearGradient id="bunny-gradient" x1="6" y1="6" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop className="dark:stop-color-[#f2f2f2] transition-colors duration-300" stopColor="#FFFFFF" />
        <stop offset="1" className="dark:stop-color-[#d9d9d9] transition-colors duration-300" stopColor="#E6E6E6" />
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
