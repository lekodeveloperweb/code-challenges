import React, { useState } from "react"
import { TrashIcon } from "../Components"

const Basket = () => {
  const [state, setState] = useState<{ quantity: number }>({ quantity: 1 })
  return (
    <div className="my-0 mx-auto flex h-full w-full flex-col p-6 md:max-w-[500px] lg:max-w-[645px]">
      <div className="flex h-1/4 w-full flex-col sm:mt-10">
        <h1 className="my-4 text-3xl font-light">Your Basket</h1>
        <p className="text-md font-extralight leading-6">
          Items you have added to your basket are shown below. Adjust the
          quantities or remove items before continuing purchase.
        </p>
      </div>
      <div className="mt-10 flex h-1/4 w-full flex-col">
        <h1>Cotton T-shirt medium</h1>
        <hr className="my-3" />
        <div className="flex w-full items-center justify-between py-2">
          <span className="font-normal">Price</span>
          <span className="font-thin">£10.99</span>
        </div>
        <div className="flex w-full items-center justify-between py-2">
          <span className="font-normal">Quantity</span>
          <div className="flex h-8 w-20 items-center justify-between rounded border border-accent font-thin">
            <button
              className="flex w-1/3 items-center justify-center text-accent"
              onClick={() => {
                if (state.quantity == 0) {
                  return
                }
                setState({ ...state, quantity: state.quantity - 1 })
              }}
            >
              -
            </button>
            <span className="flex w-1/3 items-center justify-center">
              {state.quantity}
            </span>
            <button
              className="flex w-1/3 items-center justify-center text-accent"
              onClick={() =>
                setState({ ...state, quantity: state.quantity + 1 })
              }
            >
              +
            </button>
          </div>
        </div>
        <div className="flex w-full items-center justify-between py-2">
          <span className="font-normal">Cost</span>
          <span className="font-thin">£10.99</span>
        </div>
        <div className="flex w-full items-center justify-between py-2">
          <span className="font-normal">Remove</span>
          <button className="">
            <TrashIcon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Basket
