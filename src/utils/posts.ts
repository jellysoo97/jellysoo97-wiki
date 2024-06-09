import { allPosts, Post } from 'contentlayer/generated'

import { sortPostsByDate } from '@/utils/sort-posts-by-date'

import {
  CategoryEnum,
  categoryLabel,
  tagColor,
  TagEnum,
  tagLabel,
} from '../constants/tags'

export type Tag = {
  value: string
  label: string
  postCount: number
  url: string
  color?: string
  category?: string
}

export const getAllSortedPosts = (): Post[] =>
  sortPostsByDate(
    allPosts.filter((post) => !post.draft),
    true
  )

export const getRecentPosts = (): Post[] => getAllSortedPosts().slice(0, 5)

export const getAllCategories = (): Tag[] => {
  const allSortedPosts = getAllSortedPosts()

  return Object.keys(CategoryEnum)
    .map((key) => CategoryEnum[key as keyof typeof CategoryEnum])
    .map((category) => ({
      value: category,
      label: categoryLabel[category as CategoryEnum],
      postCount:
        category === CategoryEnum.All
          ? allSortedPosts.length
          : allSortedPosts.filter((post) => post.category === category).length,
      url: `/${category}`,
    }))
    .filter((category) => category.postCount > 0)
}

export const getAllTags = (): Tag[] => {
  const allSortedPosts = getAllSortedPosts()

  return Object.keys(TagEnum)
    .map((key) => TagEnum[key as keyof typeof TagEnum])
    .map((tag) => {
      const posts = allSortedPosts.filter((post) => post.tags[0] === tag)
      const category = posts[0]?.category

      return {
        value: tag,
        label: tagLabel[tag as TagEnum],
        postCount: posts.length,
        url: `/${category}/${tag}`,
        color: tagColor[tag as TagEnum],
        category,
      }
    })
    .filter((category) => category.postCount > 0)
}
export const getMainTags = (): Tag[] => {
  const allTags = getAllTags()

  return allTags.filter((tag) =>
    [...new Set(getAllSortedPosts().map((post) => post.tags[0]))].includes(
      tag.value as TagEnum
    )
  )
}
