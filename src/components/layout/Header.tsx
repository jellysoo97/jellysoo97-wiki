import Link from 'next/link'

import { siteConfig } from '@/constants/config'

import ThemeSwitch from '../common/ThemeSwitch'
import Title from '../common/Title'
import GithubIcon from '../icons/GithubIcon'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 h-[var(--height-header)] w-full bg-primary">
      <div className="flex h-full items-center justify-between">
        <Link href={'/'}>
          <div className="flex items-center gap-x-2">
            <Image src={logo} alt="logo" width={24} height={24} />
            <Title>{siteConfig.title}</Title>
          </div>
        </Link>

        <div className="flex items-center gap-x-2">
          <ThemeSwitch />
          <Link
            href={siteConfig.url.github}
            target="_blank"
            className="flex h-8 w-8 items-center justify-center p-1 scale-sm"
          >
            <GithubIcon className="text-secondary" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
