import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import DefaultContainer from "./Containers/Deafult"
import Basket from "./View/Basket"
import Contact from "./View/Contact"
import Home from "./View/Home"
import News from "./View/News"
import Products from "./View/Products"

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultContainer />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/news" element={<News />} />
            <Route path="/cart" element={<Basket />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
