"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Github,
  Linkedin,
  Twitter,
  Download,
  Mail,
  ArrowRight,
  Layout,
  Palette,
  Smartphone,
  Code,
  Eye,
} from "lucide-react"
import useSmoothScroll from "@/hooks/use-smooth-scroll"
import ScrollToTop from "@/components/scroll-to-top"
import LoadingIndicator from "@/components/loading-indicator"
import EnhancedResumeViewer from "@/components/enhanced-resume-viewer"
import AnimatedBackground from "@/components/animated-background"
import MobileOptimizedMenu from "@/components/mobile-optimized-menu"
import ResponsiveProjectCard from "@/components/responsive-project-card"
import ContactForm from "@/components/contact-form"
import useIntersectionObserver from "@/hooks/use-aos"

export default function Home() {
  // Enable smooth scrolling
  useSmoothScroll()

  // Initialize intersection observer for animations
  useIntersectionObserver()

  // State for resume viewer
  const [isResumeViewerOpen, setIsResumeViewerOpen] = useState(false)

  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (isMobileMenuOpen && !target.closest("nav")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMobileMenuOpen])

  // Scroll to section handler
  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }, [])

  // Handle page load animations
  useEffect(() => {
    document.body.classList.add("animate-in", "fade-in", "duration-700")

    return () => {
      document.body.classList.remove("animate-in", "fade-in", "duration-700")
    }
  }, [])

  // Handle resume download with proper functionality
  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Gagan-Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1a] via-[#0d1524] to-[#0a0f1a] text-white">
      {/* Loading indicator */}
      <LoadingIndicator />

      {/* Resume viewer */}
      <EnhancedResumeViewer isOpen={isResumeViewerOpen} onClose={() => setIsResumeViewerOpen(false)} />

      {/* Background elements - optimized for performance */}
      <AnimatedBackground />

      {/* Content */}
      <div className="relative z-10">
        <header className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center sticky top-0 backdrop-blur-md bg-[#0a0f1a]/90 z-50 border-b border-white/5">
          <div className="flex w-full md:w-auto justify-between items-center">
            <Link href="/" className="text-xl font-bold group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient">
                Gagan
              </span>
              <span className="text-white">.dev</span>
            </Link>

            {/* Mobile menu - optimized for better UX */}
            <MobileOptimizedMenu
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onItemClick={scrollToSection}
            />
          </div>

          <nav className="hidden md:block">
            <ul className="flex flex-row items-center gap-8">
              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors hover:underline decoration-purple-400 decoration-2 underline-offset-4 py-2"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors hover:underline decoration-purple-400 decoration-2 underline-offset-4 py-2"
                  onClick={() => scrollToSection("skills")}
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  className="text-gray-300 hover:text-white transition-colors hover:underline decoration-purple-400 decoration-2 underline-offset-4 py-2"
                  onClick={() => scrollToSection("projects")}
                >
                  Projects
                </button>
              </li>
              <li className="w-full md:w-auto mt-2 md:mt-0 text-center">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all py-2 px-4 rounded-lg"
                >
                  Contact Me
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section id="about" className="min-h-[70vh] md:min-h-[90vh] flex flex-col justify-center py-8 md:py-20">
            <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-center">
              <div className="space-y-6 md:space-y-8" data-animation="fade-in-up">
                <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-sm font-medium text-purple-300 border border-purple-500/20 shadow-lg shadow-purple-500/5">
                  Front End Developer
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient">
                    Gagan
                  </span>
                  <div className="mt-2">Turning ideas into digital reality</div>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
                  I'm a passionate front-end developer from India with a strong foundation in computer science. I
                  specialize in creating beautiful, interactive websites that deliver exceptional user experiences.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-4 md:px-6 py-3 md:py-4 rounded-xl group shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all"
                  >
                    View My Work
                    <ArrowRight
                      className="ml-2 inline-block group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </button>
                  <button
                    onClick={handleResumeDownload}
                    className="text-white border border-gray-700 hover:border-purple-500 hover:bg-purple-500/10 px-4 md:px-6 py-3 md:py-4 rounded-xl transition-all duration-300"
                  >
                    <Download size={18} className="mr-2 inline-block" />
                    Resume
                  </button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <Link
                    href="https://github.com/gagan-k454545"
                    className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
                    target="_blank"
                  >
                    <Github size={24} />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/gagan-k-047049251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
                    target="_blank"
                  >
                    <Linkedin size={24} />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://twitter.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
                    target="_blank"
                  >
                    <Twitter size={24} />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="mailto:sincostan3030@gmail.com"
                    className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
                  >
                    <Mail size={24} />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div
                className="w-full max-w-[300px] md:max-w-[400px] mx-auto md:mx-0"
                data-animation="fade-in-left"
                data-delay="200"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                  <div className="relative overflow-hidden rounded-full border-2 border-white/10 p-2">
                    <div className="aspect-square overflow-hidden rounded-full bg-gradient-to-br from-purple-500/10 to-cyan-500/10">
                      <Image
                        src="/images/profile-image.png"
                        alt="Profile photo"
                        width={400}
                        height={400}
                        className="rounded-full object-cover"
                        priority
                      />
                    </div>
                  </div>
                  {/* Animated elements around the profile - only on desktop */}
                  <div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full opacity-70 animate-bounce hidden md:block"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-70 animate-bounce hidden md:block"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>
            </div>
          </section>

          {/* What I Do Section */}
          <section className="py-12 md:py-20">
            <div className="text-center mb-8 md:mb-16" data-animation="fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient">
                What I Do
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                I help businesses and individuals bring their ideas to life through modern web technologies
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div data-animation="fade-in-up" data-delay="100">
                <ServiceCard
                  icon={<Layout />}
                  title="UI/UX Development"
                  description="I transform designs into responsive and interactive user interfaces with attention to detail and user experience."
                />
              </div>
              <div data-animation="fade-in-up" data-delay="200">
                <ServiceCard
                  icon={<Palette />}
                  title="Creative Design"
                  description="I create visually appealing designs that align with brand identity and enhance user engagement."
                  highlight
                />
              </div>
              <div data-animation="fade-in-up" data-delay="300">
                <ServiceCard
                  icon={<Smartphone />}
                  title="Responsive Web Apps"
                  description="I build web applications that work flawlessly across all devices and screen sizes."
                />
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-12 md:py-20">
            <div className="text-center mb-8 md:mb-16" data-animation="fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient">
                My Skills
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">Technologies and languages I work with</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div data-animation="zoom-in" data-delay="100">
                <SkillCard name="HTML" icon="🔥" />
              </div>
              <div data-animation="zoom-in" data-delay="150">
                <SkillCard name="CSS" icon="🎨" />
              </div>
              <div data-animation="zoom-in" data-delay="200">
                <SkillCard name="JavaScript" icon="⚡" />
              </div>
              <div data-animation="zoom-in" data-delay="250">
                <SkillCard name="Next.js" icon="🚀" />
              </div>
              <div data-animation="zoom-in" data-delay="300">
                <SkillCard name="React" icon="⚛️" />
              </div>
              <div data-animation="zoom-in" data-delay="350">
                <SkillCard name="Python" icon="🐍" />
              </div>
              <div data-animation="zoom-in" data-delay="400">
                <SkillCard name="C++" icon="⚙️" />
              </div>
              <div data-animation="zoom-in" data-delay="450">
                <SkillCard name="C" icon="🔧" />
              </div>
              <div data-animation="zoom-in" data-delay="500">
                <SkillCard name="SQL" icon="🗃️" />
              </div>
              <div data-animation="zoom-in" data-delay="550">
                <SkillCard name="PHP" icon="🐘" />
              </div>
            </div>
          </section>

          {/* Enhanced Resume Section */}
          <section id="resume" className="py-12 md:py-20">
            <div className="text-center mb-8 md:mb-16" data-animation="fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient">
                My Resume
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">View or download my professional resume</p>
            </div>

            <div
              className="max-w-4xl mx-auto bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-8 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 transition-all duration-300"
              data-animation="fade-in-up"
            >
              <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Professional Experience & Education</h3>
                  <p className="text-gray-300 mb-6">
                    My resume highlights my experience in web development, education, and technical skills. I specialize
                    in creating responsive, user-friendly websites and applications.
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-purple-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Freelance Web Designer</span>
                        <p className="text-sm text-gray-400">Developed interactive web applications and websites</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-purple-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Sahyadri College of Engineering and Management</span>
                        <p className="text-sm text-gray-400">BE in Computer Science (2022-2026)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-purple-400">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Technical Skills</span>
                        <p className="text-sm text-gray-400">HTML, CSS, JavaScript, React, Next.js, Python, C++, SQL</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={() => setIsResumeViewerOpen(true)}
                      className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-3 rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 font-medium"
                    >
                      <Eye className="mr-2" size={18} />
                      View Resume
                    </button>
                    <a
                      href="/resume.pdf"
                      download="Gagan-Resume.pdf"
                      className="flex items-center justify-center bg-white/5 hover:bg-white/10 text-white border border-purple-500/30 hover:border-purple-500/50 px-6 py-3 rounded-xl shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 transition-all duration-300 font-medium"
                    >
                      <Download className="mr-2" size={18} />
                      Download Resume
                    </a>
                  </div>
                </div>
                <div
                  className="relative group perspective-1000 w-full max-w-[250px] md:max-w-[300px] mx-auto"
                  data-animation="fade-in-left"
                >
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-purple-500/30 transition-colors shadow-xl shadow-purple-500/5 group-hover:shadow-purple-500/20 card-3d">
                    <Image
                      src="/images/resume-preview.png"
                      alt="Resume preview"
                      width={300}
                      height={400}
                      className="w-full rounded-lg shadow-md"
                      onClick={() => setIsResumeViewerOpen(true)}
                      style={{ cursor: "pointer" }}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-12 md:py-20">
            <div className="text-center mb-8 md:mb-16" data-animation="fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient">
                Featured Projects
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Some of my recent work that showcases my skills and expertise
              </p>
            </div>

            <div className="space-y-16 md:space-y-32">
              {/* Project 1 - Portfolio Website */}
              <ResponsiveProjectCard
                title="Portfolio Website"
                description="My personal portfolio website showcasing my projects, skills, and experience. Built with modern web technologies and featuring a responsive design with interactive elements and animations."
                technologies={["Next.js", "React", "Tailwind CSS", "TypeScript"]}
                imageUrl="/images/portfolio.png"
                projectUrl="https://v0-gagank-7uzht1.vercel.app/"
                githubUrl="https://github.com/gagan-k454545/Portfolio"
              />

              {/* Project 2 */}
              <ResponsiveProjectCard
                title="Netflix Clone"
                description="A faithful recreation of the Netflix user interface with responsive design, featuring movie/show thumbnails, sign-in functionality, and promotional content. This project demonstrates my ability to build pixel-perfect UI implementations using core web technologies."
                technologies={["HTML", "CSS", "JavaScript"]}
                imageUrl="/images/netflix-clone.png"
                projectUrl="https://netflix-clone-demo.vercel.app"
                githubUrl="https://github.com/gagan-k454545/Neflix-clone.git"
                reverse
              />

              {/* Project 3 */}
              <ResponsiveProjectCard
                title="Southern Off-Road Racing"
                description="A freelance project for an off-road racing company featuring event listings, registration, and adventure experiences. The site showcases responsive design and engaging user interface for adventure enthusiasts."
                technologies={["React", "CSS", "JavaScript"]}
                imageUrl="/images/southern-offroad.png"
                projectUrl="https://v0-soutneroffroadv11-klrn2s.vercel.app/"
                githubUrl="https://github.com/gagan-k454545/Southern-Off-Road-Racing.git"
              />

              {/* Project 4 */}
              <ResponsiveProjectCard
                title="Amazon Clone"
                description="A functional clone of the Amazon e-commerce platform with product listings, shopping cart functionality, and user authentication. This project demonstrates my ability to work with complex UI components and state management."
                technologies={["JavaScript", "CSS", "React"]}
                imageUrl="/images/amazon-clone.png"
                githubUrl="https://github.com/gagan-k454545/Amazon-clone.git"
                reverse
              />

              {/* Project 5 */}
              <ResponsiveProjectCard
                title="Spotify Clone"
                description="A responsive clone of the Spotify music streaming interface with playlist management and audio controls. This project showcases my frontend development skills and attention to design details."
                technologies={["HTML", "CSS", "JavaScript"]}
                imageUrl="/images/spotify-clone.png"
                projectUrl="https://incredible-donut-b31010.netlify.app/"
                githubUrl="https://github.com/gagan-k454545/spotify-clone-.git"
              />
            </div>
          </section>

          {/* HTML/CSS/JS Projects Section */}
          <section className="py-12 md:py-20">
            <div className="text-center mb-8 md:mb-16" data-animation="fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient">
                HTML, CSS & JavaScript Projects
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                A collection of useful projects built with core web technologies
              </p>
            </div>

            <div
              className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-8 shadow-xl shadow-purple-500/5"
              data-animation="fade-in-up"
            >
              <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-8 items-center">
                <div className="relative group perspective-1000" data-animation="fade-in-right">
                  <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-purple-500/30 transition-colors shadow-xl shadow-purple-500/5 group-hover:shadow-purple-500/20 card-3d">
                    <Image
                      src="/images/core-web-development.png"
                      alt="HTML, CSS & JavaScript Projects"
                      width={600}
                      height={400}
                      className="w-full rounded-2xl transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div data-animation="fade-in-left">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
                    Core Web Development Projects
                  </h3>
                  <p className="text-gray-300 mb-6">
                    A collection of simple yet powerful projects showcasing my skills in HTML, CSS, and JavaScript.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Code className="text-purple-400" size={20} />
                      <span>UI Components</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code className="text-purple-400" size={20} />
                      <span>Responsive Designs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Code className="text-purple-400" size={20} />
                      <span>Form Validation</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href="https://github.com/gagan-k454545/projects.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-gradient-to-r from-purple-500/20 to-cyan-500/20 hover:from-purple-500/30 hover:to-cyan-500/30 text-white border border-white/10 hover:border-purple-500/30 rounded-xl group shadow-lg shadow-purple-500/5 hover:shadow-purple-500/20 transition-all px-6 py-3 font-medium"
                    >
                      <Github size={16} className="mr-2" />
                      View Projects Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-12 md:py-20">
            <div className="text-center mb-8 md:mb-16" data-animation="fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient">
                Client Testimonials
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">What people say about working with me</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div data-animation="fade-in-up" data-delay="100">
                <TestimonialCard
                  quote="Gagan delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are impressive."
                  author="Sarah Johnson"
                  role="CEO, TechStart"
                />
              </div>
              <div data-animation="fade-in-up" data-delay="200">
                <TestimonialCard
                  quote="Working with Gagan was a pleasure. He understood our requirements perfectly and implemented them flawlessly."
                  author="Michael Chen"
                  role="Product Manager, InnovateCorp"
                  highlight
                />
              </div>
              <div data-animation="fade-in-up" data-delay="300">
                <TestimonialCard
                  quote="Gagan's technical expertise and communication skills made our project a success. I would definitely work with him again."
                  author="Emily Rodriguez"
                  role="Marketing Director, GrowthLabs"
                />
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 md:py-20">
            <div className="text-center mb-8 md:mb-16" data-animation="fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient">
                Get In Touch
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate? Send me a message!
              </p>
            </div>

            <div className="max-w-3xl mx-auto" data-animation="fade-in-up">
              <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-8 shadow-xl shadow-purple-500/5">
                <ContactForm />
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 py-8 md:py-12 backdrop-blur-sm bg-[#0a0f1a]/70">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <Link href="/" className="text-xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 animate-gradient">
                    Gagan
                  </span>
                  <span className="text-white">.dev</span>
                </Link>
                <p className="mt-2 text-gray-400">Building the web, one pixel at a time</p>
              </div>
              <div className="flex gap-6">
                <Link
                  href="https://github.com/gagan-k454545"
                  className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
                >
                  <Github size={20} />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/gagan-k-047049251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110 duration-300"
                >
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="mailto:sincostan3030@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 duration-300"
                >
                  <Mail size={20} />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} Gagan. All rights reserved.</p>
              <p className="mt-2">Designed and built with passion</p>
            </div>
          </div>
        </footer>
        {/* Scroll to top button */}
        <ScrollToTop />
      </div>
    </div>
  )
}

function ServiceCard({
  icon,
  title,
  description,
  highlight = false,
}: {
  icon: React.ReactNode
  title: string
  description: string
  highlight?: boolean
}) {
  return (
    <div
      className={`p-4 md:p-6 rounded-2xl transition-all duration-300 hover:translate-y-[-8px] card-3d ${
        highlight
          ? "bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 shadow-lg shadow-purple-500/10"
          : "bg-white/5 border border-white/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5"
      }`}
    >
      <div
        className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-4 md:mb-6 transform group-hover:scale-110 transition-transform ${
          highlight ? "bg-gradient-to-br from-purple-500 to-cyan-500 text-white" : "bg-white/10 text-purple-400"
        }`}
      >
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{title}</h3>
      <p className="text-gray-300 text-sm md:text-base">{description}</p>
    </div>
  )
}

function SkillCard({ name, icon }: { name: string; icon?: string }) {
  return (
    <div className="bg-gradient-to-br from-purple-500/5 to-cyan-500/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 md:p-6 hover:border-purple-500/30 transition-all duration-300 transform hover:translate-y-[-5px] hover:shadow-lg hover:shadow-purple-500/5 group">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium group-hover:text-purple-300 transition-colors">{name}</h3>
        {icon && (
          <span className="text-xl md:text-2xl transform group-hover:scale-125 transition-transform">{icon}</span>
        )}
      </div>
      <div className="w-full bg-white/10 rounded-full h-1 overflow-hidden">
        <div className="bg-gradient-to-r from-purple-500 to-cyan-500 h-1 w-0 group-hover:w-full transition-all duration-1000 rounded-full"></div>
      </div>
    </div>
  )
}

function TestimonialCard({
  quote,
  author,
  role,
  highlight = false,
}: {
  quote: string
  author: string
  role: string
  highlight?: boolean
}) {
  return (
    <div
      className={`p-4 md:p-6 rounded-2xl h-full flex flex-col transition-all duration-300 hover:translate-y-[-5px] card-3d ${
        highlight
          ? "bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-white/10 shadow-lg shadow-purple-500/10"
          : "bg-white/5 border border-white/10 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5"
      }`}
    >
      <div className="mb-4 text-purple-400">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11L8 17H5L7 11H5V5H11V11H10ZM18 11L16 17H13L15 11H13V5H19V11H18Z" fill="currentColor" />
        </svg>
      </div>
      <p className="text-gray-300 mb-6 flex-grow text-sm md:text-base">{quote}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-xs md:text-sm text-gray-400">{role}</p>
      </div>
    </div>
  )
}
