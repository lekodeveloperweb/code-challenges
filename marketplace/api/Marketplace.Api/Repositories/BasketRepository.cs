using Dapper;
using Marketplace.Api.Contracts.Repositories;
using Marketplace.Api.Model;
using Microsoft.EntityFrameworkCore;

namespace Marketplace.Api.Repositories
{
  public class BasketRepository : RepositoryBase<Basket>, IBasketRepository
  {
    public BasketRepository(ApplicationDBContext context) : base(context)
    {
    }

    public async Task AddNewProductAsync(Guid basketId, Product product)
    {
      var basket = await _context.Baskets.SingleAsync(x => x.Id == basketId);
      basket.BasketInfo.Add(new BasketInfo
      {
        BasketId = basketId,
        ProductId = product.Id,
        Total = product.Price,
        Quantity = 1
      });
      _context.Baskets.Update(basket);
      await _context.SaveChangesAsync();
    }

    public async Task AddProductAsync(Guid basketId, Guid productId, int quantity)
    {
      var basket = await GetByCondition(x => x.Id == basketId)
                        .Include(x => x.BasketInfo)
                        .ThenInclude(x => x.Product)
                        .FirstOrDefaultAsync();
      var basketInfo = basket.BasketInfo.FirstOrDefault(x => x.ProductId == productId);
      var total = quantity * basketInfo.Product.Price;
      var connection = _context.Database.GetDbConnection();
      var query = @"UPDATE BasketInfo
SET quantity=@quantity, total=@total
WHERE basket_id=@basketId AND product_id=@productId;";
      await connection.ExecuteAsync(query, new { basketId, productId, quantity, total });
    }

    public async Task ClearProductsAsync(Guid basketId, Guid productId)
    {
      var basketInfo = await _context.Baskets.Include(x => x.BasketInfo).SingleAsync(x => x.Id == basketId);
      if (basketInfo is null || basketInfo.BasketInfo.Count() == 0) return;
      using (var connection = _context.Database.GetDbConnection())
      {
        var query = @"DELETE FROM master.dbo.BasketInfo WHERE basket_id=@basketId AND product_id=@productId;";
        await connection.ExecuteAsync(query, new { basketId, productId });
      }
    }

    public async Task RemoveProductAsync(Guid basketId, Guid productId, int quantity)
    {
      await AddProductAsync(basketId, productId, quantity);
    }
  }
}
