import { allPosts, Post } from 'contentlayer/generated'

export const allBlogPosts: Post[] = allPosts
  .filter((post) => post.area === 'blog')
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const allPlaygroundPosts: Post[] = allPosts
  .filter((post) => post.area === 'playground')
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const allSeriesPosts: Post[] = allPosts
  .filter((post) => post.area === 'series')
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export const allAreas: string[] = [
  ...new Set(
    allPosts.map((post) => post._raw.flattenedPath.split('/')[0]).sort()
  ),
]

export const allSeries: string[] = [
  ...new Set(
    allBlogPosts
      .filter((post) => !!post.series)
      .map((post) => post.series || '')
      .sort()
  ),
]

export const allBlogCategories: string[] = [
  ...new Set(
    allBlogPosts
      .filter((post) => post._raw.flattenedPath.split('/').length > 2)
      .map((post) => post._raw.flattenedPath.split('/')[1])
      .sort()
  ),
]
