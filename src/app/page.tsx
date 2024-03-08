import Link from 'next/link'

import Card from '@/components/common/Card'
import Title from '@/components/common/Title'
import ArrowRightIcon from '@/components/icons/ArrowRightIcon'
import TagIcon, { TagEnum } from '@/components/icons/TagIcon'
import { ALL_POSTS_TAG, allSeries, recentPosts } from '@/constants/posts'
import { generateTag } from '@/utils/generate-tag'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-y-8 mt-8">
      <section className="flex h-40 bg-slate-400">graph section</section>

      <section>
        <Link
          href={`/${ALL_POSTS_TAG}`}
          className="flex justify-between items-center"
        >
          <Title>All Posts</Title>
          <ArrowRightIcon />
        </Link>
      </section>

      <section className="flex flex-col">
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

      <section className="flex flex-col">
        <Title>Series</Title>
        <div className="grid gap-4 md:grid-cols-4">
          {allSeries.map((series) => (
            <Link key={series.url} href={series.url}>
              <Card.VerticalCard
                title={series.series}
                thumbnail={series.thumbnail}
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
