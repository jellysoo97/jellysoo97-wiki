import { allPosts, Post } from 'contentlayer/generated'

import { sortPostsByDate } from '@/utils/sort-posts-by-date'

import {
  categoryColor,
  CategoryEnum,
  categoryKR,
  PartEnum,
  partKR,
} from './menus'

export type MenuItem = {
  value: string
  valueKR: string
  postCount: number
  url: string
  color?: string
  parent?: string
  children?: MenuItem[]
}

export const allSortedPosts: Post[] = sortPostsByDate(allPosts, true)

export const recentPosts: Post[] = allSortedPosts.slice(0, 5)

export const allParts: MenuItem[] = ['all', 'fe', 'cs', 'etc'].map((part) => ({
  value: part,
  valueKR: partKR[part as PartEnum],
  postCount:
    part === PartEnum.All
      ? allPosts.length
      : allPosts.filter((post) => post.part === part).length,
  url: `/${part}`,
}))

export const allCategories: MenuItem[] = [
  ...new Set(allPosts.map((post) => post.category)),
].map((category) => {
  const part = allPosts.find((post) => post.category === category)?.part

  return {
    value: category,
    valueKR: categoryKR[category as CategoryEnum],
    postCount: allPosts.filter((post) => post.category === category).length,
    url: `/${part}/${category}`,
    parent: part,
    color: categoryColor[category as CategoryEnum],
  }
})
