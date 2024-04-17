import { allPosts, Post } from 'contentlayer/generated'

import { sortPostsByDate } from '@/utils/sort-posts-by-date'

import { CategoryEnum, categoryKR, tagColor, TagEnum, tagKR } from './menus'

export type MenuItem = {
  value: string
  valueKR: string
  postCount: number
  url: string
  color?: string
  category?: string
}

export const allSortedPosts: Post[] = sortPostsByDate(allPosts, true)

export const recentPosts: Post[] = allSortedPosts.slice(0, 5)

export const allCategories: MenuItem[] = Object.keys(CategoryEnum)
  .map((key) => CategoryEnum[key as keyof typeof CategoryEnum])
  .map((category) => ({
    value: category,
    valueKR: categoryKR[category as CategoryEnum],
    postCount:
      category === CategoryEnum.All
        ? allPosts.length
        : allPosts.filter((post) => post.category === category).length,
    url: `/${category}`,
  }))
  .filter((category) => category.postCount > 0)

export const allTags: MenuItem[] = Object.keys(TagEnum)
  .map((key) => TagEnum[key as keyof typeof TagEnum])
  .map((tag) => {
    const category = allPosts.find((post) => post.tags.includes(tag))?.category

    return {
      value: tag,
      valueKR: tagKR[tag as TagEnum],
      postCount: allPosts.filter((post) => post.tags.includes(tag)).length,
      url: `/${category}/${tag}`,
      color: tagColor[tag as TagEnum],
      category,
    }
  })
  .filter((category) => category.postCount > 0)

export const menuTags: MenuItem[] = allTags.filter((tag) =>
  [TagEnum.Javascript, TagEnum.Algorithm, TagEnum.Git].includes(
    tag.value as TagEnum
  )
)
