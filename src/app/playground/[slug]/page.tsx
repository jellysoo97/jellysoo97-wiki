import { notFound } from 'next/navigation'

import MDXContent from '@/components/MDXContent'
import { allPlaygroundPosts } from '@/constants/posts'

type Props = {
  params: { slug: string }
}

const PlaygroundPage = ({ params }: Props) => {
  const post = allPlaygroundPosts.find(
    (post) => post._raw.flattenedPath === `playground/${params.slug}`
  )

  if (!post) {
    notFound()
  }

  return <MDXContent code={post.body.code} />
}

export const generateStaticParams = async () => {
  return allPlaygroundPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export default PlaygroundPage
