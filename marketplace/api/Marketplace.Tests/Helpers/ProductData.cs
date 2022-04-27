using Marketplace.Api.Model;
using System;
using System.Collections.Generic;

namespace Marketplace.Tests.Helpers
{
  public static class ProductData
  {
    public static List<Product> Products = new List<Product>()
        {
            new Product {
                Id = Guid.NewGuid(),
                Name = "Cotten T-Shirt",
                Price = 10.99M,
                Size = ProductSize.Small,
                SKU = "AWDT0001-S",
                StockLevel = 10,
            },
            new Product {
                Id = Guid.NewGuid(),
                Name = "Cotten T-Shirt",
                Price = 10.99M,
                Size = ProductSize.Medium,
                SKU = "AWDT0001-M",
                StockLevel = 50,
            },
            new Product {
                Id = Guid.NewGuid(),
                Name = "Cotten T-Shirt",
                Price = 10.99M,
                Size = ProductSize.Large,
                SKU = "AWDT0001-L",
                StockLevel = 0,
            },
            new Product {
                Id = Guid.NewGuid(),
                Name = "Baseball cap",
                Price = 5.99M,
                SKU = "AWDT0002",
                StockLevel = 7,
            },
            new Product {
                Id = Guid.NewGuid(),
                Name = "Shorts",
                Price = 14.99M,
                SKU = "AWDT0003-M",
                StockLevel = 100,
            },
        };

  }
}
