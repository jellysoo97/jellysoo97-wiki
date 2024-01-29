import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
      serif: ['NanumMyeonjo', ...fontFamily.serif],
      mono: ['var(--font-mono)', ...fontFamily.mono],
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      blue: {
        default: '#4B93FF',
        dark: '#4B7EFF',
      },
      purple: {
        light: '#9A4BFF',
        default: '#654BFF',
        dark: '#4B35D2',
      },
      yellow: '#FFDC49',
      orange: '#D9730D',
      red: '#D44C47',
      pale: {
        gray: '#F1F1EF',
        brown: '#F4EEEE',
        orange: '#FAEBDD',
        yellow: '#FBF3DB',
        green: '#EDF3EC',
        blue: '#E7F3F8',
        purple: '#F6F3F9',
        pink: '#FAF1F5',
        red: '#FDEBEC',
      },
      deep: {
        gray: '#454B4E',
        brown: '#434040',
        orange: '#594A3A',
        yellow: '#59563B',
        green: '#354C4B',
        blue: '#364954',
        purple: '#443F57',
        pink: '#533B4C',
        red: '#594141',
      },
    },
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        red: 'var(--color-text-red)',
      },
    },
  },
  plugins: [],
}
export default config
