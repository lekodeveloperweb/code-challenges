using Marketplace.Api.Model;
using Microsoft.EntityFrameworkCore;

namespace Marketplace.Api
{
  public partial class ApplicationDBContext : DbContext
  {
    public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options)
        : base(options)
    {
    }

    public DbSet<Product> Products { get; set; }
    public DbSet<Basket> Baskets { get; set; }
    public DbSet<BasketInfo> BasketInfos { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
      modelBuilder.Entity<BasketInfo>().HasKey(x => new { x.BasketId, x.ProductId });
    }

  }
}
