import React from 'react'

import { cn } from '@/utils/cn'

type Props = {
  text: string
} & React.ComponentProps<'div'>

const Badge = ({ text, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center px-2 py-1 rounded-md border-2 border-neutral-300 dark:border-neutral-700',
        'text-sm md:text-base',
        'cursor-pointer',
        className
      )}
      {...props}
    >
      {text}
    </div>
  )
}

export default Badge
