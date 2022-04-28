using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Marketplace.Api.Contracts.Repositories;

namespace Marketplace.Api.Repositories
{
  public abstract class RepositoryBase<T> : IRepositoryBase<T> where T : class
  {
    protected ApplicationDBContext _context { get; set; }
    protected RepositoryBase(ApplicationDBContext context)
    {
      _context = context;
    }

    public void Add(T entity)
    {
      _context.Set<T>().Add(entity);
    }

    public void Delete(T entity)
    {
      _context.Set<T>().Remove(entity);
    }

    public IQueryable<T> GetAll()
    {
      return _context.Set<T>().AsNoTracking();
    }

    public IQueryable<T> GetByCondition(Expression<Func<T, bool>> criteria)
    {
      return _context.Set<T>().Where(criteria).AsNoTracking();
    }

    public int Save()
    {
      return _context.SaveChanges();
    }

    public void Update(T entity)
    {
      _context.Entry(entity).State = EntityState.Modified;
    }
  }
}
