'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const CustomThemeProvider = ({ children }: Props) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default CustomThemeProvider
