import { allPosts, Post } from 'contentlayer/generated'

import { CategoryEnum, categoryText } from './category'

export const ALL_POSTS_TAG = 'all'

export const allSortedPosts: Post[] = allPosts.sort(
  (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
)

export const recentPosts: Post[] = allSortedPosts.slice(0, 5)

export const allPartsWithCategories = [
  '전체글',
  ...new Set(allPosts.map((post) => post.part)),
].map((part, index) => {
  const partPosts = allPosts.filter((post) => post.part === part)

  return {
    part,
    text: part,
    postCount: index ? partPosts.length : allPosts.length,
    url: index ? `/posts/${part}`.toLowerCase() : '/posts',
    categories: [...new Set(partPosts.map((post) => post.category))].map(
      (category) => ({
        category,
        text: categoryText[category as CategoryEnum],
        postCount: partPosts.filter((post) => post.category === category)
          .length,
        url: `/posts/${part}/${category}`.toLowerCase(),
      })
    ),
  }
})

export const allCategories = [
  ...new Set(
    allPosts
      .map((post) => ({
        category: post.category,
        text: categoryText[post.category as CategoryEnum],
      }))
      .map((item) => ({
        ...item,
        postCount: allPosts.filter((post) => post.category === item.category)
          .length,
      }))
  ),
]
