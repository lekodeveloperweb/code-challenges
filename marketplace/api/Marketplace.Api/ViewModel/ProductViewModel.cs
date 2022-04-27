using AutoMapper;
using Marketplace.Api.Model;
using System.ComponentModel.DataAnnotations;

namespace Marketplace.Api.ViewModel
{
  public class ProductViewModel
  {
    public Guid Id { get; set; } = Guid.NewGuid();
    [Required(ErrorMessage = "Property name is required")]
    public string Name { get; set; }
    public string Description { get; set; }
    public ProductSize? Size { get; set; }
    [Required(ErrorMessage = "Property price is required")]
    public decimal Price { get; set; }
    [Required(ErrorMessage = "Property stockeLevel is required")]
    public int StockLevel { get; set; }
    [Required(ErrorMessage = "Property SKU is required")]
    public string SKU { get; set; }
    public string ImageUrl { get; set; }
  }

  public class ProductProfile : Profile
  {
    public ProductProfile()
    {
      CreateMap<Product, ProductViewModel>();
      CreateMap<ProductViewModel, Product>();
    }
  }
}
