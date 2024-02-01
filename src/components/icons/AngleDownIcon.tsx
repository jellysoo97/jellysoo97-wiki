import React from 'react'

import { cn } from '@/utils/cn'

const AngleDownIcon = ({
  className,
  ...props
}: React.ComponentProps<'svg'>) => {
  return (
    <svg
      className={cn('w-6 h-6', className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.8">
        <path d="M16.354 10.354L12.354 14.354C12.256 14.452 12.128 14.5 12 14.5C11.872 14.5 11.744 14.451 11.646 14.354L7.64601 10.354C7.45101 10.159 7.45101 9.84198 7.64601 9.64698C7.84101 9.45198 8.15804 9.45198 8.35304 9.64698L11.999 13.293L15.645 9.64698C15.84 9.45198 16.1571 9.45198 16.3521 9.64698C16.5471 9.84198 16.549 10.158 16.354 10.354Z" />
      </g>
    </svg>
  )
}

export default AngleDownIcon
