import React, { FC } from "react"

const MenuIcon: FC<{ className: string }> = ({ className }) => {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.54"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H16V2H0V0ZM0 6H16V8H0V6ZM16 12H0V14H16V12Z"
        className="fill-current"
      />
    </svg>
  )
}

export default MenuIcon
