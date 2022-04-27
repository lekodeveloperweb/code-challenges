import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { toast, ToastContainerProps } from "react-toastify"
import { RootState } from "../../app"

export interface ToastState extends ToastContainerProps {
  message: string
  type: keyof typeof toast.TYPE
}

export interface ApplicationState {
  toast: ToastState
}

const initialState: ApplicationState = {
  toast: {
    type: "DEFAULT",
    message: "",
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: false,
    pauseOnHover: true,
    icon: true,
    theme: "colored",
  },
}

export const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    showToast(state, action: PayloadAction<Partial<ToastState>>) {
      Object.keys(action.payload).forEach((key) => {
        ;(state.toast as any)[key] = (action.payload as any)[key]
      })
      ;(toast as any)[(action.payload.type as string)?.toLocaleLowerCase()](
        action.payload.message
      )
    },
  },
})

export const applicationActions = applicationSlice.actions

export const selectApplicationState = (state: RootState) => state.application
