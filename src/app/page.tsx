import Link from 'next/link'

import BarGraph, { BarGraphData } from '@/components/common/BarGraph'
import Card from '@/components/common/Card'
import Title from '@/components/common/Title'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon'
import TagIcon, { TagEnum } from '@/components/icons/TagIcon'
import PixelBanner from '@/components/PixelBanner'
import { siteConfig } from '@/constants/config'
import {
  ALL_POSTS_TAG,
  allSeries,
  allSortedPosts,
  allTags,
  getPostsFilteredByTag,
  recentPosts,
} from '@/constants/posts'
import { DEFAULT_TAG_COLOR, tagColor } from '@/constants/tagColor'
import { generateTag } from '@/utils/generate-tag'

export default function HomePage() {
  const graphData: BarGraphData[] = allTags.slice(1).map((tag) => ({
    item: tag,
    percentage:
      (getPostsFilteredByTag(tag).length / allSortedPosts.length) * 100,
    color: tagColor[tag as TagEnum] || DEFAULT_TAG_COLOR,
  }))

  return (
    <div className="flex flex-col gap-y-8 mt-8">
      <section className="flex gap-x-4">
        <div className="flex flex-1 flex-col">
          <div className="flex-1 bg-secondary">Hi there!</div>
          <Title className="mb-4">Tags</Title>
          <BarGraph data={graphData} />
        </div>
        <PixelBanner
          img={siteConfig.banner.img}
          pixelSize={siteConfig.banner.pixelSize}
          posts={allSortedPosts}
        />
      </section>

      <section>
        <Link
          href={`/${ALL_POSTS_TAG}`}
          className="flex justify-between items-center"
        >
          <Title>All Posts</Title>
          <ArrowRightIcon />
        </Link>
      </section>

      <section className="flex flex-col gap-y-4">
        <Title>Recent Posts</Title>
        <div className="grid gap-4 md:grid-cols-4">
          {recentPosts.map((post) => (
            <Link key={post.title} href={post.url}>
              <Card.VerticalCard
                title={post.title}
                thumbnail={
                  post.thumbnail || (
                    <TagIcon
                      tag={post.tags[0] as TagEnum}
                      className="w-20 h-20"
                    />
                  )
                }
                description={post.tags.map((tag) => generateTag(tag)).join(' ')}
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-y-4">
        <Title>Series</Title>
        <div className="grid gap-4 md:grid-cols-4">
          {allSeries.map((series) => (
            <Link key={series.url} href={`/series/${series.series}`}>
              <Card.VerticalCard
                title={series.title}
                thumbnail={series.thumbnail}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
