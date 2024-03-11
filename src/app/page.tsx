import Link from 'next/link'

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
  recentPosts,
} from '@/constants/posts'
import { generateTag } from '@/utils/generate-tag'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-8 mt-8">
      <section>
        <PixelBanner
          img={siteConfig.banner.img}
          pixelSize={siteConfig.banner.pixelSize}
          postCount={allSortedPosts.length}
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
