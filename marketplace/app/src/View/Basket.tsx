import React, { useEffect } from "react"
import { TrashIcon } from "../Components/icons"
import { features, hooks } from "../store"
import { ProductSize } from "../store/models"

const Basket = () => {
  const {
    applicationActions,
    selectBasket,
    fetchBasket,
    addItemBasket,
    deleteProductBasket,
    selectBasketsProcessingState,
  } = features
  const { useAppDispatch, useAppSelector } = hooks
  const dispatch = useAppDispatch()
  const state = useAppSelector(selectBasket)
  const processing = useAppSelector(selectBasketsProcessingState)

  const updateBasket = (productId: string, quantity: number) => {
    dispatch(addItemBasket({ productId, quantity })).then(({ payload }) => {
      if (payload) {
        dispatch(
          applicationActions.showToast({
            type: "SUCCESS",
            message: "Cart updated with success",
          })
        )
      }
    })
  }

  const removeItem = (productId: string) => {
    dispatch(deleteProductBasket(productId)).then(({ payload }) => {
      if (payload) {
        dispatch(
          applicationActions.showToast({
            type: "SUCCESS",
            message: "Product removed with success",
          })
        )
      }
    })
  }

  useEffect(() => {
    dispatch(fetchBasket())
  }, [])

  return (
    <div className="my-0 mx-auto flex h-full w-full flex-col p-6 md:max-w-[500px] lg:max-w-[645px]">
      <div className="flex h-1/4 w-full flex-col sm:mt-10">
        <h1 className="my-4 text-3xl font-light">Your Basket</h1>
        <p className="text-md font-extralight leading-6">
          Items you have added to your basket are shown below. Adjust the
          quantities or remove items before continuing purchase.
        </p>
      </div>
      {processing === "pending" && (
        <div className="mt-2 animate-pulse">Loading...</div>
      )}
      {processing !== "pending" && !state?.basketInfo?.length && (
        <div className="mt-2">Card empty</div>
      )}
      {state?.basketInfo?.map(({ product, total, quantity }) => {
        return (
          <div key={product?.id} className="mt-10 flex h-1/4 w-full flex-col">
            <h1>
              {product?.name} - Size {ProductSize[product?.size as ProductSize]}
            </h1>
            <hr className="my-3" />
            <div className="flex w-full items-center justify-between py-2">
              <span className="font-normal">Price</span>
              <span className="font-thin">£{product?.price}</span>
            </div>
            <div className="flex w-full items-center justify-between py-2">
              <span className="font-normal">Quantity</span>
              <div className="flex h-8 w-20 items-center justify-between rounded border border-accent font-thin">
                <button
                  className="flex w-1/3 items-center justify-center text-accent"
                  onClick={() => {
                    if (quantity === 1) {
                      return removeItem(product?.id as string)
                    }
                    updateBasket(product?.id as string, quantity - 1)
                  }}
                >
                  -
                </button>
                <span className="flex w-1/3 items-center justify-center">
                  {quantity}
                </span>
                <button
                  className="flex w-1/3 items-center justify-center text-accent"
                  onClick={() =>
                    updateBasket(product?.id as string, quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex w-full items-center justify-between py-2">
              <span className="font-normal">Cost</span>
              <span className="font-thin">£{total}</span>
            </div>
            <div className="flex w-full items-center justify-between py-2">
              <span className="font-normal">Remove</span>
              <button onClick={() => removeItem(product?.id as string)}>
                <TrashIcon />
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Basket
