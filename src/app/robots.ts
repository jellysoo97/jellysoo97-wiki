import { MetadataRoute } from 'next'

import { siteConfig } from '@/constants/config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.url.blog}/sitemap.xml`,
    host: `${siteConfig.url.blog}`,
  }
}
