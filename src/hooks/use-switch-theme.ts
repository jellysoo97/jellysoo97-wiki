import { useTheme } from 'next-themes'

const useSwitchTheme = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const isThemeDark = resolvedTheme === 'dark'

  const switchTheme = () => {
    if (resolvedTheme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return {
    theme: resolvedTheme,
    isThemeDark,
    switchTheme,
  }
}

export default useSwitchTheme
