export enum CategoryEnum {
  Network = 'Network',
  OS = 'OS',
  Algorithm = 'Algorithm',
  React = 'React',
  Nextjs = 'Nextjs',
  JavaScript = 'JavaScript',
  TypeScript = 'TypeScript',
  Css = 'CSS',
  HTML = 'HTML',
  JobApply = 'Job Apply',
  ComputerArchitecture = 'Computer Architecture',
}

export const DEFAULT_CATEGORY_COLOR = '#e34c26'

export const categoryColor: Record<CategoryEnum, string> = {
  [CategoryEnum.JavaScript]: '#F0DB4F',
  [CategoryEnum.Css]: '#563d7c',
  [CategoryEnum.HTML]: '#e34c26',
  [CategoryEnum.Nextjs]: '#000000',
  [CategoryEnum.React]: '#61DAFB',
  [CategoryEnum.TypeScript]: '#007acc',
  [CategoryEnum.Algorithm]: '#EFBC9B',
  [CategoryEnum.Network]: '#9BCF53',
  [CategoryEnum.OS]: '#BEADFA',
  [CategoryEnum.JobApply]: '#FA7070',
  [CategoryEnum.ComputerArchitecture]: '#f472b6',
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
  [CategoryEnum.ComputerArchitecture]: '컴퓨터 구조',
}
