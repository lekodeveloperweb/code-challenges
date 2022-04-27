import {
  createAsyncThunk,
  createDraftSafeSelector,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import { features, RootState } from "../.."
import { ProductService } from "../../api"
import { Product, ProductSize } from "../../models"
import {
  IReduxThunkProcessingState,
  IResponseError,
} from "../shared.interfaces"

const { applicationActions } = features
const { showToast } = applicationActions

export interface ProductState extends IReduxThunkProcessingState<Product> {
  entities: Product[]
  entity: Product
}

const initialStateEntity: Product = {
  id: "",
  name: "",
  size: ProductSize.OneSize,
  sku: "",
  stockLevel: 0,
  price: 0,
  description: "",
  imageUrl: "",
}

const initialState: ProductState = {
  entities: [],
  entity: initialStateEntity,
  processingState: "idle",
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const service = new ProductService()

      return await service.getAll()
    } catch (e) {
      const error = e as IResponseError
      dispatch(
        showToast({ message: "Error on get all products", type: "ERROR" })
      )
      return rejectWithValue(error.response)
    }
  }
)

export const saveProducts = createAsyncThunk(
  "products/saveProducts",
  async (products: Product, { rejectWithValue, dispatch }) => {
    try {
      const service = new ProductService()
      return await service.post(products)
    } catch (e) {
      const error = e as IResponseError
      dispatch(showToast({ message: "Error on save products", type: "ERROR" }))
      return rejectWithValue(error.response)
    }
  }
)

export const updateProducts = createAsyncThunk(
  "products/updateProducts",
  async (product: Product, { rejectWithValue, dispatch }) => {
    try {
      const service = new ProductService()
      return await service.put(product.id, product)
    } catch (e) {
      const error = e as IResponseError
      dispatch(
        showToast({ message: "Error on update products", type: "ERROR" })
      )
      return rejectWithValue(error.response)
    }
  }
)

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const service = new ProductService()
      return await service.delete(id)
    } catch (e) {
      const error = e as IResponseError
      dispatch(
        showToast({ message: "Error on delete products", type: "ERROR" })
      )
      return rejectWithValue(error.response)
    }
  }
)

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetEntity(state) {
      state.entity = initialStateEntity
    },
    setEntity(state, action: PayloadAction<string>) {
      state.entity = state.entities.find(
        (x) => x.id === action.payload
      ) as Product
    },
    updateEntity(state, action: PayloadAction<Partial<Product>>) {
      Object.keys(action.payload).forEach((key) => {
        ;(state.entity as any)[key] = (action.payload as any)[key]
      })
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveProducts.pending, (state) => {
        state.processingState = "pending"
      })
      .addCase(saveProducts.fulfilled, (state, action) => {
        state.processingState = "fulfilled"
        state.entity = action.payload
        state.entities = [...state.entities, action.payload]
      })
      .addCase(saveProducts.rejected, (state, action) => {
        state.processingState = "rejected"
        state.processingError = action.error
      })
      .addCase(updateProducts.pending, (state) => {
        state.processingState = "pending"
      })
      .addCase(updateProducts.rejected, (state, action) => {
        state.processingState = "rejected"
        state.processingError = action.error
      })
      .addCase(updateProducts.fulfilled, (state, action) => {
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
      .addCase(deleteProducts.pending, (state) => {
        state.processingState = "pending"
      })
      .addCase(deleteProducts.rejected, (state, action) => {
        state.processingState = "rejected"
        state.processingError = action.error
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.processingState = "fulfilled"
        state.entity = initialStateEntity
        state.entities = state.entities.filter(
          (x) => x.id !== action.meta.arg.toString()
        )
      })
      .addCase(fetchProducts.pending, (state) => {
        state.processingState = "pending"
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.processingState = "fulfilled"
        state.entities = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.processingState = "rejected"
        state.processingError = action.error
      })
  },
})

export const productsActions = productSlice.actions

export const selectProductsState = (state: RootState) => state.product
export const selectProducts = createDraftSafeSelector(
  selectProductsState,
  (products) => products.entities
)
export const selectProduct = createDraftSafeSelector(
  selectProductsState,
  (products) => products.entity
)
export const selectProductsProcessingState = createDraftSafeSelector(
  selectProductsState,
  (state) => state.processingState
)
