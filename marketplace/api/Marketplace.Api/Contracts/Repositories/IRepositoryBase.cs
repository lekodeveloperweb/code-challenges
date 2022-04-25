using System.Linq.Expressions;

namespace Marketplace.Api.Contracts.Repositories
{
    public interface IRepositoryBase<T>
    {
        IQueryable<T> GetAll();
        IQueryable<T> GetByCondition(Expression<Func<T, bool>> criteria);
        void Add(T entity);
        int Save();
        void Update(T entity);
        void Delete(T entity);
    }
}
