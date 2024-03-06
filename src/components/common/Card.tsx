import Link from 'next/link'
import React from 'react'

import Title from './Title'

type Props = {
  title: string
  thumbnail: React.ReactNode
  url: string
  description?: string
}

const Card = ({ title, thumbnail, url, description }: Props) => {
  return (
    <Link href={url}>
      <div className="flex flex-col gap-y-2 bg-secondary p-4 rounded-lg overflow-hidden">
        <div className="flex justify-center items-center h-32 bg-neutral-200 rounded-lg dark:bg-neutral-350">
          {thumbnail}
        </div>

        <div className="flex flex-col gap-y-2">
          <Title className="mb-0 text-md">{title}</Title>
          {description && <p className="text-sm">{description}</p>}
        </div>
      </div>
    </Link>
  )
}

export default Card
