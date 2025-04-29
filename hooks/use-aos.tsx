"use client"

import { useEffect } from "react"

export function useIntersectionObserver() {
  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return

    // Create a new IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add animation classes when element is visible
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement
            const animation = target.dataset.animation || "fade-in"
            const delay = target.dataset.delay || "0"

            // Add animation classes
            target.classList.add("animate-in")
            target.classList.add(animation)
            target.style.animationDelay = `${delay}ms`

            // Unobserve after animation is applied
            observer.unobserve(target)
          }
        })
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    )

    // Observe all elements with data-animation attribute
    document.querySelectorAll("[data-animation]").forEach((element) => {
      observer.observe(element)
    })

    return () => {
      observer.disconnect()
    }
  }, [])
}

export default useIntersectionObserver
