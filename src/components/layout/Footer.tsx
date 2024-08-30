'use client'

import { siteConfig } from '@/constants/config'
import { DateFormatTypeEnum, formatDate, today } from '@/utils/format-date'
import IconButton from '../common/IconButton'
import EmailIcon from '../icons/EmailIcon'
import { useCopy } from '@/hooks/use-copy'
import Tooltip from '../common/Tooltip'
import Link from 'next/link'
import GithubIcon from '../icons/GithubIcon'
import CheckIcon from '../icons/CheckIcon'

const Footer = () => {
  const { isCopied, handleCopy } = useCopy()

  return (
    <footer className="flex h-[var(--height-footer)] items-center justify-between">
      <span>
        Copyright © {formatDate(today, DateFormatTypeEnum.YearOnly)}{' '}
        {siteConfig.author.name}
      </span>
      <div className="flex gap-x-1">
        <IconButton onClick={() => handleCopy(siteConfig.author.email)}>
          {isCopied ? <CheckIcon className="text-green-700" /> : <EmailIcon />}
        </IconButton>

        <Link
          href={siteConfig.url.author}
          target="_blank"
          className="flex h-8 w-8 items-center justify-center p-1 scale-sm"
        >
          <GithubIcon className="text-secondary" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
