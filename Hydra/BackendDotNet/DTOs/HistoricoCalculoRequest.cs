public class HistoricoCalculoRequest
{
    public int UserId { get; set; }
    public float TotalConsumo { get; set; }
    public required Dictionary<string, float> DetalhesConsumo { get; set; }
}
