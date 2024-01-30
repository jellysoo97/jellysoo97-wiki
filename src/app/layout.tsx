import '@/styles/globals.css'

import { Cutive_Mono, Nanum_Myeongjo } from 'next/font/google'
import React from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import NextThemeProvider from '@/components/provider/NextThemeProvider'
import ViewProvider from '@/components/provider/ViewProvider'

const serif = Nanum_Myeongjo({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-serif',
})
const mono = Cutive_Mono({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-mono',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${serif.variable} ${mono.variable}`}>
      <body>
        <NextThemeProvider>
          <ViewProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </ViewProvider>
        </NextThemeProvider>
      </body>
    </html>
  )
}
