'use client'

import { useMemo, useState } from 'react'
import { IPost, ITag, TagEnum } from 'src/types'

import { cn } from '@/utils/cn'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'

import Badge from '../common/Badge'
import PostTimeline from './PostTimeline'

type Props = {
  posts: IPost[]
  tags: ITag[]
}

const PostList = ({ posts, tags }: Props) => {
  const [currentTag, setCurrentTag] = useState<string>(TagEnum.All)

  const tagPosts = useMemo(
    () =>
      currentTag === TagEnum.All
        ? posts
        : posts.filter((post) => post.frontmatter.tag === currentTag),
    [currentTag]
  )

  return (
    <>
      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag.value}
            content={`#${tag.label}`}
            className={cn(tag.value === currentTag && 'bg-secondary')}
            onClick={() => setCurrentTag(tag.value)}
          />
        ))}
      </div>

      <ul>
        {tagPosts.map(({ frontmatter }, index) => {
          const currentPostYear = formatDate(
            frontmatter.date,
            DateFormatTypeEnum.YearOnly
          )
          const prevPostYear =
            index === 0
              ? currentPostYear
              : formatDate(
                  tagPosts[index - 1].frontmatter.date,
                  DateFormatTypeEnum.YearOnly
                )
          const isLastPostOfYear =
            index === 0 || currentPostYear !== prevPostYear

          return (
            <PostTimeline
              key={frontmatter.title}
              frontmatter={frontmatter}
              year={currentPostYear}
              isLastPostOfYear={isLastPostOfYear}
            />
          )
        })}
      </ul>
    </>
  )
}

export default PostList
