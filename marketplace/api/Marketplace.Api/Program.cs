using Marketplace.Api.Services;
using Marketplace.Api.Contracts;
using Marketplace.Api;
using Marketplace.Api.Contracts.Repositories;
using Marketplace.Api.Repositories;
using Marketplace.Api.ViewModel;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

var conn = Environment.GetEnvironmentVariable("DatabaseSettings__ConnectionString");
if(string.IsNullOrEmpty(conn))
    conn = builder.Configuration.GetConnectionString("DefaultConnection");
if (string.IsNullOrEmpty(conn))
    throw new ArgumentException("Connection string cannot be empty");
builder.Services.AddDbContext<ApplicationDBContext>(optionsBuilder => {

    optionsBuilder.EnableSensitiveDataLogging();
    optionsBuilder.UseSqlServer(conn, providerOptions =>
    {
        providerOptions.EnableRetryOnFailure();
    });
});

builder.Services.AddControllers();

builder.Services.AddAutoMapper(mapper => mapper.AddProfile<ProductProfile>());
builder.Services.AddScoped<IProductRepository, ProductRepository>();
builder.Services.AddScoped<IBasketRepository, BasketRepository>();
builder.Services.AddScoped<IProductService, ProductService>();
builder.Services.AddScoped<IBasketService, BasketService>();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var allowSpecificOrigins = "CorsOriginPolicy";

builder.Services.AddCors(options =>
{
    var cors = Environment.GetEnvironmentVariable("CORS_ORIGIN");
    if (cors is null)
    {
        cors = "http://*.ldw.solutions,https://*.ldw.solutions";
    }
    options.AddPolicy(name: allowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins(cors.Split(","))
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                      });
});

var app = builder.Build();


using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    var context = services.GetRequiredService<ApplicationDBContext>();
    context.Database.EnsureCreated();
    DbInitializer.Initialize(context);
}


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors(allowSpecificOrigins);

app.Run();
