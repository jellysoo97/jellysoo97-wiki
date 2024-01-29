'use client'

import Link from 'next/link'

import CustomImage from '../common/CustomImage'
import Title from '../common/Title'
import NavItems from './NavItems'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  return (
    <header>
      <div className="sticky top-0 z-40 w-full border-b border-gray-200">
        <div className="flex justify-between items-center px-8 py-4">
          <Link
            href={'/'}
            className="flex items-center space-x-4 flex-shrink-0"
          >
            <CustomImage
              src={'/images/logo.jpeg'}
              alt="logo"
              className="w-12 h-12 rounded-full"
            />
            <Title className="mb-0">jellysoo97.playground</Title>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <NavItems />
            {/* view icons */}
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
