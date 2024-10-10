import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import { IFrontmatter, IPost } from 'src/types'

const parseMDX = async (fileName: string): Promise<IPost> => {
  const raw = fs.readFileSync(
    path.join(process.cwd(), 'posts', fileName),
    'utf-8'
  )
  const { frontmatter } = await serialize(raw, {
    parseFrontmatter: true,
  })

  return {
    content: raw.replace(/---\n[\s\S]*?---\n/, ''),
    frontmatter: {
      ...(frontmatter as IFrontmatter),
      date: new Date(frontmatter.date as string),
      draft: Boolean(frontmatter.draft),
      url: fileName.replace('.mdx', ''),
    },
  }
}

export const getPosts = async () => {
  const postFileNames = fs
    .readdirSync(path.join(process.cwd(), 'posts'))
    .filter((fileName) => fileName.includes('.mdx'))

  const parsedPosts = await Promise.all(
    postFileNames.map(async (fileName) => {
      try {
        const parsedMDX = await parseMDX(fileName)
        return parsedMDX
      } catch (error) {
        throw new Error('Unable to parse posts')
      }
    })
  )
    .then((posts) =>
      posts.sort(
        (a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime()
      )
    )
    .catch(() => [])

  return parsedPosts
}
