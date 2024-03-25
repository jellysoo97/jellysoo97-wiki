'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { allPartsWithCategories } from '@/constants/posts'
import { cn } from '@/utils/cn'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside className="hidden md:block min-w-52 mt-8 mr-4 bg-secondary">
      <div className="flex flex-col px-1 py-2 gap-y-2">
        {allPartsWithCategories.map((part) => (
          <ul key={part.text} className="flex flex-col gap-y-2">
            <Link href={part.url} className="font-serif-bold">
              {part.text} ({part.postCount})
            </Link>

            {part?.categories.map((category) => {
              const isCurrentPage = category.url === pathname

              return (
                <li
                  key={category.url}
                  className={cn(
                    'ml-1 pl-2 font-serif text-secondary text-size-small cursor-pointer',
                    'border-l-2 border-l-neutral-400 hover:border-l-yellow-500 hover:font-serif-bold',
                    isCurrentPage && 'border-l-yellow-500 font-serif-bold'
                  )}
                >
                  {category.text} ({category.postCount})
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
