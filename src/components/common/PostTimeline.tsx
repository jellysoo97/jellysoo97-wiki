import { Post } from 'contentlayer/generated'
import Link from 'next/link'

import { cn } from '@/utils/cn'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'

type Props = {
  posts: Post[]
}

const PostTimeline = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post, index) => {
        const year = formatDate(post.date, DateFormatTypeEnum.YearOnly)
        const isLastPostOfYear =
          index === 0 ||
          year !==
            formatDate(posts[index - 1].date, DateFormatTypeEnum.YearOnly)

        return (
          <li key={post.url} className="relative pl-16">
            {/* TODO:  */}
            {/* https://tailwindcss.com/docs/content#referencing-an-attribute-value */}
            {/* issue: before:content-[${year}] not working */}
            {/* dynamically build classNames가 안되는 이유: https://stackoverflow.com/questions/69687530/dynamically-build-classnames-in-tailwindcss */}
            {isLastPostOfYear && (
              <div
                className={cn(
                  'text-size-small px-2 py-1 rounded-sm',
                  'absolute -top-1 -left-0 bg-yellow-500 bg-opacity-60 dark:bg-opacity-40',
                  "before:content-[''] before:w-0 before:h-0 before:border-t-8 before:border-t-transparent before:border-b-8 before:border-b-transparent before:border-l-8 before:border-l-yellow-500 before:border-opacity-60 dark:before:border-opacity-40",
                  'before:absolute before:top-1 before:-right-2 md:before:top-[6px]'
                )}
              >
                {year}
              </div>
            )}

            {/* TODO: */}
            {/* issue: <a> 안의 <div>가 hydration error 유발 */}
            {/* https://nextjs.org/docs/messages/react-hydration-error */}
            <div
              className={cn(
                'relative pl-3 pb-3',
                'flex flex-col gap-y-1',
                'border-l border-l-neutral-400 dark:border-l-neutral-600',
                "before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-secondary before:border before:border-neutral-400 dark:before:border-neutral-600",
                'before:absolute before:top-[1px] before:-left-[6px] md:before:top-1'
              )}
            >
              <Link href={post.url}>
                <p className="text-size-small">
                  {formatDate(post.date, DateFormatTypeEnum.MonthAndDayWithDot)}
                </p>
                {post.thumbnail && <img src={post.thumbnail} />}
                <p className="font-serif-bold text-size-large">{post.title}</p>
                <p className="text-size-small text-secondary">
                  {post.description}
                </p>
              </Link>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default PostTimeline
