import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { BasketIcon, MenuIcon } from "./icons"
import Menu from "./Menu"

const Navbar = () => {
  const [state, setState] = useState<{
    openMenu: boolean
    showMobileMenu?: boolean
    menuItems: any[]
  }>({
    openMenu: false,
    menuItems: [{ icon: <BasketIcon />, path: "/cart" }],
  })

  return (
    <div className="relative flex h-14 items-center justify-between py-5 px-6 text-black shadow-lg sm:h-20">
      <NavLink to="/" className="w-10">
        <h1 className="text-2xl  font-semibold">APPS</h1>
      </NavLink>
      <button
        className="flex items-center space-x-2 uppercase sm:hidden"
        onClick={() => setState({ ...state, openMenu: !state.openMenu })}
      >
        <span className="text-xs">Menu</span>
        <MenuIcon className="h-4 w-4 text-light" />
      </button>
      <Menu
        items={state.menuItems}
        mergeNewItems
        className="hidden space-x-7 text-sm sm:flex"
      />
      {state.openMenu && (
        <>
          <div
            className="z-1 fixed inset-0 bg-black opacity-80"
            onClick={() => setState({ ...state, openMenu: !state.openMenu })}
          ></div>
          <Menu
            items={state.menuItems}
            mergeNewItems
            onClick={() => setState({ ...state, openMenu: !state.openMenu })}
            className="absolute right-2 top-2 z-10 flex-col space-y-6 rounded bg-white px-6 py-6 text-xs"
          />
        </>
      )}
    </div>
  )
}

export default Navbar
