import { allPosts } from 'contentlayer/generated'
import React from 'react'

import FileIcon from '@/components/icons/FileIcon'
import FolderIcon from '@/components/icons/FolderIcon'
import JavascriptIcon from '@/components/icons/JavascriptIcon'
import LightBulbIcon from '@/components/icons/LightBulbIcon'
import NextjsIcon from '@/components/icons/NextjsIcon'
import ReactIcon from '@/components/icons/ReactIcon'
import SeriesIcon from '@/components/icons/SeriesIcon'

import { siteConfig } from './config'
import { allAreas, allCategories, allSeries } from './posts'

export type MenuItemType = {
  title: string
  depth: number
  icon?: React.ReactNode
  url?: string
  children?: MenuItemType[]
}

const categoryIcon: Record<string, React.ReactNode> = {
  javascript: <JavascriptIcon />,
  nextjs: <NextjsIcon />,
  react: <ReactIcon />,
}

export const menus: MenuItemType[] = [
  {
    title: `${siteConfig.title}`,
    depth: 1,
    icon: <LightBulbIcon className="fill-yellow-500" />,
    children: [
      ...allAreas.map((area) => ({
        title: area.replace(/^[a-z]/, (char) => char.toUpperCase()),
        depth: 2,
        icon: <FolderIcon />,
        children:
          area === 'blog'
            ? [
                ...allCategories.map((category) => ({
                  title: category.replace(/^[a-z]/, (char) =>
                    char.toUpperCase()
                  ),
                  depth: 3,
                  icon: <FolderIcon />,
                  children: [
                    ...allPosts
                      .filter((post) => post.category === category)
                      .map((post) => ({
                        title: post.title,
                        depth: 4,
                        icon: categoryIcon[post.category || ''],
                        url: post.url,
                      })),
                  ],
                })),
                ...allSeries.map((series) => ({
                  title: series,
                  depth: 3,
                  icon: <SeriesIcon />,
                  children: [
                    ...allPosts
                      .filter((post) => post.series === series)
                      .map((post) => ({
                        title: post.title,
                        depth: 4,
                        icon: <FileIcon />,
                        url: post.url,
                      })),
                  ],
                })),
              ]
            : [
                ...allPosts
                  .filter((post) => post.area === area)
                  .map((post) => ({
                    title: post.title,
                    depth: 3,
                    icon: post.category ? <FolderIcon /> : <FileIcon />,
                    url: post.url,
                  })),
              ],
      })),
    ],
  },
]
