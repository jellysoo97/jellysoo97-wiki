import fs from 'fs'
import path from 'path'
import { IMetadata, IPost } from 'src/types'

export const parseMdxFile = (fileName: string): IPost => {
  const raw = fs.readFileSync(
    path.join(process.cwd(), 'posts', fileName),
    'utf-8'
  )
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const frontmatterLines = frontmatterRegex.exec(raw)![1].trim().split('\n')
  const content = raw.replace(frontmatterRegex, '').trim()
  let metadata: IMetadata = {} as IMetadata

  frontmatterLines.forEach((line) => {
    const [key, value] = line.split(': ')
    if (key === 'date') metadata[key] = new Date(value)
    else if (key === 'draft') metadata[key] = Boolean(value)
    else metadata[key] = value
  })
  metadata['url'] = `/posts/${fileName.replace('.mdx', '')}`

  return {
    metadata,
    content,
  }
}
