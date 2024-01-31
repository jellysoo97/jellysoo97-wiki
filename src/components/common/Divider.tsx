import React from 'react'

import { cn } from '@/utils/cn'

type Props = {
  direction?: 'horizontal' | 'vertical'
} & React.ComponentProps<'hr'>

const Divider = ({ direction = 'horizontal', className, ...props }: Props) => {
  return (
    <hr
      {...props}
      className={cn(
        'border-1 w-full border-neutral-300 dark:border-neutral-700',
        direction === 'vertical' && 'rotate-90',
        className
      )}
    />
  )
}

export default Divider
