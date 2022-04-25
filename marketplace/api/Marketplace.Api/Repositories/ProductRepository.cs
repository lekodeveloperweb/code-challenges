using Marketplace.Api.Contracts.Repositories;
using Marketplace.Api.Model;
using System.Linq.Expressions;

namespace Marketplace.Api.Repositories
{
    public class ProductRepository :  RepositoryBase<Product>, IProductRepository
    {
        public ProductRepository(ApplicationDBContext context) : base(context)
    {
    }


}
}
