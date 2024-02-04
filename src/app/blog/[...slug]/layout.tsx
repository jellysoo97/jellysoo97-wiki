import React from 'react'

import Sidebar from '@/components/layout/sidebar/Sidebar'

type Props = {
  children: React.ReactNode
}

export default function BlogPageLayout({ children }: Props) {
  return (
    <div className="w-full">
      <Sidebar />

      <div className="flex flex-col pl-90">{children}</div>
    </div>
  )
}
