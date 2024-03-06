import { allPosts, Post } from 'contentlayer/generated'

export const allSortedPosts: Post[] = allPosts.sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
)

export const recentPosts: Post[] = allSortedPosts.slice(0, 5)

export const allTags: string[] = [
  ...new Set(...allPosts.map((post) => post.tags)),
]

export const getPostsFilteredByTag = (tag: string): Post[] =>
  allPosts
    .filter((post) => post.tags.includes(tag))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
