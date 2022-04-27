import React from "react"

const Products = () => {
  return (
    <div className="flex flex-col">
      <figure className="flex flex-col">
        <img
          src="https://image.made-in-china.com/202f0j00kUpfNyozaDqa/Women-prime-S-Cotton-Fabric-Plain-T-Shirts-with-Short-Sleeve.jpg"
          alt="Cotten T-Shirt"
          className="h-auto w-full"
        />
        <caption className="flex flex-col items-start">
          <span>Cotten T-Shirt</span>
          <span className="flex-wrap truncate">
            Women' S Cotton Fabric Plain T-Shirts with Short Sleeve
          </span>
          <span>£ 10.99</span>
        </caption>
      </figure>
    </div>
  )
}

export default Products
