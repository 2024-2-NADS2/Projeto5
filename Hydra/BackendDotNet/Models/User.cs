using System.ComponentModel.DataAnnotations;

namespace BackendDotNet.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string NomeCompleto { get; set; } = string.Empty;
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Senha { get; set; } = string.Empty;
        public string? CNPJ { get; set; }
        [Required]
        public string? Telefone { get; set; }
        public string? Endereco { get; set; }
        public string? Cidade { get; set; }
        public string? Estado { get; set; }
    }
}
