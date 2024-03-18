import { CategoryEnum } from '@/components/icons/CategoryIcon'

export const DEFAULT_CATEGORY_COLOR = '#e34c26'

export const categoryColor: Record<CategoryEnum, string> = {
  [CategoryEnum.Algorithm]: '#a3a3a3',
  [CategoryEnum.Css]: '#563d7c',
  [CategoryEnum.HTML]: '#e34c26',
  [CategoryEnum.JavaScript]: '#F0DB4F',
  [CategoryEnum.Network]: '#89e051',
  [CategoryEnum.Nextjs]: '#000000',
  [CategoryEnum.OS]: '#404040',
  [CategoryEnum.React]: '#61DAFB',
  [CategoryEnum.TypeScript]: '#007acc',
  [CategoryEnum.JobApply]: '#c084fc',
}

export const categoryText: Record<CategoryEnum, string> = {
  [CategoryEnum.Algorithm]: '자료구조&알고리즘',
  [CategoryEnum.Css]: 'CSS',
  [CategoryEnum.HTML]: 'HTML',
  [CategoryEnum.JavaScript]: 'JavaScript',
  [CategoryEnum.Network]: '네트워크',
  [CategoryEnum.Nextjs]: 'Nextjs',
  [CategoryEnum.OS]: '운영체제',
  [CategoryEnum.React]: 'React',
  [CategoryEnum.TypeScript]: 'TypeScript',
  [CategoryEnum.JobApply]: '취준',
}
