using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Marketplace.Api.Model
{
    [Table("Product")]
    public class Product
    {
        [Key]
        [Column("id")]
        public Guid Id { get; set; }
        [Column("name", TypeName = "nvarchar(100)")]
        [Required(ErrorMessage = "Property name is required")]
        public string Name { get; set; }
        [Column("description", TypeName = "nvarchar(255)")]
        public string Description { get; set; }
        [Column("product_size")]
        public ProducSize? Size { get; set; }
        [Column("price", TypeName = "decimal(18,2)")]
        [Required(ErrorMessage = "Property price is required")]
        public decimal Price { get; set; }
        [Column("stock_level")]
        [Required(ErrorMessage = "Property stockeLevel is required")]
        public int StockLevel { get; set; }
        [Column("sku", TypeName = "nvarchar(50)")]
        [Required(ErrorMessage = "Property SKU is required")]
        public string SKU { get; set; }
        [Column("image_url", TypeName = "nvarchar(255)")]
        public string ImageUrl { get; set; }
    }
}
