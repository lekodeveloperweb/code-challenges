using Marketplace.Api.Contracts;
using Marketplace.Api.Contracts.Repositories;
using Marketplace.Api.Model;
using Marketplace.Api.ViewModel;
using Microsoft.EntityFrameworkCore;

namespace Marketplace.Api.Services
{
  public class BasketService : IBasketService
  {
    private readonly IBasketRepository _repository;
    private readonly IProductRepository _productRepository;

    public BasketService(IBasketRepository repository, IProductRepository productRepository)
    {
      _repository = repository;
      _productRepository = productRepository;
    }

    public async Task<bool> RemoveProductAsync(Guid basketId, Guid productId, int quantity)
    {
      await _repository.RemoveProductAsync(basketId, productId, quantity);
      return true;
    }

    public async Task<Basket> UpdateBasketAsync(BasketViewModel basket)
    {
      var current = await GetCurrentAsync();
      var product = await _productRepository.GetByCondition(x => x.Id == basket.ProductId).FirstOrDefaultAsync();
      if (product == null) return null;
      var hasProduct = current.BasketInfo.FirstOrDefault(x => x.ProductId == basket.ProductId);
      if (hasProduct is null)
        await _repository.AddNewProductAsync(current.Id, product);
      else
        await _repository.AddProductAsync(current.Id, product.Id, basket.Quantity);
      return await GetCurrentAsync();
    }

    public async Task<Basket> GetCurrentAsync()
    {
      var basketInfo = await _repository.GetAll().Include(x => x.BasketInfo).FirstOrDefaultAsync();
      var productIds = basketInfo.BasketInfo.Select(x => x.ProductId).ToList();
      var products = this._productRepository.GetByCondition(x => productIds.Any(p => x.Id == p)).ToList();
      basketInfo.BasketInfo.ToList().ForEach(x =>
      {
        x.Product = products.FirstOrDefault(p => p.Id == x.ProductId);
      });
      return basketInfo;
    }

    public async Task<bool> ClearProductsAsync(Guid basketId, Guid productId)
    {
      await _repository.ClearProductsAsync(basketId, productId);
      return true;
    }
  }
}
