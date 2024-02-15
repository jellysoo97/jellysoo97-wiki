'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Fragment, useState } from 'react'

import Divider from '@/components/common/Divider'
import AngleDownIcon from '@/components/icons/AngleDownIcon'
import AngleRightIcon from '@/components/icons/AngleRightIcon'
import { MenuItemType } from '@/constants/menus'
import { cn } from '@/utils/cn'

type Props = {
  menu: MenuItemType
  isInitialToggled?: boolean
}

const MenuItem = ({ menu, isInitialToggled = false }: Props) => {
  const [isToggled, setIsToggled] = useState<boolean>(isInitialToggled)
  const pathname = usePathname()

  const hasChildren = menu.children && menu.children?.length > 0
  const isCurrentPage = pathname === menu.url

  const toggleMenu = () => {
    setIsToggled((prev) => !prev)
  }

  return (
    <>
      {hasChildren && (
        <ul className="flex justify-between items-center px-4 py-2 cursor-pointer">
          <Link href={menu.url || ''} className="flex flex-1 gap-x-2">
            {new Array(menu.depth - 1).fill('').map((_, index) => (
              <div key={index} className="w-6 h-6 flex-centered">
                <Divider direction="vertical" />
              </div>
            ))}
            {menu.icon}
            {menu.title}
          </Link>
          <AngleDownIcon
            className={cn('w-8 h-8', isToggled && 'rotate-180')}
            onClick={toggleMenu}
          />
        </ul>
      )}

      {!hasChildren && (
        <li className="flex justify-between items-center px-4 py-1">
          <Link href={menu.url || '/'} className="flex gap-x-2">
            {new Array(menu.depth - 1).fill('').map((_, index) => (
              <Fragment key={index}>
                {isCurrentPage ? (
                  <AngleRightIcon className="text-yellow-500" />
                ) : (
                  <div className="w-6 h-6 flex-centered">
                    <Divider direction="vertical" />
                  </div>
                )}
              </Fragment>
            ))}
            {menu.icon}
            {menu.title}
          </Link>
        </li>
      )}

      {hasChildren &&
        isToggled &&
        menu.children?.map((child) => (
          <MenuItem key={child.title} menu={child} />
        ))}
    </>
  )
}

export default MenuItem
