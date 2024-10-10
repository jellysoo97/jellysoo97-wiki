import { notFound } from 'next/navigation'

import CustomMDX from '@/components/common/CustomMDX'
import Divider from '@/components/common/Divider'
import PostFooter from '@/components/posts/PostFooter'
import PostHeader from '@/components/posts/PostHeader'
import { siteConfig } from '@/constants/config'
import { getPost } from '@/utils/get-post'
import { getPosts } from '@/utils/get-posts'
import { Metadata } from 'next'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.frontmatter.url,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const posts = await getPosts()
  const post = posts.find((post) => post.frontmatter.url === params.slug)

  if (!post) {
    console.error('Post not found for slug:', params.slug)
    throw new Error('Unable to find post')
  }

  const { title, description, date, url, tag } = post.frontmatter
  const DEFAULT_IMAGE = '/images/og.png'

  return {
    title,
    description,
    authors: siteConfig.author,
    keywords: tag,
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${siteConfig.url.blog}/posts/${url}`,
      tags: tag,
      images: [DEFAULT_IMAGE],
      authors: siteConfig.author.name,
      publishedTime: date.toISOString().split('T')[0],
      modifiedTime: date.toISOString().split('T')[0],
    },
  }
}

const PostPage = async ({ params }: Props) => {
  const { currentPost, prevPost, nextPost } = await getPost(params.slug)

  if (!currentPost) {
    return notFound()
  }

  return (
    <div className="flex w-full flex-col gap-y-4">
      <PostHeader frontmatter={currentPost.frontmatter} />
      <Divider />
      <article className="dark:prose-dark prose prose-neutral w-full max-w-full py-4">
        <CustomMDX source={currentPost.content} />
      </article>
      <Divider />
      <PostFooter
        frontmatter={currentPost.frontmatter}
        prevPost={prevPost}
        nextPost={nextPost}
      />
    </div>
  )
}

export default PostPage
