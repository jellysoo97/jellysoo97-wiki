import { Post } from 'contentlayer/generated'
import React from 'react'

import BlogIcon from '@/components/icons/BlogIcon'
import FileIcon from '@/components/icons/FileIcon'
import FolderIcon from '@/components/icons/FolderIcon'
import PlaygroundIcon from '@/components/icons/PlaygroundIcon'
import SeriesIcon from '@/components/icons/SeriesIcon'

import {
  allAreas,
  allBlogPosts,
  allPlaygroundPosts,
  allSeriesPosts,
} from './posts'

export type MenuItemType = {
  title: string
  depth: number
  icon?: React.ReactNode
  url?: string
  children?: MenuItemType[]
}

const menuPosts: Record<string, Post[]> = {
  blog: allBlogPosts,
  playground: allPlaygroundPosts,
  series: allSeriesPosts,
}
const menuIcon: Record<string, React.ReactNode> = {
  blog: <BlogIcon />,
  playground: <PlaygroundIcon />,
  series: <SeriesIcon />,
}

export const menus: MenuItemType[] = allAreas.map((area) => ({
  title: area.replace(/^[a-z]/, (char) => char.toUpperCase()),
  depth: 1,
  icon: menuIcon[area],
  children: menuPosts[area].map((menu) => ({
    title:
      area === 'playground' ? menu.title : menu.category || menu.series || '',
    depth: 2,
    icon: area === 'playground' ? <FileIcon /> : <FolderIcon />,
    url:
      area === 'playground'
        ? menu.url
        : menu.url.split('/').slice(0, 3).concat('list').join('/'),
    children:
      ((menu.category || menu.series) &&
        menuPosts[area]
          .filter((post) => post.category === menu.category)
          .map((post) => ({
            title: post.title,
            depth: 3,
            icon: <FileIcon />,
            url: post.url,
          }))) ||
      [],
  })),
}))
