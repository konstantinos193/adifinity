"use client"

import { useEffect, useState, useRef } from "react"
import { createPortal } from "react-dom"
import Image from "next/image"

// Easter egg SVG with different colors
const EasterEggSVG = ({ id }: { id: number }) => (
  <Image
    src="/easteregg.svg"
    alt="Falling Easter egg"
    width={32}
    height={40}
    className="w-[32px] h-[40px] dark:opacity-90 transition-all duration-300 ease-in-out"
    style={{ maxWidth: '32px', maxHeight: '40px' }}
  />
)

// Define egg color combinations with dark mode variants
const eggColors = [
  { 
    color1: "#C9E3F7", 
    color2: "#AED5F3",
    darkColor1: "#E6F3FC",
    darkColor2: "#C9E3F7"
  },
  { 
    color1: "#FFD1DC", 
    color2: "#FF9AA2",
    darkColor1: "#ffe6ec",
    darkColor2: "#ffb3b9"
  },
  { 
    color1: "#B5EAD7", 
    color2: "#78C2AD",
    darkColor1: "#d9f2e6",
    darkColor2: "#99d6c2"
  },
  { 
    color1: "#C7CEEA", 
    color2: "#8B9DC3",
    darkColor1: "#e6ebff",
    darkColor2: "#b3bfdb"
  },
  { 
    color1: "#FFF1AC", 
    color2: "#FDFD96",
    darkColor1: "#fff7d9",
    darkColor2: "#ffefb3"
  }
]

const FallingEgg = ({
  delay,
  left,
  id,
}: {
  delay: number
  left: string
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
      <EasterEggSVG id={id} />
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

  // Generate 8 falling eggs with random positions and delays
  const eggs = Array.from({ length: 8 }).map((_, i) => {
    const randomDelay = Math.random() * 5 // Random delay between 0-5s
    const randomLeft = `${Math.random() * 98}%` // Random horizontal position

    return <FallingEgg key={i} delay={randomDelay} left={randomLeft} id={i} />
  })

  // Use portal to render at the root level
  return createPortal(
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 40 }}>
      {eggs}
    </div>,
    document.body,
  )
}
