import { MetadataRoute } from 'next'

import { siteConfig } from '@/constants/config'
import { getAllSortedPosts } from '@/utils/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts: MetadataRoute.Sitemap = getAllSortedPosts().map((post) => ({
    url: `${siteConfig.url.blog}${post.url}`,
    lastModified: post.date.split('T')[0],
    changeFrequency: 'daily',
    priority: 0.7,
  }))

  const routes: MetadataRoute.Sitemap = ['', '/about'].map((route) => ({
    url: `${siteConfig.url.blog}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes, ...posts]
}
