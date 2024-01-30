'use client'

import Link from 'next/link'

import { siteConfig } from '@/constants/config'

import CustomImage from '../common/CustomImage'
import Title from '../common/Title'
import GithubIcon from '../icons/GithubIcon'
import ThemeSwitch from './ThemeSwitch'
import ViewSwitchGroup from './ViewSwitchGroup'

const Header = () => {
  return (
    <header>
      <div className="sticky top-0 z-40 w-full border-b border-neutral-400">
        <div className="flex justify-between items-center px-8 py-4">
          <Link href={'/'} className="flex items-center space-x-4">
            <CustomImage
              src={siteConfig.author.avatar}
              alt="logo"
              className="w-10 h-10 rounded-full md:w-12 md:h-12"
            />
            <Title className="mb-0">jellysoo97.playground</Title>
          </Link>

          <div className="flex items-center space-x-4">
            <ViewSwitchGroup />
            <ThemeSwitch />
            <Link href={siteConfig.url.github} target="_blank">
              <GithubIcon className="w-7 h-7" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
