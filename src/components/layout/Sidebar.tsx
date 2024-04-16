'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { allCategories, menuTags } from '@/constants/posts'
import { cn } from '@/utils/cn'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="hidden md:block min-w-52 h-fit mr-4 bg-secondary">
      <div className="flex flex-col px-2 pt-2 pb-8 gap-y-2">
        {allCategories.map((category) => (
          <ul key={category.value} className="flex flex-col gap-y-2">
            <Link href={category.url} className="font-serif-bold">
              {category.valueKR}{' '}
              <span className="text-size-small">({category.postCount})</span>
            </Link>

            {menuTags
              .filter((tag) => tag.category === category.value)
              ?.map((tag) => {
                const isCurrentPage = pathname.includes(tag.url)

                return (
                  <li
                    key={tag.value}
                    className={cn(
                      'ml-1 pl-2 font-serif text-secondary text-size-small cursor-pointer',
                      'border-l-2 border-l-neutral-400 hover:border-l-yellow-500',
                      isCurrentPage && 'border-l-yellow-500 font-serif-bold'
                    )}
                  >
                    <Link href={tag.url} className="block w-full">
                      {tag.valueKR} ({tag.postCount})
                    </Link>
                  </li>
                )
              })}
          </ul>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
