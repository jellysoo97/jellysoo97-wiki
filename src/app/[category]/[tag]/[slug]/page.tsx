import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import MDXContent from '@/components/MDXContent'

type Props = {
  params: { category: string; tag: string; slug: string }
}

const PostPage = ({ params }: Props) => {
  const { category, tag, slug } = params
  const post = allPosts.find(
    (post) => post.url === `/${category}/${tag}/${slug}`
  )

  if (!post) {
    notFound()
  }

  return <MDXContent code={post.body.code} />
}

export default PostPage
