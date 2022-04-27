import { Basket, BasketViewModel } from "../models"
import { ServiceBase } from "./service.base"

export class BasketService extends ServiceBase<Basket> {
  constructor() {
    super("/basket")
  }

  public getCurrentState(): Promise<Basket> {
    return this.service.get("/").then((x) => x.data)
  }

  public updateStatus(product: BasketViewModel): Promise<Basket> {
    return this.service.put("/", product).then((x) => x.data)
  }

  public removeProduct(productId: string): Promise<void> {
    return this.service.delete(`/${productId}`).then((x) => x.data)
  }
}
