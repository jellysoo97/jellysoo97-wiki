import Link from 'next/link'

import BarGraph, { BarGraphData } from '@/components/common/BarGraph'
import UnderlineLink from '@/components/common/UnderlineLink'
import PostGrape from '@/components/PostGrape'
import { CategoryEnum, DEFAULT_TAG_COLOR } from '@/constants/menus'
import { allCategories, allSortedPosts, menuTags } from '@/constants/posts'
import { calculatePercentage } from '@/utils/calculate-percentage'

export default function HomePage() {
  const graphData: BarGraphData[] = menuTags.map((tag) => ({
    item: tag.valueKR,
    percentage: calculatePercentage({
      value: tag.postCount || 0,
      total: allSortedPosts.length,
    }),
    color: tag.color || DEFAULT_TAG_COLOR,
  }))

  return (
    <div className="w-full flex flex-col gap-y-8">
      <section className="flex gap-x-4">
        <PostGrape />
        <div className="flex flex-col flex-1 justify-between gap-y-4">
          <p>@jellysoo97</p>
          <BarGraph data={graphData} />
        </div>
      </section>

      <section>
        <Link href={`/${CategoryEnum.All}`}>
          <p className="text-primary text-size-base px-2 py-1 bg-secondary mb-4">
            📌 &nbsp;{allCategories[0].valueKR}&nbsp;(
            {allCategories[0].postCount})
          </p>
        </Link>
        <div className="flex flex-col gap-4 md:grid grid-cols-2">
          {allCategories.slice(1).map((category) => (
            <div key={category.value} className="flex flex-col gap-y-2">
              <p className="text-primary text-size-base px-2 py-1 bg-secondary">
                📌 &nbsp;{category.valueKR}&nbsp;({category.postCount})
              </p>
              <ul>
                {menuTags
                  .filter((tag) => tag.category === category.value)
                  ?.map((tag) => (
                    <li key={tag.value} className="mb-2">
                      <UnderlineLink href={tag.url}>
                        {tag.valueKR}
                      </UnderlineLink>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
