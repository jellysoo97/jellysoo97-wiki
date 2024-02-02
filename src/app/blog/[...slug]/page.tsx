import { useMDXComponent } from 'next-contentlayer/hooks'

import BlogHeader from '@/components/layout/blog/BlogHeader'
import { allBlogPosts } from '@/constants/posts'

type Props = {
  params: { slug: string[] }
}

export default function BlogPostPage({ params }: Props) {
  const post = allBlogPosts.find(
    (post) => post._raw.flattenedPath === `blog/${params.slug.join('/')}`
  )

  const MDXContent = useMDXComponent(post?.body.code || '')

  if (!post) {
    return <div>skeleton</div>
  }

  return (
    <div className="flex flex-col">
      <BlogHeader post={post} />

      {/* progress bar */}

      <section>
        <MDXContent />
      </section>

      <div>footer</div>
    </div>
  )
}

export const generateStaticParams = async () => {
  return allBlogPosts.map((post) => ({
    slug: post._raw.flattenedPath.split('/'),
  }))
}
