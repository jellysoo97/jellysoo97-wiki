import React from 'react'

import { cn } from '@/utils/cn'

const ArrowRightIcon = ({
  className,
  ...props
}: React.ComponentProps<'svg'>) => {
  return (
    <svg
      className={cn('w-6 h-6', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M5 12h13M12 5l7 7-7 7" />
    </svg>
  )
}

export default ArrowRightIcon
