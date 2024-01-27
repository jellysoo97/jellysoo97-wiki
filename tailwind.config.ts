import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      primary: {
        default: '#4B93FF',
        dark: '#4B7EFF',
      },
      purple: {
        light: '#9A4BFF',
        default: '#654BFF',
        dark: '#4B35D2',
      },
      gray: {
        100: '#E3E3E3',
        200: '#C1C5D1',
        300: '#bdbdbd',
        400: '#9e9e9e',
        500: '#777777',
      },
      orange: {
        light: '#FFB74B',
        default: '#FF8C4B',
        dark: '#FF6C4B',
      },
      red: '#FF4B8C',
    },
    extend: {},
  },
  plugins: [],
}
export default config
