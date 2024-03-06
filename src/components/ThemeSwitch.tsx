import { useEffect, useState } from 'react'

import useSwitchTheme from '@/hooks/use-switch-theme'

import IconButton from './common/IconButton'
import DarkThemeIcon from './icons/DarkThemeIcon'
import LightThemeIcon from './icons/LightThemeIcon'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { isThemeDark, switchTheme } = useSwitchTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <IconButton onClick={switchTheme}>
      {isThemeDark ? (
        <DarkThemeIcon className="w-5 h-5 text-yellow-500" />
      ) : (
        <LightThemeIcon className="w-6 h-6 text-yellow-500" />
      )}
    </IconButton>
  )
}

export default ThemeSwitch
