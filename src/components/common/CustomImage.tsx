import Image from 'next/image'
import React from 'react'

import { cn } from '@/utils/cn'

type Props = React.ComponentProps<'img'> & {
  src: string
  alt?: string
}

const CustomImage = ({ src, alt, className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn('relative w-8 h-8 rounded-md overflow-hidden', className)}
    >
      <Image src={src} alt={alt || 'image'} fill className="object-cover" />
    </div>
  )
}

export default CustomImage
