import React from 'react'

import { cn } from '@/utils/cn'

const Title = ({ className, ...props }: React.ComponentProps<'h1'>) => {
  return (
    <h1
      className={cn(
        'font-serif-bold text-primary text-size-xlarge',
        'whitespace-pre-line',
        className
      )}
      {...props}
    />
  )
}

export default Title
