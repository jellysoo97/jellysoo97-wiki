'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/constants/config'
import { cn } from '@/utils/cn'

import CustomImage from '../common/CustomImage'
import IconButton from '../common/IconButton'
import Title from '../common/Title'
import GithubIcon from '../icons/GithubIcon'
import MenuIcon from '../icons/MenuIcon'
import ThemeSwitch from '../ThemeSwitch'

const Header = () => {
  const pathname = usePathname()

  const isRootPage = pathname === '/'

  return (
    <>
      <header>
        <div className="sticky top-0 z-40 w-full">
          <div className="layout-container flex justify-between items-center py-4">
            <Link href={'/'} className="flex items-center space-x-4">
              <CustomImage
                src={siteConfig.author.avatar}
                alt="logo"
                className="w-10 h-10 rounded-full md:w-12 md:h-12"
              />
              <Title className="mb-0 text-primary">{siteConfig.title}</Title>
            </Link>

            <div className="flex gap-x-4">
              <ThemeSwitch />
              <Link href={siteConfig.url.github} target="_blank">
                <GithubIcon className="w-7 h-7" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div
        className={cn(
          'flex items-center p-4 lg:hidden',
          isRootPage && 'hidden'
        )}
      >
        <IconButton>
          <MenuIcon />
        </IconButton>
        {/* breadcrumb */}
      </div>
    </>
  )
}

export default Header
