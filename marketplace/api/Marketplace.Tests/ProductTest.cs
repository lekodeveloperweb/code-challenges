using Marketplace.Api.Controllers;
using Marketplace.Api.Model;
using Marketplace.Api.Contracts;
using Marketplace.Tests.Helpers;
using Moq;
using System;
using System.Threading.Tasks;
using Xunit;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Marketplace.Api.ViewModel;

namespace Marketplace.Tests
{
    public class ProductTest
    {
        private IProductService _service;
        private ProductController _controller;
        private IMapper _mapper;

        public ProductTest()
        {
            _mapper = new MapperConfiguration(cfg => cfg.AddProfile<ProductProfile>()).CreateMapper();
            var mock = new Mock<IProductService>();
            mock.Setup(x => x.GetAll()).Returns(Task.FromResult(ProductData.Products));
            ProductData.Products.ForEach(product =>
                mock.Setup(x => x.GetById(product.Id)).ReturnsAsync(product)
            );
            mock.Setup(x => x.Save(It.IsAny<Product>())).ReturnsAsync((Product p) => p);
            mock.Setup(x => x.Update(It.IsAny<Product>())).ReturnsAsync((Product p) => p);
            mock.Setup(x => x.Delete(It.IsAny<Guid>())).ReturnsAsync(true);
            _service = mock.Object;
            _controller = new ProductController(_service, _mapper);
        }

        [Fact]
        public async Task GetAll_WhenCalled_ReturnsOkResult()
        {
            var okResult = await _controller.Get() as OkObjectResult;
            var products = Assert.IsType<List<Product>>(okResult?.Value);
            Assert.IsType<OkObjectResult>(okResult);
            Assert.Equal(ProductData.Products.Count, products.Count);
        }

        [Fact]
        public async Task GetAll_WhenOccureError_ReturnsErrorMessage()
        {
            var mock = new Mock<IProductService>();
            mock.Setup(x => x.GetAll()).Throws(new Exception("Error"));
            _service = mock.Object;
            _controller = new ProductController(_service, _mapper);
            var statusCodeResult = await _controller.Get() as ObjectResult;

            Assert.IsType<ObjectResult>(statusCodeResult);
            Assert.Equal("Error", statusCodeResult?.Value);
        }

        [Fact]
        public async Task GetById_UnknownGuidPassed_ReturnsNotFoundResult()
        {
            var notFoundResult = await _controller.GetById(Guid.NewGuid());

            Assert.IsType<NotFoundResult>(notFoundResult);
        }

        [Fact]
        public async Task GetById_ExistingGuidPassed_ReturnsOkResult()
        {
            var testGuid = ProductData.Products.First().Id;
            var okResult = await _controller.GetById(testGuid) as OkObjectResult;
            var product = Assert.IsType<Product>(okResult?.Value);

            Assert.IsType<OkObjectResult>(okResult);
            Assert.Equal(testGuid, product.Id);
        }

        [Fact]
        public async Task GetById_WhenOccureError_ReturnsErrorMessage()
        {
            var mock = new Mock<IProductService>();
            mock.Setup(x => x.GetById(It.IsAny<Guid>())).Throws(new Exception("Error"));
            _service = mock.Object;
            _controller = new ProductController(_service, _mapper);
            var statusCodeResult = await _controller.GetById(Guid.NewGuid()) as ObjectResult;

            Assert.IsType<ObjectResult>(statusCodeResult);
            Assert.Equal("Error", statusCodeResult?.Value);
        }

        [Fact]
        public async Task Save_InvalidObjectPassed_ReturnsBadRequest()
        {
            var nameMissingItem = new Product()
            {
                SKU = "Guinness",
                Price = 12.00M,
                StockLevel = 1,
                Size = ProducSize.Small
            };
            var productViewModel = _mapper.Map<ProductViewModel>(nameMissingItem);
            var errorMessage = "Property name is required";
            _controller.ModelState.AddModelError("name", errorMessage);
            var badResponse = await _controller.Post(productViewModel);
            var result = Assert.IsType<BadRequestObjectResult>(badResponse);
            Assert.Equal(errorMessage, result.Value);
            Assert.Equal(400, result.StatusCode);
        }

        [Fact]
        public async Task Save_ValidObjectPassed_ReturnsCreatedResponse()
        {
            var testItem = new Product
            {
                Name = "Cotten T-Shirt",
                Price = 20,
                Size = ProducSize.Small,
                SKU = "AWDT0001-S",
                StockLevel = 10,

            };
            var productViewModel = _mapper.Map<ProductViewModel>(testItem);
            var createdResponse = await _controller.Post(productViewModel) as CreatedAtActionResult;

            Assert.IsType<CreatedAtActionResult>(createdResponse);
            var item = createdResponse?.Value as Product;

            Assert.IsType<Product>(item);
            Assert.Equal("Cotten T-Shirt", item?.Name);
        }

        [Fact]
        public async Task Save_WhenOccureError_ReturnsErrorMessage()
        {
            var mock = new Mock<IProductService>();
            mock.Setup(x => x.Save(It.IsAny<Product>())).Throws(new Exception("Error"));
            _service = mock.Object;
            _controller = new ProductController(_service, _mapper);

            var testItem = ProductData.Products.First();
            var productViewModel = _mapper.Map<ProductViewModel>(testItem);
            var statusCodeResult = await _controller.Post(productViewModel) as ObjectResult;

            Assert.IsType<ObjectResult>(statusCodeResult);
            Assert.Equal("Error", statusCodeResult?.Value);
        }

        [Fact]
        public async Task Update_ValidObjectPassed_ReturnsOkResponse()
        {
            var testItem = ProductData.Products.First();
            testItem.Name = "Product 2";

            var okResult = await _controller.Put(testItem.Id, testItem) as OkObjectResult; ;
            var item = okResult?.Value as Product;

            Assert.IsType<OkObjectResult>(okResult);
            Assert.IsType<Product>(item);
            Assert.Equal("Product 2", item?.Name);
        }

        [Fact]
        public async Task Update_WhenOccureError_ReturnsErrorMessage()
        {
            var mock = new Mock<IProductService>();
            var testItem = ProductData.Products.First();
            mock.Setup(x => x.Update(It.IsAny<Product>())).Throws(new Exception("Error"));
            mock.Setup(x => x.GetById(testItem.Id)).ReturnsAsync(testItem);
            _service = mock.Object;
            _controller = new ProductController(_service, _mapper);

            var statusCodeResult = await _controller.Put(testItem.Id, testItem) as ObjectResult;

            Assert.IsType<ObjectResult>(statusCodeResult);
            Assert.Equal("Error", statusCodeResult?.Value);
        }

        [Fact]
        public async Task Update_NotExistingProductPassed_ReturnsNotFoundResponse()
        {
            var mock = new Mock<IProductService>();
            var testItem = ProductData.Products.First();
            mock.Setup(x => x.GetById(It.IsAny<Guid>())).ReturnsAsync((Product)null);
            _service = mock.Object;
            _controller = new ProductController(_service, _mapper);
            var notExistingGuid = Guid.NewGuid();

            var notfountResponse = await _controller.Put(notExistingGuid, testItem);

            Assert.IsType<NotFoundResult>(notfountResponse);
        }

        [Fact]
        public async Task Update_NullProductPassed_ReturnsBadRequestResponse()
        {
            var notExistingGuid = Guid.NewGuid();

            var badResponse = await _controller.Put(notExistingGuid, null);

            var response = Assert.IsType<BadRequestObjectResult>(badResponse);
            Assert.Equal("At least one property in product is required", response.Value);
        }

        [Fact]
        public async Task Delete_NotExistingGuidPassed_ReturnsNotFoundResponse()
        {
            var notExistingGuid = Guid.NewGuid();

            var badResponse = await _controller.Delete(notExistingGuid);

            Assert.IsType<NotFoundResult>(badResponse);
        }

        [Fact]
        public async Task Delete_ExistingGuidPassed_ReturnsNoContentResult()
        {
            var existingGuid = ProductData.Products.First().Id;

            var noContentResponse = await _controller.Delete(existingGuid);

            Assert.IsType<NoContentResult>(noContentResponse);
        }

        [Fact]
        public async void Delete_ExistingGuidPassed_RemovesOneItem()
        {
            var existingGuid = ProductData.Products.First().Id;
            var mock = new Mock<IProductService>();
            var newProducts = ProductData.Products.Where(x => x.Id != existingGuid).ToList();
            mock.Setup(x => x.GetAll()).ReturnsAsync(newProducts);
            _service = mock.Object;
            _controller = new ProductController(_service, _mapper);

            await _controller.Delete(existingGuid);
            var products = await _service.GetAll();

            Assert.Equal(newProducts.Count(), products.Count());
        }

        [Fact]
        public async Task Delete_WhenOccureError_ReturnsErrorMessage()
        {
            var mock = new Mock<IProductService>();
            var existingProduct = ProductData.Products.First();
            mock.Setup(x => x.GetById(It.IsAny<Guid>())).ReturnsAsync(existingProduct);
            mock.Setup(x => x.Delete(It.IsAny<Guid>())).Throws(new Exception("Error"));
            _service = mock.Object;
            _controller = new ProductController(_service, _mapper);

            var statusCodeResult = await _controller.Delete(existingProduct.Id) as ObjectResult;

            Assert.IsType<ObjectResult>(statusCodeResult);
            Assert.Equal("Error", statusCodeResult?.Value);
        }
    }
}