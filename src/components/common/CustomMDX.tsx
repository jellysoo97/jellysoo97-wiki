import { MDXRemote } from 'next-mdx-remote/rsc'
import React from 'react'
import { highlight } from 'sugar-high'

type Props = {
  content: string
}

function CustomLink(props: React.ComponentProps<'a'>) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function CustomCode({ children, ...props }: React.ComponentProps<'code'>) {
  if (children) {
    const codeHTML = highlight(children as string)
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
  }

  return (
    <code dangerouslySetInnerHTML={{ __html: children as string }} {...props} />
  )
}

function createHeading(level: number) {
  return ({ children }: React.ComponentProps<'h2'>) =>
    React.createElement(`h${level}`, {}, children)
}

const components = {
  h2: createHeading(2),
  h3: createHeading(3),
  a: CustomLink,
  code: CustomCode,
}

function CustomMDX({ content }: Props) {
  return <MDXRemote source={content} components={components} />
}

export default CustomMDX
