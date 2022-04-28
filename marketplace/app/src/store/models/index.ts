export enum ProductSize {
  Small = 1,
  Medium,
  Large,
  ExtraLarge,
  OneSize,
}

export interface BasketInfo {
  id: string
  productId: string
  quantity: number
  total: number
  product?: Product
}

export interface Product {
  id: string
  name: string
  description: string
  size: ProductSize
  price: number
  sku: string
  stockLevel: number
  imageUrl: string
}

export interface BasketViewModel {
  productId: string
  quantity: number
}

export interface Basket {
  id: string
  basketInfo: BasketInfo[]
}
