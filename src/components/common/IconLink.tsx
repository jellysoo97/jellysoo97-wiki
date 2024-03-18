import Link from 'next/link'
import React from 'react'

type Props = {
  icon: React.ReactNode
  text: string
  url: string
}

const IconLink = ({ icon, text, url }: Props) => {
  return (
    <div className="flex items-center gap-x-1">
      {icon}
      <Link
        href={url}
        className="font-serif-bold border-b border-neutral-400 dark:border-b dark:border-neutral-700"
      >
        {text}
      </Link>
    </div>
  )
}

export default IconLink
