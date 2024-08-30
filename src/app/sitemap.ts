import { MetadataRoute } from 'next'

import { siteConfig } from '@/constants/config'
import { getMdxData } from '@/utils/get-mdx-data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { posts: originPosts } = await getMdxData()
  const posts: MetadataRoute.Sitemap = originPosts.map((post) => ({
    url: `${siteConfig.url.blog}${post.metadata.url}`,
    lastModified: post.metadata.date.toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: 0.7,
  }))

  const routes: MetadataRoute.Sitemap = ['', '/posts'].map((route) => ({
    url: `${siteConfig.url.blog}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }))

  return [...routes, ...posts]
}
