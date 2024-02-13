import { notFound } from 'next/navigation'

import Divider from '@/components/common/Divider'
import BlogFooter from '@/components/layout/blog/BlogFooter'
import BlogHeader from '@/components/layout/blog/BlogHeader'
import MDXContent from '@/components/MDXContent'
import { allBlogPosts } from '@/constants/posts'

type Props = {
  params: { slug: string[] }
}

export default function BlogPostPage({ params }: Props) {
  const post = allBlogPosts.find(
    (post) => post._raw.flattenedPath === `blog/${params.slug.join('/')}`
  )

  if (!post) {
    notFound()
  }

  return (
    <div className="layout-container h-full flex flex-col overflow-y-auto">
      <BlogHeader post={post} />

      <Divider className="mb-6" />

      {/* TODO: progress bar */}

      <MDXContent code={post.body.code} />

      <Divider className="mb-6" />

      <BlogFooter />
    </div>
  )
}

export const generateStaticParams = async () => {
  return allBlogPosts.map((post) => ({
    slug: post._raw.flattenedPath.split('/'),
  }))
}
