import { allPosts, Post } from 'contentlayer/generated'

export const ALL_POSTS_TAG = 'all'

export const allSortedPosts: Post[] = allPosts.sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
)

export const recentPosts: Post[] = allSortedPosts.slice(0, 5)

export const allSeries: { series: string; url: string; thumbnail?: string }[] =
  [
    ...new Set(
      allPosts
        .filter((post) => !!post.series)
        .map((post) => ({
          series: post.series || '',
          url: post.url,
          thumbnail: post.thumbnail,
        }))
    ),
  ]

export const allTags: string[] = [
  ALL_POSTS_TAG,
  ...new Set(...allPosts.map((post) => post.tags)),
]

export const getPostsFilteredByTag = (tag: string): Post[] =>
  allPosts
    .filter((post) => post.tags.includes(tag))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
