import React, { useEffect } from "react"
import { features, hooks } from "../store"

const Products = () => {
  const { applicationActions, fetchProducts, selectProducts, addItemBasket } =
    features
  const { useAppDispatch, useAppSelector } = hooks
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)

  const addToCart = (productId: string) => {
    dispatch(addItemBasket({ quantity: 1, productId })).then(({ payload }) => {
      if (payload) {
        dispatch(
          applicationActions.showToast({
            type: "SUCCESS",
            message: "Item added with success!",
          })
        )
      }
    })
  }

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <div className="m-w-[70%] flex flex-col px-4 sm:flex-row sm:flex-wrap md:justify-center">
      {products?.map((product) => (
        <figure className="my-2 flex max-w-[300px] flex-col rounded shadow-md shadow-gray-400 sm:mx-3">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-[300px] w-full"
          />
          <caption className="flex max-w-max flex-col items-start justify-start p-2">
            <h1 className="font-semibold">{product.name}</h1>
            <p>{product.description}</p>
            <div className="font-semibold text-gray-400">£{product.price}</div>
            <button
              onClick={() => addToCart(product.id)}
              className="my-2 flex h-10 w-full items-center justify-center rounded bg-green-500 text-white"
            >
              Add to Cart
            </button>
          </caption>
        </figure>
      ))}
    </div>
  )
}

export default Products
