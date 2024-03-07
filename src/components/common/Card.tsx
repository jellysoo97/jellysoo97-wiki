import Link from 'next/link'
import React from 'react'

import Title from './Title'

type Props = {
  title: string
  thumbnail: React.ReactNode | string
  url: string
  description?: string
}

const Card = ({ title, thumbnail, url, description }: Props) => {
  const isThumbnailImage = typeof thumbnail === 'string'

  return (
    <Link href={url}>
      <div className="h-full flex flex-col gap-y-2 bg-secondary p-4 rounded-lg overflow-hidden">
        {isThumbnailImage ? (
          <div className="min-h-40 rounded-lg overflow-hidden">
            <img src={thumbnail} className="object-cover" />
          </div>
        ) : (
          <div className="min-h-40 flex justify-center items-center bg-neutral-200 rounded-lg dark:bg-neutral-350">
            {thumbnail}
          </div>
        )}

        <div className="flex flex-col gap-y-2">
          <Title className="mb-0 text-md md:text-lg">{title}</Title>
          {description && <p className="text-sm">{description}</p>}
        </div>
      </div>
    </Link>
  )
}

export default Card
