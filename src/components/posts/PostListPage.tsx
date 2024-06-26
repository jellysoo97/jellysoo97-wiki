import { Post } from 'contentlayer/generated'
import Link from 'next/link'

import Badge from '@/components/common/Badge'
import Title from '@/components/common/Title'
import PostTimeline from '@/components/posts/PostTimeline'
import { CategoryEnum } from '@/constants/tags'
import { cn } from '@/utils/cn'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'
import { getAllCategories, getAllSortedPosts, getAllTags } from '@/utils/posts'

type Props = {
  slug: string[]
}

const PostListPage = ({ slug }: Props) => {
  const [category, mainTag] = slug
  const linkTags = [...getAllCategories(), ...getAllTags()]
  const posts: Post[] =
    category === CategoryEnum.All
      ? getAllSortedPosts()
      : getAllSortedPosts().filter((post) =>
          mainTag
            ? (post.category === category && post.tags[0] === mainTag) ||
              post.tags.includes(mainTag)
            : post.category === category
        )

  return (
    <div className="w-full flex flex-col mt-4">
      <Title className="mb-4">Posts</Title>
      <div className="flex flex-wrap gap-2 mb-6">
        {linkTags.map((linkTag) => (
          <Link key={linkTag.value} href={linkTag.url}>
            <Badge
              content={`#${linkTag.label}`}
              className={cn(
                linkTag.url === `/${slug.join('/')}` && 'bg-secondary'
              )}
            />
          </Link>
        ))}
      </div>

      {/* TODO: add loading spinner later */}
      {!!category && (
        <ul>
          {posts.map((post, index) => {
            const currentPostYear = formatDate(
              post.date,
              DateFormatTypeEnum.YearOnly
            )
            const prevPostYear =
              index === 0
                ? currentPostYear
                : formatDate(posts[index - 1].date, DateFormatTypeEnum.YearOnly)
            const isLastPostOfYear =
              index === 0 || currentPostYear !== prevPostYear

            return (
              <PostTimeline
                key={post.url}
                post={post}
                year={currentPostYear}
                isLastPostOfYear={isLastPostOfYear}
              />
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default PostListPage
