"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "className"> {
  className?: string
}

export function OptimizedImage({ className = "", ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [src, setSrc] = useState(props.src)

  useEffect(() => {
    setSrc(props.src)
    setIsLoaded(false)
  }, [props.src])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 animate-pulse"></div>
      )}
      <Image
        {...props}
        src={src || "/placeholder.svg"}
        className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          // Fallback to placeholder if image fails to load
          setSrc("/placeholder.svg")
        }}
      />
    </div>
  )
}

export default OptimizedImage
