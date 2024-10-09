import Link from 'next/link'
import { IMetadata } from 'src/types'

import { cn } from '@/utils/cn'
import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'
import { tagLabel } from '@/constants/index'

type Props = {
  metadata: IMetadata
  year: number | string
  isLastPostOfYear: boolean
}

const PostTimeline = ({ metadata, year, isLastPostOfYear }: Props) => {
  return (
    <li key={metadata.url} className="relative my-0 pl-16">
      {/* TODO:  */}
      {/* https://tailwindcss.com/docs/content#referencing-an-attribute-value */}
      {/* issue: before:content-[${year}] not working */}
      {/* dynamically build classNames가 안되는 이유: https://stackoverflow.com/questions/69687530/dynamically-build-classnames-in-tailwindcss */}
      {isLastPostOfYear && (
        <div
          className={cn(
            'rounded-sm px-2 py-1 text-size-small',
            'absolute -left-0 -top-1 bg-yellow-400 bg-opacity-60 dark:bg-yellow-500 dark:bg-opacity-40',
            "before:h-0 before:w-0 before:content-['']",
            'before:border-b-8 before:border-t-8 before:border-b-transparent before:border-t-transparent',
            'before:border-l-8 before:border-l-yellow-400 dark:before:border-l-yellow-500',
            'before:border-opacity-60 dark:before:border-opacity-40',
            'before:absolute before:-right-2 before:top-1 md:before:top-[6px]'
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
          'relative pb-3 pl-3',
          'border-l border-l-neutral-400 dark:border-l-neutral-600',
          "before:h-3 before:w-3 before:rounded-full before:border before:border-neutral-400 before:content-[''] before:bg-secondary dark:before:border-neutral-600",
          'before:absolute before:-left-[6px] before:top-[6px]'
        )}
      >
        <Link href={metadata.url} className="flex items-baseline gap-x-2">
          <p className="text-secondary text-size-small">
            {formatDate(metadata.date, DateFormatTypeEnum.MonthAndDayWithDot)}
          </p>
          <p className="text-size-base">
            [{tagLabel[metadata.tag]}] {metadata.title}
          </p>
        </Link>
      </div>
    </li>
  )
}

export default PostTimeline
