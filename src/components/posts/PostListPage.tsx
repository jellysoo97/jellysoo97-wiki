import { Post } from 'contentlayer/generated'
import Link from 'next/link'

import Badge from '@/components/common/Badge'
import TimelinePost from '@/components/common/TimelinePost'
import Title from '@/components/common/Title'
import { allCategories, allSortedPosts, allTags } from '@/constants/posts'
import { CategoryEnum } from '@/constants/tags'
import { cn } from '@/utils/cn'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'

type Props = {
  slug: string[]
}

const PostListPage = ({ slug }: Props) => {
  const [category, mainTag] = slug
  const linkTags = [...allCategories, ...allTags]
  const posts: Post[] =
    category === CategoryEnum.All
      ? allSortedPosts
      : allSortedPosts.filter((post) =>
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
              <TimelinePost
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
