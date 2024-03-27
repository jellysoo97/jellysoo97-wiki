import { Post } from 'contentlayer/generated'

import PostTimeline from '@/components/common/PostTimeline'
import Title from '@/components/common/Title'
import { CategoryEnum, categoryKR } from '@/constants/menus'
import { allSortedPosts } from '@/constants/posts'

type Props = {
  params: { part: string; category: string }
}

const CategoryListPage = ({ params }: Props) => {
  const posts: Post[] = allSortedPosts.filter(
    (post) => post.part === params.part && post.category === params.category
  )

  return (
    <div className="flex flex-col gap-y-6">
      <Title>{categoryKR[params.category as CategoryEnum]}</Title>
      <PostTimeline posts={posts} />
    </div>
  )
}

export default CategoryListPage
