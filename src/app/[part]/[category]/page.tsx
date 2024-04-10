'use client'

import { Post } from 'contentlayer/generated'
import { useParams } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import Badge from '@/components/common/Badge'
import PostTimeline from '@/components/common/PostTimeline'
import Title from '@/components/common/Title'
import { PartEnum } from '@/constants/menus'
import {
  allCategories,
  allParts,
  allSeries,
  allSortedPosts,
  MenuItem,
} from '@/constants/posts'
import { cn } from '@/utils/cn'

const CategoryPostListPage = () => {
  const { category } = useParams()
  const [currentTag, setCurrentTag] = useState<string>('')

  const tags: MenuItem[] = [...allParts, ...allCategories, ...allSeries]
  const posts: Post[] = useMemo(
    () =>
      currentTag === PartEnum.All
        ? allSortedPosts
        : allSortedPosts.filter((post) => post.category === currentTag),
    [currentTag]
  )
  const handleTagSelect = (tag: string) => {
    setCurrentTag(tag)
  }

  useEffect(() => {
    if (typeof category === 'string') {
      setCurrentTag(category)
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
      {!!currentTag && <PostTimeline posts={posts} />}
    </div>
  )
}

export default CategoryPostListPage
