using Marketplace.Api.Model;
using System;
using System.Linq;

namespace Marketplace.Tests.Helpers
{
  public static class BasketData
  {
    public static readonly Basket basket = new()
    {
      Id = Guid.NewGuid(),
      BasketInfo = ProductData.Products.Take(3).ToList().Select(p => new BasketInfo
      {
        Product = p,
        ProductId = p.Id,
        Quantity = 1,
        Total = p.Price
      }).ToList(),
    };
  }
}
