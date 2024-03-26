'use client'

import { Post } from 'contentlayer/generated'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useMemo, useState } from 'react'

import Badge from '@/components/common/Badge'
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
    <div className="flex flex-col gap-y-4">
      <Title>Posts</Title>
      <div className="flex flex-wrap gap-2">
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
        <ul className="flex flex-col gap-y-2">
          {posts.map((post) => (
            <li key={post.url}>
              <Link href={post.url}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PartListPage
