import { notFound } from 'next/navigation'

import Divider from '@/components/common/Divider'
import MDXContent from '@/components/common/MDXContent'
import PostHeader from '@/components/layout/post/PostHeader'
import PostListPage from '@/components/posts/PostListPage'
import { allSortedPosts } from '@/constants/posts'

type Props = {
  params: { slug: string[] }
}

export async function generateStaticParams(): Promise<Props['params'][]> {
  return allSortedPosts.map((post) => ({
    slug: post.url.split('/').filter((url) => url !== '/'),
  }))
}

function getPostByParams(slug: string[]) {
  const [category, tag, title] = slug

  return allSortedPosts.find(
    (post) => post.url === `/posts/${category}/${tag}/${title}`
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
    <div className="w-full flex flex-col gap-y-4">
      <PostHeader post={post} />

      <Divider />

      <section>
        <MDXContent code={post.body.code} />
      </section>

      <Divider />

      {/* post footer */}
      <div>post comments</div>
    </div>
  )
}

export default PostPage
