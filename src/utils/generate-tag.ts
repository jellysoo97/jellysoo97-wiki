import { CategoryEnum } from '@/components/icons/CategoryIcon'
import { categoryText } from '@/constants/category'

export const generateTag = (part: string, category: string): string[] => {
  return [part, categoryText[category as CategoryEnum]].map((tag) => `#${tag}`)
}
