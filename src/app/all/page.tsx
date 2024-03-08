'use client'

import Link from 'next/link'
import React, { useMemo, useState } from 'react'

import Badge from '@/components/common/Badge'
import Card from '@/components/common/Card'
import Title from '@/components/common/Title'
import TagIcon, { TagEnum } from '@/components/icons/TagIcon'
import { ALL_POSTS_TAG, allSortedPosts, allTags } from '@/constants/posts'
import { cn } from '@/utils/cn'
import { generateTag } from '@/utils/generate-tag'

const AllPostsPage = () => {
  const [currentTag, setCurrentTag] = useState<string>(ALL_POSTS_TAG)

  const posts = useMemo(
    () =>
      currentTag === ALL_POSTS_TAG
        ? allSortedPosts
        : allSortedPosts.filter((post) => post.tags[0] === currentTag),
    [currentTag]
  )
  const selectTag = (tag: string) => {
    setCurrentTag(tag)
  }

  return (
    <div className="flex flex-col gap-y-8 mt-8">
      <Title>All Posts ({allSortedPosts.length})</Title>

      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <Badge
            key={tag}
            text={generateTag(tag === ALL_POSTS_TAG ? '전체글' : tag)}
            onClick={() => selectTag(tag)}
            className={cn(tag === currentTag && 'bg-secondary')}
          />
        ))}
      </div>

      <ul className="flex flex-col gap-y-2">
        {posts.map((post) => (
          <li key={post.url}>
            <Link href={post.url}>
              <Card.HorizontalCard
                title={post.title}
                thumbnail={
                  post.thumbnail || (
                    <TagIcon
                      tag={post.tags[0] as TagEnum}
                      className="w-12 h-12"
                    />
                  )
                }
                description={post.description}
                date={post.date}
                tags={post.tags}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AllPostsPage
