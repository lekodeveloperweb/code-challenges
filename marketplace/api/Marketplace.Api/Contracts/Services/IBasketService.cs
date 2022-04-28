using Marketplace.Api.Model;
using Marketplace.Api.ViewModel;

namespace Marketplace.Api.Contracts
{
  public interface IBasketService
  {
    Task<Basket> GetCurrentAsync();
    Task<Basket> UpdateBasketAsync(BasketViewModel basket);
    Task<bool> RemoveProductAsync(Guid basketId, Guid productId, int quantity);
    Task<bool> ClearProductsAsync(Guid basketId, Guid productId);
  }
}
