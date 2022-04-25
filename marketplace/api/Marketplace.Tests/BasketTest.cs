using Marketplace.Api.Contracts;
using Marketplace.Api.Controllers;
using Marketplace.Api.Model;
using Marketplace.Api.ViewModel;
using Marketplace.Tests.Helpers;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Marketplace.Tests
{
  public class BasketTest
  {
    private IBasketService _service;
    private BasketController _controller;

    public BasketTest()
    {
      var mock = new Mock<IBasketService>();
      mock.Setup(x => x.GetCurrent()).ReturnsAsync(BasketData.basket);
      mock.Setup(x => x.UpdateBasket(It.IsAny<BasketViewModel>())).ReturnsAsync((BasketViewModel b) =>
      {
        var product = ProductData.Products.First(x => x.Id == b.ProductId);
        BasketData.basket.BasketInfo.Add(new BasketInfo
        {
          Id = Guid.NewGuid(),
          Product = product,
          ProductId = product.Id,
          Quantity = 1,
          Total = product.Price
        });
        BasketData.basket.Total = BasketData.basket.BasketInfo.Sum(x => x.Total);
        return BasketData.basket;
      });
      mock.Setup(x => x.RemoveProduct(It.IsAny<Guid>())).ReturnsAsync((Guid productId) =>
      {
        if (BasketData.basket.Total == 0) return true;
        var products = ProductData.Products.Where(x => x.Id != productId).Select(p => new BasketInfo
        {
          Id = Guid.NewGuid(),
          Product = p,
          ProductId = p.Id,
          Quantity = 1,
          Total = p.Price
        }).ToList();
        BasketData.basket.BasketInfo = products;
        return true;
      });
      _service = mock.Object;
      _controller = new BasketController(_service);
    }

    [Fact]
    public async Task GetCurrent_WhenCalled_ReturnsOkResult()
    {
      var okResult = await _controller.GetActualStatus() as OkObjectResult;
      Assert.IsType<OkObjectResult>(okResult);
      var basket = Assert.IsType<Basket>(okResult?.Value);
      Assert.NotNull(basket);
      Assert.Equal(basket, BasketData.basket);
    }

    [Fact]
    public async Task GetCurrent_WhenOccureError_ReturnsErrorMessage()
    {
      var mock = new Mock<IBasketService>();
      mock.Setup(x => x.GetCurrent()).Throws(new Exception("Error"));
      _service = mock.Object;
      _controller = new BasketController(_service);
      var statusCodeResult = await _controller.GetActualStatus() as ObjectResult;

      Assert.IsType<ObjectResult>(statusCodeResult);
      Assert.Equal("Error", statusCodeResult?.Value);
    }

    [Fact]
    public async Task UpdateStatus_ValidObjectPassed_ReturnsOkResponse()
    {
      var testItem = new BasketViewModel
      {
        ProductId = ProductData.Products.First().Id,
        Quantity = 1,
      };

      var okResult = await _controller.UpdateStatus(testItem) as OkObjectResult; ;
      var basket = okResult?.Value as Basket;

      Assert.IsType<OkObjectResult>(okResult);
      Assert.IsType<Basket>(basket);
      Assert.True(BasketData.basket.Total == basket?.Total);
      Assert.True(BasketData.basket.Total == 43.96M);
    }

    [Fact]
    public async Task UpdateStatus_InvalidObjectPassed_ReturnsBadRequest()
    {
      var idMissingItem = new BasketViewModel
      {
        Quantity = 1,
      };
      var errorMessage = "Property productId is required";
      _controller.ModelState.AddModelError("id", errorMessage);
      var badResponse = await _controller.UpdateStatus(idMissingItem);
      var result = Assert.IsType<BadRequestObjectResult>(badResponse);
      Assert.Equal(errorMessage, result.Value);
      Assert.Equal(400, result.StatusCode);
    }

    [Fact]
    public async Task UpdateStatus_NullBasketValuePassed_ReturnsBadRequest()
    {
      var badResponse = await _controller.UpdateStatus(null);

      var result = Assert.IsType<BadRequestObjectResult>(badResponse);
      Assert.Equal("At least one property of basket is required", result.Value);
      Assert.Equal(400, result.StatusCode);
    }

    [Fact]
    public async Task RemoveProduct_ExistingGuidPassed_ReturnsNoContentResult()
    {
      var existingGuid = ProductData.Products.First().Id;

      var noContentResponse = await _controller.RemoveProduct(existingGuid);

      Assert.IsType<NoContentResult>(noContentResponse);
    }

    [Fact]
    public async void RemoveProduct_UnexistingGuidPassed_ReturnsNotFound()
    {
      var notfoundResponse = await _controller.RemoveProduct(Guid.NewGuid());
      Assert.IsType<NotFoundResult>(notfoundResponse);
    }
  }
}