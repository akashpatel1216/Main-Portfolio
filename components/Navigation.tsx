'use client'

import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('about')}
            className="group flex items-center gap-2 text-2xl font-bold"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-blue-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
              AP
            </div>
          </button>

          <div className="hidden md:flex items-center space-x-1 bg-gray-50/50 rounded-full px-2 py-2">
            {['About', 'Education', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-white rounded-full transition-all font-medium text-sm"
              >
                {item}
              </button>
            ))}
          </div>

          <a
            href="mailto:akashp1412@gmail.com"
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-primary-600 to-blue-600 text-white px-6 py-2.5 rounded-full hover:shadow-xl hover:shadow-primary-500/30 transition-all transform hover:scale-105 font-medium text-sm"
          >
            <span>Let&apos;s Talk</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  )
}

