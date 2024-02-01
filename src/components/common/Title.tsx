import React from 'react'

import { cn } from '@/utils/cn'

const Title = ({ className, ...props }: React.ComponentProps<'h1'>) => {
  return (
    <h1
      {...props}
      className={cn('text-xl font-extrabold mb-4 md:text-2xl', className)}
    />
  )
}

export default Title
