import Link from 'next/link'

import BarGraph, { BarGraphData } from '@/components/common/BarGraph'
import Title from '@/components/common/Title'
import PixelBanner from '@/components/PixelBanner'
import {
  categoryColor,
  CategoryEnum,
  categoryText,
  DEFAULT_CATEGORY_COLOR,
} from '@/constants/category'
import { siteConfig } from '@/constants/config'
import {
  allCategories,
  allParts,
  allSortedPosts,
  getCategoryPosts,
} from '@/constants/posts'
import { calculatePercentage } from '@/utils/calculate-percentage'

export default function HomePage() {
  const graphData: BarGraphData[] = allCategories.map((item) => ({
    item: categoryText[item.category as CategoryEnum],
    percentage: calculatePercentage({
      value: getCategoryPosts(item.category).length,
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
          {allParts.map((part) => {
            const categories = allCategories.filter(
              (category) => category.part === part
            )

            return (
              <div key={part} className="flex flex-col gap-y-2">
                <Title className="px-2 py-1 bg-secondary text-size-base">
                  📌 {part}
                </Title>
                <ul>
                  {categories.map((item) => (
                    <li key={item.category} className="mb-2">
                      <Link
                        href={item.url}
                        className="font-serif-bold border-b border-neutral-400 dark:border-b dark:border-neutral-700"
                      >
                        {categoryText[item.category as CategoryEnum]}
                      </Link>
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
