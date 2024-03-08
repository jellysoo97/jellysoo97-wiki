export const generateTag = (tags: string[]): string[] => {
  return tags.map((tag) => `#${tag}`)
}
