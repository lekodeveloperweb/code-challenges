# Marketplace

## Instructions

- File structure

```
- app
  - src
- api
  - Marketplace.Api
  - Marketplace.Tests
- docker-compose.yml

```

- Docker compose (recommended)

```bash
docker-compose build
docker-compose up -d

```

- Manually

```

cd api/Marketplace.Api
# SQL Server database is required
export DatabaseSettings__ConnectionString=(connection string)
dotnet run

cd app/
yarn dev

```
