import { notFound } from 'next/navigation'

import Divider from '@/components/common/Divider'
import BlogFooter from '@/components/layout/blog/BlogFooter'
import BlogHeader from '@/components/layout/blog/BlogHeader'
import MDXContent from '@/components/MDXContent'
import { allBlogPosts } from '@/constants/posts'

type Props = {
  params: { categories: string; postId: string }
}

const BlogPostPage = ({ params }: Props) => {
  const post = allBlogPosts.find(
    (post) =>
      post._raw.flattenedPath === `blog/${params.categories}/${params.postId}`
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
  return allBlogPosts.map((post) => {
    const [_, categories, postId] = post._raw.flattenedPath.split('/')

    return { categories, postId }
  })
}
export default BlogPostPage
