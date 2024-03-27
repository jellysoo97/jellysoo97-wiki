'use client'

import { Post } from 'contentlayer/generated'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import Badge from '@/components/common/Badge'
import PostTimeline from '@/components/common/PostTimeline'
import Title from '@/components/common/Title'
import { PartEnum } from '@/constants/menus'
import {
  allCategories,
  allParts,
  allSortedPosts,
  MenuItem,
} from '@/constants/posts'
import { cn } from '@/utils/cn'

const PartListPage = () => {
  const pathname = usePathname()
  const [currentTag, setCurrentTag] = useState<string>('')

  const tags: MenuItem[] = [...allParts, ...allCategories]
  const posts: Post[] = useMemo(
    () =>
      currentTag === PartEnum.All
        ? allSortedPosts
        : allSortedPosts.filter(
            (post) => post.part === currentTag || post.category === currentTag
          ),
    [currentTag]
  )
  const handleTagSelect = (tag: string) => {
    setCurrentTag(tag)
  }

  useEffect(() => {
    if (pathname.length) {
      setCurrentTag(pathname.split('/')[1])
    }
  }, [])

  return (
    <div className="flex flex-col">
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

export default PartListPage
