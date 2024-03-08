export const generateTag = (tag: string): string => {
  return `#${tag.replace(/[a-zA-Z]/, (char) => char.toUpperCase())}`
}
