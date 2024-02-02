import React from 'react'

import { cn } from '@/utils/cn'

const SeriesIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg
      className={cn('w-6 h-6', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      {...props}
    >
      <path
        fill="currentColor"
        d="M160-200v-80h400v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Zm0-160v-80h640v80H160Z"
      />
    </svg>
  )
}

export default SeriesIcon
