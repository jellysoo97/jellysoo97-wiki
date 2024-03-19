type Props = {
  red: number
  green: number
  blue: number
}

export const convertRgbToHex = ({ red, green, blue }: Props): string => {
  const hex = [red, green, blue]
    .map((color) => color.toString(16))
    .map((color) => (color.length === 1 ? `0${color}` : color))
    .join('')

  return `#${hex}`
}
