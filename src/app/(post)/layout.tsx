import React from 'react'

import Divider from '@/components/common/Divider'
import IconButton from '@/components/common/IconButton'
import MenuIcon from '@/components/icons/MenuIcon'
import Footer from '@/components/layout/Footer'
import Sidebar from '@/components/layout/sidebar/Sidebar'

type Props = {
  children: React.ReactNode
}

export default function PostPageLayout({ children }: Props) {
  return (
    <>
      <div className="block lg:hidden">
        <div className="layout-container flex items-center p-2">
          <IconButton>
            <MenuIcon />
          </IconButton>
          {/* breadcrumb */}
        </div>
        <Divider />
        {/* dialog */}
      </div>

      <Sidebar />

      <div className="lg:ml-80">
        {children}
        <Divider />
        <Footer />
      </div>
    </>
  )
}
