using AutoMapper;
using System.ComponentModel.DataAnnotations;

namespace Marketplace.Api.ViewModel
{
    public class BasketViewModel
    {
        [Required(ErrorMessage ="Property productId is required")]
        public Guid ProductId { get; set; }
        [Required(ErrorMessage = "Property quantity is required")]
        [Range(1,int.MaxValue, ErrorMessage = "Please enter a value bigger than {1}")]
        public int Quantity { get; set; }
    }
}
