import { allPosts, Post } from 'contentlayer/generated'

export const ALL_POSTS_TAG = 'all'

export const allSortedPosts: Post[] = allPosts.sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
)

export const recentPosts: Post[] = allSortedPosts.slice(0, 5)

export const allParts: string[] = [
  ...new Set(allSortedPosts.map((post) => post.part)),
]

export const allCategories = [
  ...new Set(
    allSortedPosts.map((post) => ({
      part: post.part,
      category: post.category,
      url: post.url.split('/').slice(2).join(''),
    }))
  ),
]

export const getCategoryPosts = (category: string): Post[] =>
  allPosts
    .filter((post) => post.category === category)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
