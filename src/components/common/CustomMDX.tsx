import { MDXRemote } from 'next-mdx-remote/rsc'

type Props = {
  content: string
}

const components = {}

function CustomMDX({ content }: Props) {
  return <MDXRemote source={content} components={components} />
}

export default CustomMDX
