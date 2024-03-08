import React from 'react'

import { DateFormatTypeEnum, formatDate } from '@/utils/format-date'
import { generateTag } from '@/utils/generate-tag'

import Badge from './Badge'
import Title from './Title'

type Props = {
  title: string
  thumbnail: string | React.ReactNode
  description?: string
  date?: string
  tags?: string[]
}

const HorizontalCard = ({
  title,
  thumbnail,
  description,
  date,
  tags,
}: Props) => {
  const isThumbnailImage = typeof thumbnail === 'string'

  return (
    <div className="flex gap-x-4 p-4 bg-secondary rounded-lg">
      <div className="w-20 h-24 flex justify-center items-center bg-neutral-200 rounded-lg overflow-hidden dark:bg-neutral-350 max-md:hidden">
        {isThumbnailImage ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <>{thumbnail}</>
        )}
      </div>

      <div className="flex flex-col gap-y-2 md:justify-between">
        <div>
          <Title>{title}</Title>
          <p className="text-secondary text-sm">{description}</p>
        </div>

        <div className="flex items-center gap-x-4 flex-wrap">
          <p className="text-sm">
            {date && formatDate(date, DateFormatTypeEnum.DateOnlyWithDot)}
          </p>
          {tags && (
            <div className="flex items-center gap-x-2">
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  text={generateTag(tag)}
                  className="text-sm p-0 border-none"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const VerticalCard = ({ title, thumbnail, description }: Props) => {
  const isThumbnailImage = typeof thumbnail === 'string'

  return (
    <div className="h-full flex flex-col gap-y-2 bg-secondary p-4 rounded-lg">
      <div className="min-h-40 flex justify-center items-center bg-neutral-200 rounded-lg overflow-hidden dark:bg-neutral-350 ">
        {isThumbnailImage ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <>{thumbnail}</>
        )}
      </div>

      <div className="flex flex-col gap-y-2">
        <Title className="text-sm md:text-base">{title}</Title>
        {description && <p className="text-sm text-secondary">{description}</p>}
      </div>
    </div>
  )
}

const Card = { HorizontalCard, VerticalCard }

export default Card
