import '@/styles/globals.css'

import React from 'react'

import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/sidebar/Sidebar'
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
          <main>
            <Sidebar />
            {children}
          </main>
        </NextThemeProvider>
      </body>
    </html>
  )
}
