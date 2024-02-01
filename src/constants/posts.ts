import { allPosts, Post } from 'contentlayer/generated'

export const allBlogPosts: Post[] = allPosts
  .filter((post) => post._raw.flattenedPath.includes('blog'))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
