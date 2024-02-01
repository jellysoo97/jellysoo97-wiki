import React from 'react'

import { cn } from '@/utils/cn'

const FolderIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg
      className={cn('w-6 h-6', className)}
      aria-hidden="true"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g opacity="0.8">
        <path
          fill="currentColor"
          d="M18 6.5H13.207L10.353 3.646C10.259 3.552 10.132 3.5 9.99902 3.5H5.99902C3.70902 3.5 2.49902 4.71 2.49902 7V17C2.49902 19.29 3.70902 20.5 5.99902 20.5H17.999C20.289 20.5 21.499 19.29 21.499 17V10C21.5 7.71 20.29 6.5 18 6.5ZM20.5 17C20.5 18.729 19.729 19.5 18 19.5H6C4.271 19.5 3.5 18.729 3.5 17V7C3.5 5.271 4.271 4.5 6 4.5H9.79297L12.647 7.354C12.741 7.448 12.868 7.5 13.001 7.5H18.001C19.73 7.5 20.501 8.271 20.501 10V17H20.5Z"
        />
      </g>
    </svg>
  )
}

export default FolderIcon
