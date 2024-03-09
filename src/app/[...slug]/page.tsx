import { Post } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { useMemo } from 'react'

import Divider from '@/components/common/Divider'
import PostHeader from '@/components/layout/post/PostHeader'
import MDXContent from '@/components/MDXContent'
import { allSortedPosts } from '@/constants/posts'

type Props = {
  params: { slug: string[] }
}

const PostPage = ({ params }: Props) => {
  const post: Post | undefined = useMemo(
    () =>
      allSortedPosts.find(
        (post) => post._raw.flattenedPath === params.slug.join('/')
      ),
    [params.slug]
  )

  if (!post) {
    notFound()
  }

  return (
    <>
      <PostHeader post={post} />

      <Divider />

      <section>
        <MDXContent code={post.body.code} />
      </section>

      <Divider />

      {/* post footer */}
      <div>post footer</div>
    </>
  )
}

export default PostPage
