import Link from 'next/link'

import BarGraph, { BarGraphData } from '@/components/common/BarGraph'
import UnderlineLink from '@/components/common/UnderlineLink'
import PixelBanner from '@/components/PixelBanner'
import { siteConfig } from '@/constants/config'
import { DEFAULT_TAG_COLOR } from '@/constants/menus'
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
        <PixelBanner
          img={siteConfig.banner.img}
          pixelSize={siteConfig.banner.pixelSize}
          posts={allSortedPosts}
          bannerSize={{ width: 200, height: 200 }}
        />
        <div className="flex flex-col flex-1 gap-y-4 md:justify-between">
          <Link href={''} className=" font-serif-bold">
            @jellysoo97
          </Link>
          <BarGraph data={graphData} />{' '}
        </div>
      </section>

      <section>
        <div className="flex flex-col gap-4 md:grid grid-cols-2">
          {allCategories.slice(1).map((category) => (
            <div key={category.value} className="flex flex-col gap-y-2">
              <p className="text-primary text-size-base px-2 py-1 bg-secondary">
                📌 &nbsp;{category.valueKR}
              </p>
              <ul>
                {menuTags?.map((tag) => (
                  <li key={tag.value} className="mb-2">
                    <UnderlineLink href={tag.url}>{tag.valueKR}</UnderlineLink>
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
