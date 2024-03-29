import Link from 'next/link'

import BarGraph, { BarGraphData } from '@/components/common/BarGraph'
import Title from '@/components/common/Title'
import UnderlineLink from '@/components/common/UnderlineLink'
import PixelBanner from '@/components/PixelBanner'
import { siteConfig } from '@/constants/config'
import { DEFAULT_CATEGORY_COLOR } from '@/constants/menus'
import { allCategories, allParts, allSortedPosts } from '@/constants/posts'
import { calculatePercentage } from '@/utils/calculate-percentage'

export default function HomePage() {
  const graphData: BarGraphData[] = allCategories.map((category) => ({
    item: category.valueKR,
    percentage: calculatePercentage({
      value: category.postCount || 0,
      total: allSortedPosts.length,
    }),
    color: category.color || DEFAULT_CATEGORY_COLOR,
  }))

  return (
    <div className="flex flex-col gap-y-8">
      <section className="flex gap-x-4">
        <PixelBanner
          img={siteConfig.banner.img}
          pixelSize={siteConfig.banner.pixelSize}
          posts={allSortedPosts}
          bannerSize={{ width: 200, height: 200 }}
        />
        <div className="flex flex-col gap-y-4 md:justify-between">
          <Link href={''} className=" font-serif-bold">
            @jellysoo97
          </Link>
          <BarGraph data={graphData} />{' '}
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4 md:grid grid-cols-2">
          {allParts.slice(1).map((part) => {
            const categories = allCategories.filter(
              (category) => category.parent === part.value
            )

            return (
              <div key={part.value} className="flex flex-col gap-y-2">
                <Title className="px-2 py-1 bg-secondary text-size-base">
                  📌 &nbsp;{part.valueKR}
                </Title>
                <ul>
                  {categories?.map((category) => (
                    <li key={category.value} className="mb-2">
                      <UnderlineLink href={category.url}>
                        {category.valueKR}
                      </UnderlineLink>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
