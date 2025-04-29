"use client"

import { useState, useEffect, useRef } from "react"
import { X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeViewerProps {
  isOpen: boolean
  onClose: () => void
}

export function EnhancedResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  const [isLoading, setIsLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (isOpen) {
      // Reset loading state when opened
      setIsLoading(true)

      // Set a timeout to hide loading indicator after a reasonable time
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Handle iframe load event
  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  // Handle download button click
  const handleDownload = () => {
    // Create a direct download link
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Gagan-Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-all duration-300">
      <div className="relative w-full max-w-4xl h-[80vh] bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-purple-500/20">
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          <Button
            onClick={handleDownload}
            className="flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-full transition-all duration-300 h-10 w-10"
            aria-label="Download resume"
          >
            <Download size={20} />
          </Button>
          <Button
            onClick={onClose}
            className="flex items-center justify-center bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 h-10 w-10"
            aria-label="Close resume viewer"
          >
            <X size={20} />
          </Button>
        </div>

        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-t-purple-500 border-r-cyan-500 border-b-purple-500 border-l-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-black dark:text-white text-base font-medium">Loading resume...</p>
            </div>
          </div>
        )}

        {/* PDF Viewer with proper styling to ensure it displays correctly */}
        <iframe
          src="/resume.pdf#toolbar=0&view=FitH"
          className="w-full h-full"
          onLoad={handleIframeLoad}
          ref={iframeRef}
          title="Resume PDF"
          style={{ border: "none" }}
        />
      </div>
    </div>
  )
}

export default EnhancedResumeViewer
