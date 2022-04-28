using Marketplace.Api.Contracts.Repositories;
using Marketplace.Api.Model;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace Marketplace.Api.Repositories
{
  public class BasketRepository : RepositoryBase<Basket>, IBasketRepository
  {
    public BasketRepository(ApplicationDBContext context) : base(context)
    {
    }

    public void AddNewProduct(Guid basketId, Product product)
    {
      _context.Set<BasketInfo>().Add(new BasketInfo
      {
        BasketId = basketId,
        ProductId = product.Id,
        Total = product.Price,
      });
      _context.SaveChanges();
    }

    public void AddProduct(Guid basketId, Guid productId, int quantity)
    {
      var basketInfo = _context.BasketInfos.Single(x => x.BasketId == basketId && x.ProductId == productId);
      if (basketInfo.Quantity == 0)
      {
        ClearProduct(basketId, productId);
        return;
      }
      basketInfo.Product = _context.Products.AsNoTracking().FirstOrDefault(x => x.Id == productId);
      basketInfo.Quantity = quantity;
      _context.BasketInfos.Update(basketInfo);
      _context.SaveChanges();
    }

    public void ClearProduct(Guid basketId, Guid productId)
    {
      var basketInfo = _context.BasketInfos.Single(x => x.ProductId == productId && x.BasketId == basketId);
      if (basketInfo == null) return;
      _context.Remove(basketInfo);
      _context.SaveChanges();
    }

    public void RemoveProduct(Guid basketId, Guid productId, int quantity)
    {
      AddProduct(basketId, productId, quantity);
    }
  }
}
