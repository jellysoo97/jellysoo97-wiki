import '@/styles/globals.css'

import React from 'react'

import Divider from '@/components/common/Divider'
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
          <Divider />
          <main>{children}</main>
          <Divider />
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  )
}
