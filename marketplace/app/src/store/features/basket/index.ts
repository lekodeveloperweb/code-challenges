import {
  createAsyncThunk,
  createDraftSafeSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import { features, RootState } from "../.."
import { BasketService } from "../../api"
import { Basket, BasketViewModel } from "../../models"
import {
  IReduxThunkProcessingState,
  IResponseError,
} from "../shared.interfaces"

const { applicationActions } = features
const { showToast } = applicationActions

export interface BasketState extends IReduxThunkProcessingState<Basket> {
  entities: Basket[]
  entity: Basket
}

const initialStateEntity: Basket = {
  id: "",
  basketInfo: [],
}

const initialState: BasketState = {
  entities: [],
  entity: initialStateEntity,
  processingState: "idle",
}

export const fetchBasket = createAsyncThunk(
  "basket/fetchBasket",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const service = new BasketService()
      return await service.getCurrentState()
    } catch (e) {
      const error = e as IResponseError
      dispatch(showToast({ message: "Error on get all basket", type: "ERROR" }))
      return rejectWithValue(error.response)
    }
  }
)

export const addItemBasket = createAsyncThunk(
  "basket/addItemBasket",
  async (product: BasketViewModel, { rejectWithValue, dispatch }) => {
    try {
      const service = new BasketService()
      return await service.updateStatus(product)
    } catch (e) {
      const error = e as IResponseError
      dispatch(showToast({ message: "Error on update basket", type: "ERROR" }))
      return rejectWithValue(error.response)
    }
  }
)

export const deleteProductBasket = createAsyncThunk(
  "basket/deleteProductBasket",
  async (productId: string, { rejectWithValue, dispatch }) => {
    try {
      const service = new BasketService()
      return await service.removeProduct(productId)
    } catch (e) {
      const error = e as IResponseError
      dispatch(showToast({ message: "Error on delete basket", type: "ERROR" }))
      return rejectWithValue(error.response)
    }
  }
)

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    resetEntity(state) {
      state.entity = initialStateEntity
    },
    setEntity(state, action: PayloadAction<string>) {
      state.entity = state.entities.find(
        (x) => x.id === action.payload
      ) as Basket
    },
    updateEntity(state, action: PayloadAction<Partial<Basket>>) {
      Object.keys(action.payload).forEach((key) => {
        ;(state.entity as any)[key] = (action.payload as any)[key]
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItemBasket.pending, (state) => {
        state.processingState = "pending"
      })
      .addCase(addItemBasket.rejected, (state, action) => {
        state.processingState = "rejected"
        state.processingError = action.error
      })
      .addCase(addItemBasket.fulfilled, (state, action) => {
        state.processingState = "fulfilled"
        state.entity = action.payload
        const selected = state.entities.find((x) => x.id === action.payload.id)
        if (selected) {
          const index = state.entities.indexOf(selected)
          state.entities = [
            ...state.entities.slice(0, index),
            action.payload,
            ...state.entities.slice(index + 1),
          ]
        }
      })
      .addCase(deleteProductBasket.pending, (state) => {
        state.processingState = "pending"
      })
      .addCase(deleteProductBasket.rejected, (state, action) => {
        state.processingState = "rejected"
        state.processingError = action.error
      })
      .addCase(deleteProductBasket.fulfilled, (state, action) => {
        state.processingState = "fulfilled"
        state.entity.basketInfo = state.entity.basketInfo.filter(
          (x) => x.productId !== action.meta.arg.toString()
        )
      })
      .addCase(fetchBasket.pending, (state) => {
        state.processingState = "pending"
      })
      .addCase(fetchBasket.fulfilled, (state, action) => {
        state.processingState = "fulfilled"
        state.entity = action.payload
      })
      .addCase(fetchBasket.rejected, (state, action) => {
        state.processingState = "rejected"
        state.processingError = action.error
      })
  },
})

export const basketActions = basketSlice.actions

export const selectBasketsState = (state: RootState) => state.basket
export const selectBaskets = createDraftSafeSelector(
  selectBasketsState,
  (basket) => basket.entities
)
export const selectBasket = createDraftSafeSelector(
  selectBasketsState,
  (basket) => basket.entity
)
export const selectBasketsProcessingState = createDraftSafeSelector(
  selectBasketsState,
  (state) => state.processingState
)
