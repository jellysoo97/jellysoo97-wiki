import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [...fontFamily.sans],
      serif: ['var(--font-serif)', ...fontFamily.serif],
      'serif-bold': ['var(--font-serif-bold)', ...fontFamily.serif],
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
        yellow: {
          'block-light': 'var(--block-yellow)',
          'block-dark': 'var(--block-yellow-dark)',
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
        '.bg-primary': { '@apply bg-neutral-100 dark:bg-neutral-800': '' },
        '.bg-secondary': { '@apply bg-neutral-200 dark:bg-neutral-700': '' },
        '.bg-yellow': { '@apply bg-yellow-400 dark:bg-yellow-500': '' },
        '.text-primary': {
          '@apply text-neutral-700 dark:text-neutral-300': '',
        },
        '.text-secondary': {
          '@apply text-neutral-600 dark:text-neutral-350': '',
        },
        '.text-yellow': {
          '@apply text-yellow-400 dark:text-yellow-500': '',
        },
        '.border-primary': {
          '@apply border border-neutral-500 dark:border-neutral-400': '',
        },
        '.border-secondary': {
          '@apply border border-neutral-200 dark:border-neutral-700': '',
        },
        // fontSize
        '.text-size-base': {
          '@apply text-base': '',
        },
        '.text-size-small': {
          '@apply text-xs md:text-sm': '',
        },
        '.text-size-large': {
          '@apply text-lg md:text-xl': '',
        },
        '.text-size-xlarge': {
          '@apply text-xl md:text-2xl': '',
        },
        // layout
        '.layout-container': {
          '@apply mx-auto max-w-3xl px-4 md:max-w-4xl md:px-8': '',
        },
        // scale
        '.scale-sm': {
          '@apply transition ease-in-out duration-300 hover:scale-110 md:transform-none':
            '',
        },
        // list
        '.parent-ul': {
          'list-style-type': "'◻️'",
          'padding-inline-start': '1ch',
          '@apply pl-8': '',
        },
        '.child-ul': {
          'list-style-type': "'▪'",
          'padding-inline-start': '1ch',
          '@apply my-1': '',
        },
      })
    },
  ],
}
export default config
