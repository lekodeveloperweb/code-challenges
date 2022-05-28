using AutoMapper;
using Marketplace.Api.Contracts;
using Marketplace.Api.Model;
using Marketplace.Api.ViewModel;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Marketplace.Api.Controllers
{
  [Route("api/marketplace/products")]
  [ApiController]
  public class ProductController : ControllerBase
  {
    private readonly IProductService _service;
    private readonly IMapper _mapper;

    public ProductController(IProductService service, IMapper mapper)
    {
      _service = service;
      _mapper = mapper;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var products = await _service.GetAll();
        return Ok(products);
      }
      catch (Exception ex)
      {
        return StatusCode(500, ex.Message);
      }
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(Guid id)
    {
      try
      {
        var product = await _service.GetById(id);
        if (product == null)
        {
          return NotFound();
        }
        return Ok(product);
      }
      catch (Exception ex)
      {
        return StatusCode(500, ex.Message);
      }
    }

    [HttpPost]
    public async Task<IActionResult> Post([FromBody] ProductViewModel model)
    {
      try
      {
        if (!ModelState.IsValid)
        {
          return BadRequest(ModelState.Values.FirstOrDefault().Errors.FirstOrDefault().ErrorMessage);
        }
        var product = _mapper.Map<Product>(model);
        var result = await _service.Save(product);
        return CreatedAtAction(nameof(GetById), new { id = result.Id }, result);
      }
      catch (Exception ex)
      {
        return StatusCode(500, ex.Message);
      }
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(Guid id, [FromBody] Product product)
    {
      try
      {
        if (product == null)
        {
          return BadRequest("At least one property in product is required");
        }
        var existinProduct = await _service.GetById(id);
        if (existinProduct == null)
        {
          return NotFound();
        }
        var result = await _service.Update(existinProduct);
        return Ok(result);
      }
      catch (Exception ex)
      {
        return StatusCode(500, ex.Message);
      }
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
      try
      {
        var product = await _service.GetById(id);
        if (product == null)
        {
          return NotFound();
        }
        await _service.Delete(id);
        return NoContent();
      }
      catch (Exception ex)
      {
        return StatusCode(500, ex.Message);
      }
    }
  }
}
