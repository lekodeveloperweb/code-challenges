using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Marketplace.Api.Model
{


    [Table("Basket")]
    public class Basket
    {
        private ICollection<BasketInfo> basketInfo = new List<BasketInfo>();

        [Key]
        [Column("id")]
        [Required]
        public Guid Id { get; set; }
        [Column("total", TypeName = "decimal(18,2)")]
        public decimal Total { get; set; } = 0;
        public ICollection<BasketInfo> BasketInfo
        {
            get => basketInfo; 
            set
            {
                basketInfo = value;
                Total = value.Sum(x => x.Total);
            }
        }
    }
}
