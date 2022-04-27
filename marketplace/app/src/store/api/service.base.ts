import axios, { AxiosInstance } from "axios"

axios.defaults.baseURL = import.meta.env.VITE_API_URL_BASE as string

export type MethodsAllowed =
  | "get"
  | "post"
  | "put"
  | "delete"
  | "options"
  | "patch"

export const getServiceInstance = (
  baseURL?: string
): Pick<AxiosInstance, MethodsAllowed> => {
  if (baseURL) {
    axios.defaults.baseURL = baseURL
  }
  return {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    options: axios.options,
    patch: axios.patch,
  }
}

export abstract class ServiceBase<T> {
  protected service: Pick<AxiosInstance, MethodsAllowed>
  constructor(
    path: string,
    baseURL = `${import.meta.env.VITE_API_URL_BASE as string}/api/marketplace`
  ) {
    this.service = getServiceInstance(`${baseURL}${path}`)
  }

  public getAll(): Promise<T[]> {
    return this.service.get("/").then((res) => res.data)
  }

  public async get(id: number): Promise<T> {
    return this.service.get(`/${id}`).then((res) => res.data)
  }

  public post(data: T): Promise<T> {
    return this.service.post("/", data).then((res) => res.data)
  }

  public put(id: number | string, data: Partial<T>): Promise<T> {
    return this.service.put(`/${id}`, data).then((res) => res.data)
  }

  public delete(id: number | string): Promise<boolean> {
    return this.service.delete(`/${id}`).then((res) => res.data)
  }
}
