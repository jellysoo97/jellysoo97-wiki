import { notFound } from 'next/navigation'
import React from 'react'

import Divider from '@/components/common/Divider'
import PostHeader from '@/components/layout/post/PostHeader'
import { allSortedPosts } from '@/constants/posts'

type Props = {
  params: { part: string; category: string; slug: string }
  children: React.ReactNode
}

const PostPageLayout = ({ params, children }: Props) => {
  const post = allSortedPosts.find(
    (post) => post.url === `/${params.part}/${params.category}/${params.slug}`
  )

  if (!post) {
    notFound()
  }

  return (
    <div className="flex flex-1 flex-col gap-y-4">
      <PostHeader post={post} />

      <Divider />

      <section>{children}</section>

      <Divider />

      {/* post footer */}
    </div>
  )
}

export default PostPageLayout
