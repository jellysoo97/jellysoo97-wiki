import React from 'react'

import { cn } from '@/utils/cn'

type Props = {
  text: string
} & React.ComponentProps<'div'>

const Badge = ({ text, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn(
        'flex justify-center items-center px-12 py-2',
        'text-neutral-50 font-extrabold text-xl bg-blue-600 rounded-md',
        className
      )}
    >
      {text}
    </div>
  )
}

export default Badge
