import { MetadataRoute } from 'next'

import { siteConfig } from '@/constants/config'
import { getPosts } from '@/utils/get-posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  const routeSitemap: MetadataRoute.Sitemap = ['', '/posts'].map((route) => ({
    url: `${siteConfig.url.blog}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: route === '' ? 1 : 0.8,
  }))
  const postSitemap: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url.blog}/posts/${post.frontmatter.url}`,
    lastModified: post.frontmatter.date.toISOString().split('T')[0],
    changeFrequency: 'daily',
    priority: 0.7,
  }))

  return [...routeSitemap, ...postSitemap]
}
