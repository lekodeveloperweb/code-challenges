import React from "react"
import { Outlet } from "react-router-dom"
import { Footer, Navbar } from "../Components"

const DefaultContainer = () => {
  return (
    <>
      <Navbar />
      <div className="my-0 mx-auto max-w-[1440px] md:min-h-[70vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default DefaultContainer
