export enum TagEnum {
  All = 'all',
  JavaScript = 'javascript',
  TroubleShooting = 'troubleshooting',
  Blog = 'blog',
  Project = 'project',
  Network = 'network',
}

export interface ITag {
  value: string
  label: string
  postCount: number
  color: string
}

export interface IMetadata {
  title: string
  description: string
  date: Date
  tag: string
  url: string
  draft?: boolean
  [key: string]: string | Date | boolean | undefined
}

export interface IPost {
  metadata: IMetadata
  content: string
}
