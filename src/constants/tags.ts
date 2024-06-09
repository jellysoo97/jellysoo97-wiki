export enum CategoryEnum {
  All = 'all',
  Fe = 'fe',
  Development = 'development',
  Project = 'project',
}

export enum TagEnum {
  // fe
  JavaScript = 'javascript',
  // development
  TroubleShooting = 'troubleshooting',
  // project
  Blog = 'blog',
}

export const categoryLabel: Record<CategoryEnum, string> = {
  [CategoryEnum.All]: '전체글',
  [CategoryEnum.Fe]: 'FE',
  [CategoryEnum.Development]: 'Development',
  [CategoryEnum.Project]: '프로젝트',
}

export const tagLabel: Record<TagEnum, string> = {
  [TagEnum.JavaScript]: 'JavaScript',
  [TagEnum.Blog]: '블로그 개발',
  [TagEnum.TroubleShooting]: '트러블슈팅',
}

export const DEFAULT_TAG_COLOR = '#e34c26'

export const tagColor: Record<TagEnum, string> = {
  [TagEnum.JavaScript]: '#F0DB4F',
  [TagEnum.Blog]: '#f472b6',
  [TagEnum.TroubleShooting]: DEFAULT_TAG_COLOR,
  // [TagEnum.Nextjs]: '#000000',
  // [TagEnum.ModernJavascriptDeepDive]: '',
  // [TagEnum.Css]: '#563d7c',
  // [TagEnum.HTML]: '#e34c26',
  // [TagEnum.React]: '#61DAFB',
  // [TagEnum.Typescript]: '#007acc',
  // [TagEnum.Algorithm]: '#EFBC9B',
  // [TagEnum.Network]: '#9BCF53',
  // [TagEnum.Os]: '#BEADFA',
  // [TagEnum.JobApply]: '#FA7070',
  // [TagEnum.ComputerArchitecture]: '#f472b6',
  // [TagEnum.Git]: '#424c54',
  // [TagEnum.Retrospect]: '',
}
