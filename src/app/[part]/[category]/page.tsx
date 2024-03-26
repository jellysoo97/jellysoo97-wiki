import { Post } from 'contentlayer/generated'
import Link from 'next/link'

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
    <div className="flex flex-col gap-y-4">
      <Title>{categoryKR[params.category as CategoryEnum]}</Title>
      <ul className="flex flex-col gap-y-2">
        {posts.map((post) => (
          <li key={post.url}>
            <Link href={post.url}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryListPage
