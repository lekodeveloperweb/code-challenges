import axios, { AxiosInstance } from "axios"
import { mockRequests } from "./mock-adapter"

if (process.env.MOCK_API === "yes") {
  mockRequests(axios)
}

export abstract class BaseService {
  protected client: AxiosInstance
  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
