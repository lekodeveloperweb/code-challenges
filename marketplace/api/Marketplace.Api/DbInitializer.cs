using Marketplace.Api.Model;

namespace Marketplace.Api
{
  public static class DbInitializer
  {
    public static List<Product> products = new List<Product>()
        {
            new Product {
                Id = Guid.NewGuid(),
                Name = "Cotten T-Shirt",
                Price = 10.99M,
                Size = ProductSize.Small,
                SKU = "AWDT0001-S",
                Description = "Women′ S Cotton Fabric Plain T-Shirts with Short Sleeve",
                StockLevel = 10,
                ImageUrl = "https://image.made-in-china.com/202f0j00kUpfNyozaDqa/Women-prime-S-Cotton-Fabric-Plain-T-Shirts-with-Short-Sleeve.jpg"
            },
            new Product {
                Id = Guid.NewGuid(),
                Name = "Cotten T-Shirt",
                Price = 10.99M,
                Size = ProductSize.Medium,
                SKU = "AWDT0001-M",
                StockLevel = 50,
                Description = "Male Promotional Pure Cotton T Shirt - 100% Cotton",
                ImageUrl = "https://5.imimg.com/data5/BY/JJ/AX/GLADMIN-654251/promotional-pure-cotton-t-shirt-100-cotton-500x500.jpg"
            },
            new Product {
                Id = Guid.NewGuid(),
                Name = "Cotten T-Shirt",
                Price = 10.99M,
                Size = ProductSize.Large,
                SKU = "AWDT0001-L",
                StockLevel = 0,
                Description = "Custom Gildan 100% Cotton T-shirt - Design Short Sleeve T-shirts",
                ImageUrl="https://mms-images-prod.imgix.net/mms/images/catalog/f1516cfce9a5f4be1a80e92640a99676/styles/4100/catalog_detail_image_large.jpg?ixlib=rails-2.1.4&fit=fill&dpr=1&bg=ffffff&fm=pjpg&trim=auto&trimmd=0&q=50&auto=compress&w=700&h=700"
            },
            new Product {
                Id = Guid.NewGuid(),
                Name = "Baseball cap",
                Price = 5.99M,
                SKU = "AWDT0002",
                Size = ProductSize.OneSize,
                StockLevel = 7,
                Description = "Baseball Cap Stock Photos, Pictures & Royalty-Free Images",
                ImageUrl="https://media.istockphoto.com/vectors/set-of-color-illustrations-with-a-blue-denim-baseball-cap-isolated-vector-id1155410370?k=20&m=1155410370&s=612x612&w=0&h=xSWK4Uly0J38XWDw6jxcJs8rvF_AfSKLosF2SZrY4Gk="
            },
            new Product {
                Id = Guid.NewGuid(),
                Name = "Shorts",
                Price = 14.99M,
                SKU = "AWDT0003-M",
                StockLevel = 100,
                Description = "shorts - Best Prices and Online Promos",
                ImageUrl = "https://cf.shopee.ph/file/c35dd3fdb6588770c7da8e19a84729cc"
            },
        };
    public static readonly Basket basket = new()
    {
      Id = Guid.NewGuid(),
      BasketInfo = products.Take(3).ToList().Select(p => new BasketInfo
      {
        Product = p,
        ProductId = p.Id,
        Quantity = 1
      }).ToList(),
    };
    public static void Initialize(ApplicationDBContext context)
    {
      if (context.Products.Count() > 0) return;

      context.Products.AddRange(products);
      context.SaveChanges();

      context.Baskets.Add(basket);
      context.SaveChanges();
    }
  }
}
