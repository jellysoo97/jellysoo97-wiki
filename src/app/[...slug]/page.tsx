import { notFound } from 'next/navigation'

import Divider from '@/components/common/Divider'
import PostFooter from '@/components/layout/post/PostFooter'
import PostHeader from '@/components/layout/post/PostHeader'
import MDXContent from '@/components/posts/MDXContent'
import PostListPage from '@/components/posts/PostListPage'
import { allSortedPosts } from '@/constants/posts'

type Props = {
  params: { slug: string[] }
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allSortedPosts.map((post) => ({
    slug: post._raw.flattenedPath.split('/'),
  }))
}

function getPostByParams(slug: string[]) {
  const [category, mainTag, title] = slug

  return allSortedPosts.find(
    (post) => post.url === `/${category}/${mainTag}/${title}`
  )
}

const PostPage = ({ params }: Props) => {
  const { slug } = params
  const isPostListPage = slug.length < 3

  if (isPostListPage) {
    return <PostListPage slug={slug} />
  }

  const post = getPostByParams(slug)

  if (!post) {
    return notFound()
  }

  return (
    <div className="w-full flex flex-col gap-y-8">
      <PostHeader post={post} />

      <Divider />

      <section>
        <MDXContent code={post.body.code} />
      </section>

      <Divider />

      <PostFooter post={post} />
    </div>
  )
}

export default PostPage
