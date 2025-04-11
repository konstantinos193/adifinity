"use client"

import { useEffect, useState, useRef } from "react"
import { createPortal } from "react-dom"

// Easter egg SVG with different colors
const EasterEggSVG = ({ color1, color2, id }: { color1: string; color2: string; id: number }) => (
  <svg
    width="24"
    height="30"
    viewBox="0 0 24 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Falling Easter egg"
  >
    {/* Egg shape */}
    <path
      d="M12 2C8 2 4 8 4 15C4 22 8 28 12 28C16 28 20 22 20 15C20 8 16 2 12 2Z"
      fill={`url(#egg-gradient-${id})`}
      stroke="#01FFFF"
      strokeWidth="1.5"
      filter="url(#egg-shadow)"
    />

    {/* Playful patterns */}
    <path d="M8 10 Q9 8 10 10 T12 12" stroke="#FF4081" strokeWidth="1" strokeLinecap="round" />
    <circle cx="16" cy="12" r="1.5" fill={color2} />
    <path d="M10 20 L12 22 L14 20" stroke="#FF4081" strokeWidth="1" strokeLinecap="round" />

    <defs>
      {/* Gradient for egg */}
      <linearGradient id={`egg-gradient-${id}`} x1="4" y1="2" x2="20" y2="28" gradientUnits="userSpaceOnUse">
        <stop stopColor={color1} />
        <stop offset="1" stopColor={color2} />
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

// Define egg color combinations
const eggColors = [
  { color1: "#FFD1DC", color2: "#FF9AA2" }, // Pink
  { color1: "#B5EAD7", color2: "#78C2AD" }, // Mint
  { color1: "#C7CEEA", color2: "#8B9DC3" }, // Lavender
  { color1: "#FFF1AC", color2: "#FDFD96" }, // Yellow
  { color1: "#FF9AA2", color2: "#E27396" }, // Rose
]

const FallingEgg = ({
  delay,
  left,
  colorSet,
  id,
}: {
  delay: number
  left: string
  colorSet: { color1: string; color2: string }
  id: number
}) => {
  const [position, setPosition] = useState(-50)
  const [rotation, setRotation] = useState(0)
  const animationRef = useRef<number>()
  const startTime = useRef(Date.now() + delay * 1000)
  const speed = useRef(Math.random() * 0.5 + 0.5) // Slower speed between 0.5-1

  useEffect(() => {
    const animate = () => {
      const elapsed = Date.now() - startTime.current

      // Only start moving after the delay
      if (elapsed > 0) {
        setPosition((prev) => {
          const newPos = prev + speed.current
          // Reset position when it goes off screen
          if (newPos > window.innerHeight) {
            startTime.current = Date.now()
            speed.current = Math.random() * 0.5 + 0.5
            return -50
          }
          return newPos
        })

        // Gentle wobble instead of full rotation
        setRotation((prev) => {
          const wobble = Math.sin(Date.now() * 0.005) * 10 // Wobble between -10 and 10 degrees
          return wobble
        })
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div
      style={{
        position: "absolute",
        left,
        top: `${position}px`,
        transform: `rotate(${rotation}deg)`,
        zIndex: 40,
      }}
    >
      <EasterEggSVG color1={colorSet.color1} color2={colorSet.color2} id={id} />
    </div>
  )
}

export default function EasterDecorations() {
  const [isEasterTheme, setIsEasterTheme] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const checkTheme = () => {
      const htmlElement = document.documentElement
      setIsEasterTheme(htmlElement.classList.contains("easter-theme"))
    }

    // Check initially
    checkTheme()

    // Check whenever the class changes
    const observer = new MutationObserver(() => {
      checkTheme()
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => {
      observer.disconnect()
    }
  }, [])

  // Only render when mounted and Easter theme is enabled
  if (!mounted || !isEasterTheme) return null

  // Generate 8 falling eggs (reduced for less clutter) with random positions and delays
  const eggs = Array.from({ length: 8 }).map((_, i) => {
    const randomColorSet = eggColors[Math.floor(Math.random() * eggColors.length)]
    const randomDelay = Math.random() * 5 // Random delay between 0-5s
    const randomLeft = `${Math.random() * 98}%` // Random horizontal position

    return <FallingEgg key={i} delay={randomDelay} left={randomLeft} colorSet={randomColorSet} id={i} />
  })

  // Use portal to render at the root level
  return createPortal(
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 40 }}>
      {eggs}
    </div>,
    document.body,
  )
}
