import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Akash Patel - Software Developer',
  description: 'Portfolio of Akash Patel - Computer Science student and Software Developer at University of South Florida',
  keywords: ['Software Developer', 'Computer Science', 'Full Stack', 'AI', 'Web Development'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

