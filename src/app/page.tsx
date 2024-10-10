import BarGraph, { BarGraphData } from '@/components/common/BarGraph'
import Title from '@/components/common/Title'
import PostList from '@/components/posts/PostList'
import { calculatePercentage } from '@/utils/calculate-percentage'

import { siteConfig } from '@/constants/config'
import { getPosts } from '@/utils/get-posts'
import { getTags } from '@/utils/get-tags'
import { Metadata } from 'next'
import { DEFAULT_TAG_COLOR } from '../constants'

export async function generateMetadata(): Promise<Metadata> {
  const DEFAULT_IMAGE = '/images/og.png'
  const { title, description, author, url } = siteConfig
  const posts = await getPosts()
  const tags = getTags(posts).map((tag) => tag.label)

  return {
    title,
    description,
    authors: author,
    keywords: tags,
    openGraph: {
      type: 'website',
      title,
      description,
      url: url.blog,
      images: [DEFAULT_IMAGE],
    },
  }
}

export default async function HomePage() {
  // https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application
  const posts = await getPosts()
  const tags = getTags(posts)
  const graphData: BarGraphData[] = tags.map((tag) => ({
    item: tag.label,
    percentage: calculatePercentage({
      value: tag.postCount,
      total: posts.length,
    }),
    color: tag.color || DEFAULT_TAG_COLOR,
  }))

  return (
    <div className="flex w-full flex-col gap-y-8">
      <section>
        <BarGraph data={graphData} />
      </section>

      <section className="flex flex-col gap-y-3">
        <Title>Posts</Title>
        <PostList posts={posts} tags={tags} />
      </section>
    </div>
  )
}
