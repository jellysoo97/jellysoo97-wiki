import { useMDXComponent } from 'next-contentlayer/hooks'
import React from 'react'

type Props = {
  code: string
}

const img = ({ src, alt, ...props }: React.ComponentProps<'img'>) => {
  return <img src={src || ''} alt={alt || 'image'} {...props} />
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
    <article className="prose prose-neutral w-full max-w-full dark:prose-dark">
      <Component components={MDXComponents} />
    </article>
  )
}

export default MDXContent
