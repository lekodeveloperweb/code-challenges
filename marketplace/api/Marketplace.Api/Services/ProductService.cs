using Marketplace.Api.Contracts;
using Marketplace.Api.Contracts.Repositories;
using Marketplace.Api.Model;
using Microsoft.EntityFrameworkCore;

namespace Marketplace.Api.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _repository;

        public ProductService(IProductRepository repository)
        {
            _repository = repository;
        }

        public async Task<bool> Delete(Guid id)
        {
            var product = await _repository.GetByCondition(x => x.Id == id).FirstOrDefaultAsync();
            _repository.Delete(product);
            _repository.Save();
            return true;
        }

        public Task<List<Product>> GetAll()
        {
            return _repository.GetAll().ToListAsync();
        }

        public Task<Product> GetById(Guid id)
        {
            return _repository.GetByCondition(x => x.Id == id).FirstOrDefaultAsync();
        }

        public Task<Product> Save(Product entity)
        {
            _repository.Add(entity);
            _repository.Save();
            return Task.FromResult(entity);
        }

        public Task<Product> Update(Product entity)
        {
            _repository.Update(entity);
            _repository.Save();
            return Task.FromResult(entity);
        }
    }
}
