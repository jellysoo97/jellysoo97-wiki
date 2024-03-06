import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [...fontFamily.sans],
      serif: ['var(--font-serif)', ...fontFamily.serif],
      serifBold: ['var(--font-serif-bold)', ...fontFamily.serif],
      mono: ['var(--font-mono)', ...fontFamily.mono],
    },
    extend: {
      colors: {
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          150: 'var(--neutral-150)',
          200: 'var(--neutral-200)',
          250: 'var(--neutral-250)',
          300: 'var(--neutral-300)',
          350: 'var(--neutral-350)',
          400: 'var(--neutral-400)',
          450: 'var(--neutral-450)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          750: 'var(--neutral-750)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addUtilities }: Partial<Config>) => {
      addUtilities({
        // colors
        '.bg-primary': { '@apply bg-neutral-200 dark:bg-neutral-800': '' },
        '.bg-secondary': { '@apply bg-neutral-300 dark:bg-neutral-700': '' },
        '.text-primary': {
          '@apply text-neutral-600 dark:text-neutral-350': '',
        },
        '.text-secondary': {
          '@apply text-neutral-500 dark:text-neutral-400': '',
        },
        // layout
        '.layout-container': {
          '@apply mx-auto max-w-3xl px-6 lg:max-w-6xl lg:px-8': '',
        },
      })
    },
  ],
}
export default config
