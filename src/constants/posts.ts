import { allPosts, Post } from 'contentlayer/generated'

export const allAreas: string[] = [
  ...new Set(
    allPosts.map((post) => post._raw.flattenedPath.split('/')[0]).sort()
  ),
]

export const allCategories: string[] = [
  ...new Set(
    allPosts
      .filter(
        (post) => post._raw.flattenedPath.split('/').length > 2 && !post.series
      )
      .map((post) => post._raw.flattenedPath.split('/')[1])
      .sort()
  ),
]

export const allSeries: string[] = [
  ...new Set(
    allPosts
      .filter((post) => !!post.series)
      .map((post) => post.series || '')
      .sort()
  ),
]

export const allBlogPosts: Post[] = allPosts
  .filter((post) => post._raw.flattenedPath.includes('blog'))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
