"use client"

import { useState, useEffect } from "react"

export function LoadingIndicator() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide loading indicator after page is fully loaded or after a short timeout
    if (document.readyState === "complete") {
      setIsLoading(false)
    } else {
      // Use requestAnimationFrame for smoother performance
      const frame = requestAnimationFrame(() => {
        const timeout = setTimeout(() => setIsLoading(false), 800)

        const handleLoad = () => {
          clearTimeout(timeout)
          setIsLoading(false)
        }

        window.addEventListener("load", handleLoad)

        return () => {
          window.removeEventListener("load", handleLoad)
          clearTimeout(timeout)
          cancelAnimationFrame(frame)
        }
      })

      return () => cancelAnimationFrame(frame)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0f1a] bg-opacity-80">
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 border-3 border-t-purple-500 border-r-cyan-500 border-b-purple-500 border-l-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-3 text-white text-sm font-medium">Loading...</p>
      </div>
    </div>
  )
}

export default LoadingIndicator
