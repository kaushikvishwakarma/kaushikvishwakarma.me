import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kaushik Vishwakarma - Portfolio',
  description: 'Portfolio website of Kaushik Vishwakarma - Full Stack Developer',
  keywords: 'Kaushik Vishwakarma, portfolio, developer, full stack, web development',
  authors: [{ name: 'Kaushik Vishwakarma' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-primary-900 antialiased`}>
        {children}
      </body>
    </html>
  )
}
