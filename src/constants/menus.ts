export enum CategoryEnum {
  All = 'all',
  Fe = 'fe',
  Be = 'be',
  Development = 'development',
  Cs = 'cs',
  Etc = 'etc',
}

export enum TagEnum {
  // fe
  Javascript = 'javascript',
  ModernJavascriptDeepDive = 'modern-javascript-deep-dive',
  // cs
  Algorithm = 'algorithm',
  // development
  Git = 'git',
  // TroubleShooting = 'troubleshooting',
  // etc
  // Retrospect = 'retrospect',
}

export const categoryKR: Record<CategoryEnum, string> = {
  [CategoryEnum.All]: '전체글',
  [CategoryEnum.Fe]: 'FE',
  [CategoryEnum.Be]: 'BE',
  [CategoryEnum.Development]: 'Development',
  [CategoryEnum.Cs]: 'CS',
  [CategoryEnum.Etc]: 'ETC',
}

export const tagKR: Record<TagEnum, string> = {
  [TagEnum.Javascript]: 'JavaScript',
  [TagEnum.ModernJavascriptDeepDive]: '모던 자바스크립트 Deep Dive',
  [TagEnum.Algorithm]: '알고리즘',
  [TagEnum.Git]: 'Git',
  // [TagEnum.TroubleShooting]: '트러블슈팅',
  // [TagEnum.Retrospect]: '회고',
}

export const DEFAULT_TAG_COLOR = '#e34c26'

export const tagColor: Record<TagEnum, string> = {
  [TagEnum.Javascript]: '#F0DB4F',
  [TagEnum.ModernJavascriptDeepDive]: '',
  // [TagEnum.Css]: '#563d7c',
  // [TagEnum.HTML]: '#e34c26',
  // [TagEnum.Nextjs]: '#000000',
  // [TagEnum.React]: '#61DAFB',
  // [TagEnum.Typescript]: '#007acc',
  [TagEnum.Algorithm]: '#EFBC9B',
  // [TagEnum.Network]: '#9BCF53',
  // [TagEnum.Os]: '#BEADFA',
  // [TagEnum.JobApply]: '#FA7070',
  // [TagEnum.ComputerArchitecture]: '#f472b6',
  [TagEnum.Git]: '#24292E',
  // [TagEnum.TroubleShooting]: '',
  // [TagEnum.Retrospect]: '',
}
