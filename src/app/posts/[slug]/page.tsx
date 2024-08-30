import { notFound } from 'next/navigation'

import CustomMDX from '@/components/common/CustomMDX'
import Divider from '@/components/common/Divider'
import PostFooter from '@/components/posts/PostFooter'
import PostHeader from '@/components/posts/PostHeader'
import { getMdxData } from '@/utils/get-mdx-data'
import { getMdxPostByUrl } from '@/utils/get-mdx-post-by-url'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const { posts } = await getMdxData()

  return posts.map((post) => ({
    slug: post.metadata.url,
  }))
}

const PostPage = async ({ params }: Props) => {
  const { slug } = params

  const { currentPost, prevPost, nextPost } = await getMdxPostByUrl(
    `/posts/${slug}`
  )

  if (!currentPost) {
    return notFound()
  }

  return (
    <div className="flex w-full flex-col gap-y-4">
      <PostHeader metadata={currentPost.metadata} />
      <Divider />
      <article className="prose prose-neutral dark:prose-dark w-full max-w-full py-4">
        <CustomMDX content={currentPost.content} />
      </article>
      <Divider />
      <PostFooter
        metadata={currentPost.metadata}
        prevPost={prevPost}
        nextPost={nextPost}
      />
    </div>
  )
}

export default PostPage
