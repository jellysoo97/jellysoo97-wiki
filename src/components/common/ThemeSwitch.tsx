'use client'

import useSwitchTheme from '@/hooks/use-switch-theme'

import ThemeIcon from '../icons/ThemeIcon'
import IconButton from './IconButton'

const ThemeSwitch = () => {
  const { hasTheme, isDarkTheme, switchTheme } = useSwitchTheme()

  if (!hasTheme) {
    return null
  }

  return (
    <IconButton onClick={switchTheme}>
      <ThemeIcon isDarkTheme={isDarkTheme} className="w-5 h-5 text-yellow" />
    </IconButton>
  )
}

export default ThemeSwitch
