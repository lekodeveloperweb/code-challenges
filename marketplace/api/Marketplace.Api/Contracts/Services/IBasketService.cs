using Marketplace.Api.Model;
using Marketplace.Api.ViewModel;

namespace Marketplace.Api.Contracts
{
    public interface IBasketService: IBaseService<Basket>
    {
        Task<Basket> GetCurrent();
        Task<Basket> UpdateBasket(BasketViewModel basket);
        Task<bool> RemoveProduct(Guid productId);
    }
}
