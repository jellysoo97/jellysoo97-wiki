export enum PartEnum {
  All = 'all',
  Cs = 'cs',
  Fe = 'fe',
  TroubleShooting = 'troubleshooting',
  Etc = 'etc',
}

export enum CategoryEnum {
  Network = 'network',
  Os = 'os',
  Algorithm = 'algorithm',
  Javascript = 'javascript',
  Typescript = 'typescript',
  ComputerArchitecture = 'computer-architecture',
  JobApply = 'job-apply',
}

export const partKR: Record<PartEnum, string> = {
  [PartEnum.All]: '전체글',
  [PartEnum.Cs]: 'CS',
  [PartEnum.Fe]: 'FE',
  [PartEnum.TroubleShooting]: 'TROUBLESHOOTING',
  [PartEnum.Etc]: 'ETC',
}

export const categoryKR: Record<CategoryEnum, string> = {
  [CategoryEnum.Network]: '네트워크',
  [CategoryEnum.Os]: '운영체제',
  [CategoryEnum.Algorithm]: '자료구조&알고리즘',
  [CategoryEnum.Javascript]: 'JavaScript',
  [CategoryEnum.Typescript]: 'TypeScript',
  [CategoryEnum.ComputerArchitecture]: '컴퓨터 구조',
  [CategoryEnum.JobApply]: '취준',
}

export const DEFAULT_CATEGORY_COLOR = '#e34c26'

export const categoryColor: Record<CategoryEnum, string> = {
  [CategoryEnum.Javascript]: '#F0DB4F',
  // [CategoryEnum.Css]: '#563d7c',
  // [CategoryEnum.HTML]: '#e34c26',
  // [CategoryEnum.Nextjs]: '#000000',
  // [CategoryEnum.React]: '#61DAFB',
  [CategoryEnum.Typescript]: '#007acc',
  [CategoryEnum.Algorithm]: '#EFBC9B',
  [CategoryEnum.Network]: '#9BCF53',
  [CategoryEnum.Os]: '#BEADFA',
  [CategoryEnum.JobApply]: '#FA7070',
  [CategoryEnum.ComputerArchitecture]: '#f472b6',
}
