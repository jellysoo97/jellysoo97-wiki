import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import MDXContent from '@/components/MDXContent'

type Props = {
  params: { part: string; category: string; slug: string }
}

const PostPage = ({ params }: Props) => {
  const { part, category, slug } = params
  const post = allPosts.find(
    (post) => post.url === `/${part}/${category}/${slug}`
  )

  if (!post) {
    notFound()
  }

  return <MDXContent code={post.body.code} />
}

export default PostPage
