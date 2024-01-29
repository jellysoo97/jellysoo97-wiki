import '@/styles/globals.css'

import React from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import CustomThemeProvider from '@/components/provider/ThemeProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative flex flex-col h-dvh overflow-hidden">
        <CustomThemeProvider>
          <Header />

          <main>{children}</main>

          <Footer />
        </CustomThemeProvider>
      </body>
    </html>
  )
}
