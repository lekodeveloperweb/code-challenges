using Marketplace.Api.Contracts.Repositories;
using Marketplace.Api.Model;
using System.Linq.Expressions;

namespace Marketplace.Api.Repositories
{
    public class BasketRepository : RepositoryBase<Basket>, IBasketRepository
    {
        public BasketRepository(ApplicationDBContext context): base(context)
        {
        }

       
    }
}
