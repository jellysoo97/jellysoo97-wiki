import { notFound } from 'next/navigation'

import Divider from '@/components/common/Divider'
import PostHeader from '@/components/layout/post/PostHeader'
import MDXContent from '@/components/MDXContent'
import PostListPage from '@/components/PostListPage'
import { allSortedPosts } from '@/constants/posts'

type Props = {
  params: { slug: string[] }
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allSortedPosts.map((post) => ({
    slug: post.url.split('/').filter((url) => url !== '/'),
  }))
}

const PostPage = ({ params }: Props) => {
  const { slug } = params
  const [category, tag, title] = slug
  const isPostListPage = slug.length < 3

  if (isPostListPage) {
    return <PostListPage slug={slug} />
  }

  const post = allSortedPosts.find(
    (post) => post.url === `/posts/${category}/${tag}/${title}`
  )

  if (!post) {
    return notFound()
  }

  return (
    <div className="flex flex-1 flex-col gap-y-4">
      <PostHeader post={post} />

      <Divider />

      <section>
        <MDXContent code={post.body.code} />
      </section>

      <Divider />

      {/* post footer */}
    </div>
  )
}

export default PostPage
