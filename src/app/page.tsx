import BarGraph, { BarGraphData } from '@/components/common/BarGraph'
import Title from '@/components/common/Title'
import PostList from '@/components/posts/PostList'
import { calculatePercentage } from '@/utils/calculate-percentage'
import { getMdxData } from '@/utils/get-mdx-data'

import { DEFAULT_TAG_COLOR } from '../constants'

export default async function HomePage() {
  // https://stackoverflow.com/questions/64926174/module-not-found-cant-resolve-fs-in-next-js-application
  const { posts, tags } = await getMdxData()
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
