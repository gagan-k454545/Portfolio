"use client"

import { useState, useEffect } from "react"

interface MobileMenuProps {
  isOpen: boolean
  onToggle: () => void
  onItemClick: (sectionId: string) => void
}

export function MobileOptimizedMenu({ isOpen, onToggle, onItemClick }: MobileMenuProps) {
  // Add a slight delay to the animation for a smoother feel
  const [animationClass, setAnimationClass] = useState("")

  useEffect(() => {
    if (isOpen) {
      setAnimationClass("animate-in fade-in slide-in-from-top duration-300")
    } else {
      setAnimationClass("animate-out fade-out slide-out-to-top duration-200")
    }
  }, [isOpen])

  return (
    <>
      {/* Hamburger button */}
      <button
        className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
        onClick={onToggle}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div
          className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ease-in-out transform origin-center"
          style={{ transform: isOpen ? "rotate(45deg) translate(2px, 2px)" : "none" }}
        ></div>
        <div
          className="w-6 h-0.5 bg-white mb-1.5 transition-all duration-300 ease-in-out"
          style={{ opacity: isOpen ? 0 : 1 }}
        ></div>
        <div
          className="w-6 h-0.5 bg-white transition-all duration-300 ease-in-out transform origin-center"
          style={{ transform: isOpen ? "rotate(-45deg) translate(2px, -2px)" : "none" }}
        ></div>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={onToggle}></div>}

      {/* Mobile menu */}
      <nav
        className={`absolute top-full left-0 right-0 bg-gradient-to-b from-[#0a0f1a] to-[#0d1524] border-b border-white/5 p-4 md:p-0 md:static md:bg-transparent md:border-none transition-all duration-300 ease-in-out z-50 md:z-auto ${isOpen ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0 pointer-events-none"} md:translate-y-0 md:opacity-100 md:pointer-events-auto ${animationClass}`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <li className="w-full md:w-auto">
            <button
              className="w-full text-left text-gray-300 hover:text-white transition-colors hover:underline decoration-purple-400 decoration-2 underline-offset-4 py-3 md:py-2 px-4 md:px-0 rounded-lg md:rounded-none hover:bg-white/5 md:hover:bg-transparent"
              onClick={() => onItemClick("about")}
            >
              About
            </button>
          </li>
          <li className="w-full md:w-auto">
            <button
              className="w-full text-left text-gray-300 hover:text-white transition-colors hover:underline decoration-purple-400 decoration-2 underline-offset-4 py-3 md:py-2 px-4 md:px-0 rounded-lg md:rounded-none hover:bg-white/5 md:hover:bg-transparent"
              onClick={() => onItemClick("skills")}
            >
              Skills
            </button>
          </li>
          <li className="w-full md:w-auto">
            <button
              className="w-full text-left text-gray-300 hover:text-white transition-colors hover:underline decoration-purple-400 decoration-2 underline-offset-4 py-3 md:py-2 px-4 md:px-0 rounded-lg md:rounded-none hover:bg-white/5 md:hover:bg-transparent"
              onClick={() => onItemClick("projects")}
            >
              Projects
            </button>
          </li>
          <li className="w-full md:w-auto mt-2 md:mt-0 text-center">
            <button
              onClick={() => onItemClick("contact")}
              className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all py-2 px-4 rounded-lg"
            >
              Contact Me
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default MobileOptimizedMenu
