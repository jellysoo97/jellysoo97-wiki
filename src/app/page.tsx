import Link from 'next/link'

import BarGraph, { BarGraphData } from '@/components/common/BarGraph'
import Title from '@/components/common/Title'
import PixelBanner from '@/components/PixelBanner'
import {
  categoryColor,
  CategoryEnum,
  DEFAULT_CATEGORY_COLOR,
} from '@/constants/category'
import { siteConfig } from '@/constants/config'
import {
  allCategories,
  allPartsWithCategories,
  allSortedPosts,
} from '@/constants/posts'
import { calculatePercentage } from '@/utils/calculate-percentage'

export default function HomePage() {
  const graphData: BarGraphData[] = allCategories.map((item) => ({
    item: item.text,
    percentage: calculatePercentage({
      value: item.postCount,
      total: allSortedPosts.length,
    }),
    color:
      categoryColor[item.category as CategoryEnum] || DEFAULT_CATEGORY_COLOR,
  }))

  return (
    <div className="flex flex-col gap-y-8 mt-8">
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
          {allPartsWithCategories.slice(1).map((part) => (
            <div key={part.url} className="flex flex-col gap-y-2">
              <Title className="px-2 py-1 bg-secondary text-size-base">
                📌 &nbsp;{part.text}
              </Title>
              <ul>
                {part.categories.map((category) => (
                  <li key={category.url} className="mb-2">
                    <Link
                      href={category.url}
                      className="font-serif-bold border-b border-neutral-400 dark:border-b dark:border-neutral-700"
                    >
                      {category.text}
                    </Link>
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
