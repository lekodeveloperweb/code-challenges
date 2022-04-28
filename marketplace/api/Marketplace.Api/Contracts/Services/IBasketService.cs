using Marketplace.Api.Model;
using Marketplace.Api.ViewModel;

namespace Marketplace.Api.Contracts
{
  public interface IBasketService : IBaseService<Basket>
  {
    Task<Basket> GetCurrent();
    Task<Basket> UpdateBasket(BasketViewModel basket);
    bool RemoveProduct(Guid basketId, Guid productId, int quantity);
    bool ClearProduct(Guid basketId, Guid productId);
  }
}
