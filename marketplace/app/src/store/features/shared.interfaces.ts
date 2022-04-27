import { SerializedError } from "@reduxjs/toolkit"
import { AxiosResponse } from "axios"

export type ProcessingStateType = "idle" | "fulfilled" | "pending" | "rejected"

export interface IReduxThunk {
  processingState: ProcessingStateType
  processingError?: SerializedError
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IReduxThunkProcessingState<T> extends IReduxThunk {}
export interface IResponseError extends Error {
  response: AxiosResponse<any>
  isAxiosError: boolean
}
