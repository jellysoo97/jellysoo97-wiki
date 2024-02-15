'use client'

import Link from 'next/link'

import { siteConfig } from '@/constants/config'

import CustomImage from '../common/CustomImage'
import Divider from '../common/Divider'
import IconButton from '../common/IconButton'
import Title from '../common/Title'
import GithubIcon from '../icons/GithubIcon'
import MenuIcon from '../icons/MenuIcon'
import ThemeSwitch from '../ThemeSwitch'

const Header = () => {
  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-primary">
        <div className="flex justify-between items-center p-4">
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

        <Divider />
      </header>

      <div className="block lg:hidden">
        <div className="layout-container flex items-center p-2">
          <IconButton>
            <MenuIcon />
          </IconButton>
          {/* breadcrumb */}
        </div>
        <Divider />
        {/* dialog */}
      </div>
    </>
  )
}

export default Header
