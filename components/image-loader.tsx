"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface EnhancedImageProps extends Omit<ImageProps, "onLoad" | "className"> {
  className?: string
}

export function EnhancedImage({ className = "", ...props }: EnhancedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Reset loading state when src changes
    setIsLoaded(false)
  }, [props.src])

  return (
    <Image {...props} className={`${className} ${isLoaded ? "loaded" : "loading"}`} onLoad={() => setIsLoaded(true)} />
  )
}
