'use client'

import Link from 'next/link'

import { siteConfig } from '@/constants/config'

import IconButton from '../common/IconButton'
import ThemeSwitch from '../common/ThemeSwitch'
import Title from '../common/Title'
import GithubIcon from '../icons/GithubIcon'
import MenuIcon from '../icons/MenuIcon'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full h-[var(--height-header)] bg-primary">
      <div className="h-full flex justify-between items-center">
        <Link href={'/'}>
          <Title>🚀 {siteConfig.title}</Title>
        </Link>

        <div className="flex items-center gap-x-2">
          <ThemeSwitch />
          <Link
            href={siteConfig.url.github}
            target="_blank"
            className="w-8 h-8 flex justify-center items-center scale-sm"
          >
            <GithubIcon className="w-6 h-6 text-secondary" />
          </Link>
          <IconButton className="block md:hidden">
            <MenuIcon className="w-6 h-6 text-secondary" />
          </IconButton>
        </div>
      </div>
    </header>
  )
}

export default Header
