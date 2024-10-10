import { MDXRemote } from 'next-mdx-remote/rsc'
import { SerializeOptions } from 'node_modules/next-mdx-remote/dist/types'
import React from 'react'
import remarkGfm from 'remark-gfm'
import { highlight } from 'sugar-high'

type Props = {
  source: string
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

function CustomImg(props: React.ComponentProps<'img'>) {
  return <img className="mx-auto" {...props} />
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
  img: CustomImg,
}

const options: SerializeOptions = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
  },
}

function CustomMDX({ source }: Props) {
  return <MDXRemote source={source} components={components} options={options} />
}

export default CustomMDX
