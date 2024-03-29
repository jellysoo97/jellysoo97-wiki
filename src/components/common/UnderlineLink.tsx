import Link from 'next/link'
import React from 'react'
import { UrlObject } from 'url'

import { cn } from '@/utils/cn'

type Props = {
  href: string | UrlObject
  children: React.ReactNode
  className?: string
}

const UnderlineLink = ({ href, children, className }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        'hover:font-serif-bold',
        'underline decoration-1 underline-offset-2 decoration-neutral-400 dark:decoration-neutral-700',
        className
      )}
    >
      {children}
    </Link>
  )
}

export default UnderlineLink
