import { allPosts } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { allBlogPosts } from '@/constants/posts'

type Props = {
  params: { slug: string }
}

const BlogPostPage = async ({ params }: Props) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  console.log(post)
  const MDXContent = useMDXComponent(post?.body.code || '')

  return (
    <div>
      test
      <MDXContent />
    </div>
  )
}

export const generateStaticParams = async () => {
  return allBlogPosts.map((post) => ({ slug: post._raw.flattenedPath }))
}

export default BlogPostPage
