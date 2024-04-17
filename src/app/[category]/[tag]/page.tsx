'use client'

import { Post } from 'contentlayer/generated'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import Badge from '@/components/common/Badge'
import TimelinePost from '@/components/common/TimelinePost'
import Title from '@/components/common/Title'
import { CategoryEnum } from '@/constants/menus'
import { allCategories, allSortedPosts, allTags } from '@/constants/posts'
import { cn } from '@/utils/cn'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'

const PostListPage = () => {
  const { tag } = useParams()
  const [currentTag, setCurrentTag] = useState<string>('')

  const tags = [...allCategories, ...allTags]
  const posts: Post[] = useMemo(
    () =>
      currentTag === CategoryEnum.All
        ? allSortedPosts
        : allSortedPosts.filter(
            (post) =>
              post.category === currentTag || post.tags.includes(currentTag)
          ),
    [currentTag]
  )
  const handleTagSelect = (tag: string) => {
    setCurrentTag(tag)
  }

  useEffect(() => {
    if (typeof tag === 'string' && !!tag) {
      setCurrentTag(tag)
    }
  }, [])

  return (
    <div className="w-full flex flex-col mt-4">
      <Title className="mb-4">Posts</Title>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <Badge
            key={tag.value}
            content={`#${tag.valueKR}`}
            onClick={() => handleTagSelect(tag.value)}
            className={cn(tag.value === currentTag && 'bg-secondary')}
          />
        ))}
      </div>

      {/* TODO: add loading spinner later */}
      {!!currentTag && (
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
