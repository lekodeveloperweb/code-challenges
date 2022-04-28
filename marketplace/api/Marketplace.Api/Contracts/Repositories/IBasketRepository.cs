using Marketplace.Api.Model;

namespace Marketplace.Api.Contracts.Repositories
{
  public interface IBasketRepository : IRepositoryBase<Basket>
  {
    void ClearProduct(Guid basketId, Guid productId);
    void AddNewProduct(Guid basketId, Product product);
    void AddProduct(Guid basketId, Guid productId, int quantity);
    void RemoveProduct(Guid basketId, Guid productId, int quantity);
  }
}
