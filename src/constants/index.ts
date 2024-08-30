import { TagEnum } from 'src/types'

export const tagLabel: Record<string, string> = {
  [TagEnum.All]: '전체글',
  [TagEnum.JavaScript]: 'JavaScript',
  [TagEnum.TroubleShooting]: '트러블슈팅',
  [TagEnum.Project]: '프로젝트',
}

export const DEFAULT_TAG_COLOR = '#e34c26'

export const tagColor: Record<string, string> = {
  [TagEnum.JavaScript]: '#F0DB4F',
  [TagEnum.TroubleShooting]: DEFAULT_TAG_COLOR,
  [TagEnum.Project]: '#f472b6',
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
