namespace Marketplace.Api.Contracts
{
    public interface IBaseService<T>
    {
        Task<List<T>> GetAll();
        Task<T> GetById(Guid id);
        Task<T> Save(T entity);
        Task<T> Update(T entity);
        Task<bool> Delete(Guid id);
    }
}
