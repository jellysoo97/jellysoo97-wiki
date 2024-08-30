import fs from 'fs'
import path from 'path'
import { parseMdxFile } from './parse-mdx-file'

const getMdxFileNames = () => {
  return fs
    .readdirSync(path.join(process.cwd(), 'posts'))
    .filter((fileName) => fileName.includes('.mdx'))
}

export const getMdxPosts = async () => {
  const mdxFileNames = getMdxFileNames()
  return mdxFileNames
    .map((fileName) => parseMdxFile(fileName))
    .sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime())
}
