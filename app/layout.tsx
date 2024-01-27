import Footer from '@components/layout/Footer'
import Header from '@components/layout/Header'
import '@styles/globals.css'
import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  )
}
