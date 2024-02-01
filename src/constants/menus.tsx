import React from 'react'

import FileIcon from '@/components/icons/FileIcon'
import FolderIcon from '@/components/icons/FolderIcon'
import JavascriptIcon from '@/components/icons/JavascriptIcon'
import LightBulbIcon from '@/components/icons/LightBulbIcon'
import NextjsIcon from '@/components/icons/NextjsIcon'
import ReactIcon from '@/components/icons/ReactIcon'

import { siteConfig } from './config'

export enum CategoryEnum {
  Root = 'Root',
  JavaScript = 'JavaScript',
  NextJs = 'Next.js',
  React = 'React',
}

export type MenuItemType = {
  title: string
  depth: number
  category: CategoryEnum
  icon?: React.ReactNode
  url?: string
  children?: MenuItemType[]
}

export const categories: CategoryEnum[] = Object.values(CategoryEnum)

export const menus: MenuItemType[] = [
  {
    title: `${siteConfig.title}`,
    depth: 1,
    category: CategoryEnum.Root,
    icon: <LightBulbIcon className="fill-yellow-300" />,
    children: [
      {
        title: CategoryEnum.NextJs,
        depth: 2,
        category: CategoryEnum.NextJs,
        icon: <FolderIcon />,
        children: [
          {
            title: '블로그 만들기',
            depth: 3,
            category: CategoryEnum.NextJs,
            icon: <FolderIcon />,
            children: [
              {
                title: '01. 프로젝트 생성',
                depth: 4,
                category: CategoryEnum.NextJs,
                icon: <FileIcon />,
                url: '/blog/nextjs/test',
              },
              {
                title: '02. 의존성 설치',
                depth: 4,
                category: CategoryEnum.NextJs,
                icon: <FileIcon />,
              },
            ],
          },
          {
            title: '넥스트1',
            depth: 3,
            category: CategoryEnum.NextJs,
            icon: <NextjsIcon />,
          },
          {
            title: '넥스트2',
            depth: 3,
            category: CategoryEnum.NextJs,
            icon: <NextjsIcon />,
          },
          {
            title: '넥스트3',
            depth: 3,
            category: CategoryEnum.NextJs,
            icon: <NextjsIcon />,
          },
        ],
      },
      {
        title: CategoryEnum.React,
        depth: 2,
        category: CategoryEnum.React,
        icon: <FolderIcon />,
        children: [
          {
            title: '리액트1',
            depth: 3,
            category: CategoryEnum.React,
            icon: <ReactIcon />,
          },
          {
            title: '리액트2',
            depth: 3,
            category: CategoryEnum.React,
            icon: <ReactIcon />,
          },
        ],
      },
      {
        title: CategoryEnum.JavaScript,
        depth: 2,
        category: CategoryEnum.JavaScript,
        icon: <FolderIcon />,
        children: [
          {
            title: '자바스크립트',
            depth: 3,
            category: CategoryEnum.JavaScript,
            icon: <JavascriptIcon />,
          },
        ],
      },
    ],
  },
]
