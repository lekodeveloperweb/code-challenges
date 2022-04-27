import { configureStore } from "@reduxjs/toolkit"
import { createLogger } from "redux-logger"
import { applicationSlice, basketSlice, productSlice } from "../features"

const logger = createLogger({
  collapsed: true,
  timestamp: true,
})

export const store = configureStore({
  reducer: {
    application: applicationSlice.reducer,
    product: productSlice.reducer,
    basket: basketSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (import.meta.env.DEV) {
      return getDefaultMiddleware().concat(logger)
    }
    return getDefaultMiddleware()
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
