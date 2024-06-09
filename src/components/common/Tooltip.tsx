import React from 'react'

import { cn } from '@/utils/cn'

type Position = 'top' | 'right' | 'bottom' | 'left'

type Props = {
  children: React.ReactNode
  content: React.ReactNode
  position?: Position
}

const Tooltip = ({ children, position = 'top', content }: Props) => {
  const tooltipPosition: Record<Position, React.CSSProperties> = {
    top: { bottom: '120%', left: '50%', transform: 'translateX(-50%)' },
    right: { top: '0px', right: '0px' },
    bottom: { bottom: '0px', left: '0px' },
    left: { top: '0px', left: '0px' },
  }

  return (
    <div className={'inline-block h-full group relative'}>
      {children}

      {/* TODO: add border triangles */}
      {/* https://codesandbox.io/p/sandbox/how-to-make-an-extremely-reusable-tooltip-component-with-react-and-nothing-else-7opo3?file=%2Fsrc%2FTooltip.css%3A9%2C15 */}
      <div
        className={cn(
          'hidden',
          // TODO: 1. replace static position to dynamic position
          // TODO: 2. add position
          // {/* https://gist.github.com/ndpniraj/633474d23145499c5a3c39b017f43be4 */}
          `absolute`,
          'px-[6px] py-1 text-neutral-700 bg-yellow rounded-md text-size-small z-30 whitespace-nowrap',
          'group-hover:block'
        )}
        style={tooltipPosition[position]}
      >
        {content}
      </div>
    </div>
  )
}

export default Tooltip
