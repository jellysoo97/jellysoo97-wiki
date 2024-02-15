import { notFound } from 'next/navigation'

import Divider from '@/components/common/Divider'
import BlogFooter from '@/components/layout/blog/BlogFooter'
import BlogHeader from '@/components/layout/blog/BlogHeader'
import MDXContent from '@/components/MDXContent'
import { allBlogPosts } from '@/constants/posts'

type Props = {
  params: { slug: string }
}

const BlogPostPage = ({ params }: Props) => {
  const post = allBlogPosts.find(
    (post) => post._raw.flattenedPath === params.slug
  )

  if (!post) {
    notFound()
  }

  return (
    <>
      <BlogHeader post={post} />

      <Divider className="mb-6" />

      <MDXContent code={post.body.code} />

      <Divider className="mb-6" />

      <BlogFooter />
    </>
  )
}

export const generateStaticParams = async () => {
  return allBlogPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export default BlogPostPage
