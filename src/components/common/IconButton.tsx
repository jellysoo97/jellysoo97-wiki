import React from 'react'

import { cn } from '@/utils/cn'

const IconButton = ({
  type = 'button',
  className,
  children,
  ...props
}: React.ComponentProps<'button'>) => {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        'flex w-8 h-8 justify-center items-center',
        'scale-sm',
        className
      )}
    >
      {children}
    </button>
  )
}

export default IconButton
