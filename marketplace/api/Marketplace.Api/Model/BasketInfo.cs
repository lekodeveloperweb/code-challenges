using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Marketplace.Api.Model
{
    [Table("basket_info")]
    public class BasketInfo
    {
        private int quantity;

        [Key]
        [Column("id")]
        [Required]
        public Guid Id { get; set; }
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
                    Total = Quantity * Product.Price;
            }
        }
        [Column("total", TypeName = "decimal(18,2)")]
        public decimal Total { get; set; } = 0;
    }
}
