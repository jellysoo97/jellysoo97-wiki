export const convertSize = (size: number, unit?: 'px' | 'rem') => {
  const globalFontSize = parseFloat(
    getComputedStyle(document.documentElement).fontSize
  )

  return !unit || unit === 'px' ? `${size}px` : `${size / globalFontSize}rem`
}
