import React from 'react'

import { cn } from '@/utils/cn'

type Props = {
  content: string
} & React.ComponentProps<'div'>

const Badge = ({ content, className, ...props }: Props) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center rounded-md border border-neutral-300 px-2 py-1 dark:border-neutral-700',
        'cursor-pointer text-size-small',
        className
      )}
      {...props}
    >
      {content}
    </div>
  )
}

export default Badge
