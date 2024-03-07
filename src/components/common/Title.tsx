import React from 'react'

import { cn } from '@/utils/cn'

const Title = ({ className, ...props }: React.ComponentProps<'h1'>) => {
  return (
    <h1
      {...props}
      className={cn(
        'font-serifBold text-primary text-lg md:text-xl',
        'mb-4',
        className
      )}
    />
  )
}

export default Title
