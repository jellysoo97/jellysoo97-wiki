import React from 'react'

const ListViewIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        d="M9 8h10M9 12h10M9 16h10M5 8h0m0 4h0m0 4h0"
      />
    </svg>
  )
}

export default ListViewIcon
