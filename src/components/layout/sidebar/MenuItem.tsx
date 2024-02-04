'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import AngleDownIcon from '@/components/icons/AngleDownIcon'
import { MenuItemType } from '@/constants/menus'
import { cn } from '@/utils/cn'

type Props = {
  menu: MenuItemType
}

const MenuItem = ({ menu }: Props) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)
  const pathname = usePathname()

  const hasChildren = menu.children && menu.children.length > 0
  const isArea = menu.depth === 2
  const isSeries = menu.depth === 3 && hasChildren
  const isPost = menu.depth > 2 && !hasChildren
  const isCurrentPage = pathname === menu.url

  const toggleMenu = () => {
    setIsToggled((prev) => !prev)
  }

  return (
    <>
      <li
        className={cn(
          isArea &&
            'mb-1 text-neutral-800 dark:text-neutral-200 text-xl font-black',
          (isSeries || isPost) &&
            'pl-4 border-l-2 border-neutral-350 hover:border-neutral-400 dark:border-neutral-600 dark:hover:border-neutral-500 cursor-pointer',
          isSeries && 'flex justify-between items-center',
          isPost && menu.depth > 3 && 'pl-8',
          isCurrentPage &&
            'border-yellow-500 dark:border-yellow-500 hover:border-yellow-500 dark:hover:border-yellow-500'
        )}
        onClick={toggleMenu}
      >
        {hasChildren ? (
          <>
            <span>{menu.title}</span>
            {isSeries && (
              <AngleDownIcon
                className={cn(
                  'w-8 h-8 fill-neutral-600 dark:fill-neutral-350',
                  isToggled && 'rotate-180'
                )}
              />
            )}
          </>
        ) : (
          <Link href={menu.url || ''}>{menu.title}</Link>
        )}
      </li>

      {((isSeries && isToggled) || (!isSeries && hasChildren)) &&
        menu.children?.map((child) => (
          <MenuItem key={child.title} menu={child} />
        ))}
    </>
  )
}

export default MenuItem
