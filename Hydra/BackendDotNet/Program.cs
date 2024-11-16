using BackendDotNet.Data; 
using BackendDotNet.Services;
using Pomelo.EntityFrameworkCore.MySql.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// Configuração do banco de dados (MySQL)
builder.Services.AddDbContext<AppDbContext>(options =>
{
    var connectionString = builder.Configuration.GetConnectionString("DefaultConnection")
        ?? throw new ArgumentNullException("A string de conexão não foi configurada.");

    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
});


// Configuração do serviço JWT
builder.Services.AddSingleton<JwtService>();

// Configuração de autenticação JWT
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        var jwtKey = builder.Configuration["Jwt:Key"] 
            ?? throw new ArgumentNullException("Jwt:Key não configurado.");
        
        var jwtIssuer = builder.Configuration["Jwt:Issuer"]
            ?? throw new ArgumentNullException("Jwt:Issuer não configurado.");
        
        var jwtAudience = builder.Configuration["Jwt:Audience"]
            ?? throw new ArgumentNullException("Jwt:Audience não configurado.");

        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = jwtIssuer,
            ValidAudience = jwtAudience,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
        };
    });

// Adiciona os controladores (APIs)
builder.Services.AddControllers();

// Configura CORS para permitir acesso do frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();
 
app.UseCors("AllowAll");

// Configura autenticação e autorização
app.UseAuthentication();
app.UseAuthorization();

// Configuração para usar a porta 5000
app.Urls.Add("http://localhost:5000");

// Mapeia os controladores
app.MapControllers();

// Inicia o aplicativo
app.Run();
