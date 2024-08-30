import '@/styles/globals.css'

import React from 'react'

import Divider from '@/components/common/Divider'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import NextThemeProvider from '@/components/provider/NextThemeProvider'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextThemeProvider>
          <Header />
          <Divider />
          <main className="min-h-[var(--height-main)] flex py-8">
            {children}
          </main>
          <Divider />
          <Footer />
        </NextThemeProvider>
      </body>
    </html>
  )
}
