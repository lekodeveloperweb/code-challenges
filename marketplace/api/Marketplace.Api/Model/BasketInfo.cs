using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Marketplace.Api.Model
{
  [Table("BasketInfo")]
  public class BasketInfo
  {
    private int quantity;

    [ForeignKey("Basket")]
    [Required]
    [Column("basket_id")]
    public Guid BasketId { get; set; }
    public Product Product { get; set; }
    [Required]
    [Column("product_id")]
    public Guid ProductId { get; set; }
    [Column("quantity")]
    public int Quantity
    {
      get => quantity;
      set
      {
        quantity = value;
        if (Product != null)
          Total = value * Product.Price;
      }
    }
    [Column("total", TypeName = "decimal(18,2)")]
    public decimal Total { get; set; } = 0;
  }
}
