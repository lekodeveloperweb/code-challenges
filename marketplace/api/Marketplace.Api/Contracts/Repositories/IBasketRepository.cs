using Marketplace.Api.Model;

namespace Marketplace.Api.Contracts.Repositories
{
  public interface IBasketRepository : IRepositoryBase<Basket>
  {
    Task AddProductAsync(Guid basketId, Guid productId, int quantity);
    Task ClearProductsAsync(Guid basketId, Guid productId);
    Task AddNewProductAsync(Guid basketId, Product product);
    Task RemoveProductAsync(Guid basketId, Guid productId, int quantity);
  }
}
