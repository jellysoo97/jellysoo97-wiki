import { cn } from '@/utils/cn'
import React from 'react'

const Title = ({ className, ...props }: React.ComponentProps<'h1'>) => {
  return (
    <h1
      {...props}
      className={cn('text-2xl font-extrabold lg:text-3xl mb-4', className)}
    />
  )
}

export default Title
