const DEFAULT_FONT_SIZE = 16

export const convertSize = (size: number, unit?: 'px' | 'rem') => {
  if (unit === 'rem') {
    return `${(size / DEFAULT_FONT_SIZE).toFixed(2)}rem`
  }

  return `${size}px`
}
