import '@/styles/globals.css'

import React from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import NextThemeProvider from '@/components/provider/NextThemeProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextThemeProvider>
          <Header />
          <main className="layout-container flex mt-8">
            <Sidebar />
            {children}
          </main>
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  )
}
