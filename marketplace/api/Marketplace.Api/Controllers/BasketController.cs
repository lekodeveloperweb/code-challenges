using Marketplace.Api.Contracts;
using Marketplace.Api.Model;
using Marketplace.Api.ViewModel;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Marketplace.Api.Controllers
{
  [Route("api/marketplace/basket")]
  [ApiController]
  public class BasketController : ControllerBase
  {
    private readonly IBasketService _service;

    public BasketController(IBasketService service)
    {
      _service = service;
    }

    [HttpGet]
    public async Task<IActionResult> GetActualStatus()
    {
      try
      {
        var basket = await _service.GetCurrentAsync();
        return Ok(basket);
      }
      catch (Exception ex)
      {
        return StatusCode(500, ex.Message);
      }
    }

    [HttpPut]
    public async Task<IActionResult> UpdateStatus([FromBody] BasketViewModel basket)
    {
      try
      {
        if (basket is null)
        {
          return BadRequest("At least one property of basket is required");
        }
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState.Values.FirstOrDefault().Errors.FirstOrDefault().ErrorMessage);
        }
        var response = await _service.UpdateBasketAsync(basket);
        return Ok(response);
      }
      catch (Exception ex)
      {
        return StatusCode(500, ex.Message);
      }
    }

    [HttpDelete("{productId:guid}")]
    public async Task<IActionResult> RemoveProduct(Guid productId)
    {
      try
      {
        var basket = await _service.GetCurrentAsync();
        var product = basket.BasketInfo.FirstOrDefault(x => x.ProductId == productId);
        if (product is null)
          return NotFound();
        await _service.ClearProductsAsync(basket.Id, productId);
        return NoContent();
      }
      catch (Exception ex)
      {
        return StatusCode(500, ex.Message);
      }
    }
  }
}
