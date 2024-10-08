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
        'flex h-8 w-8 items-center justify-center p-1',
        'scale-sm',
        className
      )}
    >
      {children}
    </button>
  )
}

export default IconButton
