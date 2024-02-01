'use client'

import Link from 'next/link'
import { useState } from 'react'

import { MenuItemType } from '@/constants/menus'
import { cn } from '@/utils/cn'

import Divider from '../common/Divider'
import AngleDownIcon from '../icons/AngleDownIcon'
import FileIcon from '../icons/FileIcon'
import FolderIcon from '../icons/FolderIcon'

type Props = {
  menu: MenuItemType
}

const MenuItem = ({ menu }: Props) => {
  const [isToggled, setIsToggled] = useState<boolean>(false)

  const hasChildren = menu.children && menu.children.length > 0

  const handleToggle = () => {
    setIsToggled((prev) => !prev)
  }

  return (
    <div className="w-full flex flex-col gap-y-1">
      <div
        className={cn(
          'flex items-center p-1 gap-x-2',
          hasChildren && 'cursor-pointer'
        )}
        onClick={handleToggle}
      >
        {new Array(menu.depth - 1).fill('').map((_, index) => (
          <div key={index} className="w-8 h-8 flex-centered">
            <Divider direction="vertical" />
          </div>
        ))}
        {hasChildren && (
          <AngleDownIcon
            className={cn(
              'w-8 h-8 fill-neutral-600 dark:fill-neutral-350',
              isToggled && 'rotate-180'
            )}
          />
        )}
        {hasChildren ? (
          <div className="flex flex-1 items-center gap-x-2">
            {menu.icon || (hasChildren ? <FolderIcon /> : <FileIcon />)}
            <span
              className={cn(
                'text-base',
                hasChildren && 'text-xl',
                menu.depth === 1 && 'font-extrabold text-2xl'
              )}
            >
              {menu.title}
            </span>
          </div>
        ) : (
          <Link href={menu.url || '/'}>
            <div className="flex flex-1 items-center gap-x-2">
              {menu.icon || (hasChildren ? <FolderIcon /> : <FileIcon />)}
              <span className={cn('text-base', hasChildren && 'text-xl')}>
                {menu.title}
              </span>
            </div>
          </Link>
        )}
      </div>

      {isToggled && hasChildren && (
        <>
          {menu.children?.map((child) => (
            <MenuItem key={`${child.title}`} menu={child} />
          ))}
        </>
      )}
    </div>
  )
}

export default MenuItem
