'use client'

import { useEffect, useState } from 'react'

import useSwitchTheme from '@/hooks/use-switch-theme'

import ThemeIcon from '../icons/ThemeIcon'
import IconButton from './IconButton'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { isDarkTheme, switchTheme } = useSwitchTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <IconButton onClick={switchTheme}>
      <ThemeIcon isDarkTheme={isDarkTheme} className="w-5 h-5 text-yellow" />
    </IconButton>
  )
}

export default ThemeSwitch
