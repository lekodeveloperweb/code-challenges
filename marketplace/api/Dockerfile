FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /

COPY ["Marketplace.Api/Marketplace.Api.csproj", "Marketplace.Api/"]
COPY ["Marketplace.Tests/Marketplace.Tests.csproj", "Marketplace.Test/"]

RUN dotnet restore "Marketplace.Api/Marketplace.Api.csproj" --disable-parallel

# Copy everything else and build
COPY . .
RUN cd Marketplace.Tests && dotnet test
RUN cd .. && dotnet publish "Marketplace.Api/Marketplace.Api.csproj" -c Release -o /publish

# Build the runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /app

COPY --from=build /publish .

# Creates a non-root user with an explicit UID and adds permission to access the /app folder
# For more info, please refer to https://aka.ms/vscode-docker-dotnet-configure-containers
RUN adduser -u 5678 --disabled-password --gecos "" appuser && chown -R appuser /app
USER appuser

ENV ASPNETCORE_URLS=https://+:443;http://+:80
EXPOSE 80
EXPOSE 443

ENTRYPOINT ["dotnet", "Marketplace.Api.dll"]