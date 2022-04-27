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
    private readonly IProductRepository _productRespository;

    public BasketService(IBasketRepository repository, IProductRepository productRespository)
    {
      _repository = repository;
      _productRespository = productRespository;
    }

    public async Task<bool> RemoveProduct(Guid productId)
    {
      var current = await GetCurrent();
      if (current.Total == 0) return true;
      current.Total -= 1;
      var product = current.BasketInfo.FirstOrDefault(x => x.Id == productId);
      current.BasketInfo.Remove(product);
      _repository.Update(current);
      _repository.Save();
      return true;
    }

    public async Task<Basket> UpdateBasket(BasketViewModel basket)
    {
      var current = await GetCurrent();
      var product = await _productRespository.GetByCondition(x => x.Id == basket.ProductId).FirstOrDefaultAsync();
      if (product == null) return null;
      var hasProduct = current.BasketInfo.FirstOrDefault(x => x.ProductId == basket.ProductId);
      if (hasProduct is null)
      {
        current.BasketInfo.Add(new BasketInfo { Id = Guid.NewGuid(), ProductId = product.Id, Quantity = basket.Quantity, Total = basket.Quantity * product.Price });
        current.Total = current.BasketInfo.Sum(x => x.Total);
      }
      else
      {
        hasProduct.Quantity += 1;
      }
      _repository.Update(current);
      _repository.Save();
      return current;
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
      var products = this._productRespository.GetByCondition(x => productIds.Any(p => x.Id == p)).ToList();
      basketInfo.BasketInfo.ToList().ForEach(x =>
      {
        x.Product = products.FirstOrDefault(p => p.Id == x.ProductId);
      });
      return basketInfo;
    }

  }
}
