import React from 'react'

const GridViewIcon = ({ className, ...props }: React.ComponentProps<'svg'>) => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.1 4H5c-.5 0-.9.4-.9.9V9c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9V5c0-.5-.4-.9-.9-.9Zm10 0H15c-.5 0-.9.4-.9.9V9c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9V5c0-.5-.4-.9-.9-.9Zm-10 10H5c-.5 0-.9.4-.9.9V19c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9v-4c0-.5-.4-.9-.9-.9Zm10 0H15c-.5 0-.9.4-.9.9V19c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9v-4c0-.5-.4-.9-.9-.9Z"
      />
    </svg>
  )
}

export default GridViewIcon
