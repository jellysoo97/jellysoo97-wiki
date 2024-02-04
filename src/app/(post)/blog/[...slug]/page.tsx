import { notFound } from 'next/navigation'

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
    <div className="layout-container flex flex-col">
      <BlogHeader post={post} />

      {/* progress bar */}

      <section className="prose dark:prose-dark">
        <MDXContent code={post.body.code} />
      </section>

      <BlogFooter />
    </div>
  )
}

export const generateStaticParams = async () => {
  return allBlogPosts.map((post) => ({
    slug: post._raw.flattenedPath.split('/'),
  }))
}
