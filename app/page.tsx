'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Leadership from '@/components/Leadership'
import Footer from '@/components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50">
      <Navigation />
      <Hero />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Leadership />
      <Footer />
    </main>
  )
}

