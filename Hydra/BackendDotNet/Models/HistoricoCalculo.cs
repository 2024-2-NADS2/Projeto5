using System;
using System.Text.Json;

namespace BackendDotNet.Models
{
    public class HistoricoCalculo
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public DateTime DataCalculo { get; set; } = DateTime.Now;
        public float TotalConsumo { get; set; }
        public required string DetalhesConsumo { get; set; } // Armazena JSON como string

    }
}
