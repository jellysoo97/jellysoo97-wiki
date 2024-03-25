'use client'

import React from 'react'

import { cn } from '@/utils/cn'

type Props = {
  children: React.ReactNode
  content: React.ReactNode
  position?: 'top' | 'right' | 'bottom' | 'left'
}

const Tooltip = ({ children, position = 'top', content }: Props) => {
  return (
    <div className={'group relative flex'}>
      {children}

      {/* TODO: add border triangles */}
      {/* https://codesandbox.io/p/sandbox/how-to-make-an-extremely-reusable-tooltip-component-with-react-and-nothing-else-7opo3?file=%2Fsrc%2FTooltip.css%3A9%2C15 */}
      <div
        className={cn(
          'hidden',
          // TODO: 1. replace static position to dynamic position
          // TODO: 2. add position
          // {/* https://gist.github.com/ndpniraj/633474d23145499c5a3c39b017f43be4 */}
          'absolute -top-7',
          'p-1 bg-secondary rounded-md text-size-small z-30 whitespace-nowrap',
          'group-hover:block'
        )}
      >
        {content}
      </div>
    </div>
  )
}

export default Tooltip
