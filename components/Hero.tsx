'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Animated background gradient orbs */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle at 50% 50%, rgba(14, 165, 233, 0.03) 0%, transparent 50%)'
        }}
      >
        <div 
          className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
          style={{
            bottom: '20%',
            right: '10%',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
          }}
        />
      </div>

      <div className="max-w-7xl w-full relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Profile Image Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 mb-12">
            
            {/* Image with unique effects */}
            <div className="relative group">
              {/* Animated gradient rings */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 animate-pulse transition duration-1000"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-blue-500 rounded-full animate-spin-slow opacity-75"></div>
              
              {/* Main image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-blue-600 to-purple-600 rounded-full"></div>
                <div className="absolute inset-1 bg-white rounded-full overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/profile.jpg" 
                    alt="Akash Patel"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-primary-700 rounded-full text-sm font-bold border-2 border-primary-200 shadow-xl">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-600"></span>
                    </span>
                    Available for Hire
                  </span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left max-w-2xl">
              <div className="mb-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-primary-600 to-blue-600 bg-clip-text text-transparent leading-tight">
                  Akash Patel
                </h1>
                <div className="h-1 w-24 bg-gradient-to-r from-primary-600 to-blue-600 rounded-full mb-6 mx-auto lg:mx-0"></div>
              </div>
              
              <p className="text-2xl sm:text-3xl text-gray-700 mb-4 font-light leading-relaxed">
                Computer Science Student &<br />
                <span className="text-primary-600 font-bold">Software Developer</span>
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Building AI-powered solutions at <span className="text-primary-600 font-semibold">University of South Florida</span> impacting 45,000+ students
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <a
                  href="mailto:akashp1412@gmail.com"
                  className="group relative flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-full hover:shadow-2xl hover:shadow-primary-500/50 transition-all transform hover:scale-105 font-medium"
                >
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get In Touch
                </a>
                
                <a
                  href="https://github.com/akashp1216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full hover:border-gray-900 hover:text-gray-900 hover:shadow-xl transition-all transform hover:scale-105 font-medium"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  GitHub
                </a>
                
                <a
                  href="https://linkedin.com/in/akashpatel1216"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full hover:border-blue-600 hover:text-blue-600 hover:shadow-xl transition-all transform hover:scale-105 font-medium"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-2">45,000+</div>
                <div className="text-gray-600 font-medium">Students Impacted</div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-2">1,500+</div>
                <div className="text-gray-600 font-medium">Users Reached</div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all">
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent mb-2">10+</div>
                <div className="text-gray-600 font-medium">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

