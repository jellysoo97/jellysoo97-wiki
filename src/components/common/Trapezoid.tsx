import React from 'react'

import { cn } from '@/utils/cn'

/**
 * @param {string} props.className - styling trapezoid or set position
 * @param {CSSProperties} props.style - set trapezoid shape
 */
const Trapezoid = ({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn('absolute', 'bg-yellow', className)}
      style={
        props.style || {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        }
      }
      {...props}
    />
  )
}

export default Trapezoid
