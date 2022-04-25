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
                var basket = await _service.GetCurrent();
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
                if(basket is null)
                {
                    return BadRequest("At least one property of basket is required");
                }
                if(!ModelState.IsValid)
                {
                    return BadRequest(ModelState.Values.FirstOrDefault().Errors.FirstOrDefault().ErrorMessage);
                }
                var response = await _service.UpdateBasket(basket);
                return Ok(response);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> RemoveProduct(Guid productId)
        {
            try
            {
                var basket = await _service.GetCurrent();
                var product = basket.BasketInfo.FirstOrDefault(x => x.Id == productId);
                if (product is null)
                {
                    return NotFound();
                }
                await _service.RemoveProduct(productId);
                return NoContent();                
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
    }
}
