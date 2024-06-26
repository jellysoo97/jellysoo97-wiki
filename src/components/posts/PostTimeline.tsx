import { Post } from 'contentlayer/generated'
import Link from 'next/link'

import { cn } from '@/utils/cn'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'

type Props = {
  post: Post
  year: number | string
  isLastPostOfYear: boolean
}

const PostTimeline = ({ post, year, isLastPostOfYear }: Props) => {
  return (
    <li key={post.url} className="relative pl-16 my-0">
      {/* TODO:  */}
      {/* https://tailwindcss.com/docs/content#referencing-an-attribute-value */}
      {/* issue: before:content-[${year}] not working */}
      {/* dynamically build classNames가 안되는 이유: https://stackoverflow.com/questions/69687530/dynamically-build-classnames-in-tailwindcss */}
      {isLastPostOfYear && (
        <div
          className={cn(
            'text-size-small px-2 py-1 rounded-sm',
            'absolute -top-1 -left-0 bg-yellow-400 bg-opacity-60 dark:bg-yellow-500 dark:bg-opacity-40',
            "before:content-[''] before:w-0 before:h-0",
            'before:border-t-8 before:border-t-transparent before:border-b-8 before:border-b-transparent',
            'before:border-l-8 before:border-l-yellow-400 dark:before:border-l-yellow-500',
            'before:border-opacity-60 dark:before:border-opacity-40',
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
          'border-l border-l-neutral-400 dark:border-l-neutral-600',
          "before:content-[''] before:w-3 before:h-3 before:rounded-full before:bg-secondary before:border before:border-neutral-400 dark:before:border-neutral-600",
          'before:absolute before:top-[6px] before:-left-[6px]'
        )}
      >
        <Link href={post.url} className="flex items-baseline gap-x-2">
          <p className="text-size-small text-secondary">
            {formatDate(post.date, DateFormatTypeEnum.MonthAndDayWithDot)}
          </p>
          <p className="text-size-base">{post.title}</p>
        </Link>
      </div>
    </li>
  )
}

export default PostTimeline
