import React from 'react'

type Props = {
  children: React.ReactNode
}

const PostPageLayout = ({ children }: Props) => {
  return (
    <div className="layout-container overflow-y-auto lg:ml-80">{children}</div>
  )
}

export default PostPageLayout
