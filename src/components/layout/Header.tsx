import Link from 'next/link'

import { siteConfig } from '@/constants/config'

import ThemeSwitch from '../common/ThemeSwitch'
import Title from '../common/Title'
import GithubIcon from '../icons/GithubIcon'

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
            className="w-8 h-8 flex justify-center items-center scale-sm p-1"
          >
            <GithubIcon className="text-secondary" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
