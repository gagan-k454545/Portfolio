"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ResumeViewerProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeViewer({ isOpen, onClose }: ResumeViewerProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg overflow-hidden">
        <Button
          onClick={onClose}
          className="absolute top-2 right-2 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
          aria-label="Close resume viewer"
        >
          <X size={20} />
        </Button>
        <iframe src="/resume.pdf" className="w-full h-full" title="Resume PDF" />
      </div>
    </div>
  )
}

export default ResumeViewer
