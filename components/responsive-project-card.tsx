"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  reverse?: boolean
  projectUrl?: string
  githubUrl?: string
}

export function ResponsiveProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  reverse = false,
  projectUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <div
      className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center ${reverse ? "md:grid-flow-dense" : ""}`}
      data-animation={reverse ? "fade-in-left" : "fade-in-right"}
      data-duration="1000"
    >
      <div className={reverse ? "md:col-start-2" : ""}>
        <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          {title}
        </h3>
        <p className="text-gray-300 mb-4 md:mb-6 text-base md:text-lg">{description}</p>
        <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 md:px-4 md:py-2 bg-white/5 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 transform hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 md:gap-4">
          {projectUrl && (
            <Link
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl group shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all text-sm md:text-base font-medium"
            >
              View Project
              <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-purple-500/30 hover:border-purple-500/50 px-6 py-3 rounded-xl shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 transition-all text-sm md:text-base font-medium"
            >
              <Github size={16} className="mr-2" />
              GitHub
            </Link>
          )}
        </div>
      </div>
      <div className={`w-full ${reverse ? "md:col-start-1" : ""}`}>
        <div className="relative group perspective-1000">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-purple-500/30 transition-colors shadow-xl shadow-purple-500/5 group-hover:shadow-purple-500/20 card-3d">
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-gray-800/20 to-gray-700/20 animate-pulse">
                <div className="w-10 h-10 border-3 border-t-purple-500 border-r-cyan-500 border-b-purple-500 border-l-cyan-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={`${title} project screenshot`}
              width={800}
              height={500}
              className={`w-full rounded-2xl transition-all duration-700 group-hover:scale-105 ${isImageLoaded ? "opacity-100" : "opacity-0"}`}
              loading="lazy"
              onLoad={() => setIsImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 md:p-6">
                <h4 className="text-lg md:text-xl font-bold mb-2">{title}</h4>
                <p className="text-gray-300 text-xs md:text-sm line-clamp-2">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResponsiveProjectCard
