import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'
import { Fragment } from 'react'

import { allSortedPosts } from '@/constants/posts'
import { cn } from '@/utils/cn'

import Tooltip from './common/Tooltip'

const PostGrape = () => {
  const postCount = allPosts.length
  const postItems = [
    [0, 1, 2],
    [3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23],
    [24, 25, 26],
    [27, 28],
    [29],
  ]

  return (
    <div className="flex flex-col items-center justify-center px-8 py-4 border-secondary md:px-12">
      <div className="flex">
        {/* 잎 */}
        <div
          className={cn('w-8 h-8 bg-green-600 -ml-10')}
          style={{ borderRadius: '0 90px' }}
        />
        <div
          className={cn('w-8 h-8 bg-green-500 -ml-10 mt-2 rotate-[330deg]')}
          style={{ borderRadius: '0 90px' }}
        />

        {/* 줄기 */}
        <div className="w-2 h-6 rounded-lg bg-yellow-900 mt-[14px] ml-3" />
      </div>

      <div className="flex flex-col">
        {postItems.map((posts, rowIndex) => (
          <div
            key={rowIndex}
            className={cn(
              'flex items-center gap-x-[2px]',
              'ml-6',
              rowIndex === 1 && 'ml-1',
              rowIndex === 8 && 'ml-8',
              rowIndex > 1 && rowIndex < 8 && rowIndex % 2 === 0 && 'ml-4',
              rowIndex > 1 && rowIndex < 8 && rowIndex % 2 !== 0 && 'ml-6'
            )}
          >
            {posts.map((postIndex, colIndex) => {
              const isFilled = postIndex < postCount

              return (
                <Fragment key={`${rowIndex}-${colIndex}`}>
                  {isFilled && (
                    <Tooltip content={<p>{allSortedPosts[postIndex].title}</p>}>
                      <div
                        className={cn(
                          'w-4 h-4 rounded-full border border-purple-500 dark:border-purple-400',
                          'bg-purple-400 dark:bg-purple-500 hover:scale-110'
                        )}
                      >
                        <Link
                          href={allSortedPosts[postIndex].url}
                          className="w-full h-full block"
                        />
                      </div>
                    </Tooltip>
                  )}

                  {!isFilled && (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      className={cn('w-4 h-4 rounded-full border-primary')}
                    />
                  )}
                </Fragment>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostGrape
