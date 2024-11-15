using Microsoft.AspNetCore.Mvc;

namespace BackendDotNet.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ConsumptionController : ControllerBase
    {
        [HttpPost("calculate")]
        public IActionResult CalculateConsumption([FromBody] ConsumptionRequest request)
        {
            // Cálculo de consumo
            var consumoChuveiro = request.NumeroPessoas * request.ChuveiroMinutos * 12 * 30;
            var consumoDescarga = request.NumeroPessoas * request.DescargasDiarias * 6 * 30;
            var consumoMaquinaLavar = request.MaquinaLavarSemanal * 80 * 4;
            var consumoTorneira = request.NumeroPessoas * request.TorneiraMinutos * 10 * 30;
            var consumoLavagemVeiculo = request.LavagemVeiculoMensal * 200;
            var consumoPiscina = request.PiscinaLitros * 4;
            var consumoJardinagem = request.JardinagemLitros * 4;

            var totalConsumo = consumoChuveiro + consumoDescarga + consumoMaquinaLavar + consumoTorneira +
                               consumoLavagemVeiculo + consumoPiscina + consumoJardinagem;

            if (request.SistemaReutilizacao?.ToLower() == "sim")
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
                totalConsumo = Math.Round(totalConsumo),
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
        public string SistemaReutilizacao { get; set; }
    }
}
