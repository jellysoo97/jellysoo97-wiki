import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
      serif: ['Nanum Myeongjo', ...fontFamily.serif],
      mono: ['Cutive Mono', ...fontFamily.mono],
    },
    extend: {
      colors: {
        neutral: {
          350: '#b5b5b5',
        },
        highlight: {
          gray: 'var(--bg-highlight-gray)',
          yellow: 'var(--bg-highlight-yellow)',
          red: 'var(--bg-highlight-red)',
        },
      },
      dropShadow: {
        base: '0px 0px 10px rgba(234, 179, 8, 0.8)',
      },
    },
  },
  plugins: [],
}
export default config
