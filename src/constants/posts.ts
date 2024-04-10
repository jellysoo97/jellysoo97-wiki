import { allPosts, Post } from 'contentlayer/generated'

import { sortPostsByDate } from '@/utils/sort-posts-by-date'

import {
  categoryColor,
  CategoryEnum,
  categoryKR,
  PartEnum,
  partKR,
  SeriesEnum,
  seriesKR,
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

export const allParts: MenuItem[] = Object.keys(PartEnum)
  .map((key) => PartEnum[key as keyof typeof PartEnum])
  .map((part) => ({
    value: part,
    valueKR: partKR[part as PartEnum],
    postCount:
      part === PartEnum.All
        ? allPosts.length
        : allPosts.filter((post) => post.part === part).length,
    url: `/${part}`,
  }))

export const allCategories: MenuItem[] = Object.keys(CategoryEnum)
  .map((key) => CategoryEnum[key as keyof typeof CategoryEnum])
  .map((category) => {
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

export const allSeries: MenuItem[] = Object.keys(SeriesEnum)
  .map((key) => SeriesEnum[key as keyof typeof SeriesEnum])
  .map((series) => ({
    value: series,
    valueKR: seriesKR[series as SeriesEnum],
    postCount: allPosts.filter((post) => post.series === series).length,
    url: '',
  }))
