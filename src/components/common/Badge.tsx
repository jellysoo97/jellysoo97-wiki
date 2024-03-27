import React from 'react'

import { cn } from '@/utils/cn'

type Props = {
  content: string
} & React.ComponentProps<'div'>

const Badge = ({ content, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'flex justify-center items-center px-2 py-1 rounded-md border border-neutral-300 dark:border-neutral-700',
        'text-size-small cursor-pointer',
        className
      )}
      {...props}
    >
      {content}
    </div>
  )
}

export default Badge
