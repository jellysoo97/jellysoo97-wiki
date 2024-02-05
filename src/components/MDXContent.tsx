import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import React from 'react'

import { cn } from '@/utils/cn'

type Props = {
  code: string
}

const img = ({
  src,
  alt,
  title,
  className,
  ...props
}: React.ComponentProps<'img'>) => {
  return (
    <figure
      {...props}
      className={cn(
        'flex flex-col items-center justify-center gap-y-1',
        'relative w-full',
        className
      )}
    >
      <Image
        src={src || ''}
        alt={alt || 'image'}
        fill
        className="object-cover"
      />
      {title && <figcaption className="text-secondary">{title}</figcaption>}
    </figure>
  )
}

const pre = ({ title, children }: React.ComponentProps<'pre'>) => {
  return (
    <div>
      {title && <>{title}</>}

      <pre className="relative">
        {children}
        {/* copy button */}
      </pre>
    </div>
  )
}

const MDXComponents = {
  img,
  pre,
}

const MDXContent = ({ code }: Props) => {
  const Component = useMDXComponent(code)

  return (
    <article className="prose prose-neutral w-full max-w-3xl dark:prose-dark">
      <Component components={MDXComponents} />
    </article>
  )
}

export default MDXContent
