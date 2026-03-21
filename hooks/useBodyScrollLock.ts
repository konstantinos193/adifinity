"use client"

import { useEffect } from "react"

export function useBodyScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      // Save current scroll position
      const scrollY = window.scrollY
      
      // Apply styles to prevent scrolling
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
      
      // Store scroll position for restoration
      document.body.setAttribute("data-scroll-y", scrollY.toString())
    } else {
      // Restore scroll position
      const scrollY = document.body.getAttribute("data-scroll-y")
      
      // Remove fixed positioning
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10))
        document.body.removeAttribute("data-scroll-y")
      }
    }
  }, [isLocked])
}
