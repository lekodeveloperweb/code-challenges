import React, { FC, ReactElement } from "react"
import { NavLink } from "react-router-dom"

const Menu: FC<{
  className: string
  itemsClassName?: string
  mergeNewItems?: boolean
  showBadge?: boolean
  onClick?: () => void
  items?: {
    name?: string
    path: string
    icon?: ReactElement
    hasBadge?: boolean
  }[]
}> = ({
  className,
  itemsClassName = "hover:bg-gray-100 cursor-pointer py-2 px-3 rounded",
  onClick,
  items,
  showBadge,
  mergeNewItems = false,
}) => {
  const defaultItems = [
    { name: "Products", path: "/products" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ]
  if (mergeNewItems) {
    items = [...defaultItems, ...(items || [])]
  } else {
    items = defaultItems
  }
  return (
    <ul className={className} onClick={() => onClick && onClick()}>
      {items.map((x, i) => (
        <li
          key={i}
          className={
            x.icon ? `${itemsClassName} hover:bg-white` : itemsClassName
          }
        >
          <NavLink to={x.path} className="relative">
            {x.name}
            {x.icon && x.icon}
            {x.hasBadge && (
              <span
                className="absolute -right-6 -top-2 h-3 w-3 rounded-full"
                style={showBadge ? { backgroundColor: "red" } : undefined}
              ></span>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Menu
