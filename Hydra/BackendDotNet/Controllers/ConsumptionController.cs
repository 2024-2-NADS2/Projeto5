using Microsoft.AspNetCore.Mvc;
using System;

namespace BackendDotNet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConsumptionController : ControllerBase
    {
        [HttpPost("calculate")]
        public IActionResult CalculateConsumption([FromBody] ConsumptionRequest request)
        {
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

            // Verificar se o "Sistema de Reutilização" está configurado como "sim"
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

            return Ok(new
            {
                totalConsumo = (int)Math.Round(totalConsumo),  
                consumoDetalhado
            });
        }
    }

    // Classe para receber a requisição
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
    }
}
