using BackendDotNet.Data; // Namespace para o contexto do banco
using BackendDotNet.Models; // Namespace para o modelo HistoricoCalculo
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json; // Para serialização JSON
using System;

namespace BackendDotNet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConsumptionController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ConsumptionController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost("calculate")]
        public IActionResult CalculateConsumption([FromBody] ConsumptionRequest request)
        {

            // Validar se o UserId existe na tabela Users
            var userExists = _context.Users.Any(u => u.Id == request.UserId);
            if (!userExists)
            {
                return BadRequest(new { message = "Usuário inválido. O ID fornecido não existe." });
            }
            
            double totalConsumo = 0;

            // Cálculo de consumo
            double consumoChuveiro = request.NumeroPessoas * request.ChuveiroMinutos * 12 * 30;
            double consumoDescarga = request.NumeroPessoas * request.DescargasDiarias * 6 * 30;
            double consumoMaquinaLavar = request.MaquinaLavarSemanal * 80 * 4;
            double consumoTorneira = request.NumeroPessoas * request.TorneiraMinutos * 10 * 30;
            double consumoLavagemVeiculo = request.LavagemVeiculoMensal * 200;
            double consumoPiscina = request.PiscinaLitros * 4;
            double consumoJardinagem = request.JardinagemLitros * 4;

            totalConsumo = consumoChuveiro + consumoDescarga + consumoMaquinaLavar + consumoTorneira +
                           consumoLavagemVeiculo + consumoPiscina + consumoJardinagem;

            // Redução com sistema de reutilização
            if (!string.IsNullOrEmpty(request.SistemaReutilizacao) && request.SistemaReutilizacao.ToLower() == "sim")
            {
                totalConsumo *= 0.85;
            }

            var consumoDetalhado = new
            {
                chuveiro = consumoChuveiro,
                descarga = consumoDescarga,
                maquinaLavar = consumoMaquinaLavar,
                torneira = consumoTorneira,
                lavagemVeiculo = consumoLavagemVeiculo,
                piscina = consumoPiscina,
                jardinagem = consumoJardinagem
            };

            // Salvar no histórico
            if (request.UserId > 0)
            {
                var historico = new HistoricoCalculo
                {
                    UserId = request.UserId,
                    TotalConsumo = (float)Math.Round(totalConsumo),
                    DetalhesConsumo = JsonConvert.SerializeObject(consumoDetalhado)
                };

                _context.HistoricoCalculo.Add(historico);
                _context.SaveChanges();
            }

            return Ok(new
            {
                totalConsumo = (int)Math.Round(totalConsumo),
                consumoDetalhado
            });
        }

        [HttpPost("salvar-historico")]
        public IActionResult SalvarHistorico([FromBody] HistoricoCalculoRequest request)
        {
            try
            {
                var historico = new HistoricoCalculo
                {
                    UserId = request.UserId,
                    TotalConsumo = request.TotalConsumo,
                    DetalhesConsumo = JsonConvert.SerializeObject(request.DetalhesConsumo)
                };

                _context.HistoricoCalculo.Add(historico);
                _context.SaveChanges();

                return Ok(new { message = "Histórico salvo com sucesso!" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Erro ao salvar histórico.", error = ex.Message });
            }
        }

        [HttpGet("historico/{userId}")]
        public IActionResult GetHistorico(int userId)
        {
            try
            {
                var historicos = _context.HistoricoCalculo
                    .Where(h => h.UserId == userId)
                    .OrderByDescending(h => h.DataCalculo) // Ordena os históricos por data
                    .ToList();

                if (!historicos.Any())
                {
                    return NotFound(new { message = "Nenhum histórico encontrado para este usuário." });
                }

                return Ok(historicos);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao recuperar histórico: {ex.Message}");
                return StatusCode(500, new { message = "Erro ao recuperar histórico." });
            }
        }

    }

    // Classes para requisições
    public class ConsumptionRequest
    {
        public int NumeroPessoas { get; set; }
        public int ChuveiroMinutos { get; set; }
        public int DescargasDiarias { get; set; }
        public int MaquinaLavarSemanal { get; set; }
        public int TorneiraMinutos { get; set; }
        public int LavagemVeiculoMensal { get; set; }
        public int PiscinaLitros { get; set; }
        public int JardinagemLitros { get; set; }
        public string? SistemaReutilizacao { get; set; }
        public int UserId { get; set; } // Identificação do usuário logado
    }


}
