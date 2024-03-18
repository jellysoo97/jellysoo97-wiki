import BarGraph, { BarGraphData } from '@/components/common/BarGraph'
import IconLink from '@/components/common/IconLink'
import Title from '@/components/common/Title'
import CategoryIcon, { CategoryEnum } from '@/components/icons/CategoryIcon'
import PixelBanner from '@/components/PixelBanner'
import {
  categoryColor,
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

export default function HomePage() {
  const graphData: BarGraphData[] = allCategories.map((item) => ({
    item: categoryText[item.category as CategoryEnum],
    percentage:
      (getCategoryPosts(item.category).length / allSortedPosts.length) * 100,
    color:
      categoryColor[item.category as CategoryEnum] || DEFAULT_CATEGORY_COLOR,
  }))

  return (
    <div className="flex flex-col gap-y-8 mt-8">
      <section>
        <div className="flex items-center gap-x-4">
          <PixelBanner
            img={siteConfig.banner.img}
            pixelSize={siteConfig.banner.pixelSize}
            posts={allSortedPosts}
            bannerSize={{ width: 200, height: 200 }}
          />
          <BarGraph data={graphData} />
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
                <Title className="bg-secondary">{part}</Title>
                <ul>
                  {categories.map((item) => (
                    <li key={item.category} className="mb-1">
                      <IconLink
                        icon={
                          <CategoryIcon
                            category={item.category as CategoryEnum}
                          />
                        }
                        text={categoryText[item.category as CategoryEnum]}
                        url={item.url}
                      />
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
