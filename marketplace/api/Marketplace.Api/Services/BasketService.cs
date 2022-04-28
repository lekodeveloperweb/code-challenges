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

    public bool RemoveProduct(Guid basketId, Guid productId, int quantity)
    {
      _repository.RemoveProduct(basketId, productId, quantity);
      return true;
    }

    public async Task<Basket> UpdateBasket(BasketViewModel basket)
    {
      var current = await GetCurrent();
      var product = await _productRepository.GetByCondition(x => x.Id == basket.ProductId).FirstOrDefaultAsync();
      if (product == null) return null;
      var hasProduct = current.BasketInfo.FirstOrDefault(x => x.ProductId == basket.ProductId);
      if (hasProduct is null)
        _repository.AddNewProduct(current.Id, product);
      else
        _repository.AddProduct(current.Id, product.Id, basket.Quantity);
      return await GetCurrent();
    }

    public Task<bool> Delete(Guid id)
    {
      throw new NotImplementedException();
    }

    public Task<List<Basket>> GetAll()
    {
      throw new NotImplementedException();
    }

    public Task<Basket> GetById(Guid id)
    {
      throw new NotImplementedException();
    }

    public Task<Basket> Save(Basket entity)
    {
      throw new NotImplementedException();
    }

    public Task<Basket> Update(Basket entity)
    {
      throw new NotImplementedException();
    }


    public async Task<Basket> GetCurrent()
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

    public bool ClearProduct(Guid basketId, Guid productId)
    {
      _repository.ClearProduct(basketId, productId);
      return true;
    }
  }
}
