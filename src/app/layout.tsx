import '@/styles/globals.css'

import React from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import NextThemeProvider from '@/components/provider/NextThemeProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextThemeProvider>
          <Header />
          <main className="layout-container">{children}</main>
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  )
}
