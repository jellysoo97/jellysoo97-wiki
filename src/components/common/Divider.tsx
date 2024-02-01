import React from 'react'

import { cn } from '@/utils/cn'

type Props = {
  direction?: 'horizontal' | 'vertical'
} & React.ComponentProps<'div'>

const Divider = ({ direction = 'horizontal', className, ...props }: Props) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          'bg-neutral-400 dark:bg-neutral-700',
          direction === 'horizontal' ? 'w-full h-[1px]' : 'w-[1px] h-full',
          className
        )}
      />
    </>
  )
}

export default Divider
