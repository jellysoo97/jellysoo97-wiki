import React from 'react'

import { cn } from '@/utils/cn'

const MenuIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg
      className={cn(['w-6 h-6', className])}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M5 7h14M5 12h14M5 17h14"
      />
    </svg>
  )
}

export default MenuIcon
