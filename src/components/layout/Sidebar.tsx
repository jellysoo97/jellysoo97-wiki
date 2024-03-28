'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { allCategories, allParts } from '@/constants/posts'
import { cn } from '@/utils/cn'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="hidden md:block min-w-52 min-h-full mr-4 bg-secondary">
      <div className="flex flex-col p-2 gap-y-2">
        {allParts.map((part) => {
          const categories = allCategories.filter(
            (category) => category.parent === part.value
          )

          return (
            <ul key={part.value} className="flex flex-col gap-y-2">
              <Link href={part.url} className="font-serif-bold">
                {part.valueKR}{' '}
                <span className="text-size-small">({part.postCount})</span>
              </Link>

              {categories?.map((category) => {
                const isCurrentPage = pathname.includes(category.url)

                return (
                  <li
                    key={category.value}
                    className={cn(
                      'ml-1 pl-2 font-serif text-secondary text-size-small cursor-pointer',
                      'border-l-2 border-l-neutral-400 hover:border-l-yellow-500 hover:font-serif-bold',
                      isCurrentPage && 'border-l-yellow-500 font-serif-bold'
                    )}
                  >
                    <Link href={category.url}>
                      {category.valueKR} ({category.postCount})
                    </Link>
                  </li>
                )
              })}
            </ul>
          )
        })}
      </div>
    </aside>
  )
}

export default Sidebar
