using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Marketplace.Api.Model
{


  [Table("Basket")]
  public class Basket
  {
    [Key]
    [Column("id")]
    [Required]
    public Guid Id { get; set; }
    public ICollection<BasketInfo> BasketInfo { get; set; } = new List<BasketInfo>();
  }
}
