"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (!anchor) return

      const targetId = anchor.getAttribute("href")?.substring(1)
      if (!targetId) return

      const targetElement = document.getElementById(targetId)
      if (!targetElement) return

      e.preventDefault()

      // Smooth scroll with offset for fixed header
      const headerOffset = 80
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])
}

export default useSmoothScroll
