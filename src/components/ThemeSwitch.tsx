import { useEffect, useState } from 'react'

import useSwitchTheme from '@/hooks/use-switch-theme'

import IconButton from './common/IconButton'
import ThemeIcon from './icons/ThemeIcon'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { isDarkTheme, switchTheme } = useSwitchTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <IconButton onClick={switchTheme}>
      <ThemeIcon
        isDarkTheme={isDarkTheme}
        className="w-5 h-5 text-yellow-400 dark:text-yellow-500"
      />
    </IconButton>
  )
}

export default ThemeSwitch
