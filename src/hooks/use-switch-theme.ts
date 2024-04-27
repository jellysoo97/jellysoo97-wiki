import { useTheme } from 'next-themes'

const useSwitchTheme = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const isDarkTheme = resolvedTheme === 'dark'

  const switchTheme = () => {
    if (resolvedTheme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return {
    theme: resolvedTheme,
    isDarkTheme,
    switchTheme,
  }
}

export default useSwitchTheme
