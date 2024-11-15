using BackendDotNet.Data;
using BackendDotNet.Models;
using BackendDotNet.Services;
using Microsoft.AspNetCore.Mvc;
using BCrypt.Net;

namespace BackendDotNet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly JwtService _jwtService;

        public UsersController(AppDbContext context, JwtService jwtService)
        {
            _context = context;
            _jwtService = jwtService;
        }

        [HttpPost("register")]
        public IActionResult Register(User user)
        {
            user.Senha = BCrypt.Net.BCrypt.HashPassword(user.Senha);
            _context.Users.Add(user);
            _context.SaveChanges();

            return Created("", new { message = "Usuário cadastrado com sucesso!" });
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User userLogin)
        {
            var user = _context.Users.FirstOrDefault(u => u.Email == userLogin.Email);

            if (user == null || !BCrypt.Net.BCrypt.Verify(userLogin.Senha, user.Senha))
            {
                return Unauthorized(new { message = "Email ou senha inválidos." });
            }

            var token = _jwtService.GenerateToken(user.Id, user.NomeCompleto);
            return Ok(new { message = "Login bem-sucedido", token, userId = user.Id, nome = user.NomeCompleto });
        }
    }
}
