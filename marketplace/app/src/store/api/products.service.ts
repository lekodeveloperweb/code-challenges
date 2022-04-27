import { Product } from "../models"
import { ServiceBase } from "./service.base"

export class ProductService extends ServiceBase<Product> {
  constructor() {
    super("/products")
  }
}
