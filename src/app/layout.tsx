import '@/styles/globals.css'

import React from 'react'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import NextThemeProvider from '@/components/provider/NextThemeProvider'
import ViewProvider from '@/components/provider/ViewProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NextThemeProvider>
          <ViewProvider>
            <Header />
            <main className="wrapper h-screen">{children}</main>
            <Footer />
          </ViewProvider>
        </NextThemeProvider>
      </body>
    </html>
  )
}
