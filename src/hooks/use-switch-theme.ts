import { useTheme } from 'next-themes'

const useSwitchTheme = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const isDarkTheme = !!resolvedTheme && resolvedTheme === 'dark'

  const switchTheme = () => {
    setTheme(isDarkTheme ? 'light' : 'dark')
  }

  return {
    isDarkTheme,
    switchTheme,
  }
}

export default useSwitchTheme
