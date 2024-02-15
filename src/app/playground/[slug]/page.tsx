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

  console.log(params.slug, allPlaygroundPosts)

  if (!post) {
    notFound()
  }

  return (
    <div className="layout-container overflow-y-auto lg:ml-80">
      <MDXContent code={post.body.code} />
    </div>
  )
}

export const generateStaticParams = async () => {
  return allPlaygroundPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export default PlaygroundPage
