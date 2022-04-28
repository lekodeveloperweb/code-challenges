import React, { useEffect } from "react"
import { features, hooks } from "../store"

const Products = () => {
  const {
    applicationActions,
    fetchProducts,
    selectProducts,
    addItemBasket,
    selectBasket,
    fetchBasket,
  } = features
  const { useAppDispatch, useAppSelector } = hooks
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)
  const basket = useAppSelector(selectBasket)

  const addToCart = (productId: string) => {
    const product = products.find((x) => x.id === productId)
    const basketInfo = basket?.basketInfo?.find(
      (x) => x.productId === productId
    )
    if (basketInfo && product && product.stockLevel <= basketInfo.quantity) {
      return dispatch(
        applicationActions.showToast({
          type: "WARNING",
          message: "Without stock!",
        })
      )
    }
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
    dispatch(fetchBasket())
  }, [])

  return (
    <div className="xlg:max-w-[70%] flex flex-col px-4 sm:flex-row sm:flex-wrap md:justify-center">
      {!products ||
        (!products.length && (
          <div className="flex h-5 w-full flex-1 self-center py-6 pl-4">
            Loading...
          </div>
        ))}
      {products &&
        products.map((product) => (
          <figure
            key={product.id}
            className="my-2 flex w-full flex-col rounded shadow-md shadow-gray-400 sm:mx-3 sm:max-w-[300px]"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-[300px] w-full"
            />
            <caption className="flex max-w-max flex-col items-start justify-start p-2">
              <h1 className="font-semibold">{product.name}</h1>
              <p>{product.description}</p>
              <div className="font-semibold text-gray-400">
                £{product.price}
              </div>
              {product.stockLevel !== 0 ? (
                <button
                  disabled={product.stockLevel === 0}
                  onClick={() => addToCart(product.id)}
                  className="my-2 flex h-10 w-full items-center justify-center rounded bg-accent text-white"
                >
                  Add to Cart
                </button>
              ) : (
                <div className="my-2 flex h-10 w-full items-center justify-center rounded border border-gray-200 bg-white text-gray-400">
                  Without stock
                </div>
              )}
            </caption>
          </figure>
        ))}
    </div>
  )
}

export default Products
