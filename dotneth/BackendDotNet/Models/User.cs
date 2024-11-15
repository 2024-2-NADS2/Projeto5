using System.ComponentModel.DataAnnotations;

namespace BackendDotNet.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string NomeCompleto { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Senha { get; set; }
        public string CNPJ { get; set; }
        [Required]
        public string Telefone { get; set; }
        public string Endereco { get; set; }
        public string Cidade { get; set; }
        public string Estado { get; set; }
    }
}
