import { useTheme } from 'next-themes'

const useSwitchTheme = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const hasTheme = !!resolvedTheme
  const isDarkTheme = hasTheme && resolvedTheme === 'dark'

  const switchTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark')
  }

  return {
    hasTheme,
    isDarkTheme,
    switchTheme,
  }
}

export default useSwitchTheme
